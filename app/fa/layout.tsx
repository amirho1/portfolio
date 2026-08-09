import type { Metadata } from "next";
import type { ReactNode } from "react";
import LocalizedDocument from "@/components/localizedDocument";
import { createLocalizedMetadata } from "@/i18n/metadata";
import { siteViewport } from "../siteViewport";
import "../globals.css";

export const viewport = siteViewport;

/**
 * Generate Persian metadata written for Persian search intent.
 * @returns The Persian page metadata.
 */
export function generateMetadata(): Metadata {
  return createLocalizedMetadata("fa");
}

/**
 * Render the Persian RTL root document.
 * @param props - Root layout properties.
 * @returns The Persian HTML document.
 */
export default function PersianLayout({ children }: { children: ReactNode }) {
  return <LocalizedDocument locale="fa">{children}</LocalizedDocument>;
}
