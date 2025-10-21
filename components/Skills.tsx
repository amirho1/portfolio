import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const skills = [
  {
    name: "JavaScript",
    icon: (
      <Image
        loading="lazy"
        width={50}
        height={50}
        src="/JavaScript.webp?height=50&width=50"
        alt="Javascript logo"
      />
    ),
  },
  {
    name: "Typescript",
    icon: (
      <Image
        loading="lazy"
        width={50}
        height={50}
        src="/ts.svg?height=50&width=50"
        alt="Typescript logo"
      />
    ),
  },
  {
    name: "Git",
    icon: (
      <Image
        loading="lazy"
        width={50}
        height={50}
        src="/git.webp?height=50&width=50"
        alt="git logo"
      />
    ),
  },
  {
    name: "Sass/Scss",
    icon: (
      <Image
        loading="lazy"
        width={50}
        height={50}
        src="/sass.png?height=50&width=50"
        alt="sass logo"
      />
    ),
  },
  { name: "Next.js", icon: "▲" },
  {
    name: "Node.js",
    icon: (
      <Image
        loading="lazy"
        width={50}
        height={50}
        src="/nodejs.svg?height=56.33&width=auto"
        alt="node.js logo"
        style={{ height: "50px", width: "50px" }}
      />
    ),
  },
  {
    name: "React",
    icon: (
      <Image
        loading="lazy"
        width={50}
        height={50}
        src="/react.svg?height=50&width=50"
        alt="react logo"
        style={{ height: "50px", width: "50px" }}
      />
    ),
  },
  {
    name: "Nestjs",
    icon: (
      <Image
        loading="lazy"
        width={50}
        height={50}
        src="/nestjs.svg?height=50&width=50"
        alt="nestjs logo"
        style={{ height: "50px", width: "50px" }}
      />
    ),
  },
  {
    name: "Tailwindcss",
    icon: (
      <Image
        loading="lazy"
        width={50}
        height={50}
        src="/tailwindcss.svg?height=50&width=50"
        alt="Tailwindcss logo"
        style={{ height: "50px", width: "50px" }}
      />
    ),
  },
  {
    name: "MUI",
    icon: (
      <Image
        loading="lazy"
        width={50}
        height={50}
        src="/mui.svg?height=50&width=50"
        alt="Material UI logo"
      />
    ),
  },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {skills.map((skill, index) => (
        <Card
          key={index}
          className={`p-6 text-center hover:shadow-lg transition-shadow "bg-white"`}
        >
          <CardContent className="p-0">
            <div className={cn("text-2xl mb-2 flex justify-center items-center text-black")}>
              {skill.icon}
            </div>
            <p className={`font-medium "text-black"`}>{skill.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
