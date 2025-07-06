/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://zyren-roan.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://zyren-roan.vercel.app/sitemap.xml',
    ],
  },
};

export default config;
