import Layout from "@/components/layout/layout";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";

import { allBlog } from "../../../data";

export function generateStaticParams() {
  return allBlog.paths().map((pathname) => {
    const slug = pathname[1];
    return { slug };
  });
}

const parseTitle = (pathname: string) =>
  pathname
    .replace(/^\/blog/, "")
    .replace(/\/page$/, "")
    .replace(/^\//, "")
    .replace(/-/g, " ");

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const page = await allBlog.get(["blog", params.slug, "page"]);
  if (!page) return { title: "Blog" };
  return {
    description: page.frontMatter.description,
    title: parseTitle(page.pathname),
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

interface PageProps {
  params: { slug: string };
}

async function BlogPage({ params }: PageProps) {
  const page = await allBlog.get([params.slug, "page"]);
  if (!page) {
    notFound();
  }
  return (
    <Layout
      description={page.frontMatter.description}
      title={parseTitle(page.pathname)}
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
      {page.Content ? (
        <article className="prose prose-invert mx-auto">
          <time
            className="relative z-10 border-l border-muted-foreground pl-2 text-xs text-muted-foreground"
            dateTime={page.frontMatter.date}
          >
            {format(parseISO(page.frontMatter.date), "LLLL d, yyyy")}
          </time>
          <page.Content />
        </article>
      ) : (
        <>No content specified for this page</>
      )}
    </Layout>
  );
}

export default BlogPage;
