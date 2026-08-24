import type { PortfolioMessages } from "../types";

export const enMessages: PortfolioMessages = {
  locale: "en",
  direction: "ltr",
  homePath: "/",
  alternatePath: "/fa",
  common: {
    skipToContent: "Skip to portfolio content",
    languageSwitcherLabel: "Change language",
    alternateLanguage: "فارسی",
    portfolioJourneyLabel: "Portfolio journey",
    stationLabel: "{index}. {label}",
    nowArriving: "Now arriving",
    loadingPortfolio: "Loading portfolio",
    closeDialog: "Close",
  },
  seo: {
    title: "Amir Hossein Salighedar · Software Engineer & Frontend Developer",
    description:
      "Portfolio of Amir Hossein Salighedar, a software engineer specializing in React, Next.js, TypeScript, real-time interfaces, AI products, and scalable frontend systems.",
    siteName: "Amir Hossein Salighedar Portfolio",
    imageAlt: "Portrait of software engineer Amir Hossein Salighedar",
    keywords: [
      "Amir Hossein Salighedar",
      "Software Engineer",
      "Senior Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "AI Product Engineering",
      "Frontend Portfolio",
    ],
    manifestShortName: "Amirho",
    manifestDescription:
      "The software engineering portfolio of Amir Hossein Salighedar.",
    category: "Technology",
  },
  profile: {
    name: "Amir Hossein Salighedar",
    alternateName: "Amirho",
    givenName: "Amir Hossein",
    familyName: "Salighedar",
    title: "Software engineer",
    email: "amirhosseinsalighedar@gmail.com",
    introduction:
      "Passionate software engineer tackling challenges at the intersection of technology and human experience.",
    biography:
      "My work sits between careful frontend engineering and practical product building. Since 2020, I have helped shape customer-facing applications, internal platforms, and experimental tools while going deep on JavaScript and TypeScript.",
    direction:
      "I am currently focused on AI-assisted products, real-time interfaces, developer tooling, and systems that make complex work feel straightforward.",
    additionalBiography:
      "I enjoy learning systems deeply, sharing what I learn, and moving comfortably between interface details and the architecture that supports them.",
    resumeHref: "/AmirHosseinSalighedarResume.pdf",
    avatarAlt: "Amir Hossein Salighedar, software engineer",
  },
  stations: [
    { id: "home", index: "01", label: "Arrival", shortLabel: "Home" },
    {
      id: "projects",
      index: "02",
      label: "Selected Work",
      shortLabel: "Work",
    },
    {
      id: "experience",
      index: "03",
      label: "Experience",
      shortLabel: "Career",
    },
    { id: "about", index: "04", label: "About", shortLabel: "About" },
    {
      id: "contact",
      index: "05",
      label: "Contact",
      shortLabel: "Contact",
    },
  ],
  hero: {
    brandLabel: "Amir Hossein Salighedar portfolio home",
    monogram: "AS",
    brandName: "Amir Hossein · Salighedar",
    arrival: "Station 01 · Portfolio",
    titleFirst: "Amir Hossein",
    titleSecond: "Salighedar",
    exploreWork: "Explore selected work",
    highlightsLabel: "Portfolio highlights",
    highlights: [
      { label: "Journey", value: "Building web products since 2020" },
      { label: "Focus", value: "Frontend craft · product systems" },
      {
        label: "Current line",
        value: "AI workflows · real-time interfaces",
      },
    ],
    nightService: "Night service · 01",
    destinationLabel: "Destination",
    destinationValue: "Selected work",
    signalLabel: "Signal",
    signalValue: "Systems online",
    scrollCue: "Journey begins below",
  },
  projectsSection: {
    station: "Station 02",
    kicker: "Journey records",
    title: "Selected",
    titleEmphasis: "work",
    description:
      "Product platforms, interactive systems, and developer tools—each built to make a difficult idea easier to use.",
    roleLabel: "Role",
    technologiesLabel: "Technologies used for {project}",
    privateLinkLabel: "{status} · no public link",
    speechVisualLabel: "Speech waveform becoming structured text",
    liveTranscription: "Live transcription",
    speechTimestamp: "00:24:18",
    speechStatus: "Transcript → Summary → Structured output",
  },
  projects: [
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
      links: [
        {
          label: "Website",
          href: "https://insta-shop.ir/",
        },
      ],
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
      links: [
        {
          href: "/ArtFactory.pdf#page=83",
          label: "Catalog",
        },
      ],
    },
    {
      id: "javascript-runtime",
      index: "04",
      eyebrow: "Developer education",
      title: "JavaScript Runtime Visualization",
      summary:
        "An interactive simulator that parses JavaScript and walks through synchronous and asynchronous execution across the call stack, queues, APIs, and event loop.",
      role: "Creator and frontend engineer",
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
    {
      id: "react-special-cursor",
      index: "05",
      eyebrow: "Open-source React library",
      title: "React Special Cursor",
      summary:
        "A customizable React cursor package that lets sites style the pointer for individual hover targets, render content inside the cursor, and opt out on mobile.",
      role: "Creator and library maintainer",
      technologies: ["React", "TypeScript", "SCSS", "Jest", "Webpack"],
      responsibilities: [
        "Designed a class-based API for assigning distinct cursor styles to hover targets.",
        "Enabled custom text and elements inside the cursor dot for richer interactions.",
        "Packaged the TypeScript library with mobile opt-out behavior and automated tests.",
      ],
      status: "Open source · npm package",
      image: "/projects/react-special-cursor.webp",
      imageAlt:
        "Dark interface mockup with gold and violet cursor rings changing shape across interactive cards",
      links: [
        {
          label: "View live demo",
          href: "https://amirho1.github.io/react-special-cursor/",
        },
        {
          label: "View package",
          href: "https://www.npmjs.com/package/react-special-cursor",
        },
        {
          label: "View source",
          href: "https://github.com/amirho1/react-special-cursor",
        },
      ],
    },
  ],
  experienceSection: {
    station: "Station 03",
    kicker: "Departure archive",
    title: "Career",
    titleEmphasis: "journey",
    description:
      "A path through customer-facing products, knowledge systems, real-time SaaS, and the frontend foundations behind them.",
    technologiesLabel: "Technologies used at {company}",
  },
  experiences: [
    {
      company: "Edora Media",
      role: "Senior Frontend Developer",
      period: "Oct 2025 – Mar 2026",
      highlights: [
        "Built a scalable admin panel in a monorepo architecture using Next.js and TypeScript.",
        "Developed dynamic course flow management and a reusable form builder similar to Google Forms.",
        "Created a separate Vite-based student payment portal, integrating Stripe and premium credit features.",
        "Ensured 100% test coverage with Jest, improving reliability and maintainability.",
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "Zod",
        "Jest",
        "Axios",
        "TanStack Query",
        "React",
        "Monorepo",
      ],
    },
    {
      company: "Zood-paz",
      role: "Frontend Engineer",
      period: "Mar 2025 – Jun 2025",
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
      company: "Ariana Labs · vendor at MTN Irancell",
      role: "Frontend Developer",
      period: "May 2023 – Mar 2025",
      highlights: [
        "Developed a knowledge-system platform and multiple web applications.",
        "Worked with cross-functional teams to ship reliable product integrations.",
        "Maintained quality across connected systems and frontend surfaces.",
      ],
    },
    {
      company: "Comviva & Saie Group · vendor at MTN Irancell",
      role: "Web Developer",
      period: "Jun 2022 – Apr 2023",
      highlights: [
        "Developed MyIrancell web application.",
        "Collaborated across teams to integrate changes with existing systems.",
        "Supported the stability and continued evolution of a customer-facing product.",
      ],
    },
    {
      company: "Fan Agin",
      role: "Junior Frontend Developer",
      period: "2020 – 2021",
      highlights: [
        "Started my professional frontend career building CRM platform features.",
        "Developed the foundations of my web application and product engineering practice.",
      ],
    },
  ],
  aboutSection: {
    station: "Station 04",
    kicker: "Passenger profile",
    title: "About the",
    titleEmphasis: "engineer",
    portraitTicket: "Passenger · AS 01",
    headline: "Building calm interfaces for complex systems.",
    resumeLabel: "Download résumé",
    skillsEyebrow: "Technical manifest",
    skillsDescription:
      "Selected tools I use to turn product ideas into reliable systems.",
    strengths: [
      {
        id: "product",
        title: "Product-minded frontend",
        description:
          "Interface architecture that balances clarity, maintainability, and real product constraints.",
      },
      {
        id: "ai",
        title: "AI-assisted workflows",
        description:
          "Thoughtful product experiences around LLMs, transcription, automation, and streaming data.",
      },
      {
        id: "systems",
        title: "Systems curiosity",
        description:
          "A habit of understanding the runtime, tooling, and data flow underneath the visible interface.",
      },
    ],
  },
  skills: [
    { name: "JavaScript", mark: "JS" },
    { name: "TypeScript", mark: "TS", href: "https://www.typescriptlang.org/" },
    { name: "React", mark: "R", href: "https://react.dev/" },
    { name: "Next.js", mark: "N", href: "https://nextjs.org/" },
    { name: "NestJS", mark: "NS", href: "https://docs.nestjs.com/" },
    { name: "Node.js", mark: "ND", href: "https://nodejs.org/" },
    { name: "Tailwind CSS", mark: "TW", href: "https://tailwindcss.com/" },
    { name: "Sass / SCSS", mark: "SC", href: "https://sass-lang.com/" },
    { name: "Git", mark: "GT", href: "https://git-scm.com/" },
    { name: "Material UI", mark: "UI", href: "https://mui.com/material-ui/" },
    { name: "LangChain", mark: "LC", href: "https://www.langchain.com/" },
    { name: "PostgreSQL", mark: "PG", href: "https://www.postgresql.org/" },
  ],
  contactSection: {
    station: "Final station",
    kicker: "Carriage 05 · Contact",
    title: "Let’s build the",
    titleEmphasis: "next destination.",
    description:
      "I’m always open to discussing thoughtful products, ambitious interfaces, and interesting engineering problems.",
    conversationLabel: "Start a conversation",
    resumeLabel: "Résumé",
    detailsLabel: "Contact details",
    ticketCode: "AS · 05",
    fromLabel: "From",
    fromValue: "Great ideas",
    toLabel: "To",
    toValue: "Working software",
    directLine: "Direct line",
    socialProfilesLabel: "Social profiles",
    socialProfileLabel: "Amir on {network}",
    copyrightLabel: "© {year} {name}",
    footerNote: "Designed as a quiet journey through product engineering.",
  },
  socials: [
    { name: "GitHub", href: "https://github.com/amirho1", icon: "github" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/amirho/",
      icon: "linkedin",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/amirhosseinsalighedar/",
      icon: "instagram",
    },
    { name: "X", href: "https://x.com/the_Amirhos", icon: "x" },
  ],
  assistant: {
    dockLabel: "Open Conductor AI",
    guideLabel: "Portfolio guide",
    askLabel: "Ask Conductor AI",
    localLabel: "Portfolio guide · local",
    title: "Conductor AI",
    description:
      "Ask about Amir’s work and experience. Responses come from this portfolio’s verified content; no message is sent to an external AI service.",
    initialMessage:
      "Welcome aboard. I can help you explore Amir’s projects, experience, technical strengths, and contact details.",
    suggestionsLabel: "Suggested questions",
    suggestions: [
      "What are Amir’s strongest projects?",
      "Is Amir a fit for our frontend team?",
      "What AI and real-time experience does Amir have?",
      "How can I contact Amir?",
    ],
    inputLabel: "Ask Conductor AI a question",
    placeholder: "Ask about Amir’s work…",
    sendLabel: "Send question",
    responses: {
      contact: {
        text: "You can reach Amir by email. His résumé and professional profiles are also collected in the Contact station.",
        target: "#contact",
        actionLabel: "Go to contact",
      },
      ai: {
        text: "Amir has built an LLM-assisted coding product at Zood-paz and implemented real-time Server-Sent Events for interactive products.",
        target: "#projects",
        actionLabel: "See AI work",
      },
      frontend: {
        text: "Amir has worked professionally in frontend roles since 2020. His core strengths are JavaScript, TypeScript, React, Next.js, product architecture, and translating complex workflows into clear interfaces.",
        target: "#experience",
        actionLabel: "Review experience",
      },
      projects: {
        text: "Amir’s selected work spans Insta-shop, the Hashtag Network gallery installation, an open-source JavaScript Runtime Visualization, and the published React Special Cursor package.",
        target: "#projects",
        actionLabel: "Explore projects",
      },
      experience: {
        text: "Amir’s journey runs from CRM development at Fan Agin through customer-facing Irancell work, knowledge platforms at Ariana Labs, AI-assisted SaaS engineering at Zood-paz, and frontend systems at Edora Media.",
        target: "#experience",
        actionLabel: "View career timeline",
      },
      about: {
        text: "Amir combines frontend craft with full-stack product thinking. JavaScript and TypeScript are his foundation, supported by React, Next.js, NestJS, Node.js, modern CSS, and practical real-time and AI integrations.",
        target: "#about",
        actionLabel: "Open passenger profile",
      },
      fallback: {
        text: "I can answer from the portfolio’s verified project, experience, skills, and contact information. Try asking about Amir’s strongest work, frontend fit, AI experience, or how to get in touch.",
      },
    },
  },
};
