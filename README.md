# oliverpan.vercel.app

A personal portfolio and blog. Projects grid on `/`, 13 MDX posts under
`/blog`, plus `/uses` and `/resume`. Dark only, prerendered, no runtime data.

![Landing Page](https://github.com/user-attachments/assets/9cd8eb6a-ae50-4243-9147-8efb6ad6d5ff)

## Stack

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| Framework       | [TanStack Start](https://tanstack.com/start) on Vite 8, Rolldown       |
| Server          | [Nitro](https://nitro.build) v3, `vercel` preset (auto-detected)       |
| Content         | [Fumadocs](https://fumadocs.dev) 16 via the `fumadocs-mdx` macro API   |
| UI              | Fumadocs on [Base UI](https://base-ui.com) — no Radix                  |
| Styling         | Tailwind CSS 4, `@fontsource` for Geist, Geist Mono and Kaisei Tokumin |
| Search          | Orama, static prebuilt index, no server function                       |
| Language        | TypeScript 7                                                           |
| Tooling         | [oxlint](https://oxc.rs) and oxfmt — no ESLint, no Prettier            |
| Package manager | [Bun](https://bun.sh)                                                  |

## Getting started

```bash
bun install
bun run dev
```

| script                    | what it does                                           |
| ------------------------- | ------------------------------------------------------ |
| `dev`                     | Vite dev server                                        |
| `build`                   | production build; `VERCEL=1` selects the Vercel preset |
| `check`                   | `lint`, `typecheck` and `format:check` in parallel     |
| `lint` / `lint:fix`       | oxlint                                                 |
| `format` / `format:check` | oxfmt                                                  |
| `typecheck`               | `tsc --noEmit`                                         |
| `build:search`            | regenerate the static Orama index                      |

Bun is the package manager and script runner, **not** the runtime — Vite and
Nitro run on Node. Do not pass `--bun` to `bun run`.

## Layout

```
content/blog/     13 MDX posts, the only content source
public/assets/    images, served as-is; no runtime image service
src/routes/       file-based routes; routeTree.gen.ts is generated
src/components/   layout/ chrome, ui/ primitives, mdx/ post components
src/lib/source.ts the Fumadocs collection; `posts` is pre-sorted newest-first
scripts/          one-off and build-time tools
```

## Notes

- **`src/routeTree.gen.ts` is generated and committed.** Regenerate it with a
  build rather than resolving it by hand.
- **The React Compiler is on**, wired through `@rolldown/plugin-babel`. It bails
  _silently_ on components it cannot lower, with no build-time diagnostic. Two
  causes are known: a default value inside destructured props
  (`({ x = 1 })` — use `props.x ?? 1`), and any suppression of a React hooks
  lint rule. Run `node scripts/check-react-compiler.mjs` to check per component;
  a plain grep for `compiler-runtime` is not sufficient.
- **Post images are plain `<img>`.** `remarkImage` runs with `useImport: false`
  because Vite refuses to bundle files out of `publicDir`. Sizing comes from
  `article img` in `src/styles/app.css`.
- **There are no tests, by choice.** Verification is build-and-eyeball.

## Deploying

Vercel builds it with zero configuration: `bun.lock` selects Bun, and Nitro
detects the `vercel` preset from the `VERCEL` env var. There is no
`vercel.json`.
