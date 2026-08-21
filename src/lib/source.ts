import { type InferPageType, loader, PathUtils } from "fumadocs-core/source";
import { pageSchema } from "fumadocs-core/source/schema";
import { defineCollections } from "fumadocs-mdx/macro";
import * as z from "zod";

// Macro constraints: must be a top-level `const`, and `dir` must be a string
// literal. See fumadocs.dev/docs/mdx/macro.
const blogCollection = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: pageSchema.extend({
    author: z.string(),
    // The `.or(z.date())` branch is load-bearing: YAML turns an unquoted
    // `date: 2024-05-16` into a JS Date rather than a string.
    date: z.iso.date().or(z.date()),
    tags: z.array(z.string()).optional(),
  }),
});

export const blog = loader({
  baseUrl: "/blog",
  source: blogCollection.toFumadocsSource(),
});

export type Blog = InferPageType<typeof blog>;

function toTime(page: Blog): number {
  // `page.file` is gone in v16; fall back to the filename via `page.path`.
  return new Date(
    page.data.date ??
      PathUtils.basename(page.path, PathUtils.extname(page.path)),
  ).getTime();
}

/** Newest first. Sorted once at module scope; there is no page tree. */
// oxlint-disable-next-line unicorn/no-array-sort -- sorts a fresh copy, not the source array
export const posts: Blog[] = [...blog.getPages()].sort(
  (a, b) => toTime(b) - toTime(a),
);

export function getNeighbours(url: string): {
  previous: Blog | undefined;
  next: Blog | undefined;
} {
  const i = posts.findIndex((p) => p.url === url);
  return { previous: posts[i - 1], next: posts[i + 1] };
}
