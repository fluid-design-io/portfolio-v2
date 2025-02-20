import Layout from "@/components/layout/layout";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { blog } from "@/lib/source";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { findNeighbour } from "fumadocs-core/server";
import { Footer } from "./blog-footer";

export function generateStaticParams(): { slug: string }[] {
  return (
    blog.getPages().map((page) => ({
      slug: page.slugs[0] ?? "",
    })) ?? []
  );
}

const parseTitle = (pathname: string) =>
  pathname
    .replace(/^\/blog/, "")
    .replace(/\/page$/, "")
    .replace(/^\//, "")
    .replace(/-/g, " ");

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) return { title: "Blog" };
  return {
    description: page.data.description,
    title: parseTitle(page.data.title),
  };
};

function ArrowLeftIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 16 16" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

async function BlogPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const { body: Mdx } = page.data;
  const sorted = blog.pageTree.children.sort((a, b) => {
    // @ts-expect-error injected date to pageTree's attachFile function
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const neighbours = findNeighbour({ name: "", children: sorted }, page.url);
  return (
    <Layout
      description={page.data.description}
      title={parseTitle(page.data.title)}
    >
      <div className="relative mx-auto max-w-5xl">
        <Link
          aria-label="Go back to blog"
          className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-muted ring-0 ring-white/10 transition hover:border-zinc-700 hover:ring-white/20 lg:absolute lg:left-4 lg:-mt-2 lg:mb-0"
          href="/blog"
        >
          <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-400" />
        </Link>
      </div>
      <article className="mx-auto max-w-[65ch] prose prose-invert">
        <time
          className="relative z-10 border-l border-muted-foreground pl-2 text-xs text-muted-foreground"
          dateTime={format(page.data.date, "yyyy-MM-dd")}
        >
          {format(page.data.date, "LLLL d, yyyy")}
        </time>
        <Mdx
          components={{
            ...defaultMdxComponents,
            img: (props) => <ImageZoom {...props} />,
            Tab,
            Tabs,
          }}
        />
      </article>
      <div className="mt-16 mx-auto max-w-[65ch]">
        <Footer next={neighbours.next} previous={neighbours.previous} />
      </div>
    </Layout>
  );
}

export default BlogPage;
