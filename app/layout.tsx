import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const author = "Amir Hossein Salighedar";
const description = `I'm passionate web developer with 4 years of experience who is into learning and enjoying to share my knowledge, I"m master of Javascript and typescript. Experienced working with multiple frameworks such as Next.js Nest.js also have deep knowledge of underlining of javascript engine.`;

export const metadata: Metadata = {
  title: "Amir Hossein Salighedar - web Developer | Portfolio",
  description: description,
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "Web Development",
    "Portfolio",
    author,
    "Amir Hossein",
    "AmirHosseinSalighedar",
    "AmirHosseinSalighehdar",
    "Salighehdar",
    "Salighedar",
    "Web Developer",
    "Software Engineer",
    "Full Stack Developer",
    "amirhosseinsalighedar@gmail.com",
    "Node",
    "Zood-paz Founder",
    "amirho.site",
    "amirho",
  ],
  authors: [{ name: author }],
  creator: "Evren Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amirho.site",
    title: `${author} - Frontend Developer`,
    description: `I'm passionate web developer with 4 years of experience who is into learning and enjoying to share my knowledge, I"m master of Javascript and typescript. Experienced working with multiple frameworks such as Next.js Nest.js also have deep knowledge of underlining of javascript engine.`,
    siteName: `${author} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${author} - Frontend Developer`,
    description: description,
    creator: "@The_amirho",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
