import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail } from "lucide-react";
import Nav from "@/components/Nav";
import Socials from "@/components/Socials";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Nav />

      {/* Hero Section */}
      <HeroSection />
      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
        <Skills />
      </section>

      {/* Experience Section */}
      <Experiences />

      {/* Projects Section */}
      {/* <section id="projects" className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>

          <div className="space-y-16">
            {[
              {
                number: "01",
                title: "Crypto Screener Application",
                description:
                  "I'm Amirhossein Salighedar, a passionate Frontend Developer with a strong background in programming and problem-solving. I have experience in various technologies and frameworks, and I'm always eager to learn and grow.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                number: "02",
                title: "Euphoria - Ecommerce (Apparels) Website Template",
                description:
                  "I'm Amirhossein Salighedar, a passionate Frontend Developer with a strong background in programming and problem-solving. I have experience in various technologies and frameworks, and I'm always eager to learn and grow.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                number: "03",
                title: "Blog Website Template",
                description:
                  "I'm Amirhossein Salighedar, a passionate Frontend Developer with a strong background in programming and problem-solving. I have experience in various technologies and frameworks, and I'm always eager to learn and grow.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`space-y-4 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="text-6xl font-bold text-gray-800">{project.number}</div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Feel free to
            reach out if you'd like to collaborate or just say hello!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="mailto:amirhosseinsalighedar@gmail.com">
              <Button className="bg-black text-white hover:bg-gray-800">
                <Mail className="w-4 h-4 mr-2" />
                amirhosseinsalighedar@gmail.com
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
