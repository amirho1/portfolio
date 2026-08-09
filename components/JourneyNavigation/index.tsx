"use client";

import RenderStation from "@/components/JourneyNavigation/RenderStation";
import type { PortfolioMessages, StationId, StationMessage } from "@/i18n/types";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { journeyNavigateEvent } from "../JourneyLink";

interface JourneyNavigationProps {
  messages: PortfolioMessages;
}

/** Detect whether the visitor has requested reduced motion. */
function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Render localized fixed navigation for the portfolio journey.
 * @param props - Localized navigation properties.
 * @returns The journey navigation and transition overlay.
 */
export default function JourneyNavigation({ messages }: JourneyNavigationProps) {
  const [activeStation, setActiveStation] = useState<StationId>("home");
  const [destination, setDestination] = useState<StationMessage | null>(null);
  const transitionTimers = useRef<number[]>([]);

  const clearTransitionTimers = useCallback(() => {
    transitionTimers.current.forEach(function clearTimer(timer) {
      window.clearTimeout(timer);
    });
    transitionTimers.current = [];
  }, []);

  const navigateToStation = useCallback(
    (targetId: StationId) => {
      const target = document.getElementById(targetId);
      const station = messages.stations.find(function findStation(item) {
        return item.id === targetId;
      });
      if (!target || !station) return;

      const targetElement = target;
      clearTransitionTimers();

      /** Commit the requested hash and scroll position. */
      function commitNavigation(behavior: ScrollBehavior) {
        window.history.pushState(null, "", `#${targetId}`);
        targetElement.scrollIntoView({ behavior, block: "start" });
        setActiveStation(targetId);
      }

      if (prefersReducedMotion()) {
        setDestination(null);
        commitNavigation("auto");
        return;
      }

      setDestination(station);
      transitionTimers.current = [
        window.setTimeout(function scrollAfterDeparture() {
          commitNavigation("smooth");
        }, 120),
        window.setTimeout(function finishTravelTransition() {
          setDestination(null);
        }, 650),
      ];
    },
    [clearTransitionTimers, messages.stations],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      function selectVisibleStation(entries) {
        const visibleEntry = entries
          .filter(function getVisibleEntry(entry) {
            return entry.isIntersecting;
          })
          .sort(function compareVisibility(first, second) {
            return second.intersectionRatio - first.intersectionRatio;
          })[0];
        if (
          visibleEntry &&
          messages.stations.some(function isKnownStation(station) {
            return station.id === visibleEntry.target.id;
          })
        ) {
          setActiveStation(visibleEntry.target.id as StationId);
        }
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5, 0.75] },
    );
    messages.stations.forEach(function observeStation(station) {
      const section = document.getElementById(station.id);
      if (section) observer.observe(section);
    });
    const requestedHash = window.location.hash.slice(1) as StationId;
    if (
      messages.stations.some(function hasRequestedStation(station) {
        return station.id === requestedHash;
      })
    ) {
      setActiveStation(requestedHash);
    }
    return function stopTrackingStations() {
      observer.disconnect();
    };
  }, [messages.stations]);

  useEffect(() => {
    /** Navigate after receiving a journey link event. */
    function handleJourneyRequest(event: Event) {
      const request = event as CustomEvent<{ target: StationId }>;
      navigateToStation(request.detail.target);
    }
    window.addEventListener(journeyNavigateEvent, handleJourneyRequest);

    return function stopListeningForJourneyRequests() {
      window.removeEventListener(journeyNavigateEvent, handleJourneyRequest);
      clearTransitionTimers();
    };
  }, [clearTransitionTimers, navigateToStation]);

  return (
    <>
      <nav
        className="fixed end-[1.4rem] top-1/2 z-[70] flex w-[10.7rem] -translate-y-1/2 flex-col gap-[0.55rem] py-[0.7rem] max-[1099px]:bottom-[calc(0.55rem+env(safe-area-inset-bottom))] max-[1099px]:end-[0.65rem] max-[1099px]:start-[0.65rem] max-[1099px]:top-auto max-[1099px]:min-h-[4.8rem] max-[1099px]:w-auto max-[1099px]:translate-y-0 max-[1099px]:flex-row max-[1099px]:justify-around max-[1099px]:gap-0 max-[1099px]:rounded-[1.15rem] max-[1099px]:border max-[1099px]:border-border max-[1099px]:bg-[rgba(8,8,11,0.92)] max-[1099px]:p-[0.45rem] max-[1099px]:shadow-[0_-1.2rem_4rem_rgba(0,0,0,0.4)] max-[1099px]:backdrop-blur-xl max-[600px]:bottom-[calc(0.35rem+env(safe-area-inset-bottom))] max-[600px]:end-[0.4rem] max-[600px]:start-[0.4rem] max-[600px]:min-h-[4.45rem] max-[600px]:px-[0.2rem]"
        aria-label={messages.common.portfolioJourneyLabel}
      >
        <div
          className="absolute bottom-[2.7rem] inset-s-[1.45rem] top-[2.7rem] w-px bg-[linear-gradient(var(--gold),rgba(128,102,178,0.36),var(--border))] max-[1099px]:bottom-auto max-[1099px]:end-[2.8rem] max-[1099px]:start-[2.8rem] max-[1099px]:top-[1.55rem] max-[1099px]:h-px max-[1099px]:w-auto max-[1099px]:bg-[linear-gradient(90deg,var(--gold),rgba(128,102,178,0.34),var(--border))] max-[1099px]:rtl:bg-[linear-gradient(270deg,var(--gold),rgba(128,102,178,0.34),var(--border))]"
          aria-hidden="true"
        />

        {messages.stations.map(station => (
          <RenderStation
            key={station.id}
            {...station}
            navigateToStation={navigateToStation}
            messages={messages}
            activeStation={activeStation}
          />
        ))}
      </nav>

      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-[90] grid place-items-center overflow-hidden bg-[rgba(5,5,6,0.74)] opacity-0 transition-[opacity,backdrop-filter] motion-reduce:hidden",
          destination && "opacity-100 backdrop-blur-[10px]",
        )}
        aria-hidden={!destination}
      >
        <div
          className={cn(
            "absolute inset-0 -translate-x-full bg-[repeating-linear-gradient(0deg,transparent_0,transparent_2.2rem,rgba(214,169,95,0.12)_2.23rem,transparent_2.3rem)]",
            destination && "animate-travelStreak",
          )}
          aria-hidden="true"
        />
        <div
          className={cn(
            "grid translate-x-6 gap-[0.55rem] text-center opacity-0",
            destination && "animate-destinationArrival",
          )}
          role="status"
          aria-live="polite"
        >
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-gold rtl:tracking-normal">
            {messages.common.nowArriving}
          </span>
          <strong className="font-display text-[clamp(3rem,8vw,7rem)] font-normal rtl:font-persian rtl:font-bold">
            {destination?.label}
          </strong>
        </div>
      </div>
    </>
  );
}
