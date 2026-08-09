export type Locale = "en" | "fa";

export type TextDirection = "ltr" | "rtl";

export type StationId =
  "home" | "projects" | "experience" | "about" | "contact";

export type SocialIcon = "github" | "linkedin" | "instagram" | "x";

export interface StationMessage {
  id: StationId;
  index: string;
  label: string;
  shortLabel: string;
}

export interface ProjectLinkMessage {
  label: string;
  href: string;
}

export interface ProjectMessage {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  summary: string;
  role: string;
  technologies: readonly string[];
  responsibilities: readonly string[];
  status: string;
  image?: string;
  imageAlt?: string;
  visual?: "stt";
  links: readonly ProjectLinkMessage[];
}

export interface ExperienceMessage {
  company: string;
  role: string;
  period: string;
  highlights: readonly string[];
  technologies?: readonly string[];
}

export interface SkillMessage {
  name: string;
  mark: string;
  href?: string;
}

export interface SocialMessage {
  name: string;
  href: string;
  icon: SocialIcon;
}

export interface StrengthMessage {
  id: "product" | "ai" | "systems";
  title: string;
  description: string;
}

export interface AssistantResponseMessage {
  text: string;
  target?: `#${StationId}`;
  actionLabel?: string;
}

export interface PortfolioMessages {
  locale: Locale;
  direction: TextDirection;
  homePath: string;
  alternatePath: string;
  common: {
    skipToContent: string;
    languageSwitcherLabel: string;
    alternateLanguage: string;
    portfolioJourneyLabel: string;
    stationLabel: string;
    nowArriving: string;
    loadingPortfolio: string;
    closeDialog: string;
  };
  seo: {
    title: string;
    description: string;
    siteName: string;
    imageAlt: string;
    keywords: readonly string[];
    manifestShortName: string;
    manifestDescription: string;
    category: string;
  };
  profile: {
    name: string;
    alternateName: string;
    givenName: string;
    familyName: string;
    title: string;
    email: string;
    introduction: string;
    biography: string;
    direction: string;
    additionalBiography: string;
    resumeHref: string;
    avatarAlt: string;
  };
  stations: readonly StationMessage[];
  hero: {
    brandLabel: string;
    monogram: string;
    brandName: string;
    arrival: string;
    titleFirst: string;
    titleSecond: string;
    exploreWork: string;
    highlightsLabel: string;
    highlights: readonly { label: string; value: string }[];
    nightService: string;
    destinationLabel: string;
    destinationValue: string;
    signalLabel: string;
    signalValue: string;
    scrollCue: string;
  };
  projectsSection: {
    station: string;
    kicker: string;
    title: string;
    titleEmphasis: string;
    description: string;
    roleLabel: string;
    technologiesLabel: string;
    privateLinkLabel: string;
    speechVisualLabel: string;
    liveTranscription: string;
    speechTimestamp: string;
    speechStatus: string;
  };
  projects: readonly ProjectMessage[];
  experienceSection: {
    station: string;
    kicker: string;
    title: string;
    titleEmphasis: string;
    description: string;
    technologiesLabel: string;
  };
  experiences: readonly ExperienceMessage[];
  aboutSection: {
    station: string;
    kicker: string;
    title: string;
    titleEmphasis: string;
    portraitTicket: string;
    headline: string;
    resumeLabel: string;
    skillsEyebrow: string;
    skillsDescription: string;
    strengths: readonly StrengthMessage[];
  };
  skills: readonly SkillMessage[];
  contactSection: {
    station: string;
    kicker: string;
    title: string;
    titleEmphasis: string;
    description: string;
    conversationLabel: string;
    resumeLabel: string;
    detailsLabel: string;
    ticketCode: string;
    fromLabel: string;
    fromValue: string;
    toLabel: string;
    toValue: string;
    directLine: string;
    socialProfilesLabel: string;
    socialProfileLabel: string;
    copyrightLabel: string;
    footerNote: string;
  };
  socials: readonly SocialMessage[];
  assistant: {
    dockLabel: string;
    guideLabel: string;
    askLabel: string;
    localLabel: string;
    title: string;
    description: string;
    initialMessage: string;
    suggestionsLabel: string;
    suggestions: readonly string[];
    inputLabel: string;
    placeholder: string;
    sendLabel: string;
    responses: {
      contact: AssistantResponseMessage;
      ai: AssistantResponseMessage;
      frontend: AssistantResponseMessage;
      projects: AssistantResponseMessage;
      experience: AssistantResponseMessage;
      about: AssistantResponseMessage;
      fallback: AssistantResponseMessage;
    };
  };
}

export interface AssistantAnswer {
  text: string;
  target?: `#${StationId}`;
  actionLabel?: string;
}
