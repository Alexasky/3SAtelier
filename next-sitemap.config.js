/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.3satelier.ru',
  generateRobotsTxt: true,
  sitemapSize: 5000,
	transform: async (config, path) => {
    let priority = 0.7;
    if (path === '/') priority = 1;
    else if (path.startsWith('/services')) priority = 0.9;
    else if (path.startsWith('/membership')) priority = 0.9;
    else if (path.startsWith('/cleaning')) priority = 0.8;
    else if (path.startsWith('/contact')) priority = 0.6;

    return {
      loc: path,
      changefreq: 'daily',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  exclude: ['/admin/*'],
};