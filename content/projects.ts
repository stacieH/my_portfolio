import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "login-widget",
    title: "login-widget",
    summary:
      "A customizable React login component published as an npm package, with built-in validation, dark theme, icon slots, social login buttons, and a password visibility toggle.",
    stack: ["React", "TypeScript", "Vite", "Storybook"],
    features: [
      "Published as an npm package",
      "Built-in validation",
      "Dark theme",
      "Icon slots",
      "Social login buttons",
      "Password visibility toggle",
    ],
    image: {
      src: "/projects/login-widget.png",
      alt: "login-widget UI screenshot",
      width: 1280,
      height: 900,
    },
    github: "https://github.com/stacieH/widgets/tree/login-widget",
    liveUrl: "https://widgets-git-login-widget-staciehs-projects.vercel.app",
  },
  {
    slug: "cinder-and-salt",
    title: "Cinder & Salt",
    summary:
      "A restaurant website and online ordering portal: a one-page site with scroll-driven motion, plus pickup and delivery ordering, checkout, order tracking, and customer accounts running on demo data.",
    stack: ["Next.js", "React", "TypeScript", "TanStack Query", "Playwright"],
    features: [
      "One-page restaurant site with GSAP scroll animations and smooth scrolling",
      "Full menu with sticky course navigation, gallery lightbox, and a Google Maps venue pin",
      "Pickup or delivery ordering with dish options and a cart with live price quotes",
      "Checkout with scheduled time slots, per-field validation, and a demo payment page",
      "Order tracking with a status timeline and guest cancellation",
      "Customer accounts: registration, email verification, address book, and order history",
      "Demo console with an email outbox and failure scenarios",
      "Unit tests with Jest and end-to-end tests with Playwright",
    ],
    image: {
      src: "/projects/cinder-and-salt.png",
      alt: "Cinder & Salt restaurant site UI screenshot",
      width: 1440,
      height: 1000,
    },
    github: "https://github.com/stacieH/ecom_web/tree/restaurant-site",
    liveUrl: "https://cinder-salt-ecom.vercel.app",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): { previous?: Project; next?: Project } {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return {};
  return { previous: projects[index - 1], next: projects[index + 1] };
}
