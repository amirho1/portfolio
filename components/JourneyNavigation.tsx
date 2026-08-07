"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BriefcaseBusiness, House, Mail, Route, UserRound } from "lucide-react";
import { STATIONS, type Station, type StationId } from "@/lib/portfolio-data";
import { JOURNEY_NAVIGATE_EVENT } from "./JourneyLink";

const stationIcons = {
  home: House,
  projects: BriefcaseBusiness,
  experience: Route,
  about: UserRound,
  contact: Mail,
} satisfies Record<StationId, typeof House>;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function JourneyNavigation() {
  const [activeStation, setActiveStation] = useState<StationId>("home");
  const [destination, setDestination] = useState<Station | null>(null);
  const transitionTimers = useRef<number[]>([]);

  const clearTransitionTimers = useCallback(() => {
    transitionTimers.current.forEach(window.clearTimeout);
    transitionTimers.current = [];
  }, []);

  const navigateToStation = useCallback(
    (targetId: StationId) => {
      const target = document.getElementById(targetId);
      const station = STATIONS.find((item) => item.id === targetId);

      if (!target || !station) return;

      clearTransitionTimers();

      const commitNavigation = (behavior: ScrollBehavior) => {
        window.history.pushState(null, "", `#${targetId}`);
        target.scrollIntoView({ behavior, block: "start" });
        setActiveStation(targetId);
      };

      if (prefersReducedMotion()) {
        setDestination(null);
        commitNavigation("auto");
        return;
      }

      setDestination(station);
      transitionTimers.current = [
        window.setTimeout(() => commitNavigation("smooth"), 120),
        window.setTimeout(() => setDestination(null), 650),
      ];
    },
    [clearTransitionTimers],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0];

        if (
          visibleEntry &&
          STATIONS.some((station) => station.id === visibleEntry.target.id)
        ) {
          setActiveStation(visibleEntry.target.id as StationId);
        }
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5, 0.75] },
    );

    STATIONS.forEach((station) => {
      const section = document.getElementById(station.id);
      if (section) observer.observe(section);
    });

    const requestedHash = window.location.hash.slice(1) as StationId;
    if (STATIONS.some((station) => station.id === requestedHash)) {
      setActiveStation(requestedHash);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleJourneyRequest(event: Event) {
      const request = event as CustomEvent<{ target: StationId }>;
      navigateToStation(request.detail.target);
    }

    window.addEventListener(JOURNEY_NAVIGATE_EVENT, handleJourneyRequest);
    return () => {
      window.removeEventListener(JOURNEY_NAVIGATE_EVENT, handleJourneyRequest);
      clearTransitionTimers();
    };
  }, [clearTransitionTimers, navigateToStation]);

  return (
    <>
      <nav className="station-rail" aria-label="Portfolio journey">
        <div className="station-track" aria-hidden="true" />
        {STATIONS.map((station) => {
          const Icon = stationIcons[station.id];
          const isActive = station.id === activeStation;

          return (
            <a
              key={station.id}
              href={`#${station.id}`}
              className="station-link"
              data-active={isActive || undefined}
              aria-current={isActive ? "location" : undefined}
              aria-label={`${station.index}. ${station.label}`}
              onClick={(event) => {
                event.preventDefault();
                navigateToStation(station.id);
              }}
            >
              <span className="station-marker" aria-hidden="true">
                <Icon />
              </span>
              <span className="station-copy">
                <span className="station-index">{station.index}</span>
                <span className="station-label station-label-desktop">
                  {station.label}
                </span>
                <span className="station-label station-label-mobile">
                  {station.shortLabel}
                </span>
              </span>
            </a>
          );
        })}
      </nav>

      <div
        className="travel-transition"
        data-visible={Boolean(destination) || undefined}
        aria-hidden={!destination}
      >
        <div className="travel-streaks" aria-hidden="true" />
        <div className="travel-destination" role="status" aria-live="polite">
          <span>Now arriving</span>
          <strong>{destination?.label}</strong>
        </div>
      </div>
    </>
  );
}
