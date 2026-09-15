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
  },
  // {
  //   slug: "food-catalog",
  //   title: "Food Catalog",
  //   summary:
  //     "A food-ordering catalog app to browse dishes from multiple restaurants, filter, sort, and search the menu, save favourites, manage a persistent cart, and complete checkout.",
  //   stack: ["Next.js", "React", "TypeScript", "Jest"],
  //   features: [
  //     "Browse dishes from multiple restaurants",
  //     "Filter, sort, and search the menu",
  //     "Save favourites",
  //     "Persistent cart",
  //     "Checkout flow",
  //   ],
  //   image: {
  //     src: "/projects/food-catalog.png",
  //     alt: "Food Catalog app UI screenshot",
  //     width: 1440,
  //     height: 1000,
  //   },
  //   github: "https://github.com/stacieH/food/tree/redesign",
  // },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): { previous?: Project; next?: Project } {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return {};
  return { previous: projects[index - 1], next: projects[index + 1] };
}
