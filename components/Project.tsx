import Image from "next/image";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectT {
  title: string;
  description: string;
  image: string;
  url: string;
}

const projects: ProjectT[] = [
  {
    title: "Javascript Runtime visualization",
    description:
      "This is a fun project that I did to learn behind the scene of javascript and it's limited if you run it, it will parse and iterate the code and show you step by step what will happen when you call async, and sync functions",
    image: "/runtime-visualization-screen-shoot.webp?height=300&width=400",
    url: "https://github.com/amirho1/JavaScript-Runtime-Environment.git",
  },
];

export default function Project() {
  function RenderProject(project: ProjectT, index: number) {
    const number = index < 10 ? `0${index + 1}` : index;
    return (
      <div key={index}>
        <div
          className={`grid md:grid-cols-2 gap-8 items-center ${
            index % 2 === 1 ? "md:grid-flow-col-dense" : ""
          }`}
        >
          <div className={`space-y-4 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
            <div className="text-6xl font-bold text-gray-800">{number}</div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="leading-relaxed">{project.description}</p>
            <div>
              <Link href={project.url} target="_blank">
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </Link>
            </div>
          </div>
          <div className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="projects" className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Fun Projects</h2>

        <div className="space-y-16">{projects.map(RenderProject)}</div>
      </div>
    </section>
  );
}
