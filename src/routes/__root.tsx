import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { RootProvider } from "fumadocs-ui/provider/tanstack";
import type { ReactNode } from "react";

import { BackgroundVideo } from "@/components/background-video";
import { Footer } from "@/components/layout/footer";
import { Guidelines } from "@/components/layout/guidelines";
import { Header } from "@/components/layout/header";
import { SkipNav } from "@/components/layout/skip-nav";
import { searchOptions } from "@/components/search";
import { SITE_URL } from "@/lib/site";

import appCss from "@/styles/app.css?url";

const TITLE = "Oliver Pan";
const DESCRIPTION = "Developer, Designer, and Creator.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
      },
      { name: "theme-color", content: "#000000" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: TITLE },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // No `canonical` here. TanStack dedupes `meta` by name/property but
      // concatenates `links`, so a site-root canonical at this level cannot be
      // overridden by a child — it is emitted alongside the child's, and two
      // conflicting canonicals make crawlers discard the signal entirely.
      // Routes declare their own; a page without one self-canonicalizes.
      { rel: "icon", href: "/favicon.png" },
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: `${TITLE} — Blog`,
        href: `${SITE_URL}/rss.xml`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: Outlet,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    // Dark only. The class is static rather than toggled: Fumadocs' own CSS
    // keys off `.dark`, and there is no theme switcher to drive it.
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* next-themes is off because this site is dark only. Left on,
            RootProvider injects a blocking script that sets
            `document.documentElement.style.colorScheme` before hydration,
            which React then reports as a mismatch against the SSR'd <html>
            on every route. It also binds a `d` hotkey to toggle a theme that
            does not exist. */}
        <RootProvider search={searchOptions} theme={{ enabled: false }}>
          <SkipNav />
          <Guidelines />
          <Header />
          <main id="main">{children}</main>
          <BackgroundVideo />
          <Footer />
        </RootProvider>
        <Scripts />
      </body>
    </html>
  );
}
