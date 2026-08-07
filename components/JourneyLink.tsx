"use client";

import type { MouseEvent, ReactNode } from "react";
import type { StationId } from "@/lib/portfolio-data";

export const JOURNEY_NAVIGATE_EVENT = "obsidian-express:navigate";
export const CONDUCTOR_OPEN_EVENT = "obsidian-express:open-conductor";

interface JourneyLinkProps {
  target: StationId;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
}

export function JourneyLink({
  target,
  className,
  children,
  onNavigate,
}: JourneyLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    onNavigate?.();
    window.dispatchEvent(
      new CustomEvent<{ target: StationId }>(JOURNEY_NAVIGATE_EVENT, {
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

interface ConductorTriggerProps {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export function ConductorTrigger({
  className,
  children,
  ariaLabel,
}: ConductorTriggerProps) {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={() => window.dispatchEvent(new Event(CONDUCTOR_OPEN_EVENT))}
    >
      {children}
    </button>
  );
}
