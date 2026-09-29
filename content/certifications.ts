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
  { 
    title: "AWS Technical Professional (Digital)", 
    issuer: "AWS Training and Certification", 
    date: "May 29, 2019",
    certificateUrl: "https://drive.google.com/file/d/1NHhcxZzPM2q6nJTH5A8FdshfdNUzqX69/view?usp=drive_link",
  },
  { 
    title: "React (Basic)", 
    issuer: "HackerRank", 
    date: "Sep 16, 2020",
    certificateUrl: "https://drive.google.com/file/d/1qens8Pohiz63CkQya-iGsOkOMMGUzZbM/view?usp=drive_link",
  },
];

export const courses: Course[] = [
  {
    title: "Docker for Developers",
    date: "Sep 29, 2026",
    certificateUrl: "https://drive.google.com/file/d/1r-2iA8NtfA8CUNGRPSpq7Q5eeS94VOHr/view?usp=drivesdk",
    linkedinUrl:
      "https://www.linkedin.com/learning/certificates/64d123401afd05964522d9548015e98cb3a62ed17f5ed3d98b6bab6b7fd5798e",
  },
  { 
    title: "Mastering Nest.js: Build Scalable Applications with Mastery in Nest.js Framework", 
    date: "Sep 27, 2026", 
    certificateUrl: "https://drive.google.com/file/d/1EFhnNfYs7Lp-OcfEmZCwXxI283cwTZuj/view?usp=drive_link",
    linkedinUrl:
    "https://www.linkedin.com/learning/certificates/835e94df53c20ec42b37a831d728307cfc54e9ab67a37a27f6232b43f4424177"
  },
  { 
    title: "Programming Foundations: Secure Coding (2018)", 
    date: "Jul 23, 2025", 
    certificateUrl: "https://drive.google.com/file/d/1uP1AkdW7FDuhx9eXvsBhmPiTnfeJezAF/view?usp=drive_link",
    linkedinUrl:
    "https://www.linkedin.com/learning/certificates/100e0924c1f7820e324361d6e662db8514f4983fa54a1635c546af0645f72203"
  },
 { 
   title: "Agile Software Development", 
   date: "Oct 29, 2024",
   certificateUrl: "https://drive.google.com/file/d/1Lah1hu1pfBo6QTGhFLdF_djHLwC3aPaF/view?usp=drive_link"
 },
 { 
   title: "The Anxious Achiever: Turn your fears into your superpower (Book Bite)", 
   date: "May 07, 2024",
   certificateUrl: "https://drive.google.com/file/d/19rXSkNN-UkLsnDVtrQpa0-GEKPM2ugy4/view?usp=drive_link"
 },
 { 
   title: "Strategic Agility (Beta)", 
   date: "May 06, 2024",
   certificateUrl: "https://drive.google.com/file/d/1zMPT7GmTG-Ky0aYVMwCyrqxh25fiw-3K/view?usp=drive_link"
 },
 { 
   title: "Good habits, Bad habits (Blinkist Summary)", 
   date: "April 28, 2024",
   certificateUrl: "https://drive.google.com/file/d/1FfyIex-D8Kj_rJq_2S6-aTT2Y3psCRob/view?usp=drive_link"
 },
 { 
   title: "Advanced Agile: The team's mindset", 
   date: "Feb 13, 2024",
   certificateUrl: "https://drive.google.com/file/d/1lZ5vmNocArOiEHxwrNhvlipxQ1-vCEcc/view?usp=drive_link"
 },
  { 
    title: "Learning Redux Toolkit", 
    date: "Feb 15, 2023", 
    certificateUrl:"https://drive.google.com/file/d/1Q7YgsJspDJ2hmiuTJdNjClumUFqE-xQ7/view?usp=drive_link",
    linkedinUrl:
    "https://www.linkedin.com/learning/certificates/984aefe713abbf5e295f8ac8b67692cca5c1312d621d669a5a353167bd68fe03"
  },
 { 
   title: "Building RESTful APIs with Node.js and Express", 
   date: "Nov 08, 2021",
   certificateUrl: ""
 },
  { 
    title: "React: Using TypeScript", 
    date: "Oct 16, 2021",
    certificateUrl: ""
  },
  { 
    title: "React: Testing and Debugging", 
    date: "Oct 14, 2021",
    certificateUrl: ""
  },
 { 
   title: "Explore React.js Development", 
   date: "Feb 18, 2021",
   certificateUrl: ""
 },
  { 
    title: "Learning GitHub", 
    date: "Feb 15, 2021",
    certificateUrl: ""
  },
  { 
    title: "Learning Java", 
    date: "Feb 09, 2021",
    certificateUrl: "" 
  },
  { 
    title: "Learning React.js", 
    date: "Feb 09, 2021",
    certificateUrl: "" 
  },
  { 
    title: "Learning ECMAScript 6+", 
    date: "Nov 07, 2020",
    certificateUrl: "" 
  },
  { 
    title: "Learning webpack 4", 
    date: "Nov 01, 2020",
    certificateUrl: ""  },
  { 
    title: "Webpack for React Applications", 
    date: "Oct 12, 2020",
    certificateUrl: "" 
  },
];
