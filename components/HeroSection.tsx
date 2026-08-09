import type { PortfolioMessages } from "@/i18n/types";
import { cn } from "@/lib/utils";
import { ArrowRight, Code2, Radio } from "lucide-react";
import Link from "next/link";
import { JourneyLink } from "./JourneyLink";
import {
  buttonBase,
  buttonGold,
  directionalIcon,
  eyebrow,
  portfolioShell,
  sectionBase,
  stationKicker,
} from "./portfolioStyles";

interface HeroSectionProps {
  messages: PortfolioMessages;
}

/**
 * Render the localized portfolio introduction and train-window scene.
 * @param props - Localized hero properties.
 * @returns The portfolio hero section.
 */
export default function HeroSection({ messages }: HeroSectionProps) {
  return (
    <section
      id="home"
      className={cn(sectionBase, "min-h-svh overflow-hidden")}
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[linear-gradient(90deg,rgba(5,5,6,0.1),rgba(5,5,6,0.72)_75%),repeating-linear-gradient(0deg,transparent_0,transparent_6.8rem,rgba(244,229,188,0.032)_6.85rem)] rtl:bg-[linear-gradient(270deg,rgba(5,5,6,0.1),rgba(5,5,6,0.72)_75%),repeating-linear-gradient(0deg,transparent_0,transparent_6.8rem,rgba(244,229,188,0.032)_6.85rem)]"
        aria-hidden="true"
      >
        <span className="absolute end-[-7%] top-[12%] h-[60vh] w-[48vw] rounded-full border border-[rgba(214,169,95,0.12)] bg-[radial-gradient(circle,rgba(128,102,178,0.12),transparent_64%)] blur-lg" />
      </div>

      <div
        className={cn(
          portfolioShell,
          "flex min-h-svh flex-col py-8 pb-[2.6rem] max-[820px]:min-h-0 max-[820px]:pt-[1.4rem]",
        )}
      >
        <Link
          href={`${messages.homePath}#home`}
          hrefLang={messages.locale}
          className="flex w-fit items-center gap-[1.15rem]"
          aria-label={messages.hero.brandLabel}
        >
          <span className="font-display text-[2.6rem] font-medium leading-none tracking-[-0.08em] rtl:font-persian rtl:tracking-normal max-[600px]:text-[2.2rem]">
            {messages.hero.monogram}
          </span>
          <span className="h-8 w-px bg-border" aria-hidden="true" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.34em] text-textSecondary rtl:font-medium rtl:tracking-normal max-[600px]:text-[0.6rem] max-[600px]:tracking-[0.24em]">
            {messages.hero.brandName}
          </span>
        </Link>

        <div className="grid flex-1 grid-cols-[minmax(0,1.12fr)_minmax(25rem,0.88fr)] items-center gap-[clamp(2.5rem,5vw,7rem)] py-[clamp(4.5rem,9vh,8rem)] pb-12 max-[1099px]:grid-cols-[minmax(0,1.1fr)_minmax(21rem,0.9fr)] max-[1099px]:gap-8 max-[820px]:grid-cols-1 max-[820px]:items-start max-[820px]:pt-[4.2rem] max-[600px]:pt-14">
          <div className="relative z-[2] min-w-0 max-[820px]:max-w-[45rem]">
            <p className={stationKicker}>
              <span>{messages.common.nowArriving}</span>
              {messages.hero.arrival}
            </p>
            <p className={cn(eyebrow, "mt-[2.6rem] max-[600px]:mt-8")}>{messages.profile.title}</p>
            <h1
              id="hero-title"
              className="mt-6 max-w-full text-balance font-display text-[clamp(5rem,8.25vw,9.5rem)] font-medium leading-[0.72] tracking-[-0.068em] [text-shadow:0_1.5rem_4rem_rgba(0,0,0,0.66)] rtl:font-persian rtl:font-bold rtl:leading-[1.03] rtl:tracking-normal max-[1099px]:text-[clamp(4.7rem,9.3vw,7rem)] max-[600px]:mt-[1.15rem] max-[600px]:text-[clamp(3.6rem,18vw,4.8rem)] max-[600px]:leading-[0.92] max-[600px]:rtl:text-[clamp(3rem,13vw,4rem)]"
            >
              {messages.hero.titleFirst}
              <span className="ms-[0.62em] block font-normal text-goldLight rtl:ms-0 rtl:font-bold max-[600px]:ms-[0.18em] max-[600px]:rtl:ms-0">
                {messages.hero.titleSecond}
              </span>
            </h1>
            <p className="mt-10 max-w-[38rem] text-[clamp(1.1rem,1.55vw,1.35rem)] leading-[1.7] text-textSecondary max-[600px]:mt-8 max-[600px]:text-[1.03rem]">
              {messages.profile.introduction}
            </p>
            <div className="mt-[2.4rem] flex flex-wrap gap-[0.9rem] max-[600px]:grid">
              <JourneyLink target="projects" className={cn(buttonBase, buttonGold)}>
                {messages.hero.exploreWork}
                <ArrowRight className={directionalIcon} aria-hidden="true" />
              </JourneyLink>
            </div>
            <dl
              className="mt-[3.2rem] grid max-w-[52rem] grid-cols-3 border-t border-border max-[600px]:mt-[2.4rem] max-[600px]:grid-cols-1"
              aria-label={messages.hero.highlightsLabel}
            >
              {messages.hero.highlights.map(function renderHighlight(highlight) {
                return (
                  <div
                    className="min-h-[5.5rem] border-s border-border px-[1.15rem] py-4 first:border-s-0 max-[600px]:min-h-0 max-[600px]:border-s-0 max-[600px]:border-t max-[600px]:px-0 max-[600px]:py-[0.85rem] max-[600px]:first:border-t-0"
                    key={highlight.label}
                  >
                    <dt className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-textMuted rtl:tracking-normal">
                      {highlight.label}
                    </dt>
                    <dd className="mt-[0.45rem] text-[0.8rem] leading-[1.55] text-textSecondary">
                      {highlight.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

          <div
            className="relative min-h-[min(68vh,47rem)] [perspective:900px] max-[820px]:min-h-[26rem] max-[600px]:mt-2 max-[600px]:min-h-[19rem]"
            aria-hidden="true"
          >
            <div className="absolute end-[-30%] top-[-14%] h-[42%] w-[125%] origin-top-right skew-y-[-6deg] border-e border-t border-[rgba(214,169,95,0.24)] bg-[repeating-linear-gradient(-13deg,transparent_0,transparent_2.4rem,rgba(214,169,95,0.08)_2.45rem,transparent_2.52rem)] rtl:origin-top-left max-[600px]:hidden" />
            <div className="absolute bottom-[14%] end-0 start-[5%] top-[5%] rounded-e-[1.3rem] rounded-s-[6rem] border border-[rgba(214,169,95,0.3)] bg-[linear-gradient(120deg,#181717,#09090c_34%,#1a1411_100%)] p-[1.1rem] shadow-[inset_0_0_0_0.45rem_#050506,inset_0_0_2.5rem_rgba(214,169,95,0.1),0_2.5rem_7rem_rgba(0,0,0,0.75)] [transform:rotateY(-5deg)] rtl:[transform:rotateY(5deg)] max-[1099px]:bottom-[17%] max-[1099px]:end-[-12%] max-[1099px]:start-0 max-[1099px]:top-[9%] max-[820px]:bottom-[10%] max-[820px]:end-[7%] max-[820px]:top-0 max-[600px]:inset-x-0 max-[600px]:bottom-[12%] max-[600px]:top-0 max-[600px]:rounded-e-[0.85rem] max-[600px]:rounded-s-[4rem] max-[600px]:p-[0.7rem]">
              <div className="relative h-full overflow-hidden rounded-e-[0.7rem] rounded-s-[5rem] border border-[rgba(164,188,218,0.16)] bg-[radial-gradient(circle_at_72%_44%,rgba(128,102,178,0.16),transparent_23%),linear-gradient(180deg,#080b12_0%,#10131d_43%,#1a1420_64%,#050506_100%)] shadow-[inset_0_0_4rem_#020204] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(108deg,rgba(255,255,255,0.08),transparent_16%_70%,rgba(255,255,255,0.025))] after:mix-blend-screen after:content-[''] max-[600px]:rounded-e-[0.45rem] max-[600px]:rounded-s-[3.4rem]">
                <div className="absolute inset-x-0 bottom-[10%] h-[42%] bg-[linear-gradient(90deg,transparent_2%,#171a22_2%_8%,transparent_8%_14%,#20242f_14%_23%,transparent_23%_31%,#151721_31%_43%,transparent_43%_52%,#292531_52%_64%,transparent_64%_72%,#232732_72%_84%,transparent_84%),linear-gradient(180deg,transparent,rgba(5,5,6,0.94))] opacity-70 [clip-path:polygon(0_100%,0_57%,8%_57%,8%_24%,15%_24%,15%_71%,29%_71%,29%_17%,37%_17%,37%_75%,55%_75%,55%_31%,66%_31%,66%_70%,76%_70%,76%_27%,86%_27%,86%_67%,100%_67%,100%_100%)]" />
                <div className="absolute end-[-5%] start-[18%] top-[49%] h-px skew-x-[-22deg] bg-[linear-gradient(90deg,transparent,rgba(241,213,154,0.8),transparent_34%,rgba(128,102,178,0.7),transparent_72%)] shadow-[0_0_1.2rem_var(--gold)]" />
                <div className="absolute end-[-5%] start-[34%] top-[56%] h-px skew-x-[-22deg] bg-[linear-gradient(90deg,transparent,rgba(241,213,154,0.8),transparent_34%,rgba(128,102,178,0.7),transparent_72%)] opacity-50" />
                <div className="absolute inset-x-0 bottom-[27%] h-px bg-[linear-gradient(90deg,transparent,rgba(189,117,64,0.6),var(--gold),transparent)]" />
              </div>
              <span className="absolute bottom-[1.8rem] end-[2.2rem] rounded-[0.35rem] border border-border bg-[rgba(5,5,6,0.76)] px-3 py-[0.55rem] text-[0.6rem] font-bold uppercase tracking-[0.16em] text-textMuted rtl:tracking-normal max-[600px]:bottom-[1.1rem] max-[600px]:end-[1.15rem]">
                {messages.hero.nightService}
              </span>
            </div>
            <div className="absolute bottom-[5%] end-[-4%] start-[31%] grid grid-cols-2 gap-3 rounded-2xl border border-border bg-[rgba(10,10,14,0.8)] p-[0.8rem] shadow-[0_1.8rem_5rem_rgba(0,0,0,0.55)] backdrop-blur-xl max-[820px]:end-0 max-[820px]:start-[38%] max-[600px]:bottom-0 max-[600px]:end-[0.35rem] max-[600px]:start-[17%] max-[600px]:p-2">
              <div className="flex min-h-[4.8rem] items-center gap-3 rounded-[0.65rem] border border-[rgba(244,229,188,0.08)] p-3 text-[0.72rem] text-textSecondary max-[600px]:min-h-[3.6rem] max-[600px]:p-2 max-[600px]:text-[0.62rem]">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full border border-borderActive text-gold max-[600px]:h-8 max-[600px]:w-8 [&>svg]:w-4">
                  <Code2 />
                </span>
                <span>
                  <small className="mb-[0.22rem] block text-[0.56rem] uppercase tracking-[0.13em] text-textMuted rtl:tracking-normal">
                    {messages.hero.destinationLabel}
                  </small>
                  {messages.hero.destinationValue}
                </span>
              </div>
              <div className="flex min-h-[4.8rem] items-center gap-3 rounded-[0.65rem] border border-[rgba(244,229,188,0.08)] p-3 text-[0.72rem] text-textSecondary max-[600px]:min-h-[3.6rem] max-[600px]:p-2 max-[600px]:text-[0.62rem]">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full border border-[rgba(128,102,178,0.46)] text-[#aa8ee0] max-[600px]:h-8 max-[600px]:w-8 [&>svg]:w-4">
                  <Radio />
                </span>
                <span>
                  <small className="mb-[0.22rem] block text-[0.56rem] uppercase tracking-[0.13em] text-textMuted rtl:tracking-normal">
                    {messages.hero.signalLabel}
                  </small>
                  {messages.hero.signalValue}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-textMuted rtl:tracking-normal max-[820px]:hidden"
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-[linear-gradient(90deg,var(--gold),transparent)] rtl:bg-[linear-gradient(270deg,var(--gold),transparent)]" />
          {messages.hero.scrollCue}
        </div>
      </div>
    </section>
  );
}
