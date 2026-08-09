import LocalizedDocument from "@/components/localizedDocument";
import { createLocalizedMetadata } from "@/i18n/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { siteViewport } from "../siteViewport";

export const viewport = siteViewport;

/**
 * Generate English metadata for the default portfolio URL.
 * @returns The English page metadata.
 */
export function generateMetadata(): Metadata {
  return createLocalizedMetadata("en");
}

/**
 * Render the English root document.
 * @param props - Root layout properties.
 * @returns The English HTML document.
 */
export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <LocalizedDocument locale="en">{children}</LocalizedDocument>;
}
