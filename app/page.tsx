import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experiences />

      {/* Projects Section */}
      <Project />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
