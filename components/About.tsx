import Image from "next/image";
import {
  ArrowUpRight,
  Compass,
  Download,
  Layers3,
  Sparkles,
} from "lucide-react";
import { PROFILE, SKILLS } from "@/lib/portfolio-data";

const strengths = [
  {
    icon: Layers3,
    title: "Product-minded frontend",
    description:
      "Interface architecture that balances clarity, maintainability, and real product constraints.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted workflows",
    description:
      "Thoughtful product experiences around LLMs, transcription, automation, and streaming data.",
  },
  {
    icon: Compass,
    title: "Systems curiosity",
    description:
      "A habit of understanding the runtime, tooling, and data flow underneath the visible interface.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="journey-section about-section"
      aria-labelledby="about-title"
    >
      <div className="cinematic-shell">
        <header className="section-heading">
          <div>
            <p className="station-kicker">
              <span>Station 04</span>
              Passenger profile
            </p>
            <h2 id="about-title" className="section-title">
              About the <em>engineer</em>
            </h2>
          </div>
          <p>{PROFILE.direction}</p>
        </header>

        <div className="about-cabin">
          <div className="portrait-frame">
            <div className="portrait-light" aria-hidden="true" />
            <Image
              src="/avatar.webp"
              alt="Amir Hossein Salighedar"
              fill
              sizes="(max-width: 767px) 88vw, 420px"
              className="portrait-image"
            />
            <span className="portrait-ticket">Passenger · AS 01</span>
          </div>

          <div className="about-copy">
            <p className="eyebrow">Amir Hossein Salighedar</p>
            <h3>Building calm interfaces for complex systems.</h3>
            <p>{PROFILE.biography}</p>
            <p>
              I enjoy learning systems deeply, sharing what I learn, and moving
              comfortably between interface details and the architecture that
              supports them.
            </p>

            <div className="strength-list">
              {strengths.map((strength) => {
                const Icon = strength.icon;
                return (
                  <article key={strength.title}>
                    <Icon aria-hidden="true" />
                    <div>
                      <h4>{strength.title}</h4>
                      <p>{strength.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <a
              className="text-link resume-link"
              href={PROFILE.resumeHref}
              download
            >
              <Download aria-hidden="true" />
              Download résumé
            </a>
          </div>
        </div>

        <div id="skills" className="skills-manifest">
          <div className="skills-heading">
            <p className="eyebrow">Technical manifest</p>
            <p>
              Selected tools I use to turn product ideas into reliable systems.
            </p>
          </div>
          <ul>
            {SKILLS.map((skill) => (
              <li key={skill.name}>
                {skill.href ? (
                  <a
                    href={skill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">{skill.mark}</span>
                    {skill.name}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <div>
                    <span aria-hidden="true">{skill.mark}</span>
                    {skill.name}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
