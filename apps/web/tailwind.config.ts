import type { Config } from "tailwindcss";
import config from "@workspace/ui/tailwind.config";
import { createPreset } from "fumadocs-ui/tailwind-plugin";

export default {
  ...config,
  presets: [createPreset()],
  content: ["./node_modules/fumadocs-ui/dist/**/*.js", ...config.content],
} satisfies Config;
