import Image from "next/image";
import { ArrowUpRight, AudioLines, LockKeyhole } from "lucide-react";
import { formatMessage } from "@/i18n/formatMessage";
import type { PortfolioMessages } from "@/i18n/types";
import { cn } from "@/lib/utils";
import {
  detailList,
  directionalIcon,
  eyebrow,
  portfolioShell,
  sectionBase,
  sectionHeader,
  sectionIntro,
  sectionTitle,
  stationKicker,
  technologyList,
} from "./portfolioStyles";

interface ProjectProps {
  messages: PortfolioMessages;
}

/**
 * Render the decorative speech-to-text project visualization.
 * @param props - Localized visualization properties.
 * @returns The speech-to-text visualization.
 */
function SpeechToTextVisual({
  messages,
}: {
  messages: PortfolioMessages["projectsSection"];
}) {
  const waveHeights = [
    32, 58, 84, 46, 70, 98, 62, 38, 76, 54, 88, 42, 68, 30, 52, 80, 44, 64,
  ];

  return (
    <div
      className="absolute inset-0 z-[1] flex flex-col bg-[linear-gradient(135deg,rgba(128,102,178,0.1),transparent_45%),#09090d] p-8 max-[600px]:p-[1.2rem]"
      role="img"
      aria-label={messages.speechVisualLabel}
    >
      <div className="flex items-center justify-between text-[0.62rem] font-bold uppercase tracking-[0.1em] text-textMuted rtl:tracking-normal">
        <span className="flex items-center gap-2 text-[#a98ddd]">
          <AudioLines className="w-[0.95rem]" aria-hidden="true" />
          {messages.liveTranscription}
        </span>
        <span>{messages.speechTimestamp}</span>
      </div>
      <div
        className="mt-4 flex h-[46%] items-center justify-center gap-[0.42rem] max-[600px]:gap-[0.28rem]"
        aria-hidden="true"
      >
        {waveHeights.map(function renderWave(height, index) {
          return (
            <span
              className="w-[min(0.65rem,2.7%)] rounded-full bg-[linear-gradient(180deg,var(--violet),var(--gold))] shadow-[0_0_1.1rem_rgba(128,102,178,0.22)]"
              key={`${height}-${index}`}
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>
      <div
        className="grid gap-[0.55rem] rounded-[0.65rem] border border-border bg-[rgba(17,17,23,0.65)] p-4 [&>span:nth-child(2)]:w-[86%] [&>span:nth-child(3)]:w-[62%] [&>span]:h-[0.32rem] [&>span]:rounded-full [&>span]:bg-[linear-gradient(90deg,rgba(245,240,230,0.28),transparent)] rtl:[&>span]:bg-[linear-gradient(270deg,rgba(245,240,230,0.28),transparent)]"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>
      <div
        className="mt-[1.2rem] text-[0.62rem] font-bold uppercase tracking-[0.1em] text-gold rtl:tracking-normal"
        aria-hidden="true"
      >
        {messages.speechStatus}
      </div>
    </div>
  );
}

/**
 * Render the localized selected-project portfolio section.
 * @param props - Localized project-section properties.
 * @returns The selected-project section.
 */
export default function Project({ messages }: ProjectProps) {
  return (
    <section
      id="projects"
      className={cn(
        sectionBase,
        "bg-[linear-gradient(180deg,rgba(5,5,6,0.18),rgba(11,11,15,0.86)_35%,rgba(5,5,6,0.74)),radial-gradient(circle_at_8%_30%,rgba(214,169,95,0.07),transparent_24%)] py-[clamp(7rem,12vw,12rem)]",
      )}
      aria-labelledby="projects-title"
    >
      <div className={portfolioShell}>
        <header className={sectionHeader}>
          <div>
            <p className={stationKicker}>
              <span>{messages.projectsSection.station}</span>
              {messages.projectsSection.kicker}
            </p>
            <h2 id="projects-title" className={sectionTitle}>
              {messages.projectsSection.title}{" "}
              <em>{messages.projectsSection.titleEmphasis}</em>
            </h2>
          </div>
          <p className={sectionIntro}>{messages.projectsSection.description}</p>
        </header>

        <ol className="grid list-none gap-[clamp(6rem,11vw,10rem)] p-0 max-[600px]:gap-[5.2rem]">
          {messages.projects.map(function renderProject(project, index) {
            const isReversed = index % 2 === 1;
            return (
              <li
                id={`project-${project.id}`}
                key={project.id}
                className="group grid scroll-mt-8 grid-cols-[minmax(0,1.14fr)_minmax(22rem,0.86fr)] items-center gap-[clamp(2.5rem,6vw,7rem)] max-[1099px]:grid-cols-[minmax(0,1.05fr)_minmax(19rem,0.95fr)] max-[1099px]:gap-10 max-[820px]:grid-cols-1 max-[820px]:gap-[2.4rem]"
              >
                <figure
                  className={cn(
                    "relative isolate aspect-[16/10] overflow-hidden rounded-[1.1rem] border border-borderActive bg-backgroundElevated shadow-[0_2.5rem_6rem_rgba(0,0,0,0.5)] before:pointer-events-none before:absolute before:inset-[0.55rem] before:z-[4] before:rounded-xl before:border before:border-[rgba(244,229,188,0.08)] before:content-[''] max-[600px]:aspect-[4/3]",
                    isReversed &&
                      "col-start-2 max-[820px]:col-start-1 max-[820px]:row-auto",
                  )}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 52vw, 640px"
                      className="object-cover saturate-[0.72] brightness-[0.58] contrast-[1.06] transition-[transform,filter] duration-500 group-hover:scale-[1.035] group-hover:saturate-[0.86] group-hover:brightness-[0.68] group-focus-within:scale-[1.035]"
                      priority={index === 0}
                    />
                  ) : (
                    <SpeechToTextVisual messages={messages.projectsSection} />
                  )}
                  <div
                    className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(145deg,rgba(5,5,6,0.08),transparent_45%,rgba(5,5,6,0.86)),linear-gradient(0deg,rgba(5,5,6,0.82),transparent_42%)]"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute bottom-[1.35rem] end-[1.6rem] start-[1.6rem] z-[5] flex items-center justify-between text-[0.64rem] font-bold uppercase tracking-[0.14em] text-textSecondary rtl:tracking-normal max-[600px]:bottom-[0.9rem] max-[600px]:end-4 max-[600px]:start-4">
                    <span className="font-display text-[2.4rem] font-normal tracking-[-0.04em] rtl:font-persian rtl:tracking-normal">
                      {project.index}
                    </span>
                    {project.status}
                  </figcaption>
                </figure>

                <article
                  className={cn(
                    "max-[820px]:max-w-[42rem]",
                    isReversed &&
                      "col-start-1 row-start-1 max-[820px]:row-auto",
                  )}
                >
                  <p className={eyebrow}>{project.eyebrow}</p>
                  <h3 className="mt-[0.9rem] font-display text-[clamp(3rem,5vw,5.3rem)] font-medium leading-[0.92] tracking-[-0.05em] rtl:font-persian rtl:font-bold rtl:leading-[1.15] rtl:tracking-normal max-[600px]:text-[clamp(3rem,15vw,4.3rem)]">
                    {project.title}
                  </h3>
                  <p className="mt-[1.3rem] text-base leading-[1.75] text-textSecondary">
                    {project.summary}
                  </p>
                  <div className="mt-[1.6rem] grid gap-[0.3rem] border-t border-border pt-[1.1rem]">
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-textMuted rtl:tracking-normal">
                      {messages.projectsSection.roleLabel}
                    </span>
                    <strong className="text-[0.88rem] font-semibold">
                      {project.role}
                    </strong>
                  </div>
                  <ul className={detailList}>
                    {project.responsibilities.map(
                      function renderResponsibility(responsibility) {
                        return <li key={responsibility}>{responsibility}</li>;
                      },
                    )}
                  </ul>
                  <ul
                    className={technologyList}
                    aria-label={formatMessage(
                      messages.projectsSection.technologiesLabel,
                      { project: project.title },
                    )}
                  >
                    {project.technologies.map(
                      function renderTechnology(technology) {
                        return <li key={technology}>{technology}</li>;
                      },
                    )}
                  </ul>
                  {project.links.length > 0 ? (
                    <div className="mt-[1.7rem] flex flex-wrap gap-5">
                      {project.links.map(function renderProjectLink(link) {
                        return (
                          <a
                            className="inline-flex items-center gap-[0.45rem] text-xs font-bold text-goldLight hover:text-[#fff4d8] [&>svg]:w-[0.95rem]"
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                            <ArrowUpRight
                              className={directionalIcon}
                              aria-hidden="true"
                            />
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="mt-[1.7rem] inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.04em] text-textMuted rtl:tracking-normal [&>svg]:w-[0.85rem]">
                      <LockKeyhole aria-hidden="true" />
                      {formatMessage(
                        messages.projectsSection.privateLinkLabel,
                        { status: project.status },
                      )}
                    </p>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
