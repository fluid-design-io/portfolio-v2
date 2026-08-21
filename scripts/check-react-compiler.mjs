// Reports which components the React Compiler actually compiled, and why it
// skipped the rest.
//
// The compiler drops components it cannot lower and emits no build-time
// diagnostic. oxlint does not catch this either: a component can pass every
// react and react-hooks rule at "error" and still be silently skipped. This
// script asks the Babel plugin directly, via its logger hook.
//
// Usage:  node scripts/check-react-compiler.mjs [glob ...]
// Exits 1 if any component in a matched file failed to compile.

import { globSync, readFileSync } from "node:fs";

import * as babel from "@babel/core";

const patterns =
  process.argv.slice(2).length > 0
    ? process.argv.slice(2)
    : ["src/**/*.tsx", "src/**/*.ts"];

const files = patterns
  .flatMap((pattern) => globSync(pattern))
  .filter((file) => !file.endsWith("routeTree.gen.ts"))
  .toSorted();

let failed = 0;
let compiled = 0;

for (const file of files) {
  const events = [];
  const plugin = [
    "babel-plugin-react-compiler",
    {
      logger: {
        logEvent(_filename, event) {
          events.push(event);
        },
      },
    },
  ];

  try {
    babel.transformSync(readFileSync(file, "utf8"), {
      filename: file,
      babelrc: false,
      configFile: false,
      parserOpts: { plugins: ["typescript", "jsx"] },
      plugins: [plugin],
    });
  } catch (error) {
    console.log(`${file}\n  parse failed: ${error.message}`);
    failed += 1;
    continue;
  }

  for (const event of events) {
    if (event.kind === "CompileSuccess") {
      compiled += 1;
    } else if (event.kind === "CompileError") {
      failed += 1;
      const line = event.detail?.loc?.start?.line ?? event.fnLoc?.start?.line;
      console.log(`${file}:${line ?? "?"}`);
      console.log(`  SKIPPED: ${event.detail?.reason ?? "unknown"}`);
    }
  }
}

console.log(
  `\n${compiled} compiled, ${failed} skipped across ${files.length} files.`,
);
process.exit(failed > 0 ? 1 : 0);
