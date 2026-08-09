import { formatMessage } from "@/i18n/formatMessage";
import type { PortfolioMessages, SocialIcon } from "@/i18n/types";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

interface SocialsProps {
  messages: PortfolioMessages;
}

/**
 * Render the icon for a social network.
 * @param props - Social icon properties.
 * @returns The matching social icon or no icon.
 */
function SocialMark({ icon }: { icon: SocialIcon }) {
  if (icon === "github") return <Github aria-hidden="true" />;
  if (icon === "linkedin") return <Linkedin aria-hidden="true" />;
  if (icon === "instagram") return <Instagram aria-hidden="true" />;
  return null;
}

/**
 * Render localized links to professional and social profiles.
 * @param props - Localized social-list properties.
 * @returns The social profile link list.
 */
export default function Socials({ messages }: SocialsProps) {
  return (
    <ul
      className="mt-[clamp(5rem,9vw,8rem)] flex list-none flex-wrap gap-[0.6rem] border-y border-border px-0 py-[1.15rem] max-[600px]:grid max-[600px]:grid-cols-2"
      dir="ltr"
      aria-label={messages.contactSection.socialProfilesLabel}
    >
      {messages.socials.map(function renderSocialLink(social) {
        return (
          <li key={social.href}>
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={formatMessage(
                messages.contactSection.socialProfileLabel,
                { network: social.name },
              )}
              className="flex min-h-[2.9rem] items-center gap-[0.55rem] rounded-lg px-[0.85rem] py-[0.55rem] text-center text-[0.7rem] text-textSecondary transition-colors hover:bg-surface hover:text-goldLight max-[600px]:justify-center [&>svg]:h-[0.95rem] [&>svg]:w-[0.95rem]"
            >
              <SocialMark icon={social.icon} />
              <span>{social.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
