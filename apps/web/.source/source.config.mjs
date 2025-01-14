// source.config.ts
import {
  defineCollections,
  frontmatterSchema,
  getDefaultMDXOptions
} from "fumadocs-mdx/config";
import { remarkInstall, fileGenerator, remarkDocGen } from "fumadocs-docgen";
import { z } from "zod";
var blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    title: z.string()
  }),
  mdxOptions: getDefaultMDXOptions({
    remarkPlugins: [
      [
        remarkInstall,
        {
          persist: {
            id: "install-script-plugin"
          }
        }
      ],
      [remarkDocGen, { generators: [fileGenerator()] }]
    ]
  })
});
export {
  blog
};
