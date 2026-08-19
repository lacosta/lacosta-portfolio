export const projects = [
  {
    title: "PedidosYa",
    category: "Fintech · 2024",
    description:
      "Checkout work and reusable components for a payment flow with many states and edge cases.",
    tags: ["React", "TypeScript", "Design system"],
    tone: "blue",
  },
  {
    title: "Pulse",
    category: "SaaS · 2023",
    description:
      "A metrics dashboard where dense data needs to stay readable, consistent and useful.",
    tags: ["React", "Data-heavy UI", "UX/UI"],
    tone: "sand",
  },
  {
    title: "Civic Lab",
    category: "Platform · 2022",
    description:
      "Components and prototypes for turning complex processes into clearer product flows.",
    tags: ["React", "Accessibility", "Figma"],
    tone: "green",
  },
] as const;

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
