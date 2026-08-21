import { createFileRoute } from "@tanstack/react-router";

import { PageLayout } from "@/components/layout/page-layout";
import { Post } from "@/components/post";
import { posts } from "@/lib/source";

const TITLE = "Writing on web development, networking, and experience design";
const DESCRIPTION =
  "All of my long-form thoughts on programming, leadership, web design, and more, collected in chronological order.";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog | Oliver Pan" },
      { content: DESCRIPTION, name: "description" },
      { content: "Blog | Oliver Pan", property: "og:title" },
      { content: DESCRIPTION, property: "og:description" },
    ],
  }),
});

function BlogIndex() {
  return (
    <>
      <PageLayout.Header>
        <PageLayout.Title>{TITLE}</PageLayout.Title>
        <PageLayout.Description>{DESCRIPTION}</PageLayout.Description>
      </PageLayout.Header>
      <PageLayout.Content>
        {/* Two full-height rules down the outer edges of the grid. */}
        <div className="absolute inset-0 h-full w-full sm:px-8 lg:px-12">
          <div className="relative mx-auto h-full w-full max-w-2xl lg:max-w-5xl">
            <div className="absolute inset-y-0 left-0 hidden h-full border-l sm:block" />
            <div className="absolute inset-y-0 left-full hidden h-full border-l sm:block" />
          </div>
        </div>
        {/* …and rules across the top and bottom, plus one down the middle. */}
        <div className="relative">
          <div className="absolute inset-x-0 top-0 hidden w-full border-b sm:block" />
          <div className="absolute inset-x-0 top-full w-full border-b" />
          <div className="absolute inset-y-0 left-1/2 hidden h-full border-l md:block" />
          <div className="grid grid-cols-1 place-items-stretch md:grid-cols-2">
            {/* `posts` is already newest-first — sorted once at module scope in
              lib/source.ts. Do not re-sort here. */}
            {posts.map((post) => (
              <Post.Card key={post.url} post={post} />
            ))}
          </div>
        </div>
      </PageLayout.Content>
    </>
  );
}
