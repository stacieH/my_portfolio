import type { Certification, Course, LearningPath } from "./types";

export const learningPaths: LearningPath[] = [
  {
    title: "Become a React Developer",
    provider: "LinkedIn Learning",
    date: "Feb 18, 2021",
    courses: [
      { title: "React.js Essential Training", date: "Feb 08, 2021" },
      { title: "React.js: Building an Interface", date: "Feb 17, 2021" },
      { title: "React: Creating and Hosting a Full-Stack Site", date: "Nov 18, 2021" },
      { title: "React: Ecosystems", date: "Nov 02, 2020" },
    ],
  },
  {
    title: "Become a React Native Developer",
    provider: "LinkedIn Learning",
    date: "Nov 14, 2020",
    courses: [
      { title: "React Native Essential Training (2017)", date: "Nov 03, 2020" },
      { title: "Create a CRM Mobile Application with React Native", date: "Nov 04, 2020" },
      { title: "React Native Ecosystem and Workflow", date: "Nov 03, 2020" },
      { title: "Learning React Native", date: "Oct 18, 2020" },
    ],
  },
];

export const certifications: Certification[] = [
  { title: "AWS Technical Professional (Digital)", issuer: "AWS Training and Certification", date: "May 29, 2019" },
  { title: "React (Basic)", issuer: "HackerRank", date: "Sep 16, 2020" },
];

export const courses: Course[] = [
  { title: "Building RESTful APIs with Node.js and Express", date: "Nov 08, 2021" },
  { title: "React: Using TypeScript", date: "Oct 16, 2021" },
  { title: "React: Testing and Debugging", date: "Oct 14, 2021" },
  { title: "Learning GitHub", date: "Feb 15, 2021" },
  { title: "Learning Java", date: "Feb 09, 2021" },
  { title: "Learning React.js", date: "Feb 09, 2021" },
  { title: "Learning ECMAScript 6+", date: "Nov 07, 2020" },
  { title: "Learning webpack 4", date: "Nov 01, 2020" },
  { title: "Webpack for React Applications", date: "Oct 12, 2020" },
];
