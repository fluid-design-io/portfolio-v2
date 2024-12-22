import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@workspace/ui"],
  experimental: {
    reactCompiler: true,
  },
};

export default withMDX(config);
