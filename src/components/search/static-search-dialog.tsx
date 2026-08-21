import { useDocsSearch } from "fumadocs-core/search/client";
import { staticClient } from "fumadocs-core/search/client/orama-static";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from "fumadocs-ui/components/dialog/search";

/**
 * Written by `scripts/build-search-index.mjs` into `public/`, so it ships as a
 * plain static file with an extension — which is what keeps Vercel's filesystem
 * handler matching it exactly (issue 01, caveat 1).
 *
 * Built once at module scope: `staticClient` only closes over the URL, and the
 * index is not fetched until the first query. Creating it per render would
 * change `client` identity on every keystroke and re-run the query.
 */
const client = staticClient({ from: "/search-index.json" });

/**
 * Fumadocs' own `DefaultSearchDialog` still accepts `type="static"`, but that
 * prop is deprecated in favour of composing the dialog yourself. This is that
 * composition, minus the tag filter and i18n the blog has no use for.
 *
 * Default-exported so `@/components/search` can hand it to `React.lazy`.
 */
export default function StaticSearchDialog(props: SharedProps) {
  const { search, setSearch, query } = useDocsSearch({ client });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data === "empty" ? null : query.data} />
        {/* Inside the content, not beside it. `SearchDialogContent` is the
            portalled popup; `SearchDialogFooter` is a plain div, so a footer
            placed as its sibling renders loose in the page body — visible on
            every prerendered page. Fumadocs' own `search-default` has that
            bug; `search-orama` nests it, and so does this. */}
        <SearchDialogFooter>
          <span className="font-mono text-xs text-fd-muted-foreground">
            Searching blog posts
          </span>
        </SearchDialogFooter>
      </SearchDialogContent>
    </SearchDialog>
  );
}
