/**
 * Ticket 19 gate for TanStack/router#8031: on Vite 8.2 the Nitro pass can emit
 * an SSR chunk that re-exports a namespace it never declares. `vite build`
 * exits 0 and every request 500s in production.
 *
 * The reporter needs ~300 server modules to trigger it; this build emits ~400,
 * so the gate is meaningful rather than precautionary. Run it after any build
 * that will be deployed.
 *
 *   node scripts/check-server-syntax.mjs [dir]
 *
 * If it ever fails, the fix is "nitro": "npm:nitro-nightly@latest", which
 * carries nitro#4368 — that landed after the published beta.
 */
import { execFileSync } from "node:child_process";
import { globSync } from "node:fs";

const dir = process.argv[2] ?? ".vercel/output";
const files = globSync(`${dir}/**/*.mjs`);

if (files.length === 0) {
  console.error(`No .mjs found under ${dir}. Build first.`);
  process.exit(1);
}

let failed = 0;
for (const f of files) {
  try {
    execFileSync(process.execPath, ["--check", f], { stdio: "pipe" });
  } catch (e) {
    failed++;
    console.error(
      `SYNTAX FAIL  ${f}\n${e.stderr?.toString().split("\n")[2] ?? ""}`,
    );
  }
}

console.log(
  `${files.length - failed} ok, ${failed} failed, across ${files.length} server modules.`,
);
process.exit(failed > 0 ? 1 : 0);
