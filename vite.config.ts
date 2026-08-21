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
      prerender: { enabled: true },
      sitemap: { host: "https://oliverpan.vercel.app" },
    }),
    // Bare nitro() is correct: the `vercel` preset auto-detects from the
    // VERCEL env var on CI, so no vercel.json is needed.
    nitro(),
    viteReact(),
    // The React Compiler runs here, not through the React plugin:
    // @vitejs/plugin-react@6 dropped its `babel` option.
    babel({ presets: [reactCompilerPreset()] }),
  ],
  resolve: {
    // Makes the tsconfig `@/*` -> `./src/*` alias work at bundle time.
    tsconfigPaths: true,
  },
});
