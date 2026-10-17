export interface ProjectLink {
  label: string;
  /** Leave as null until the real URL exists; links without an href are not rendered. */
  href: string | null;
  description?: string;
}

export interface Project {
  slug: "mockadabra" | "orbit-finance" | "ani-studio";
  number: string;
  title: string;
  shortTitle: string;
  kind: string;
  status: { label: string; tone: "live" | "development" };
  tagline: string;
  summary: string;
  features: readonly string[];
  tags: readonly string[];
  cover: {
    src: string;
    alt: string;
    width: number;
    height: number;
    background: string;
    position: string;
  };
  links: readonly ProjectLink[];
  note?: string;
}

const MOCKADABRA_STORE_URL: string =
  "https://chromewebstore.google.com/detail/mockadabra-api-mocking-re/jchfebdkfiognkefhfpmiimancglfiid";
const MOCKADABRA_SITE_URL: string = "https://mockadabra.com/";

export const projects: readonly Project[] = [
  {
    slug: "mockadabra",
    number: "01",
    title: "Mockadabra",
    shortTitle: "Mockadabra",
    kind: "developer tool",
    status: { label: "Live · Chrome Web Store", tone: "live" },
    tagline: "Mock and modify API requests straight from the browser.",
    summary:
      "Rules, projects, environments and variables, with advanced request matching.",
    features: [
      "rules",
      "projects",
      "environments",
      "variables",
      "request matching",
    ],
    tags: ["TypeScript", "Chrome Extension APIs", "API Mocking"],
    cover: {
      src: "/projects/mockadabra/cover.webp",
      alt: "Mockadabra promotional cover featuring a witch, a cat, and illustrated API request and response panels.",
      width: 1200,
      height: 900,
      background: "#15101f",
      position: "50% 40%",
    },
    links: [
      { label: "Add to Chrome", href: MOCKADABRA_STORE_URL },
      { label: "Website", href: MOCKADABRA_SITE_URL },
    ],
  },
  {
    slug: "orbit-finance",
    number: "02",
    title: "ORBIT Finance",
    shortTitle: "ORBIT",
    kind: "fintech",
    status: { label: "In development · private build", tone: "development" },
    tagline: "Personal finance, from accounts to goals.",
    summary:
      "Accounts, transactions, budgets, analytics and goals, with an AI-powered assistant.",
    features: ["accounts", "transactions", "budgets", "analytics", "goals"],
    tags: ["React", "TypeScript", "React Router", "SCSS Modules", "i18next"],
    cover: {
      src: "/projects/orbit-finance/cover.webp",
      alt: "ORBIT Finance promotional cover showing a financial dashboard and financial assistant.",
      width: 1200,
      height: 900,
      background: "#e9e6ef",
      position: "50% 55%",
    },
    links: [],
    note: "Private build — no public link yet",
  },
  {
    slug: "ani-studio",
    number: "03",
    title: "Ani Studio",
    shortTitle: "Ani Studio",
    kind: "commerce · learning",
    status: { label: "In development · public preview", tone: "development" },
    tagline: "Handmade products, personalized creations and a creative school.",
    summary:
      "Handmade products, personalized creations and a creative school in one platform.",
    features: [
      "shop",
      "customization",
      "personalized orders",
      "online courses",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe"],
    cover: {
      src: "/projects/ani-studio/cover.webp",
      alt: "Ani Studio promotional cover showing embroidery products, product customization, and an online craft course.",
      width: 1200,
      height: 900,
      background: "#eedcc5",
      position: "50% 62%",
    },
    links: [
      {
        label: "anistudio.store",
        href: "https://anistudio.store/",
        description:
          "Public coming-soon website; the full platform is still in development.",
      },
    ],
    note: "Coming-soon site",
  },
];

export interface Role {
  start: string;
  end: string | null;
  role: string;
  company: string;
  location: string;
  /** Position in the git-graph timeline: the current role, the main line, or a parallel branch. */
  lane: "head" | "main" | "branch";
  description: string;
  details: string;
}

export const experience: readonly Role[] = [
  {
    start: "2023-01",
    end: null,
    role: "Web UI Developer",
    company: "Growin | Swissquote",
    location: "Braga, Portugal",
    lane: "head",
    description:
      "Frontend Developer at Growin, working for Swissquote on complex financial applications. Responsible for frontend features, business logic analysis, technical tasks, grooming sessions and onboarding new developers.",
    details:
      "Focused on maintainable, well-tested code, architecture, coding standards and gradually improving frontend performance.",
  },
  {
    start: "2019-08",
    end: "2022-10",
    role: "Web UI Developer",
    company: "Globant",
    location: "Rosario, Argentina",
    lane: "main",
    description:
      "Worked on React applications for real-time feedback, employee engagement and internal tools in agile teams. Started with bug fixes and improvements before taking part in larger features such as dashboards, suggestions and data visualizations.",
    details:
      "Contributed to React migrations, Storybook components, analytics improvements, unit testing, API integration and shared styling with SASS and BEM.",
  },
  {
    start: "2020-02",
    end: "2020-07",
    role: "Student Mentor",
    company: "Acámica",
    location: "Rosario, Argentina",
    lane: "branch",
    description:
      "Supported students in the frontend track of the Full Stack Developer program through live classes, technical explanations and guidance on frontend practices.",
    details:
      "Worked with HTML, CSS, JavaScript and React while developing communication and teaching skills through real-time problem solving.",
  },
];

export const principles = [
  {
    name: "understand-first",
    description:
      "Why something behaves the way it does, where a problem actually comes from, which patterns the codebase already established.",
  },
  {
    name: "simple-over-clever",
    description: "Simple, reusable solutions over unnecessary abstractions.",
  },
  {
    name: "accessible-by-default",
    description:
      "Accessibility and maintainability are part of the feature, not a follow-up.",
  },
  {
    name: "test-what-matters",
    description: "Testing the behavior that matters to the person using it.",
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

export const contactLinks = {
  email: "lacosta.code@gmail.com",
  github: "https://github.com/lacosta",
  linkedin: "https://www.linkedin.com/in/lacostadev/",
};
