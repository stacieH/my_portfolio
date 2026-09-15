import type { Profile } from "./types";

export const profile: Profile = {
  name: "Harlene T. Jaramillos",
  shortName: "Harlene Jaramillos",
  title: "Front-End Developer | FE Team Lead | React Developer | Software Engineer",
  summary:
    "Front-End Developer and Team Lead with 7+ years of IT experience building scalable web and mobile applications. Experienced with Next.js, React, React Native, Redux, TypeScript, JavaScript, and Material UI.",
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
