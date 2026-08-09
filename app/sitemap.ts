import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Return canonical localized URLs and alternate-language relationships.
 * @returns The localized sitemap entries.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amirho.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://amirho.com",
          fa: "https://amirho.com/fa",
        },
      },
    },
    {
      url: "https://amirho.com/fa",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://amirho.com",
          fa: "https://amirho.com/fa",
        },
      },
    },
  ];
}
