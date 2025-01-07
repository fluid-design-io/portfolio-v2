const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  "https://oliverpan.vercel.app";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  // Exclude both the server sitemap and all blog pages
  exclude: ["/server-sitemap.xml", "/blog/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    // Make sure to include the server sitemap in robots.txt
    additionalSitemaps: [SITE_URL + "/server-sitemap.xml"],
  },
  // Transform function to add lastmod dates and custom priorities
  transform: async (config, path) => {
    // Give higher priority to main pages
    const priorities = {
      "/": 1.0,
      "/projects": 0.8,
      "/blog": 0.8, // Keep the main blog page in static sitemap
      "/uses": 0.6,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [],
    };
  },
};
