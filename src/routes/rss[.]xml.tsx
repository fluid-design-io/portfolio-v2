/**
 * The RSS 2.0 feed, served at `/rss.xml`.
 *
 * The filename is `rss[.]xml.tsx`, not `rss.xml.tsx`: TanStack Router splits
 * route filenames on `.`, and the generator's `SPLIT_REGEX`
 * (`/(?<!\[)\.(?!\])/`) skips a dot wrapped in square brackets. So the brackets
 * are what keep this one path segment instead of `/rss/xml`.
 *
 * This is a server handler rather than a build-time file in `public/` — both
 * are sanctioned by issue 17, and the handler wins on one point: it imports
 * `posts` from `@/lib/source.ts` directly, so it inherits the whole MDX
 * pipeline (the `remarkImageOptions` fix, the macro `include`, the `@/` alias)
 * with no second copy of that config to keep in sync. A `public/` artifact
 * would need its own Vite server and its own duplicate of `fumadocsMdx()`.
 *
 * The route has no `component`, so Start does not prerender it and it does not
 * enter the sitemap — verified against a real `VERCEL=1` build.
 */
import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "feed";

import { toDate } from "@/lib/date";
import { posts } from "@/lib/source";

// Duplicated from `__root.tsx` on purpose: issue 17 scopes this ticket to a
// single-line addition there, so hoisting these into a shared module is left to
// the ticket 18 sweep.
const SITE_URL = "https://oliverpan.vercel.app";
const AUTHOR = "Oliver Pan";
const TITLE = "Oliver Pan";
const DESCRIPTION = "Developer, Designer, and Creator.";

/**
 * Built once at module scope. `posts` is resolved at build time and never
 * changes at runtime, so there is nothing to recompute per request.
 *
 * `posts` is already newest-first — sorted once in `lib/source.ts`. Do not
 * re-sort here.
 */
const RSS = buildFeed();

function buildFeed(): string {
  const feed = new Feed({
    copyright: `© ${new Date().getUTCFullYear()} ${AUTHOR}`,
    description: DESCRIPTION,
    feedLinks: { rss: `${SITE_URL}/rss.xml` },
    id: `${SITE_URL}/blog`,
    language: "en",
    link: `${SITE_URL}/blog`,
    title: `${TITLE} — Blog`,
    // Pinned to the newest post rather than left to default to `new Date()`,
    // which would change the bytes on every build for no reason.
    updated: posts[0] ? toDate(posts[0].data.date) : undefined,
  });

  for (const post of posts) {
    const url = `${SITE_URL}${post.url}`;

    // No `author`, deliberately. RSS 2.0 defines both `<author>` and
    // `<managingEditor>` as email addresses, and `feed` emits a bare name into
    // `<author>` when given one, which the W3C feed validator flags. This is a
    // one-author blog whose channel `<copyright>` already names him, and
    // publishing a personal email address in a public feed is not a call to
    // make unprompted — so the field is simply omitted. Add it back as
    // `{ name, email }` if a real contact address is ever wanted here.
    feed.addItem({
      category: post.data.tags?.map((name) => ({ name })),
      date: toDate(post.data.date),
      description: post.data.description,
      id: url,
      link: url,
      title: post.data.title,
    });
  }

  return feed.rss2();
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(RSS, {
          headers: {
            "cache-control":
              "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
            "content-type": "application/rss+xml; charset=utf-8",
          },
        }),
    },
  },
});
