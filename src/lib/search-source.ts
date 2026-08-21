import { loader } from "fumadocs-core/source";
import { pageSchema } from "fumadocs-core/source/schema";
import { defineCollections } from "fumadocs-mdx/macro";

/**
 * An `async: true` twin of the `blog` collection in `./source.ts`, used ONLY by
 * `scripts/build-search-index.mjs`. Nothing in the app imports it.
 *
 * Why it exists: `./source.ts` is eager, so importing it pulls all 13 compiled
 * post bodies into whatever bundle touches it. Seven posts still import
 * components that tickets 15 and 21 have not landed yet, so that import is a
 * hard build failure today — verified: adding a route that imports `./source.ts`
 * fails `bun run build` with five unresolved modules.
 *
 * `async: true` bundles frontmatter upfront and defers each body to its own
 * `structuredData()` call, so the indexer can try all 13 and skip the ones that
 * throw. Same technique as `.scratch/.../scripts/check-posts.mjs`.
 *
 * `dir` and `baseUrl` MUST stay identical to `./source.ts` — that is what makes
 * the indexed URLs match the real routes. The schema deliberately does not:
 * indexing needs only `title` and `description`, both of which `pageSchema`
 * already carries, and zod strips the rest.
 *
 * DELETE THIS FILE once all 13 posts compile. At that point the whole indexer
 * collapses into `createFromSource(blog)` inside a server route — see the Answer
 * on issue 16.
 */
const searchCollection = defineCollections({
  type: "doc",
  dir: "content/blog",
  async: true,
  schema: pageSchema,
});

export const searchSource = loader({
  baseUrl: "/blog",
  source: searchCollection.toFumadocsSource(),
});
