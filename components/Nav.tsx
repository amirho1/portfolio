import Link from "next/link";
import { Button } from "./ui/button";

export default function Nav() {
  const links = [
    {
      name: "About Me",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    // {
    //   name: "Project",
    //   href: "#projects",
    // },
    {
      name: "Contact Me",
      href: "#contact",
    },
  ];

  const elements = links.map(link => (
    <Link
      key={link.name}
      href={link.href}
      className="text-gray-600 hover:text-black transition-colors"
    >
      {link.name}
    </Link>
  ));

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold cursor-pointer">
          Amirho
        </Link>

        <div className="hidden md:flex items-center space-x-8">{elements}</div>

        <Link href="/AmirhosseinSalighedarResume.pdf" download target="_blank">
          <Button className="bg-black text-white hover:bg-gray-800">Resume</Button>
        </Link>
      </nav>
    </header>
  );
}
