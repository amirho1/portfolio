import { siteUrl } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Return canonical localized URLs, alternate-language relationships, and static resume routes for the sitemap.
 * @returns The sitemap entries.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const enResumeUrl = `${siteUrl}${getMessages("en").profile.resumeHref}`;
  const faResumeUrl = `${siteUrl}${getMessages("fa").profile.resumeHref}`;

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: siteUrl,
          fa: `${siteUrl}/fa`,
        },
      },
    },
    {
      url: `${siteUrl}/fa`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: siteUrl,
          fa: `${siteUrl}/fa`,
        },
      },
    },
    {
      url: enResumeUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: enResumeUrl,
          fa: faResumeUrl,
        },
      },
    },
    {
      url: faResumeUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: enResumeUrl,
          fa: faResumeUrl,
        },
      },
    },
  ];
}
