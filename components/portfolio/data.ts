export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: readonly string[];
  status: string;
  cover: { src: string; alt: string; width: number; height: number };
  publicLink: {
    href: string | null;
    label: string;
    description?: string;
  } | null;
}

export const projects: readonly Project[] = [
  {
    slug: "orbit-finance",
    title: "ORBIT Finance",
    category: "Personal finance · AI",
    description:
      "A personal finance platform combining transactions, budgeting, savings goals, debt management, and financial analytics with an AI-powered assistant that helps users better understand their finances.",
    tags: ["React", "TypeScript", "React Router", "SCSS Modules", "i18next"],
    status: "In development",
    cover: {
      src: "/projects/orbit-finance/cover.webp",
      alt: "ORBIT Finance promotional cover showing a financial dashboard and financial assistant.",
      width: 1200,
      height: 900,
    },
    publicLink: null,
  },
  {
    slug: "ani-studio",
    title: "Ani Studio",
    category: "Commerce · Creative learning",
    description:
      "A full-stack platform connecting handmade products, personalized orders, product customization, e-commerce, and online courses through an integrated shopping and learning experience.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe"],
    status: "In development",
    cover: {
      src: "/projects/ani-studio/cover.webp",
      alt: "Ani Studio promotional cover showing embroidery products, product customization, and an online craft course.",
      width: 1200,
      height: 900,
    },
    publicLink: {
      href: "https://anistudio.store/",
      label: "Visit website",
      description: "Public coming-soon website; the full platform is still in development.",
    },
  },
  {
    slug: "mockadabra",
    title: "Mockadabra",
    category: "Developer tools · Chrome extension",
    description:
      "A browser extension for API mocking, featuring configurable rules, projects, environments, and reusable variables to make frontend development and testing more flexible.",
    tags: ["TypeScript", "Chrome Extension APIs", "API Mocking"],
    status: "Chrome Web Store review pending",
    cover: {
      src: "/projects/mockadabra/cover.webp",
      alt: "Mockadabra promotional cover featuring a witch, a cat, and illustrated API request and response panels.",
      width: 1200,
      height: 900,
    },
    publicLink: {
      href: null,
      label: "Chrome Web Store",
    },
  },
];

export const experience = [
  {
    date: "01/2023 — Present",
    role: "Web UI Developer",
    company: "Growin | Swissquote",
    location: "Braga, Portugal",
    logo: "/companies/swissquote.png",
    description:
      "Frontend Developer at Growin, working for Swissquote on complex financial applications. Responsible for frontend features, business logic analysis, technical tasks, grooming sessions and onboarding new developers.",
    details:
      "Focused on maintainable, well-tested code, architecture, coding standards and gradually improving frontend performance.",
  },
  {
    date: "08/2019 — 10/2022",
    role: "Web UI Developer",
    company: "Globant",
    location: "Rosario, Argentina",
    logo: "/companies/globant.png",
    description:
      "Worked on React applications for real-time feedback, employee engagement and internal tools in agile teams. Started with bug fixes and improvements before taking part in larger features such as dashboards, suggestions and data visualizations.",
    details:
      "Contributed to React migrations, Storybook components, analytics improvements, unit testing, API integration and shared styling with SASS and BEM.",
  },
  {
    date: "02/2020 — 07/2020",
    role: "Student Mentor",
    company: "Acámica",
    location: "Rosario, Argentina",
    logo: "/companies/acamica.png",
    description:
      "Supported students in the frontend track of the Full Stack Developer program through live classes, technical explanations and guidance on frontend practices.",
    details:
      "Worked with HTML, CSS, JavaScript and React while developing communication and teaching skills through real-time problem solving.",
  },
] as const;

export const skills = [
  "React & TypeScript",
  "React Query & Zustand",
  "React Aria & accessibility",
  "Storybook & design systems",
  "SCSS / BEM",
  "Testing & CI/CD",
  "API integration",
  "Complex data interfaces",
];
