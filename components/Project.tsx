import Image from "next/image";
import { ArrowUpRight, AudioLines, LockKeyhole } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";

function SpeechToTextVisual() {
  const waveHeights = [
    32, 58, 84, 46, 70, 98, 62, 38, 76, 54, 88, 42, 68, 30, 52, 80, 44, 64,
  ];

  return (
    <div
      className="stt-visual"
      role="img"
      aria-label="Speech waveform becoming structured text"
    >
      <div className="stt-console-topline">
        <span>
          <AudioLines /> Live transcription
        </span>
        <span>00:24:18</span>
      </div>
      <div className="stt-wave" aria-hidden="true">
        {waveHeights.map((height, index) => (
          <span key={`${height}-${index}`} style={{ height: `${height}%` }} />
        ))}
      </div>
      <div className="stt-output" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="stt-status" aria-hidden="true">
        Transcript → Summary → Structured output
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <section
      id="projects"
      className="journey-section projects-section"
      aria-labelledby="projects-title"
    >
      <div className="cinematic-shell">
        <header className="section-heading">
          <div>
            <p className="station-kicker">
              <span>Station 02</span>
              Journey records
            </p>
            <h2 id="projects-title" className="section-title">
              Selected <em>work</em>
            </h2>
          </div>
          <p>
            Product platforms, interactive systems, and developer tools—each
            built to make a difficult idea easier to use.
          </p>
        </header>

        <ol className="project-list">
          {PROJECTS.map((project, index) => (
            <li
              key={project.id}
              className="project-record"
              data-reverse={index % 2 === 1 || undefined}
            >
              <figure className="project-visual">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 52vw, 640px"
                    className="project-image"
                    priority={index === 0}
                  />
                ) : (
                  <SpeechToTextVisual />
                )}
                <div className="project-image-shade" aria-hidden="true" />
                <figcaption>
                  <span>{project.index}</span>
                  {project.status}
                </figcaption>
              </figure>

              <article className="project-copy">
                <p className="eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <div className="project-role">
                  <span>Role</span>
                  <strong>{project.role}</strong>
                </div>

                <ul className="project-responsibilities">
                  {project.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>

                <ul
                  className="technology-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                {project.links.length > 0 ? (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="private-project-note">
                    <LockKeyhole aria-hidden="true" />
                    {project.status} · no public link
                  </p>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
