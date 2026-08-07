export type StationId =
  "home" | "projects" | "experience" | "about" | "contact";

export interface Station {
  id: StationId;
  index: string;
  label: string;
  shortLabel: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface PortfolioProject {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  summary: string;
  role: string;
  technologies: string[];
  responsibilities: string[];
  status: string;
  image?: string;
  imageAlt?: string;
  visual?: "stt";
  links: ProjectLink[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  technologies?: string[];
}

export interface Skill {
  name: string;
  mark: string;
  href?: string;
}

export type SocialIcon = "github" | "linkedin" | "instagram" | "x";

export interface SocialLink {
  name: string;
  href: string;
  icon: SocialIcon;
}

export interface AssistantAnswer {
  text: string;
  target?: `#${StationId}`;
  actionLabel?: string;
}

export const PROFILE = {
  name: "Amir Hossein Salighedar",
  title: "Senior Front-End Engineer",
  email: "amirhosseinsalighedar@gmail.com",
  introduction:
    "Passionate Software Engineer tackling challenges at the intersection of technology and human experience.",
  biography:
    "My work sits between careful frontend engineering and practical product building. Since 2020, I have helped shape customer-facing applications, internal platforms, and experimental tools while going deep on JavaScript and TypeScript.",
  direction:
    "I am currently focused on AI-assisted products, real-time interfaces, developer tooling, and systems that make complex work feel straightforward.",
  resumeHref: "/AmirhosseinSalighedarResume.pdf",
} as const;

export const STATIONS: Station[] = [
  { id: "home", index: "01", label: "Arrival", shortLabel: "Home" },
  { id: "projects", index: "02", label: "Selected Work", shortLabel: "Work" },
  { id: "experience", index: "03", label: "Experience", shortLabel: "Career" },
  { id: "about", index: "04", label: "About", shortLabel: "About" },
  { id: "contact", index: "05", label: "Contact", shortLabel: "Contact" },
];

export const PROJECTS: PortfolioProject[] = [
  {
    id: "insta-shop",
    index: "01",
    eyebrow: "Commerce platform",
    title: "Insta-shop",
    summary:
      "A shop builder that turns Instagram product data into dedicated storefronts, paired with a marketplace for discovery and comparison.",
    role: "Full-stack product engineering",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
    responsibilities: [
      "Built the storefront creation flow and tenant-specific shop experience.",
      "Developed product, site, authentication, and business dashboard workflows.",
      "Connected the B2B shop builder with the customer-facing marketplace.",
    ],
    status: "Private product",
    image: "/projects/insta-shop.webp",
    imageAlt: "Insta-shop marketplace and storefront concept artwork",
    links: [],
  },
  {
    id: "hashtag-network",
    index: "02",
    eyebrow: "Interactive installation",
    title: "Hashtag Network",
    summary:
      "A gallery installation that visualizes how visitors connect through shared hashtags and questions how meaningful those algorithmic connections really are.",
    role: "Interactive visualization engineering",
    technologies: ["Electron", "React", "TypeScript", "D3", "WebSockets"],
    responsibilities: [
      "Designed the QR-based visitor entry and hashtag selection journey.",
      "Built the live force-directed network shown on the installation display.",
      "Created the local application architecture for a month-long gallery environment.",
    ],
    status: "Private installation",
    image: "/projects/hashtag-network.jpg",
    imageAlt:
      "Hashtag Network installation map with participant nodes around a factory",
    links: [],
  },
  {
    id: "stt-platform",
    index: "03",
    eyebrow: "AI productivity platform",
    title: "STT Platform",
    summary:
      "A web platform for recording or uploading audio, converting speech to structured text, creating summaries, and preparing reusable business outputs.",
    role: "Platform architecture and full-stack development",
    technologies: [
      "NestJS",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
    ],
    responsibilities: [
      "Mapped the end-to-end transcription, summarization, and export workflow.",
      "Designed role-based access and the supporting application architecture.",
      "Planned structured table, slide, and PDF output generation.",
    ],
    status: "Platform in development",
    visual: "stt",
    links: [],
  },
  {
    id: "javascript-runtime",
    index: "04",
    eyebrow: "Developer education",
    title: "JavaScript Runtime Visualization",
    summary:
      "An interactive simulator that parses JavaScript and walks through synchronous and asynchronous execution across the call stack, queues, APIs, and event loop.",
    role: "Creator and front-end engineer",
    technologies: ["TypeScript", "JavaScript", "SCSS", "Runtime internals"],
    responsibilities: [
      "Modelled functions, async/await, setTimeout, and queue processing for learning.",
      "Created a step-by-step interface that makes execution order visible.",
      "Published the experiment as an open-source interactive demo.",
    ],
    status: "Open source",
    image: "/runtime-visualization-screen-shoot.webp",
    imageAlt:
      "JavaScript runtime visualizer showing an editor, call stack, queues, and Web APIs",
    links: [
      {
        label: "View live demo",
        href: "https://amirho1.github.io/JavaScript-Runtime-Environment/",
      },
      {
        label: "View source",
        href: "https://github.com/amirho1/JavaScript-Runtime-Environment",
      },
    ],
  },
];

export const EXPERIENCES: ExperienceEntry[] = [
  {
    company: "Zood-paz",
    role: "Front End Engineer",
    period: "2025 — 2025",
    highlights: [
      "Developed a SaaS platform with an LLM-powered chatbot for AI-assisted coding.",
      "Automated user project builds with esbuild and React Router.",
      "Implemented Server-Sent Events for real-time communication.",
      "Maintained the product monorepo with Turborepo.",
    ],
    technologies: [
      "LLM applications",
      "React Router",
      "esbuild",
      "SSE",
      "Turborepo",
    ],
  },
  {
    company: "Ariana Labs · vendor at Irancell",
    role: "Front End Developer",
    period: "2022 — 2024",
    highlights: [
      "Developed a knowledge-system platform and multiple web applications.",
      "Worked with cross-functional teams to ship reliable product integrations.",
      "Maintained quality across connected systems and frontend surfaces.",
    ],
  },
  {
    company: "Comviva & Saie Group · vendor at Irancell",
    role: "Web Developer",
    period: "2021 — 2022",
    highlights: [
      "Developed and maintained the legacy MyIrancell web application.",
      "Collaborated across teams to integrate changes with existing systems.",
      "Supported the stability and continued evolution of a customer-facing product.",
    ],
  },
  {
    company: "Fan Agin",
    role: "Junior Front End Developer",
    period: "2020 — 2021",
    highlights: [
      "Started my professional frontend career building CRM platform features.",
      "Developed the foundations of my web application and product engineering practice.",
    ],
  },
];

export const SKILLS: Skill[] = [
  { name: "JavaScript", mark: "JS" },
  { name: "TypeScript", mark: "TS" },
  { name: "React", mark: "R" },
  { name: "Next.js", mark: "N", href: "https://nextjs.org/" },
  { name: "NestJS", mark: "NS" },
  { name: "Node.js", mark: "ND" },
  { name: "Tailwind CSS", mark: "TW" },
  { name: "Sass / SCSS", mark: "SC" },
  { name: "Git", mark: "GT" },
  { name: "Material UI", mark: "UI" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/amirho1", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amirhossein-s-8b165618a/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/amirhosseinsalighedar/",
    icon: "instagram",
  },
  { name: "X", href: "https://x.com/the_Amirhos" },
];

export const ASSISTANT_SUGGESTIONS = [
  "What are Amir's strongest projects?",
  "Is Amir a fit for our frontend team?",
  "What AI and real-time experience does Amir have?",
  "How can I contact Amir?",
] as const;

export function getAssistantAnswer(question: string): AssistantAnswer {
  const normalizedQuestion = question.trim().toLowerCase();

  if (/contact|email|reach|hire|resume|résumé/.test(normalizedQuestion)) {
    return {
      text: `You can reach Amir at ${PROFILE.email}. His résumé and professional profiles are also collected in the Contact station.`,
      target: "#contact",
      actionLabel: "Go to contact",
    };
  }

  if (
    /\bai\b|llm|real.?time|sse|speech|stt|transcri/.test(normalizedQuestion)
  ) {
    return {
      text: "Amir has built an LLM-assisted coding product at Zood-paz, implemented real-time Server-Sent Events, and is designing an STT workflow that turns audio into summaries, tables, slides, and PDFs.",
      target: "#projects",
      actionLabel: "See AI work",
    };
  }

  if (
    /front.?end|frontend team|fit|react|typescript|next/.test(
      normalizedQuestion,
    )
  ) {
    return {
      text: "Amir has worked professionally in frontend roles since 2020. His core strengths are JavaScript, TypeScript, React, Next.js, product architecture, and translating complex workflows into clear interfaces.",
      target: "#experience",
      actionLabel: "Review experience",
    };
  }

  if (
    /project|work|strongest|portfolio|insta|hashtag|runtime/.test(
      normalizedQuestion,
    )
  ) {
    return {
      text: "Amir's selected work spans Insta-shop, the Hashtag Network gallery installation, an STT productivity platform, and an open-source JavaScript Runtime Visualization. Together they show product, visualization, AI workflow, and frontend depth.",
      target: "#projects",
      actionLabel: "Explore projects",
    };
  }

  if (/experience|career|company|irancell|zood/.test(normalizedQuestion)) {
    return {
      text: "Amir's journey runs from CRM development at Fan Agin through customer-facing Irancell work, knowledge platforms at Ariana Labs, and AI-assisted SaaS engineering at Zood-paz.",
      target: "#experience",
      actionLabel: "View career timeline",
    };
  }

  if (
    /about|strength|skill|stack|technology|technologies/.test(
      normalizedQuestion,
    )
  ) {
    return {
      text: "Amir combines frontend craft with full-stack product thinking. JavaScript and TypeScript are his foundation, supported by React, Next.js, NestJS, Node.js, modern CSS, and practical real-time and AI integrations.",
      target: "#about",
      actionLabel: "Open passenger profile",
    };
  }

  return {
    text: "I can answer from the portfolio's verified project, experience, skills, and contact information. Try asking about Amir's strongest work, frontend fit, AI experience, or how to get in touch.",
  };
}
