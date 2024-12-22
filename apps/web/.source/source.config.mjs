// source.config.ts
import { defineCollections, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  async: true,
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    title: z.string()
  })
});
export {
  blog
};
