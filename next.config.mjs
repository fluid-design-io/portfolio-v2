import { createMdxtsPlugin } from "mdxts/next";
import path from "path";

const withMdxts = createMdxtsPlugin({
  gitSource: "https://github.com/fluid-design-io/portfolio-v2",
  siteUrl: process.env.NEXT_PUBLIC_URL,
  theme: "vesper",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingRoot: path.join(process.cwd(), "../"),
    // ppr: true,
    reactCompiler: true,
    scrollRestoration: true,
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
