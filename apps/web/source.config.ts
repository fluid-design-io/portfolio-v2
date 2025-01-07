import {
  defineCollections,
  frontmatterSchema,
  getDefaultMDXOptions,
} from "fumadocs-mdx/config";
import { remarkInstall } from "fumadocs-docgen";
import { z } from "zod";

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  async: true,
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
  mdxOptions: getDefaultMDXOptions({
    remarkPlugins: [
      [
        remarkInstall,
        {
          persist: {
            id: "install-script-plugin",
          },
        },
      ],
    ],
  }),
});
