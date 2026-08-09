"use client";

import { useEffect, useState } from "react";
import { formatMessage } from "@/i18n/formatMessage";
import type { PortfolioMessages } from "@/i18n/types";
import { cn } from "@/lib/utils";
import {
  detailList,
  portfolioShell,
  sectionBase,
  sectionHeader,
  sectionIntro,
  sectionTitle,
  stationKicker,
  technologyList,
} from "./portfolioStyles";

interface ExperiencesProps {
  messages: PortfolioMessages;
}

/**
 * Render the localized career timeline with viewport entry transitions.
 * @param props - Localized experience-section properties.
 * @returns The career experience section.
 */
export default function Experiences({ messages }: ExperiencesProps) {
  const [visibleEntries, setVisibleEntries] = useState<string[]>([]);

  useEffect(function observeExperienceEntries() {
    const entries = Array.from(
      document.querySelectorAll<HTMLElement>("[data-experience-entry]"),
    );
    const observer = new IntersectionObserver(
      function activateVisibleEntries(observedEntries) {
        observedEntries.forEach(function activateEntry(entry) {
          if (!entry.isIntersecting) return;
          const company = (entry.target as HTMLElement).dataset.experienceEntry;
          if (company) {
            setVisibleEntries(function addVisibleEntry(currentEntries) {
              return currentEntries.includes(company)
                ? currentEntries
                : [...currentEntries, company];
            });
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -12%" },
    );
    entries.forEach(function observeEntry(entry) {
      observer.observe(entry);
    });
    return function stopObservingEntries() {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="experience"
      className={cn(
        sectionBase,
        "bg-[radial-gradient(circle_at_78%_32%,rgba(128,102,178,0.1),transparent_29%),var(--background)] py-[clamp(7rem,12vw,12rem)]",
      )}
      aria-labelledby="experience-title"
    >
      <div className={portfolioShell}>
        <header className={sectionHeader}>
          <div>
            <p className={stationKicker}>
              <span>{messages.experienceSection.station}</span>
              {messages.experienceSection.kicker}
            </p>
            <h2 id="experience-title" className={sectionTitle}>
              {messages.experienceSection.title}{" "}
              <em>{messages.experienceSection.titleEmphasis}</em>
            </h2>
          </div>
          <p className={sectionIntro}>
            {messages.experienceSection.description}
          </p>
        </header>

        <ol className="relative mx-auto max-w-[67rem] list-none p-0 before:absolute before:bottom-[1.8rem] before:start-24 before:top-[1.8rem] before:w-px before:bg-[linear-gradient(var(--gold),rgba(128,102,178,0.36),transparent)] before:content-[''] max-[600px]:before:start-[1.05rem]">
          {messages.experiences.map(
            function renderExperience(experience, index) {
              const isVisible = visibleEntries.includes(experience.company);
              return (
                <li
                  key={experience.company}
                  className={cn(
                    "grid min-h-[15rem] grid-cols-[12rem_minmax(0,1fr)] translate-y-[1.1rem] opacity-[0.46] transition-[opacity,transform] duration-500 motion-reduce:translate-y-0 motion-reduce:opacity-100 max-[600px]:min-h-[13rem] max-[600px]:grid-cols-[3rem_minmax(0,1fr)]",
                    isVisible && "translate-y-0 opacity-100",
                  )}
                  data-experience-entry={experience.company}
                >
                  <div
                    className={cn(
                      "relative flex pt-[1.6rem] before:absolute before:start-[5.58rem] before:top-[1.75rem] before:z-[1] before:h-[0.85rem] before:w-[0.85rem] before:rounded-full before:border before:border-violet before:bg-background before:shadow-[0_0_0_0.4rem_var(--background)] before:transition-[border-color,box-shadow,background-color] before:duration-300 before:content-[''] max-[600px]:before:start-[0.63rem]",
                      isVisible &&
                        "before:border-goldLight before:bg-gold before:shadow-[0_0_0_0.4rem_var(--background),0_0_1.3rem_rgba(214,169,95,0.55)]",
                    )}
                    aria-hidden="true"
                  >
                    <span className="font-display text-[1.4rem] text-textMuted rtl:font-persian max-[600px]:hidden">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <article className="border-t border-border pb-16 ps-[2.6rem] pt-[1.55rem] max-[600px]:pb-[3.2rem] max-[600px]:ps-4 max-[600px]:pt-[1.45rem]">
                    <div className="flex items-center justify-between gap-8 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-[0.45rem]">
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold rtl:tracking-normal">
                        {experience.period}
                      </p>
                      <span className="text-end text-[0.65rem] font-bold uppercase tracking-[0.14em] text-textMuted rtl:tracking-normal max-[600px]:text-start">
                        {experience.company}
                      </span>
                    </div>
                    <h3 className="mt-[1.2rem] font-display text-[clamp(2.3rem,4vw,4.2rem)] font-medium leading-[0.96] tracking-[-0.035em] rtl:font-persian rtl:font-bold rtl:leading-[1.2] rtl:tracking-normal">
                      {experience.role}
                    </h3>
                    <ul
                      className={cn(detailList, "max-w-[47rem] text-[0.9rem]")}
                    >
                      {experience.highlights.map(
                        function renderHighlight(highlight) {
                          return <li key={highlight}>{highlight}</li>;
                        },
                      )}
                    </ul>
                    {experience.technologies ? (
                      <ul
                        className={technologyList}
                        aria-label={formatMessage(
                          messages.experienceSection.technologiesLabel,
                          { company: experience.company },
                        )}
                      >
                        {experience.technologies.map(
                          function renderTechnology(technology) {
                            return <li key={technology}>{technology}</li>;
                          },
                        )}
                      </ul>
                    ) : null}
                  </article>
                </li>
              );
            },
          )}
        </ol>
      </div>
    </section>
  );
}
