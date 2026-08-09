import { createLocalizedManifest } from "@/i18n/metadata";

export const dynamic = "force-static";

/**
 * Serve the Persian localized web app manifest.
 * @returns The Persian manifest response.
 */
export function GET(): Response {
  return Response.json(createLocalizedManifest("fa"), {
    headers: { "Content-Type": "application/manifest+json" },
  });
}
