import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Return crawler access rules and the localized sitemap location.
 * @returns The robots metadata.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://amirho.com/sitemap.xml",
    host: "https://amirho.com",
  };
}
