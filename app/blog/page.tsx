import Layout from "@/components/layout/layout";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { allBlog } from "@/data";
import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const ArticleTitle = ({ children, ...props }: any) => {
  return (
    <div>
      <div
        className={cn(
          "absolute -inset-x-8 -inset-y-8 z-0 scale-95 bg-muted/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-6",
          "contrast-more:ring-1 contrast-more:ring-zinc-400 contrast-more:ring-zinc-400/40",
        )}
      />
      <Link {...(props as any)}>
        <span className="absolute -inset-x-8 -inset-y-8 z-20 sm:-inset-6" />
        <Heading className="text-shadow-md relative z-10 text-pretty" level={3}>
          {children}
        </Heading>
      </Link>
    </div>
  );
};

function Article({ blog }: { blog: any }) {
  return (
    <article className="-mx-4 min-w-full border-b px-8 py-8 last:border-none sm:mx-auto sm:p-6">
      <div className="group relative flex h-full w-full flex-col gap-1.5">
        <time
          className="relative z-10 border-l border-muted-foreground pl-2 text-xs text-muted-foreground"
          dateTime={blog.date}
        >
          {format(parseISO(blog.date), "LLLL d, yyyy")}
        </time>

        <ArticleTitle href={blog.url}>{blog.title}</ArticleTitle>
        <Text className="relative z-10 line-clamp-3 text-balance">
          {blog.description}
        </Text>
      </div>
    </article>
  );
}

async function BlogPage() {
  const blog = allBlog.all();
  if (!blog) {
    return null;
  }
  return (
    <Layout
      description="All of my long-form thoughts on programming, leadership, web design, and more, collected in chronological order."
      title="Writing on web development, networking, and experience design"
    >
      <div className="absolute inset-0 h-full w-full sm:px-8 lg:px-12">
        <div className="relative mx-auto h-full w-full max-w-2xl lg:max-w-5xl">
          <div className="absolute inset-y-0 left-0 hidden h-full border-l sm:block" />
          <div className="absolute inset-y-0 left-full hidden h-full border-l sm:block" />
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 hidden w-full border-b sm:block" />
        <div className="absolute inset-x-0 top-full w-full border-b" />
        <div className="absolute inset-y-0 left-1/2 hidden h-full border-l md:block" />
        <div className="grid grid-cols-1 place-items-stretch md:grid-cols-2">
          {blog.map((b) => (
            <Article
              blog={{
                ...b.frontMatter,
                url: b.url.replace(/\/page$/, ""),
              }}
              key={b.url}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default BlogPage;
