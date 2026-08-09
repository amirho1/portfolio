import { ArrowRight, Download, Mail } from "lucide-react";
import { formatMessage } from "@/i18n/formatMessage";
import type { PortfolioMessages } from "@/i18n/types";
import { cn } from "@/lib/utils";
import Socials from "./Socials";
import {
  buttonBase,
  buttonGlass,
  buttonGold,
  directionalIcon,
  portfolioShell,
  sectionBase,
  sectionTitle,
  stationKicker,
} from "./portfolioStyles";

interface ContactProps {
  messages: PortfolioMessages;
}

/**
 * Format the build year using locale-appropriate numerals.
 * @param locale - The active locale.
 * @returns The localized current year.
 */
function getLocalizedYear(locale: PortfolioMessages["locale"]): string {
  return new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US", {
    useGrouping: false,
  }).format(new Date().getFullYear());
}

/**
 * Render the localized contact call-to-action, contact card, and footer.
 * @param props - Localized contact-section properties.
 * @returns The portfolio contact section.
 */
export default function Contact({ messages }: ContactProps) {
  const mailHref = `mailto:${messages.profile.email}`;
  const year = getLocalizedYear(messages.locale);

  return (
    <section
      id="contact"
      className={cn(
        sectionBase,
        "min-h-[88svh] overflow-hidden border-b-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.55),rgba(5,5,6,0.88)),radial-gradient(circle_at_75%_30%,rgba(128,102,178,0.16),transparent_32%)] pb-6 pt-[clamp(7rem,13vw,12rem)]",
      )}
      aria-labelledby="contact-title"
    >
      <div
        className="pointer-events-none absolute bottom-[-20%] end-[-10%] h-[65vw] w-[65vw] rounded-full border border-[rgba(214,169,95,0.1)] bg-[radial-gradient(circle,rgba(189,117,64,0.11),transparent_62%)]"
        aria-hidden="true"
      />
      <div className={portfolioShell}>
        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] items-center gap-[clamp(3rem,8vw,9rem)] max-[820px]:grid-cols-1">
          <div>
            <p className={stationKicker}>
              <span>{messages.contactSection.station}</span>
              {messages.contactSection.kicker}
            </p>
            <h2
              id="contact-title"
              className={cn(sectionTitle, "mt-6 max-w-[12ch]")}
            >
              {messages.contactSection.title}{" "}
              <em>{messages.contactSection.titleEmphasis}</em>
            </h2>
            <p className="mt-8 max-w-[37rem] text-base leading-[1.75] text-textSecondary">
              {messages.contactSection.description}
            </p>

            <div className="mt-[2.3rem] flex flex-wrap gap-[0.85rem] max-[600px]:grid">
              <a className={cn(buttonBase, buttonGold)} href={mailHref}>
                <Mail aria-hidden="true" />
                {messages.contactSection.conversationLabel}
              </a>
              <a
                className={cn(buttonBase, buttonGlass)}
                href={messages.profile.resumeHref}
                download
              >
                <Download aria-hidden="true" />
                {messages.contactSection.resumeLabel}
              </a>
            </div>
          </div>

          <aside
            className="relative overflow-hidden rounded-2xl border border-borderActive bg-[linear-gradient(135deg,rgba(214,169,95,0.07),transparent_40%),rgba(11,11,15,0.88)] p-[1.6rem] shadow-[0_2.2rem_6rem_rgba(0,0,0,0.5)] backdrop-blur-xl before:absolute before:start-[-0.9rem] before:top-1/2 before:h-[1.6rem] before:w-[1.6rem] before:-translate-y-1/2 before:rounded-full before:border before:border-borderActive before:bg-background before:content-[''] after:absolute after:end-[-0.9rem] after:top-1/2 after:h-[1.6rem] after:w-[1.6rem] after:-translate-y-1/2 after:rounded-full after:border after:border-borderActive after:bg-background after:content-[''] max-[820px]:max-w-[36rem] max-[600px]:p-[1.2rem]"
            aria-label={messages.contactSection.detailsLabel}
          >
            <div className="flex justify-between border-b border-dashed border-[rgba(244,229,188,0.19)] pb-4 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-textMuted rtl:tracking-normal">
              <span>{messages.profile.name}</span>
              <span>{messages.contactSection.ticketCode}</span>
            </div>
            <div className="mt-6 grid grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-[0.45rem]">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-textMuted rtl:tracking-normal">
                {messages.contactSection.fromLabel}
              </span>
              <strong className="col-start-2 font-display text-2xl font-medium rtl:font-persian rtl:font-bold max-[600px]:text-xl">
                {messages.contactSection.fromValue}
              </strong>
              <ArrowRight
                className={cn(
                  directionalIcon,
                  "col-start-3 row-span-2 row-start-1 w-5 text-gold",
                )}
                aria-hidden="true"
              />
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-textMuted rtl:tracking-normal">
                {messages.contactSection.toLabel}
              </span>
              <strong className="col-start-2 font-display text-2xl font-medium rtl:font-persian rtl:font-bold max-[600px]:text-xl">
                {messages.contactSection.toValue}
              </strong>
            </div>
            <a
              className="mt-[1.7rem] grid gap-[0.35rem] border-t border-dashed border-[rgba(244,229,188,0.19)] pt-[1.4rem] text-[clamp(0.72rem,1.2vw,0.9rem)] text-goldLight [overflow-wrap:anywhere]"
              href={mailHref}
            >
              <small className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-textMuted rtl:tracking-normal">
                {messages.contactSection.directLine}
              </small>
              <bdi dir="ltr">{messages.profile.email}</bdi>
            </a>
          </aside>
        </div>

        <Socials messages={messages} />
        <footer className="flex items-center justify-between gap-8 pt-6 text-[0.65rem] text-textMuted max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-[0.6rem] max-[600px]:pb-[0.7rem]">
          <p>
            {formatMessage(messages.contactSection.copyrightLabel, {
              year,
              name: messages.profile.name,
            })}
          </p>
          <p>{messages.contactSection.footerNote}</p>
        </footer>
      </div>
    </section>
  );
}
