import { ArrowRight, Code2, Radio, Sparkles } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";
import { ConductorTrigger, JourneyLink } from "./JourneyLink";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section journey-section"
      aria-labelledby="hero-title"
    >
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="cinematic-shell hero-shell">
        <Link
          href="/#home"
          className="express-brand"
          aria-label="Amir Hossein Salighedar"
        >
          <span className="express-monogram">AS</span>
          <span className="express-divider" aria-hidden="true" />
          <span className="express-name"> Amir Hossein - Salighedar</span>
        </Link>

        <div className="hero-grid">
          <div className="hero-content">
            <p className="station-kicker">
              <span>Now arriving</span>
              Station 01 · Portfolio
            </p>
            <p className="eyebrow hero-role">{PROFILE.title}</p>
            <h1 id="hero-title" className="display-title">
              Amir Hossein
              <span>Salighedar</span>
            </h1>
            <p className="hero-introduction">{PROFILE.introduction}</p>

            <div className="hero-actions">
              <JourneyLink target="projects" className="button button-gold">
                Explore selected work
                <ArrowRight aria-hidden="true" />
              </JourneyLink>
              <ConductorTrigger className="button button-glass">
                <Sparkles aria-hidden="true" />
                Ask Conductor AI
              </ConductorTrigger>
            </div>

            <dl className="hero-manifest" aria-label="Portfolio highlights">
              <div>
                <dt>Journey</dt>
                <dd>Building web products since 2020</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Frontend craft · product systems</dd>
              </div>
              <div>
                <dt>Current line</dt>
                <dd>AI workflows · real-time interfaces</dd>
              </div>
            </dl>
          </div>

          <div className="train-scene" aria-hidden="true">
            <div className="train-ceiling-lines" />
            <div className="train-window-frame">
              <div className="train-window">
                <div className="passing-city" />
                <div className="passing-lights passing-lights-one" />
                <div className="passing-lights passing-lights-two" />
                <div className="horizon-line" />
              </div>
              <span className="window-badge">Night service · 01</span>
            </div>
            <div className="carriage-console">
              <div>
                <span className="console-icon">
                  <Code2 />
                </span>
                <span>
                  <small>Destination</small>
                  Selected work
                </span>
              </div>
              <div>
                <span className="console-icon console-icon-violet">
                  <Radio />
                </span>
                <span>
                  <small>Signal</small>
                  Systems online
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span />
          Journey begins below
        </div>
      </div>
    </section>
  );
}
