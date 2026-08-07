"use client";

import { useEffect, useState } from "react";
import { EXPERIENCES } from "@/lib/portfolio-data";

export default function Experiences() {
  const [visibleEntries, setVisibleEntries] = useState<string[]>([]);

  useEffect(() => {
    const entries = Array.from(
      document.querySelectorAll<HTMLElement>("[data-experience-entry]"),
    );
    const observer = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const company = (entry.target as HTMLElement).dataset.experienceEntry;
          if (company) {
            setVisibleEntries((current) =>
              current.includes(company) ? current : [...current, company],
            );
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -12%" },
    );

    entries.forEach((entry) => observer.observe(entry));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="journey-section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="cinematic-shell experience-shell">
        <header className="section-heading experience-heading">
          <div>
            <p className="station-kicker">
              <span>Station 03</span>
              Departure archive
            </p>
            <h2 id="experience-title" className="section-title">
              Career <em>journey</em>
            </h2>
          </div>
          <p>
            A path through customer-facing products, knowledge systems,
            real-time SaaS, and the frontend foundations behind them.
          </p>
        </header>

        <ol className="experience-rail">
          {EXPERIENCES.map((experience, index) => {
            const isVisible = visibleEntries.includes(experience.company);

            return (
              <li
                key={experience.company}
                className="experience-entry"
                data-experience-entry={experience.company}
                data-active={isVisible || undefined}
              >
                <div className="experience-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <article>
                  <div className="experience-meta">
                    <p>{experience.period}</p>
                    <span>{experience.company}</span>
                  </div>
                  <h3>{experience.role}</h3>
                  <ul className="experience-highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {experience.technologies && (
                    <ul
                      className="technology-list"
                      aria-label={`${experience.company} technologies`}
                    >
                      {experience.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
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
