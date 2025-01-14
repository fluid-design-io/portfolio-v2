import { blog as blogPosts } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import type { InferPageType } from "fumadocs-core/source";

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts),
  pageTree: {
    attachFile(node, file) {
      //@ts-expect-error add custom date to pageTree
      node.date = file?.data?.data?.date;
      return node;
    },
  },
});

export type Blog = InferPageType<typeof blog>;
