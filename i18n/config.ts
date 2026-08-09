import type { Locale, TextDirection } from "./types";

export const locales = ["en", "fa"] as const satisfies readonly Locale[];
export const defaultLocale: Locale = "en";
export const siteUrl = "https://amirho.com";

/**
 * Return the writing direction for a locale.
 * @param locale - The active locale.
 * @returns The locale writing direction.
 */
export function getDirection(locale: Locale): TextDirection {
  return locale === "fa" ? "rtl" : "ltr";
}

/**
 * Return the public pathname for a locale.
 * @param locale - The active locale.
 * @returns The localized root pathname.
 */
export function getLocalePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

/**
 * Build an absolute localized URL.
 * @param locale - The active locale.
 * @param hash - An optional page fragment.
 * @returns The absolute localized URL.
 */
export function getLocalizedUrl(locale: Locale, hash = ""): string {
  return `${siteUrl}${getLocalePath(locale)}${hash}`;
}
