export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://sol-renov.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin/private areas (if any)
Disallow: /admin/
Disallow: /private/
Disallow: /*.pdf$

# Allow important pages
Allow: /
Allow: /#services
Allow: /#temoignages  
Allow: /#contact`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
