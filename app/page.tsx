import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail } from "lucide-react";
import Nav from "@/components/Nav";
import Socials from "@/components/Socials";
import Skills from "@/components/Skills";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Nav />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="font-normal">Hello I am</span>{" "}
                <span className="block font-bold underline">Amir Hossein Salighedar.</span>
                <span className="block font-normal">Frontend Developer</span>
                <span className="block font-normal">Based In Iran.</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-md">
                I'm passionate web developer with 4 years of experience who is into learning and
                enjoying to share my knowledge, I"m master of Javascript and typescript. Experienced
                working with multiple frameworks such as{" "}
                <Link href="https://nextjs.org/" target="_blank" className="underline">
                  Next.js
                </Link>{" "}
                Nest.js also have deep knowledge of underlining of javascript engine.
              </p>
            </div>

            <Socials />
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/Portfolio_pic.jpg?height=400&width=400"
                alt="Evren Shah - Frontend Developer"
                width={400}
                height={400}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>

        <Skills />
      </section>

      {/* Experience Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Experience</h2>

          <div className="space-y-8">
            {[
              {
                company: "Google",
                role: "Lead Software Engineer at Google",
                period: "Nov 2019 - Present",
                description:
                  "As a senior software engineer at Google, I played a key role in developing innovative solutions for Google's search algorithms. I collaborated with cross-functional teams to enhance user experience and optimize search performance, contributing to the advancement of search technology and delivering exceptional user experiences for millions of users worldwide.",
              },
              {
                company: "YouTube",
                role: "Software Engineer at YouTube",
                period: "Jan 2017 - Oct 2019",
                description:
                  "At YouTube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the world's most popular video-sharing platform. I worked on optimizing video streaming algorithms and improving user engagement through data-driven insights and innovative feature development.",
              },
              {
                company: "Apple",
                role: "Junior Software Engineer at Apple",
                period: "Jun 2015 - Dec 2017",
                description:
                  "During my tenure at Apple, I held the role of Software Engineer, where I played a key role in developing iOS applications and contributing to the enhancement of user experiences across Apple's ecosystem. I collaborated with multidisciplinary teams to deliver high-quality software solutions and ensure seamless integration with Apple's hardware and software ecosystem.",
              },
            ].map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-700 pl-6 pb-8">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full -ml-8"></div>
                  <Badge variant="outline" className="text-white border-white">
                    {exp.period}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="About Evren Shah"
              width={300}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate and experienced software engineer specializing in full-stack web
                development. With over 8 years of experience in the industry, I have honed my
                technical and social aspects of digital products in my field. I have expertise in
                various programming languages and frameworks.
              </p>
              <p>
                I began my journey as a web developer in 2015, and since then, I've contributed to
                open-source projects and worked on various projects ranging from small business
                websites to large-scale enterprise applications. My passion lies in creating
                efficient and user-friendly applications that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, reading tech blogs,
                or contributing to open-source projects. I'm always eager to learn and grow, and I
                believe in the power of collaboration and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>

          <div className="space-y-16">
            {[
              {
                number: "01",
                title: "Crypto Screener Application",
                description:
                  "I'm Evren Shah, a passionate Frontend Developer with a strong background in programming and problem-solving. I have experience in various technologies and frameworks, and I'm always eager to learn and grow.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                number: "02",
                title: "Euphoria - Ecommerce (Apparels) Website Template",
                description:
                  "I'm Evren Shah, a passionate Frontend Developer with a strong background in programming and problem-solving. I have experience in various technologies and frameworks, and I'm always eager to learn and grow.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                number: "03",
                title: "Blog Website Template",
                description:
                  "I'm Evren Shah, a passionate Frontend Developer with a strong background in programming and problem-solving. I have experience in various technologies and frameworks, and I'm always eager to learn and grow.",
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Feel free to
            reach out if you'd like to collaborate or just say hello!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-black text-white hover:bg-gray-800">
              <Mail className="w-4 h-4 mr-2" />
              amirhosseinsalighedar@gmail.com
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2024 Evren Shah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
