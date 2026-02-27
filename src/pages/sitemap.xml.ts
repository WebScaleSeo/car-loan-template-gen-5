import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site?.origin || 'https://placeholder.com';
  const pages = ['', 'about', 'faq', 'contact'];
  
  const urlEntries = pages.map(page => {
    const loc = page ? `${baseUrl}/${page}` : baseUrl;
    return `    <url><loc>${loc}</loc></url>`;
  }).join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
