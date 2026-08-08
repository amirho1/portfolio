import { Github, Instagram, Linkedin } from "lucide-react";
import { SOCIAL_LINKS, type SocialIcon } from "@/lib/portfolio-data";
import Link from "next/link";

function SocialMark({ icon }: { icon: SocialIcon }) {
  if (icon === "github") return <Github aria-hidden="true" />;
  if (icon === "linkedin") return <Linkedin aria-hidden="true" />;
  if (icon === "instagram") return <Instagram aria-hidden="true" />;
  return null;
}

export default function Socials() {
  return (
    <ul className="social-links" aria-label="Social profiles">
      {SOCIAL_LINKS.map(link => (
        <li key={link.href}>
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Amir on ${link.name}`}
            className="text-center"
          >
            {link.icon && <SocialMark icon={link.icon} />}
            <span className="text-center">{link.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
