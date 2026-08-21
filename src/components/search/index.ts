import { lazy } from "react";

/**
 * Search options for `RootProvider` in `__root.tsx`.
 *
 * `React.lazy` is load-bearing, not decoration. `SearchProvider` renders the
 * dialog inside a `<Suspense>` whether or not it is open, so handing it the
 * component directly would pull the search UI and the whole ZBSearch client
 * into the first-paint bundle. Lazily, they stay in chunks the browser only
 * fetches when Cmd/Ctrl+K is pressed.
 */
export const searchOptions = {
  SearchDialog: lazy(() => import("./static-search-dialog")),
};
