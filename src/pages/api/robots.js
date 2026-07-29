const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://koliinfotech.com"
).replace(/\/$/, "");

export default function handler(req, res) {
  const body = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Disallow: /applyjob
Disallow: /jobdescription
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=604800"
  );
  res.status(200).send(body);
}
