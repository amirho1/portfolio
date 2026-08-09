import type { ReactNode } from "react";
import { fontVariables } from "@/i18n/fonts";
import { getDirection } from "@/i18n/config";
import { createLocalizedStructuredData } from "@/i18n/structuredData";
import type { Locale } from "@/i18n/types";
import { cn } from "@/lib/utils";

interface LocalizedDocumentProps {
  children: ReactNode;
  locale: Locale;
}

/**
 * Render the locale-aware root HTML document.
 * @param props - Localized document properties.
 * @returns The root HTML document.
 */
export default function LocalizedDocument({
  children,
  locale,
}: LocalizedDocumentProps) {
  const isPersian = locale === "fa";
  const direction = getDirection(locale);
  const structuredData = createLocalizedStructuredData(locale);

  return (
    <html
      lang={isPersian ? "fa-IR" : "en-US"}
      dir={direction}
      className="scroll-smooth scroll-pt-6 bg-background motion-reduce:scroll-auto"
    >
      <body
        className={cn(
          fontVariables,
          "min-h-screen min-w-[320px] overflow-x-clip bg-[radial-gradient(circle_at_72%_25%,rgba(128,102,178,0.16),transparent_32%),radial-gradient(circle_at_20%_75%,rgba(214,169,95,0.1),transparent_36%),var(--background)] font-sans text-foreground [text-rendering:optimizeLegibility] selection:bg-gold/30 selection:text-foreground rtl:font-persian max-[1099px]:pb-[calc(5.6rem+env(safe-area-inset-bottom))]",
        )}
      >
        <div
          className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] [background-size:100%_88px,132px_100%] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
          aria-hidden="true"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
