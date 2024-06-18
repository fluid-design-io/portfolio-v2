import { createSource } from "mdxts";

export const allBlog = createSource("blog/**/*.mdx", {
  sort: (a, b) => b.frontMatter.date.localeCompare(a.frontMatter.date),
});
