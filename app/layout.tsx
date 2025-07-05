import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evren Shah - Frontend Developer | Portfolio",
  description:
    "Passionate Frontend Developer with 8+ years of experience. Specializing in React, Next.js, and modern web technologies. Based in India.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "JavaScript", "Web Development", "Portfolio"],
  authors: [{ name: "Evren Shah" }],
  creator: "Evren Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evrenshah.dev",
    title: "Evren Shah - Frontend Developer",
    description:
      "Passionate Frontend Developer with 8+ years of experience in React, Next.js, and modern web technologies.",
    siteName: "Evren Shah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evren Shah - Frontend Developer",
    description:
      "Passionate Frontend Developer with 8+ years of experience in React, Next.js, and modern web technologies.",
    creator: "@evrenshah",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
