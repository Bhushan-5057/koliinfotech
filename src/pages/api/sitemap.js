import blogsData from "@/data/blogs.json";
import caseStudiesData from "@/data/caseStudies.json";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://koliinfotech.com";

/** Must match real `src/pages` routes (case-sensitive on Linux hosts). */
const STATIC_PAGES = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "about-company", changefreq: "monthly", priority: "0.8" },
  { path: "who-we-are", changefreq: "monthly", priority: "0.8" },
  { path: "our-culture", changefreq: "monthly", priority: "0.7" },
  { path: "digital-marketing", changefreq: "weekly", priority: "0.9" },
  { path: "privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "terms-of-service", changefreq: "yearly", priority: "0.3" },
  { path: "Technologies", changefreq: "monthly", priority: "0.7" },
  {
    path: "artificial-intelligence-machine-learning",
    changefreq: "weekly",
    priority: "0.9",
  },
  { path: "mobile-app-development", changefreq: "weekly", priority: "0.9" },
  {
    path: "custom-software-development",
    changefreq: "weekly",
    priority: "0.9",
  },
  { path: "web-development", changefreq: "weekly", priority: "0.9" },
  { path: "cloud-services", changefreq: "weekly", priority: "0.9" },
  { path: "qa-testing", changefreq: "weekly", priority: "0.8" },
  { path: "data-security", changefreq: "weekly", priority: "0.8" },
  { path: "hire-developer", changefreq: "weekly", priority: "0.8" },
  { path: "solution-on-demand", changefreq: "weekly", priority: "0.8" },
  { path: "careers", changefreq: "weekly", priority: "0.7" },
  { path: "contact-us", changefreq: "monthly", priority: "0.8" },
  { path: "blogs", changefreq: "daily", priority: "0.8" },
  { path: "case-studies", changefreq: "weekly", priority: "0.8" },
  { path: "portfolio", changefreq: "weekly", priority: "0.8" },
  { path: "testimonial", changefreq: "monthly", priority: "0.7" },
];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlEntry(loc, { lastmod, changefreq, priority }) {
  return `
  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export default function handler(req, res) {
  const now = new Date().toISOString();

  const staticEntries = STATIC_PAGES.map(({ path, changefreq, priority }) =>
    urlEntry(path ? `${SITE_URL}/${path}` : SITE_URL, {
      lastmod: now,
      changefreq,
      priority,
    })
  );

  const blogs = Array.isArray(blogsData) ? blogsData : [];
  const blogEntries = blogs
    .filter((blog) => blog?.slug)
    .map((blog) =>
      urlEntry(`${SITE_URL}/blogs/${blog.slug}`, {
        lastmod: blog.updatedAt || blog.publishedAt || now,
        changefreq: "weekly",
        priority: "0.6",
      })
    );

  const caseStudies = Array.isArray(caseStudiesData) ? caseStudiesData : [];
  const caseStudyEntries = caseStudies
    .filter((item) => item?.slug)
    .map((item) =>
      urlEntry(`${SITE_URL}/case-studies/${item.slug}`, {
        lastmod: now,
        changefreq: "monthly",
        priority: "0.65",
      })
    );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...blogEntries, ...caseStudyEntries].join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.status(200).send(sitemap);
}
