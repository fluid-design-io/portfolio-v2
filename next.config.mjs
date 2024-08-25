import { createMdxtsPlugin } from "mdxts/next";

const withMdxts = createMdxtsPlugin({
  gitSource: "https://github.com/fluid-design-io/portfolio-v2",
  siteUrl: process.env.NEXT_PUBLIC_URL,
  theme: "vesper",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    scrollRestoration: true,
  },
  // outputFileTracingRoot: path.join(process.cwd(), "../"),
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
