import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ArrowLeft } from "@/components/icons";
import { PageLayout } from "@/components/layout/page-layout";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { Post } from "@/components/post";
import { Text } from "@/components/ui/text";
import { blog, getNeighbours } from "@/lib/source";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  head: ({ params }) => {
    const page = blog.getPage([params.slug]);
    if (!page) return {};

    const title = `${page.data.title} | Oliver Pan`;
    return {
      meta: [
        { title },
        { content: page.data.description, name: "description" },
        { content: title, property: "og:title" },
        { content: page.data.description, property: "og:description" },
        { content: "article", property: "og:type" },
      ],
    };
  },
  // The lookup is synchronous and module-scoped, so this exists only to turn an
  // unknown slug into a real 404 during SSR rather than an error boundary.
  loader: ({ params }) => {
    if (!blog.getPage([params.slug])) throw notFound();
  },
  notFoundComponent: PostNotFound,
});

function BackToIndex() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <Link
        aria-label="Go back to blog"
        className="group mb-8 flex size-10 items-center justify-center rounded-full border border-border/50 bg-muted ring-0 ring-white/10 transition hover:border-zinc-700 hover:ring-white/20 lg:absolute lg:left-4 lg:-mt-2 lg:mb-0"
        to="/blog"
      >
        <ArrowLeft className="size-4 stroke-zinc-500 transition group-hover:stroke-zinc-400" />
      </Link>
    </div>
  );
}

function BlogPost() {
  const { slug } = Route.useParams();
  const page = blog.getPage([slug]);
  if (!page) throw notFound();

  const { body: Mdx } = page.data;
  const { next, previous } = getNeighbours(page.url);

  return (
    <>
      <PageLayout.Header>
        <PageLayout.Title>{page.data.title}</PageLayout.Title>
        {page.data.description ? (
          <PageLayout.Description>
            {page.data.description}
          </PageLayout.Description>
        ) : null}
      </PageLayout.Header>
      <PageLayout.Content>
        <BackToIndex />
        <article className="mx-auto prose max-w-[65ch]">
          <Post.Date className="not-prose" date={page.data.date} />
          <Mdx components={mdxComponents} />
        </article>
        <div className="mx-auto mt-16 max-w-[65ch]">
          <Post.Nav next={next} previous={previous} />
        </div>
      </PageLayout.Content>
    </>
  );
}

function PostNotFound() {
  return (
    <>
      <PageLayout.Header>
        <PageLayout.Title>Post not found</PageLayout.Title>
        <PageLayout.Description>
          That post does not exist. It may have been renamed.
        </PageLayout.Description>
      </PageLayout.Header>
      <PageLayout.Content>
        <BackToIndex />
        <Text>
          Try the <Link to="/blog">list of everything published</Link>.
        </Text>
      </PageLayout.Content>
    </>
  );
}
