import Link from "next/link";
import { Github, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Socials() {
  const links = [
    {
      name: "Github",
      href: "https://github.com/amirho1",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/amirhosseinsalighedar/",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/the_Amirhos",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/amirhossein-s-8b165618a/",
      icon: <Linkedin className="w-5 h-5" />,
    },
  ];

  const linkElements = links.map(link => (
    <Link
      key={link.name}
      href={link.href}
      className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      target="_blank"
    >
      {link.icon}
    </Link>
  ));

  return <div className="flex space-x-4">{linkElements}</div>;
}
