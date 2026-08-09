import { createLocalizedManifest } from "@/i18n/metadata";

export const dynamic = "force-static";

/**
 * Serve the English localized web app manifest.
 * @returns The English manifest response.
 */
export function GET(): Response {
  return Response.json(createLocalizedManifest("en"), {
    headers: { "Content-Type": "application/manifest+json" },
  });
}
