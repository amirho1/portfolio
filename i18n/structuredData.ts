import { getLocalizedUrl, siteUrl } from "./config";
import { getMessages } from "./messages";
import type {
  Locale,
  ProjectMessage,
  SkillMessage,
  SocialMessage,
} from "./types";

/**
 * Return the public URL for a localized project entity.
 * @param locale - The active locale.
 * @param project - The localized project.
 * @returns The project entity URL.
 */
function getProjectUrl(locale: Locale, project: ProjectMessage): string {
  return getLocalizedUrl(locale, `#project-${project.id}`);
}

/**
 * Convert a project into a Schema.org list entry.
 * @param project - The localized project.
 * @param index - The project position.
 * @param locale - The active locale.
 * @returns A Schema.org list entry.
 */
function createProjectListItem(
  project: ProjectMessage,
  index: number,
  locale: Locale,
) {
  return {
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      "@id": getProjectUrl(locale, project),
      name: project.title,
      description: project.summary,
      url: getProjectUrl(locale, project),
      image: project.image ? `${siteUrl}${project.image}` : undefined,
      keywords: project.technologies.join(", "),
      inLanguage: locale,
      creator: { "@id": `${getLocalizedUrl(locale)}#person` },
    },
  };
}

/**
 * Return a social profile URL.
 * @param social - A social profile definition.
 * @returns The profile URL.
 */
function getSocialHref(social: SocialMessage): string {
  return social.href;
}

/**
 * Return a localized skill name.
 * @param skill - A localized skill definition.
 * @returns The skill name.
 */
function getSkillName(skill: SkillMessage): string {
  return skill.name;
}

/**
 * Create localized Schema.org data for the portfolio and its entities.
 * @param locale - The active locale.
 * @returns A localized Schema.org graph.
 */
export function createLocalizedStructuredData(locale: Locale) {
  const messages = getMessages(locale);
  const localizedUrl = getLocalizedUrl(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${localizedUrl}#website`,
        url: localizedUrl,
        name: messages.seo.siteName,
        description: messages.seo.description,
        inLanguage: locale,
      },
      {
        "@type": "ProfilePage",
        "@id": `${localizedUrl}#profile-page`,
        url: localizedUrl,
        name: messages.seo.title,
        description: messages.seo.description,
        inLanguage: locale,
        isPartOf: { "@id": `${localizedUrl}#website` },
        mainEntity: { "@id": `${localizedUrl}#person` },
        hasPart: { "@id": `${localizedUrl}#selected-work` },
      },
      {
        "@type": "Person",
        "@id": `${localizedUrl}#person`,
        name: messages.profile.name,
        alternateName: messages.profile.alternateName,
        givenName: messages.profile.givenName,
        familyName: messages.profile.familyName,
        description: messages.profile.biography,
        jobTitle: messages.profile.title,
        url: localizedUrl,
        image: `${siteUrl}/avatar.webp`,
        email: `mailto:${messages.profile.email}`,
        sameAs: messages.socials.map(getSocialHref),
        knowsAbout: messages.skills.map(getSkillName),
      },
      {
        "@type": "ItemList",
        "@id": `${localizedUrl}#selected-work`,
        name: `${messages.projectsSection.title} ${messages.projectsSection.titleEmphasis}`,
        description: messages.projectsSection.description,
        numberOfItems: messages.projects.length,
        itemListElement: messages.projects.map(
          function mapProject(project, index) {
            return createProjectListItem(project, index, locale);
          },
        ),
      },
    ],
  };
}
