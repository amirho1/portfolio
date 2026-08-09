import Image from "next/image";
import {
  ArrowUpRight,
  Compass,
  Download,
  Layers3,
  Sparkles,
} from "lucide-react";
import type { PortfolioMessages, StrengthMessage } from "@/i18n/types";
import { cn } from "@/lib/utils";
import {
  directionalIcon,
  eyebrow,
  portfolioShell,
  sectionBase,
  sectionHeader,
  sectionIntro,
  sectionTitle,
  stationKicker,
} from "./portfolioStyles";

interface AboutProps {
  messages: PortfolioMessages;
}

const strengthIcons = {
  product: Layers3,
  ai: Sparkles,
  systems: Compass,
} satisfies Record<StrengthMessage["id"], typeof Layers3>;

/**
 * Render the localized biography, strengths, and technical skill manifest.
 * @param props - Localized about-section properties.
 * @returns The portfolio about section.
 */
export default function About({ messages }: AboutProps) {
  return (
    <section
      id="about"
      className={cn(
        sectionBase,
        "bg-[radial-gradient(circle_at_19%_52%,rgba(214,169,95,0.08),transparent_23%),linear-gradient(180deg,#08080b,#050506)] py-[clamp(7rem,12vw,12rem)]",
      )}
      aria-labelledby="about-title"
    >
      <div className={portfolioShell}>
        <header className={sectionHeader}>
          <div>
            <p className={stationKicker}>
              <span>{messages.aboutSection.station}</span>
              {messages.aboutSection.kicker}
            </p>
            <h2 id="about-title" className={sectionTitle}>
              {messages.aboutSection.title}{" "}
              <em>{messages.aboutSection.titleEmphasis}</em>
            </h2>
          </div>
          <p className={sectionIntro}>{messages.profile.direction}</p>
        </header>

        <div className="grid grid-cols-[minmax(19rem,0.72fr)_minmax(0,1.28fr)] items-center gap-[clamp(3rem,7vw,8rem)] max-[820px]:grid-cols-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-e-2xl rounded-ss-[8rem] border border-borderActive bg-surface shadow-[0_2rem_6rem_rgba(0,0,0,0.58)] after:pointer-events-none after:absolute after:inset-0 after:z-[2] after:bg-[linear-gradient(180deg,rgba(5,5,6,0.1),transparent_42%,rgba(5,5,6,0.72)),linear-gradient(90deg,rgba(214,169,95,0.08),transparent_34%)] after:content-[''] max-[820px]:w-[min(29rem,82vw)] max-[600px]:w-full max-[600px]:max-w-[27rem] max-[600px]:rounded-e-[0.8rem] max-[600px]:rounded-ss-[6rem]">
            <div
              className="pointer-events-none absolute inset-0 z-[3] rounded-[inherit] shadow-[inset_1.1rem_0_2.7rem_rgba(214,169,95,0.1)] rtl:shadow-[inset_-1.1rem_0_2.7rem_rgba(214,169,95,0.1)]"
              aria-hidden="true"
            />
            <Image
              src="/avatar.webp"
              alt={messages.profile.avatarAlt}
              fill
              sizes="(max-width: 767px) 88vw, 420px"
              className="object-cover saturate-[0.62] contrast-[1.05] brightness-[0.76]"
            />
            <span className="absolute bottom-5 end-5 z-[4] rounded-[0.35rem] border border-border bg-[rgba(5,5,6,0.72)] px-[0.72rem] py-[0.58rem] text-[0.6rem] font-bold uppercase tracking-[0.12em] text-textSecondary rtl:tracking-normal">
              {messages.aboutSection.portraitTicket}
            </span>
          </div>

          <div className="max-[820px]:max-w-[46rem]">
            <p className={eyebrow}>{messages.profile.name}</p>
            <h3 className="my-4 mb-[1.4rem] max-w-[12ch] font-display text-[clamp(3.2rem,5.8vw,6.2rem)] font-medium leading-[0.9] tracking-[-0.055em] rtl:font-persian rtl:font-bold rtl:leading-[1.15] rtl:tracking-normal max-[600px]:text-[clamp(3.15rem,15vw,4.8rem)]">
              {messages.aboutSection.headline}
            </h3>
            <p className="mt-[0.8rem] max-w-[44rem] text-[0.98rem] leading-[1.78] text-textSecondary">
              {messages.profile.biography}
            </p>
            <p className="mt-[0.8rem] max-w-[44rem] text-[0.98rem] leading-[1.78] text-textSecondary">
              {messages.profile.additionalBiography}
            </p>

            <div className="mt-8 grid gap-4">
              {messages.aboutSection.strengths.map(
                function renderStrength(strength) {
                  const Icon = strengthIcons[strength.id];
                  return (
                    <article
                      className="grid grid-cols-[2.2rem_1fr] gap-[0.85rem] border-t border-border pt-4"
                      key={strength.id}
                    >
                      <Icon
                        className="w-[1.2rem] text-gold"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="text-[0.86rem] font-semibold">
                          {strength.title}
                        </h4>
                        <p className="mt-1 text-[0.77rem] leading-[1.55] text-textMuted">
                          {strength.description}
                        </p>
                      </div>
                    </article>
                  );
                },
              )}
            </div>

            <a
              className="mt-8 inline-flex items-center gap-[0.45rem] text-xs font-bold text-goldLight hover:text-[#fff4d8] [&>svg]:w-[0.95rem]"
              href={messages.profile.resumeHref}
              download
            >
              <Download aria-hidden="true" />
              {messages.aboutSection.resumeLabel}
            </a>
          </div>
        </div>

        <div
          id="skills"
          className="mt-[clamp(6rem,10vw,10rem)] grid scroll-mt-8 grid-cols-[minmax(13rem,0.6fr)_minmax(0,1.4fr)] gap-16 border-t border-border pt-8 max-[820px]:grid-cols-1 max-[820px]:gap-8"
        >
          <div>
            <p className={eyebrow}>{messages.aboutSection.skillsEyebrow}</p>
            <p className="mt-[0.8rem] max-w-[19rem] text-[0.78rem] leading-[1.6] text-textMuted">
              {messages.aboutSection.skillsDescription}
            </p>
          </div>
          <ul className="grid list-none grid-cols-2 border-t border-border p-0 [&>li:nth-child(odd)]:border-e [&>li]:min-w-0 [&>li]:border-b [&>li]:border-border max-[600px]:grid-cols-1 max-[600px]:[&>li:nth-child(odd)]:border-e-0">
            {messages.skills.map(function renderSkill(skill) {
              const content = (
                <>
                  <span
                    className="grid h-[2.3rem] w-[2.3rem] place-items-center rounded-full border border-border text-[0.57rem] font-extrabold tracking-[-0.02em] text-gold"
                    aria-hidden="true"
                  >
                    {skill.mark}
                  </span>
                  {skill.name}
                  {skill.href ? (
                    <ArrowUpRight
                      className={cn(
                        directionalIcon,
                        "ms-auto w-[0.8rem] text-textMuted",
                      )}
                      aria-hidden="true"
                    />
                  ) : null}
                </>
              );
              return (
                <li key={skill.name}>
                  {skill.href ? (
                    <a
                      className="flex min-h-[4.6rem] items-center gap-[0.85rem] px-4 py-[0.8rem] text-[0.8rem] text-textSecondary transition-colors hover:bg-[rgba(214,169,95,0.05)] hover:text-foreground"
                      href={skill.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex min-h-[4.6rem] items-center gap-[0.85rem] px-4 py-[0.8rem] text-[0.8rem] text-textSecondary">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
