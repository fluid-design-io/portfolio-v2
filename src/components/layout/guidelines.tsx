import { cn } from "@/lib/cn";

/** The two fixed vertical rules that frame the page at max-width. */
export function Guidelines() {
  return (
    <div className="fixed inset-0 flex justify-center px-6 sm:px-8">
      <div
        className={cn(
          "flex w-full max-w-7xl",
          "pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] lg:pr-[calc(env(safe-area-inset-right)+2rem)] lg:pl-[calc(env(safe-area-inset-left)+2rem)]",
        )}
      >
        <div className="w-full ring-1 ring-border contrast-more:ring-zinc-400" />
      </div>
    </div>
  );
}
