module.exports = {
  siteUrl: "https://amirho.site",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 1.0,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
