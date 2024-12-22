import { blog as blogPosts } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import type { InferPageType } from "fumadocs-core/source";

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts, []),
});

export type Blog = InferPageType<typeof blog>;
