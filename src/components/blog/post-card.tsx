import { Link } from "@tanstack/react-router";

import { PostDate } from "@/components/blog/post-date";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/cn";
import type { Blog } from "@/lib/source";

/**
 * One cell of the blog index grid.
 *
 * The hover treatment is two stacked layers: an oversized transparent `<span>`
 * inside the link makes the whole cell clickable, and a sibling `<div>` scales
 * and fades a muted panel in behind it. The panel reacts to `peer-focus` as
 * well as `group-hover`, so keyboard focus gets the same affordance.
 */
export function PostCard({ post }: { post: Blog }) {
  return (
    <article className="-mx-4 min-w-full border-b px-8 py-8 last:border-none sm:mx-auto sm:p-6">
      <div className="group relative flex h-full w-full flex-col gap-1.5">
        <PostDate className="relative z-10" date={post.data.date} />
        <div>
          <Link
            className="peer focus:outline-none"
            params={{ slug: post.slugs[0] ?? "" }}
            to="/blog/$slug"
          >
            <span className="absolute -inset-x-8 -inset-y-8 z-20 sm:-inset-6" />
            <Heading
              className="relative z-10 text-pretty text-shadow-md"
              level={2}
            >
              {post.data.title}
            </Heading>
          </Link>
          <div
            className={cn(
              "absolute -inset-x-8 -inset-y-8 z-0 scale-[0.93] bg-muted/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-6",
              "contrast-more:ring-1 contrast-more:ring-zinc-400/40",
              "peer-focus:scale-100 peer-focus:opacity-100 peer-focus:ring-2 peer-focus:ring-zinc-400/40",
            )}
          />
        </div>
        <Text className="relative z-10 line-clamp-3 text-balance">
          {post.data.description}
        </Text>
      </div>
    </article>
  );
}
