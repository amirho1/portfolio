import { PROFILE } from "@/lib/portfolio-data";
import { ArrowRight, Download, Mail } from "lucide-react";
import CurrentYear from "./CurrentYear";
import Socials from "./Socials";

export default function Contact() {
  return (
    <section
      id="contact"
      className="journey-section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-light" aria-hidden="true" />
      <div className="cinematic-shell">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="station-kicker">
              <span>Final station</span>
              Carriage 05 · Contact
            </p>
            <h2 id="contact-title" className="section-title">
              Let&apos;s build the <em>next destination.</em>
            </h2>
            <p>
              I&apos;m always open to discussing thoughtful products, ambitious interfaces, and
              interesting engineering problems.
            </p>

            <div className="contact-actions">
              <a className="button button-gold" href={`mailto:${PROFILE.email}`}>
                <Mail aria-hidden="true" />
                Start a conversation
              </a>
              <a className="button button-glass" href={PROFILE.resumeHref} download>
                <Download aria-hidden="true" />
                Résumé
              </a>
            </div>
          </div>

          <aside className="contact-ticket" aria-label="Contact details">
            <div className="ticket-topline">
              <span>Amir Hossein Salighedar</span>
              <span>AS · 05</span>
            </div>
            <div className="ticket-route">
              <span>From</span>
              <strong>Great ideas</strong>
              <ArrowRight aria-hidden="true" />
              <span>To</span>
              <strong>Working software</strong>
            </div>
            <a className="ticket-email" href={`mailto:${PROFILE.email}`}>
              <small>Direct line</small>
              {PROFILE.email}
            </a>
            {/* <ConductorTrigger className="ticket-conductor">
              <Sparkles aria-hidden="true" />
              Ask Conductor AI first
            </ConductorTrigger> */}
          </aside>
        </div>

        <Socials />

        <footer className="site-footer">
          <p>
            © <CurrentYear /> {PROFILE.name}
          </p>
          <p>Designed as a quiet journey through product engineering.</p>
        </footer>
      </div>
    </section>
  );
}
