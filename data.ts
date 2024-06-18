import { createSource } from "mdxts";

export const allBlog = createSource("**/*.mdx", {
  basePathname: "/",
  sort: (a, b) => b.frontMatter.date.localeCompare(a.frontMatter.date),
});
