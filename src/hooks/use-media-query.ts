import { useCallback, useSyncExternalStore } from "react";

/**
 * The old hook set state inside an effect, which oxlint flags (correctly) as
 * a cascading render: the first paint always used `false`, then immediately
 * re-rendered. `useSyncExternalStore` is what this pattern is for. The server
 * snapshot stays `false` so SSR output is unchanged.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const result = matchMedia(query);
      result.addEventListener("change", onStoreChange);
      return () => result.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    () => false,
  );
}
