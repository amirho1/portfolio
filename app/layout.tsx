import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { author, description, MAIL } from "../lib/constant";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Amir Hossein Salighedar - web Developer | Portfolio |‌امیر حسین سلیقه دار - برنامه نویس وب ",
  description: description,
  keywords: [
    "امیر حسین",
    "سلیقه دار",
    "امیر حسین سلیقه دار",
    "برنامه نویس وب",
    "Fullstack Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "Fullstack Development",
    "Portfolio",
    author,
    "Amir Hossein",
    "AmirHosseinSalighedar",
    "AmirHosseinSalighehdar",
    "Salighehdar",
    "Salighedar",
    "Front-End Developer",
    "Back-End Developer",
    "Web Developer",
    "Software Engineer",
    "Full Stack Developer",
    "Amirho Salighedar",
    MAIL,
    "Node",
    "Zood-paz Founder",
    "amirho.com",
    "amirho",
  ],
  authors: [{ name: author }],
  creator: "Amir Hossein Salighedar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amirho.com",
    title: `${author} - Fullstack Developer`,
    description: `I'm passionate Fullstack developer with 4 years of experience who is into learning and enjoying to share my knowledge, 
    I"m master of Javascript and typescript. Experienced working with multiple frameworks
    such as Next.js Nest.js also have deep knowledge of underlining of javascript engine.`,
    siteName: `${author} Portfolio`,
    images: ["https://amirho.com/Portfolio_pic.webp?width=100&height=100"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${author} - Fullstack Developer`,
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

const jsonLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amir Hossein",
  lastname: "Salighedar",
  jobTitle: "Full stack developer",
  url: "https://amirho.com",
  sameAs: [
    "https://github.com/amirho1",
    "https://linkedin.com/in/amirho",
    "https://www.npmjs.com/~amirho",
  ],
  stack: [
    "Javascript",
    "Typescript",
    "Nest.js",
    "React",
    "Next.js",
    "Vite",
    "AI Engineer",
    "CSS",
    "HTML 5",
    "Postgres",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLD).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={cn(inter.className, "h-screen")}>
        {/* Header */}
        <Nav />

        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
