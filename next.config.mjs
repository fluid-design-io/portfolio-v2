import { createMdxtsPlugin } from "mdxts/next";

const withMdxts = createMdxtsPlugin({
  gitSource: "https://github.com/fluid-design-io/portfolio-v2",
  siteUrl: process.env.NEXT_PUBLIC_URL,
  theme: "github-dark",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // ppr: true,
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "user-images.githubusercontent.com",
        port: "",
        protocol: "https",
      },
    ],
  },
};
export default withMdxts(nextConfig);
