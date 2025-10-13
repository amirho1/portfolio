import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const author = "Amir Hossein Salighedar";
const description = `I'm passionate web developer with 4 years of experience who is into learning and enjoying to share my knowledge, I"m master of Javascript and typescript. Experienced working with multiple frameworks such as Next.js Nest.js also have deep knowledge of underlining of javascript engine.`;

export const metadata: Metadata = {
  title:
    "Amir Hossein Salighedar - web Developer | Portfolio |‌امیر حسین سلیقه دار - برنامه نویس وب ",
  description: description,
  keywords: [
    "امیر حسین",
    "سلیقه دار",
    "امیر حسین سلیقه دار",
    "برنامه نویس وب",
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
  creator: "Amir Hossein Salighedar",
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

const jsonLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amir Hossein",
  lastname: "Salighedar",
  jobTitle: "Full stack developer",
  url: "https://amirho.site",
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
    "AI Engineer",
    "CSS",
    "HTML 5",
    "Postgres",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLD).replace(/</g, "\\u003c"),
        }}
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
