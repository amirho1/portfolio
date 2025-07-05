import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

export default function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {[
        {
          name: "JavaScript",
          icon: <Image width={50} height={50} src="/javaScript.png" alt="Javascript logo" />,
        },
        {
          name: "Typescript",
          icon: <Image width={50} height={50} src="/ts.svg" alt="Typescript logo" />,
        },
        { name: "Git", icon: <Image width={50} height={50} src="/git.png" alt="git logo" /> },
        {
          name: "Sass/Scss",
          icon: <Image width={50} height={50} src="/sass.png" alt="sass logo" />,
        },
        { name: "Next.js", icon: "▲" },
        {
          name: "Node.js",
          icon: <Image width={50} height={50} src="/nodejs.svg" alt="node.js logo" />,
        },
        { name: "React", icon: <Image width={50} height={50} src="/react.svg" alt="react logo" /> },
        {
          name: "Nestjs",
          icon: <Image width={50} height={50} src="/nestjs.svg" alt="nestjs logo" />,
        },
        {
          name: "Tailwindcss",
          icon: <Image width={50} height={50} src="/tailwindcss.svg" alt="Tailwindcss logo" />,
        },
        {
          name: "MUI",
          icon: <Image width={50} height={50} src="/mui.svg" alt="Material UI logo" />,
        },
      ].map((skill, index) => (
        <Card
          key={index}
          className={`p-6 text-center hover:shadow-lg transition-shadow ${skill?.bg || "bg-white"}`}
        >
          <CardContent className="p-0">
            <div
              className={cn(
                "text-2xl mb-2 flex justify-center items-center",
                skill.bg ? "text-white" : "text-black"
              )}
            >
              {skill.icon}
            </div>
            <p className={`font-medium ${skill.bg ? "text-white" : "text-black"}`}>{skill.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
