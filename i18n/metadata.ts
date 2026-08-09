import type { Metadata, MetadataRoute } from "next";
import { getLocalePath, siteUrl } from "./config";
import { getMessages } from "./messages";
import type { Locale } from "./types";

/**
 * Create complete SEO metadata for a localized portfolio page.
 * @param locale - The active locale.
 * @returns Localized Next.js metadata.
 */
export function createLocalizedMetadata(locale: Locale): Metadata {
  const messages = getMessages(locale);
  const canonicalPath = getLocalePath(locale);
  const isPersian = locale === "fa";

  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: messages.seo.title },
    description: messages.seo.description,
    applicationName: messages.seo.siteName,
    keywords: [...messages.seo.keywords],
    authors: [{ name: messages.profile.name, url: canonicalPath }],
    creator: messages.profile.name,
    publisher: messages.profile.name,
    alternates: {
      canonical: canonicalPath,
      languages: {
        "en-US": "/",
        "fa-IR": "/fa",
        "x-default": "/",
      },
    },
    manifest: isPersian ? "/fa/manifest.webmanifest" : "/manifest.webmanifest",
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-icon.png",
    },
    openGraph: {
      type: "profile",
      locale: isPersian ? "fa_IR" : "en_US",
      alternateLocale: isPersian ? ["en_US"] : ["fa_IR"],
      url: canonicalPath,
      title: messages.seo.title,
      description: messages.seo.description,
      siteName: messages.seo.siteName,
      images: [
        {
          url: "/avatar.webp",
          width: 480,
          height: 640,
          alt: messages.seo.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.seo.title,
      description: messages.seo.description,
      creator: "@the_Amirhos",
      images: [{ url: "/avatar.webp", alt: messages.seo.imageAlt }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: messages.seo.category,
  };
}

/**
 * Create a localized web app manifest.
 * @param locale - The active locale.
 * @returns The localized manifest definition.
 */
export function createLocalizedManifest(
  locale: Locale,
): MetadataRoute.Manifest {
  const messages = getMessages(locale);

  return {
    name: messages.seo.siteName,
    short_name: messages.seo.manifestShortName,
    description: messages.seo.manifestDescription,
    lang: locale === "fa" ? "fa-IR" : "en-US",
    dir: messages.direction,
    start_url: getLocalePath(locale),
    icons: [
      {
        src: "/icon0.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    theme_color: "#050506",
    background_color: "#050506",
    display: "standalone",
  };
}
