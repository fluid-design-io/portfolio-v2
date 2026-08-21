import { Link } from "@tanstack/react-router";

import { ChevronLeft, ChevronRight } from "@/components/icons";
import { cn } from "@/lib/cn";
import type { Blog } from "@/lib/source";

const item =
  "flex w-full flex-col gap-2 rounded-lg border bg-card p-4 text-sm transition-colors hover:bg-accent/80 hover:text-accent-foreground";

const label = "inline-flex items-center gap-0.5 text-muted-foreground";

/**
 * Previous / next links at the foot of a post.
 *
 * `getNeighbours` returns full pages rather than the bare page-tree `Item`s
 * `findNeighbour` used to hand back, so the titles come straight off
 * `data.title` with no second lookup.
 */
export function PostNav({ next, previous }: { next?: Blog; previous?: Blog }) {
  if (!next && !previous) return null;

  return (
    <nav aria-label="More posts" className="grid grid-cols-2 gap-4 pb-6">
      {previous ? (
        <Link
          className={item}
          params={{ slug: previous.slugs[0] ?? "" }}
          to="/blog/$slug"
        >
          <span className={label}>
            <ChevronLeft className="-ms-1 size-4 shrink-0" />
            Previous
          </span>
          <span className="font-medium">{previous.data.title}</span>
        </Link>
      ) : null}
      {next ? (
        <Link
          className={cn(item, "col-start-2 text-end")}
          params={{ slug: next.slugs[0] ?? "" }}
          to="/blog/$slug"
        >
          <span className={cn(label, "flex-row-reverse")}>
            <ChevronRight className="-me-1 size-4 shrink-0" />
            Next
          </span>
          <span className="font-medium">{next.data.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}
