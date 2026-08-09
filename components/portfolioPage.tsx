"use client";
import TrainLoading from "@/components/TrainLoading";
import useWebLoading from "@/hooks/useWebLoading";
import type { PortfolioMessages } from "@/i18n/types";
import { cn } from "@/lib/utils";
import type { ComponentProps, CSSProperties } from "react";
import About from "./About";
import Contact from "./Contact";
import Experiences from "./Experiences";
import HeroSection from "./HeroSection";
import JourneyNavigation from "./JourneyNavigation";
import LanguageSwitcher from "./languageSwitcher";
import Project from "./Project";

interface PortfolioPageProps extends ComponentProps<"div"> {
  messages: PortfolioMessages;
}

const noiseStyle: CSSProperties = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.9'/%3E%3C/svg%3E\")",
};

/**
 * Render the complete server-rendered localized portfolio page.
 * @param props - Localized portfolio page properties.
 * @returns The localized portfolio page.
 */
export default function PortfolioPage({ messages, className, ...props }: PortfolioPageProps) {
  const isLoading = useWebLoading();

  if (isLoading) return <TrainLoading />;

  return (
    <div className={cn("relative isolate overflow-clip", className)} {...props}>
      <div
        className="pointer-events-none fixed inset-[-50%] z-40 rotate-3 opacity-[0.032]"
        style={noiseStyle}
        aria-hidden="true"
      />
      <a
        className="fixed start-3 top-3 z-[100] -translate-y-[180%] rounded-lg border border-gold bg-backgroundElevated px-4 py-[0.8rem] text-foreground transition-transform duration-200 focus:translate-y-0"
        href="#main-content"
      >
        {messages.common.skipToContent}
      </a>
      <LanguageSwitcher messages={messages} />
      <JourneyNavigation messages={messages} />
      <main id="main-content">
        <HeroSection messages={messages} />
        <Project messages={messages} />
        <Experiences messages={messages} />
        <About messages={messages} />
        <Contact messages={messages} />
      </main>
    </div>
  );
}
