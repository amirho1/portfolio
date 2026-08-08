"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import HeroSection from "@/components/HeroSection";
import JourneyNavigation from "@/components/JourneyNavigation";
import Project from "@/components/Project";
import TrainLoading from "@/components/TrainLoading";
import useWebLoading from "@/hooks/useWebLoading";

export default function Portfolio() {
  const isLoading = useWebLoading();

  if (isLoading) {
    return <TrainLoading />;
  }

  return (
    <div className="obsidian-portfolio">
      <a className="skip-link" href="#main-content">
        Skip to portfolio content
      </a>
      <JourneyNavigation />
      {/* <ConductorAI /> */}
      <main id="main-content">
        <HeroSection />
        <Project />
        <Experiences />
        <About />
        <Contact />
      </main>
    </div>
  );
}
