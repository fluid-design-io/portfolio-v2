import { fileURLToPath } from "node:url";

import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { fumadocsMdx } from "fumadocs-mdx/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    // Must come first: its four plugins are all `transform.order: "pre"`, so
    // MDX compiles before Start's route transforms run.
    fumadocsMdx({
      macro: { include: ["src/**/*.ts", "src/**/*.tsx"] },
      // Replaces source.config.ts entirely. A collection-level `mdxOptions`
      // would wipe the fumadocs preset; global options merge with it.
      globalOptions: {
        mdxOptions: {
          // remarkInstall is built in now as remarkNpm, and is on by default.
          // This only carries over the old persisted-tab id.
          remarkNpmOptions: { persist: { id: "install-script-plugin" } },
          // Posts reference images as absolute public paths
          // (`![](/assets/blog/x/cover.jpg)`). remarkImage defaults to
          // useImport:true, which rewrites those to relative imports of
          // `../../public/...` — and Vite refuses to bundle anything out of
          // publicDir, so the build fails with UNRESOLVED_IMPORT. Leaving
          // them as plain URLs is also what the map wants: the images are
          // recompressed offline in ticket 08 and served statically, with no
          // runtime image service.
          // `onError: "ignore"` degrades per-image rather than failing the
          // build. task-analysis.webp is a valid but VP8X-container WebP that
          // fumadocs' size probe cannot parse; images that do parse still get
          // their dimensions. Sizing is governed by `article img` in CSS
          // anyway, not by the attributes.
          remarkImageOptions: { useImport: false, onError: "ignore" },
        },
      },
    }),
    tailwindcss(),
    tanstackStart({
      // `/blog/` and `/blog` are the same page, and both were landing in the
      // sitemap: `/blog/` is the route id that `autoStaticPathsDiscovery`
      // enumerates for `blog.index.tsx`, while `/blog` is the href the nav
      // actually links to, which `crawlLinks` then finds. Both prerender to the
      // same `blog/index.html`, so this drops the one nothing links to.
      //
      // A declared page is the only lever available: `sitemap` takes just
      // `{ enabled, outputPath, host }` with no global exclude list, and
      // `prerender.filter` cannot help either — `prerender.js` pushes crawled
      // pages onto `startConfig.pages` (line 67) *before* it consults the
      // filter (line 69), so a filtered page still reaches the sitemap while
      // losing its prerendered HTML. Declaring the path instead seeds it into
      // the map ahead of discovery, which merges only paths it does not
      // already have.
      pages: [{ path: "/blog/", sitemap: { exclude: true } }],
      prerender: { enabled: true },
      sitemap: { host: "https://oliverpan.vercel.app" },
    }),
    // Bare nitro() is correct: the `vercel` preset auto-detects from the
    // VERCEL env var on CI, so nothing here has to name a preset. The
    // vercel.json at the root is unrelated to output format — it exists only
    // to pin `framework: null` and the build command over the project's stale
    // Next.js preset, left from when this repo was a Turborepo.
    nitro(),
    viteReact(),
    // The React Compiler runs here, not through the React plugin:
    // @vitejs/plugin-react@6 dropped its `babel` option.
    babel({ presets: [reactCompilerPreset()] }),
  ],
  resolve: {
    // Makes the tsconfig `@/*` -> `./src/*` alias work at bundle time.
    tsconfigPaths: true,
    // …but only for files the tsconfig covers, and `include` is `["src"]`.
    // Posts live in `content/`, so an MDX file importing `@/components/...`
    // fell through to Node and died with ERR_MODULE_NOT_FOUND, taking the whole
    // app down — `source.ts` globs every post eagerly, and the route tree pulls
    // `source.ts` into every route. This alias covers `content/` too.
    // Ticket 21 needs it: the Dynamic Island post imports its own `Frame`.
    alias: [
      {
        find: /^@\//,
        replacement: fileURLToPath(new URL("./src/", import.meta.url)),
      },
    ],
  },
});
