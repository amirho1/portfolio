import React from "react";
import { Badge } from "./ui/badge";

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string | React.JSX.Element;
}

const experiences: Experience[] = [
  {
    company: "Zood-paz",
    role: "Front End Engineer",
    period: "2025 - 2025",
    description: (
      <ul className="list-disc">
        <li>Developed a SaaS platform featuring an AI-powered chatbot using LLM for vibe coding</li>
        <li>Automated the build process of users' projects using Esbuild for React Router</li>
        <li>Integrated Server-Sent Events (SSE) for real-time communication</li>
        <li>Maintaining Monorepo with turborepo</li>
      </ul>
    ),
  },
  {
    company: "Ariana-labs (Vendor at irancell)",
    role: "Front End Developer",
    period: "2022 - 2024",
    description:
      " At Ariana-labs, I worked as a front end developer, where I was responsible for developing knowledge system platform and multiple web applications. I collaborated with cross-functional teams to deliver high-quality software solutions and ensure seamless integration with other systems.",
  },
  {
    company: "Comviva and Saie group (Vendor at irancell)",
    role: "Web Developer",
    period: "2021 - 2022",
    description:
      "During my time at Comviva and Saie group, I worked as a web developer, where I was responsible to develop and maintain old My Irancell web application. I collaborated with cross-functional teams to deliver high-quality software solutions and ensure seamless integration with existing systems.",
  },
  {
    company: "Fan Agin",
    role: "Junior Front End Developer",
    period: "2020 - 2021",
    description:
      "At Fan Agin, I started my career as a junior front end developer, where I worked on CRM platforms and I gained valuable experience in web development.",
  },
];

export default function Experiences() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Experience</h2>

        <div className="space-y-8">
          {experiences.map(({ period, role, description, company }, index) => (
            <div key={index} className="border-l-2 border-gray-700 pl-6 pb-8">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-white rounded-full -ml-8"></div>
                <h3>{company}</h3>
                <Badge variant="outline" className="text-white border-white">
                  {period}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">{role}</h3>
              <div className="text-gray-300 leading-relaxed">
                {typeof description === "string" ? <p>{description}</p> : description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
