/**
 * The canonical origin, with no trailing slash.
 *
 * Hoisted out of `__root.tsx` once a fourth route needed it for `og:url` and
 * `rel="canonical"`. `rss[.]xml.tsx` and `__root.tsx` both carried a copy with
 * a comment deferring this to "the ticket 18 sweep"; that sweep landed without
 * it, and the count was about to reach six.
 *
 * Still duplicated outside TypeScript, where an import cannot reach: the
 * `sitemap.host` in `vite.config.ts` and the `Sitemap:` line in
 * `public/robots.txt`. Change all three together.
 */
export const SITE_URL = "https://oliverpan.vercel.app";
