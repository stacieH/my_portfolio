import type { Profile } from "./types";

export const profile: Profile = {
  name: "Harlene T. Jaramillos",
  shortName: "Harlene Jaramillos",
  title: "Front-End Developer | FE Team Lead | Software Engineer",
  summary:
    "Front-End Developer and Team Lead with 7+ years of IT experience building scalable web and mobile applications. Leads front-end teams, builds reusable components and shared packages, integrates APIs and payment functionality, and raises code quality through code reviews and coding standards. Uses AI-assisted development tools (Claude Code, GitHub Copilot) for planning, documentation, code generation, debugging, and issue resolution to broader Fullstack development capabilities.",
  location: "Calamba City, Laguna, Philippines",
  photo: {
    src: "/profile.jpg",
    alt: "Portrait of Harlene Jaramillos",
    width: 242,
    height: 252,
  },
  stats: [
    { value: "7+", label: "Years in IT" },
    { value: "Web + Mobile", label: "Cross-platform products" },
    { value: "Lead + Build", label: "Hands-on technical leadership" },
  ],
  links: {
    linkedin: "https://linkedin.com/in/harlene-jaramillos-726821121",
    github: "https://github.com/stacieH",
  },
  education: {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    school: "City College of Calamba",
    period: "2014 – 2018",
  },
};
