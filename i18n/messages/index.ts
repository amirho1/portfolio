import { enMessages } from "./en";
import { faMessages } from "./fa";
import type { Locale, PortfolioMessages } from "../types";

const messagesByLocale: Record<Locale, PortfolioMessages> = {
  en: enMessages,
  fa: faMessages,
};

/**
 * Return the complete translation dictionary for a locale.
 * @param locale - The active locale.
 * @returns The locale translation dictionary.
 */
export function getMessages(locale: Locale): PortfolioMessages {
  return messagesByLocale[locale];
}
