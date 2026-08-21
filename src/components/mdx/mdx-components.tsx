import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";

import { Embed } from "@/components/mdx/embed";
import { Figure } from "@/components/mdx/figure";

/**
 * Everything a post may use without importing it.
 *
 * Ticket 06 settled the set: the Fumadocs defaults (`Callout`, `Card`, `pre`,
 * headings, links, tables) plus `Steps`/`Step` and `Tabs`/`Tab`, which are not
 * in the defaults, plus exactly two of our own — `Figure` and `Embed`. Every
 * other bespoke post component is being converted to plain MDX.
 *
 * Posts that still `import` `Steps` or `Callout` themselves keep working: an
 * MDX file's own imports shadow whatever the provider passes.
 */
export const mdxComponents = {
  ...defaultMdxComponents,
  Embed,
  Figure,
  // Every image in a post is zoomable, including plain markdown `![]()`.
  img: ImageZoom,
  Step,
  Steps,
  Tab,
  Tabs,
};
