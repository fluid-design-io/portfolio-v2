import { createMdxtsPlugin } from "mdxts/next";

const withMdxts = createMdxtsPlugin({
  gitSource: "https://github.com/souporserious/mdxts",
  siteUrl: "http://localhost:4000",
  theme: "nord",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
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
