import type { Certification, Course, LearningPath } from "./types";

export const learningPaths: LearningPath[] = [
  {
    title: "Become a Full-Stack Web Developer",
    provider: "LinkedIn Learning",
    date: "October 15, 2026",
    courses: [
      { title: "CSS Essential Training", date: "Oct 07, 2026" },
      { title: "JavaScript Essential Training", date: "Oct 07, 2026" },
      { title: "HTML Essential Training", date: "Oct 04, 2026" },
      { title: "Search Techniques for Web Developers", date: "Oct 15, 2026" },
      { title: "Learning ECMAScript 6+ (ES6+)", date: "Nov 07, 2020" },
      { title: "Git Essential Training", date: "Oct 09, 2026" },
      { title: "React Essential Training", date: "Oct 08, 2026" },
      { title: "Node.js Essential Training", date: "Oct 15, 2026" },
      { title: "SQL Essential Training", date: "Oct 15, 2026" },
      { title: "NoSQL Essential Training", date: "Oct 11, 2026" },
      { title: "Learning REST APIs", date: "Oct 13, 2026" },
      { title: "DevOps Foundations", date: "Oct 02, 2026" },
    ],
    certificateUrl: "https://drive.google.com/file/d/1RpfW3g3BGU6q8ePfy03dgDIi9u6-FXEM/view?usp=drive_link",
    linkedinUrl: "https://www.linkedin.com/learning/certificates/08593a99aa551483782c589b7b8c3c40d179b34879bc571bd408930c20329821?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BG8hQvrhHQY6wG5%2F4nBWWSw%3D%3D",
  },
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
    certificateUrl: "https://drive.google.com/file/d/1_3nZNXAQvYnO420x00I0Dkpap9jmesm7/view?usp=drive_link",
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
    title: "Creating a Collaborative Culture", 
    date: "Dec 26, 2023", 
    certificateUrl:"https://drive.google.com/file/d/1HKhY21OSuxRTWcLkbc_wnBi7oGRq53EJ/view?usp=drive_link",
  },
  { 
    title: "Learning Redux Toolkit", 
    date: "Feb 15, 2023", 
    certificateUrl:"https://drive.google.com/file/d/1Q7YgsJspDJ2hmiuTJdNjClumUFqE-xQ7/view?usp=drive_link",
    linkedinUrl:
    "https://www.linkedin.com/learning/certificates/984aefe713abbf5e295f8ac8b67692cca5c1312d621d669a5a353167bd68fe03"
  },
 { 
   title: "React: Server-Side Rendering", 
   date: "Feb 10, 2022",
   certificateUrl: "https://drive.google.com/file/d/1M68ov1J7b8PmbqxuHNO8HwN4TL166QbB/view?usp=drive_link"
 },
 { 
   title: "React: Design Patterns (2021)", 
   date: "Feb 02, 2022",
   certificateUrl: ""
 },
 { 
   title: "How to Train Your Brain for Maximum Growth", 
   date: "Jan 16, 2022",
   certificateUrl: "https://drive.google.com/file/d/1zAda3sLmLzsspT2Wpu0sG95ytap-zz40/view?usp=drive_link"
 },
 { 
   title: "Explore React.js Development", 
   date: "Feb 18, 2021",
   certificateUrl: "https://drive.google.com/file/d/1gK1LYwhnY31gAlv9odz8uMmfjqRJOGD0/view?usp=drive_link"
 },
  { 
    title: "Learning GitHub", 
    date: "Feb 15, 2021",
    certificateUrl: "https://drive.google.com/file/d/1uP1d2kqk21v2MUOd3e3zHHdnmz1ZcChG/view?usp=drive_link"
  },
  { 
    title: "Web Programming Foundations", 
    date: "Feb 14, 2021",
    certificateUrl: "https://drive.google.com/file/d/1lmdKdTXx4F6GSaaY0OfINbtw2pvI2Kg_/view?usp=drive_link"
  },
  { 
    title: "Overcoming Procrastination", 
    date: "Feb 09, 2021",
    certificateUrl: "https://drive.google.com/file/d/1XhviZFvOvUquH2yURf2afS4qMoZEKO6z/view?usp=drive_link" 
  },
  { 
    title: "Developing Resourcefulness", 
    date: "Feb 09, 2021",
    certificateUrl: "https://drive.google.com/file/d/1Gc8L5Vzt2sFOon7dRMwyOWtXRVkjjcDQ/view?usp=drive_link" 
  },
  { 
    title: "Building Resilience (2014)", 
    date: "Feb 09, 2021",
    certificateUrl: "https://drive.google.com/file/d/11Dc2xlxrP-QJDOcKKHy7OtzYGxej10XK/view?usp=drive_link" 
  },
  { 
    title: "Learning Java", 
    date: "Feb 09, 2021",
    certificateUrl: "https://drive.google.com/file/d/1gXsXA3ogNT1chVX48E-iMLHsXmIHHCQl/view?usp=drive_link" 
  },
  { 
    title: "Learning React.js", 
    date: "Feb 09, 2021",
    certificateUrl: "https://drive.google.com/file/d/1qy4noorffZoGejEPIOa_Mqsqz7MqBMpv/view?usp=drive_link" 
  },
  { 
    title: "How to Organize Your Time and Your Life", 
    date: "Jan 19, 2021",
    certificateUrl: "https://drive.google.com/file/d/1od_QJ34CDu1vvzewY2-3MQiO8N4C5fc-/view?usp=drive_link" 
  },
  { 
    title: "How to Crush Self-Doubt and Build Self-Confidence", 
    date: "Jan 19, 2021",
    certificateUrl: "https://drive.google.com/file/d/1DS0IrnnuZ6uzJIffJgPVEWL5hhUFXnkx/view?usp=drive_link" 
  },
  { 
    title: "Programming Foundations: Fundamentals", 
    date: "Jan 10, 2021",
    certificateUrl: "https://drive.google.com/file/d/1TpZvZS1S3m6iiUGLbEPYP8zl5vujcDrC/view?usp=drive_link" 
  },
  { 
    title: "Succeeding in Web Development: Full Stack and Front End", 
    date: "Dec 18, 2020",
    certificateUrl: "https://drive.google.com/file/d/1l0-zJeXbE6vivNasF2y5rHYxGIWFXiat/view?usp=drive_link" 
  },
  { 
    title: "How to Work Smarter, Not Harder: Save Time and Money and Increase Productivity", 
    date: "Nov 08, 2020",
    certificateUrl: "https://drive.google.com/file/d/1GSaA7LsEuOCBW3d3heEg1SjisYAIbhXw/view?usp=drive_link" 
  },
  { 
    title: "Self-Compassion: The Proven Power of Being Kind to Yourself (Blinkist Summary)", 
    date: "Nov 08, 2020",
    certificateUrl: "https://drive.google.com/file/d/18Tl5WC9YEvPUMMVaiNYRURc5BiEeyg5j/view?usp=drive_link" 
  },
  { 
    title: "Building RESTful APIs with Node.js and Express (2019)", 
    date: "Nov 08, 2020",
    certificateUrl: "https://drive.google.com/file/d/1XLu9uwXvi42usCQQSqc35DfUPVtoaW8K/view?usp=drive_link" 
  },
  { 
    title: "Introduction to Graphic Design", 
    date: "Nov 07, 2020",
    certificateUrl: "https://drive.google.com/file/d/1XWLstl9FZH-LLyjeisWsb9UC-NLvFWn9/view?usp=drive_link" 
  },
  { 
    title: "Learning ECMAScript 6+", 
    date: "Nov 07, 2020",
    certificateUrl: "https://drive.google.com/file/d/1PvgqD6FuFFiYEdGWjrzmd2MAF4jmsSz1/view?usp=drive_link" 
  },
  { 
    title: "Create a CRM Mobile Application with React Native (2019)", 
    date: "Nov 04, 2020",
    certificateUrl: "https://drive.google.com/file/d/1JRza_yrhep5gKu42y1zPHDBTDYqow3LQ/view?usp=drive_link"  
  },
  { 
    title: "Node.js Essential Training (2019)", 
    date: "Nov 04, 2020",
    certificateUrl: "https://drive.google.com/file/d/1MpLUZUtv5-gav306bCphGsp1YDgzKWex/view?usp=drive_link"  
  },
  { 
    title: "Learning React VR", 
    date: "Nov 04, 2020",
    certificateUrl: "https://drive.google.com/file/d/10l9JY7BCc1SEfVIzqouK4-e1qoGKKAaN/view?usp=drive_link"  
  },
  { 
    title: "React: Securing Applications", 
    date: "Nov 04, 2020",
    certificateUrl: "https://drive.google.com/file/d/1_6pCdb882wWi4X-tcTF5-cJliiYnclcS/view?usp=drive_link"  
  },
  { 
    title: "Asking for Feedback as an Employee", 
    date: "Nov 03, 2020",
    certificateUrl: "https://drive.google.com/file/d/15cSWY3e9MpueambIkqOQ5ZQ4NeoLIcMQ/view?usp=drive_link"  
  },
  { 
    title: "Design Thinking: Understanding the Process", 
    date: "Nov 02, 2020",
    certificateUrl: "https://drive.google.com/file/d/1TYYjsXBUTBQjbxFE283RKcdpESOAKgMS/view?usp=drive_link"  
  },
  { 
    title: "SEO for Social Media", 
    date: "Nov 02, 2020",
    certificateUrl: "https://drive.google.com/file/d/19AojGZJkrlxL2JEUSEa3LcGd6Mw80bwh/view?usp=drive_link"  
  },
  { 
    title: "Learning webpack 4", 
    date: "Nov 01, 2020",
    certificateUrl: "https://drive.google.com/file/d/1773iLQCD6CW3yL9fUKSC5E8Mgm2BsQEs/view?usp=drive_link"  
  },
  { 
    title: "React: Using TypeScript (2019)", 
    date: "Oct 16, 2020",
    certificateUrl: "https://drive.google.com/file/d/1JveMmCYOxkWm4CDVCLopWpD20XuFIyoH/view?usp=drive_link" 
  },
  { 
    title: "React: Testing and Debugging", 
    date: "Oct 14, 2020",
    certificateUrl: "https://drive.google.com/file/d/1-qOEHWSlbxOoyGwIYsp7f6e4c0_s-8Jl/view?usp=drive_link" 
  },
  { 
    title: "Webpack for React Applications", 
    date: "Oct 12, 2020",
    certificateUrl: "https://drive.google.com/file/d/1xlZUQQUXnUgWIE_ttROTOX659H-czcNk/view?usp=drive_link" 
  },
  { 
    title: "Stop Stressing and Keep Moving Forward", 
    date: "Oct 12, 2020",
    certificateUrl: "https://drive.google.com/file/d/1OZktD0q2A7vtGoscmJ6yARhnge39STt1/view?usp=drive_link" 
  },
  { 
    title: "Succeeding in a New Job", 
    date: "Oct 09, 2020",
    certificateUrl: "https://drive.google.com/file/d/1l9TZPcecsL0epAhmAiRRa2TdqeNVbqko/view?usp=drive_link" 
  },
  { 
    title: "The Six Morning Habits of High Performers", 
    date: "Sep 23, 2020",
    certificateUrl: "" 
  },
];
