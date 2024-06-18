import { createSource } from "mdxts";

export const allBlog = createSource("**/*.mdx", {
  baseDirectory: "_blog",
  basePathname: "/blog",
  sort: (a, b) => b.frontMatter.date.localeCompare(a.frontMatter.date),
});
