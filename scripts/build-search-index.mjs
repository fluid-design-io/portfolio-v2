/**
 * Builds the static search index. Run from the repo root:
 *
 *   node scripts/build-search-index.mjs
 *
 * `bun run build` and `bun run dev` both call it first, via `bun run
 * build:search`. The output lands in `public/search-index.json`, which Vite
 * copies to the client output verbatim and Nitro merges into
 * `.vercel/output/static/` — the `public/` route that issue 01 verified.
 * The file is generated, so it is gitignored.
 *
 * THIS IS THE ONE FILE TO CHANGE if the post count ever justifies a live server
 * route. Delete it, and put `createFromSource(blog).GET` in a
 * `src/routes/api/search.ts` handler instead; on the client, swap `staticClient`
 * for `fetchClient` in `src/components/search/static-search-dialog.tsx`.
 *
 * Why this is a script and not part of `vite build`: the indexer has to reach
 * the post bodies, and seven of the thirteen do not compile yet (tickets 15 and
 * 21). Inside rolldown that is a fatal unresolved import; through Vite's
 * on-demand SSR transform it is a per-post failure this script can catch and
 * report. See the header of `src/lib/search-source.ts`.
 */
import { mkdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

import { createFromSource } from "fumadocs-core/search/server";
import { fumadocsMdx } from "fumadocs-mdx/vite";
import { createServer } from "vite";

const OUT = "public/search-index.json";
const SOURCE = "/src/lib/search-source.ts";

const server = await createServer({
  configFile: false,
  root: process.cwd(),
  mode: "development",
  server: { middlewareMode: true, ws: false },
  logLevel: "silent",
  plugins: [
    // Mirrors the `fumadocsMdx()` entry in vite.config.ts. Only the macro
    // include matters here; the index is built from `structuredData`, which no
    // remark option in that config affects.
    fumadocsMdx({ macro: { include: ["src/**/*.ts", "src/**/*.tsx"] } }),
  ],
  resolve: { tsconfigPaths: true },
});

/** Posts whose frontmatter is indexed but whose body could not be compiled. */
const bodyless = [];

try {
  const { searchSource } = await server.ssrLoadModule(SOURCE);

  const api = createFromSource(searchSource, {
    async buildIndex(page) {
      // Default: empty, i.e. the post is findable by title and description but
      // has no full text. `buildIndexDefault` throws instead, which would take
      // the whole index down with one broken post.
      let structuredData = { headings: [], contents: [] };

      try {
        structuredData = await page.data.structuredData();
      } catch (error) {
        const message = String(error?.message ?? error);
        const unresolved = message.match(/Cannot find module '([^']+)'/);
        bodyless.push([
          page.url,
          unresolved
            ? `unresolved import: ${unresolved[1]}`
            : message.split("\n")[0].slice(0, 100),
        ]);
      }

      return {
        id: page.url,
        url: page.url,
        title: page.data.title,
        description: page.data.description,
        // The blog is flat and has no page tree worth walking; an explicit
        // empty array stops `buildBreadcrumbs` from inventing one.
        breadcrumbs: [],
        structuredData,
      };
    },
  });

  const total = searchSource.getPages().length;
  const body = await (await api.staticGET()).text();

  mkdirSync(path.dirname(OUT), { recursive: true });
  writeFileSync(OUT, body);

  const bytes = statSync(OUT).size;
  const withBodies = total - bodyless.length;

  console.log(
    `[search-index] ${OUT} — ${(bytes / 1024).toFixed(1)} KB (${bytes} bytes)`,
  );
  console.log(
    `[search-index] ${total} posts indexed, ${withBodies} with full text`,
  );

  if (bodyless.length > 0) {
    console.warn(
      `[search-index] WARNING: ${bodyless.length} posts are title-and-description only,`,
    );
    console.warn(
      `[search-index] because their bodies do not compile yet (tickets 15, 21):`,
    );
    for (const [url, reason] of bodyless) {
      console.warn(`[search-index]   ${url}\n[search-index]     ${reason}`);
    }
    console.warn(
      `[search-index] Re-run this once those land; the index should reach ${total}/${total}.`,
    );
  }
} finally {
  await server.close();
}
