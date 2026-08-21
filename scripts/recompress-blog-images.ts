/**
 * Ticket 08 — recompress the blog JPEGs to AVIF, once, offline.
 *
 * Repeat with:  bun run scripts/recompress-blog-images.ts [--dry]
 *
 * Target is AVIF at quality 55, capped at 1600px wide — generous for images
 * rendered in a 65ch column. Images already narrower than the cap are encoded
 * at their native width rather than upscaled.
 *
 * Uses Bun.Image, so there is no sharp, no external binary and no dependency.
 * Note the format methods are chained rather than awaited, and there is no
 * .arrayBuffer(); use .bytes(), .buffer() or .write().
 *
 * WebP is deliberately out of scope — see the ticket. This only touches .jpg.
 */
const MAX_WIDTH = 1600;
const QUALITY = 55;
const ROOT = "public/assets/blog";

const dry = process.argv.includes("--dry");
const glob = new Bun.Glob("**/*.{jpg,jpeg,JPG,JPEG}");

let before = 0;
let after = 0;
const rows: string[] = [];

for await (const rel of glob.scan(ROOT)) {
  const src = `${ROOT}/${rel}`;
  const dest = src.replace(/\.(jpe?g)$/i, ".avif");

  const file = Bun.file(src);
  const original = file.size;
  const meta = await file.image().metadata();

  // Always resize, even when the image is already within the cap: Bun 1.4.0's
  // AVIF encoder emits files Chrome refuses to decode when either dimension is
  // odd, so both are rounded down to an even number here.
  const w = Math.min(meta.width, MAX_WIDTH);
  const h = Math.round((meta.height * w) / meta.width);
  const evenW = w - (w % 2);
  const evenH = h - (h % 2);

  // Re-open per operation: the image handle is consumed by the encode.
  const img = Bun.file(src).image().resize(evenW, evenH);
  const bytes = await img.avif({ quality: QUALITY }).bytes();

  if (!dry) await Bun.write(dest, bytes);

  before += original;
  after += bytes.length;
  const pct = (100 * (1 - bytes.length / original)).toFixed(1);
  rows.push(
    `${rel.padEnd(46)} ${String(meta.width).padStart(5)}px  ` +
      `${(original / 1024).toFixed(0).padStart(6)}KB -> ` +
      `${(bytes.length / 1024).toFixed(0).padStart(5)}KB  (-${pct}%)`,
  );
}

rows.sort();
for (const r of rows) console.log(r);
console.log(
  `\n${rows.length} files  ${(before / 1024 / 1024).toFixed(2)}MB -> ` +
    `${(after / 1024 / 1024).toFixed(2)}MB  ` +
    `(-${(100 * (1 - after / before)).toFixed(1)}%)${dry ? "  [dry run]" : ""}`,
);
