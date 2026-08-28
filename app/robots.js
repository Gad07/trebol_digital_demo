export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/_next'],
      },
    ],
    sitemap: 'https://treboldigital.com/sitemap.xml',
    host: 'https://treboldigital.com',
  };
}
