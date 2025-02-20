import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@workspace/ui"],
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
        protocol: "https",
        pathname: "/fluid-design-io/**",
      },
    ],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default withMDX(config);
