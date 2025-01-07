import { blog } from "@/lib/source";
import { getServerSideSitemap } from "next-sitemap";
import type { ISitemapField } from "next-sitemap";
import { getServerSideURL } from "@/lib/get-url";

export async function GET() {
  // Get all blog posts
  const posts = blog.getPages();
  console.log(posts);

  // Create sitemap entries for blog posts with metadata
  const fields: ISitemapField[] = posts.map((post) => ({
    loc: `${getServerSideURL()}/blog/${post.slugs[0]}`,
    lastmod: new Date(post.data.date).toISOString(),
    changefreq: "monthly",
    priority: 0.8,
    news: {
      publication: {
        name: post.data.author,
        language: "en",
      },
      publication_date: new Date(post.data.date).toISOString(),
      title: post.data.title,
      keywords: post.data.tags?.join(","),
      date: new Date(post.data.date).toISOString(),
      publicationLanguage: "en",
      publicationName: post.data.author,
    },
  }));

  return getServerSideSitemap(fields);
}
