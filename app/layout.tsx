import type React from "react";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { PROFILE, SKILLS, SOCIAL_LINKS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amirho.com"),
  title: `${PROFILE.name} · ${PROFILE.title}`,
  description: PROFILE.introduction,
  keywords: [
    PROFILE.name,
    "Senior Front-End Engineer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "AI product engineering",
    "Portfolio",
  ],
  authors: [{ name: PROFILE.name, url: "https://amirho.com" }],
  creator: PROFILE.name,
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    title: `${PROFILE.name} · ${PROFILE.title}`,
    description: PROFILE.introduction,
    siteName: `${PROFILE.name} Portfolio`,
    images: [
      {
        url: "/avatar.webp",
        width: 480,
        height: 640,
        alt: PROFILE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} · ${PROFILE.title}`,
    description: PROFILE.introduction,
    creator: "@the_Amirhos",
    images: ["/avatar.webp"],
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

export const viewport: Viewport = {
  themeColor: "#050506",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.title,
  url: "https://amirho.com",
  email: `mailto:${PROFILE.email}`,
  sameAs: SOCIAL_LINKS.map((link) => link.href),
  knowsAbout: SKILLS.map((skill) => skill.name),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={cn(manrope.variable, cormorant.variable)}>
        {children}
      </body>
    </html>
  );
}
