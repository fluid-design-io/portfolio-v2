import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
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
});
