import { Languages } from "lucide-react";
import Link from "next/link";
import type { PortfolioMessages } from "@/i18n/types";

interface LanguageSwitcherProps {
  messages: PortfolioMessages;
}

/**
 * Render a locale switch that links to the alternate server-rendered page.
 * @param props - Localized language-switch properties.
 * @returns The language switch link.
 */
export default function LanguageSwitcher({ messages }: LanguageSwitcherProps) {
  const alternateLocale = messages.locale === "fa" ? "en" : "fa";

  return (
    <Link
      href={messages.alternatePath}
      hrefLang={alternateLocale}
      lang={alternateLocale}
      dir={alternateLocale === "fa" ? "rtl" : "ltr"}
      aria-label={messages.common.languageSwitcherLabel}
      className="fixed start-6 top-6 z-[72] flex min-h-10 items-center gap-2 rounded-full border border-borderActive bg-[rgba(7,7,10,0.78)] px-4 py-2 font-sans text-xs font-bold text-textSecondary shadow-[0_0_1.7rem_rgba(214,169,95,0.1)] backdrop-blur-xl transition-[color,border-color,transform] hover:-translate-y-0.5 hover:border-gold hover:text-goldLight rtl:font-sans max-[600px]:start-4 max-[600px]:top-4"
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {messages.common.alternateLanguage}
    </Link>
  );
}
