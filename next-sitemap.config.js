module.exports = {
  siteUrl: "https://amirho.com",
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
