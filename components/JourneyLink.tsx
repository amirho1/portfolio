"use client";

import type { MouseEvent, ReactNode } from "react";
import type { StationId } from "@/i18n/types";

export const journeyNavigateEvent = "obsidian-express:navigate";

interface JourneyLinkProps {
  target: StationId;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
}

/**
 * Render a link that asks the journey navigation to scroll to a station.
 * @param props - Journey link properties.
 * @returns The journey link.
 */
export function JourneyLink({
  target,
  className,
  children,
  onNavigate,
}: JourneyLinkProps) {
  /** Handle a station-link click without reloading the page. */
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    onNavigate?.();
    window.dispatchEvent(
      new CustomEvent<{ target: StationId }>(journeyNavigateEvent, {
        detail: { target },
      }),
    );
  }

  return (
    <a href={`#${target}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
