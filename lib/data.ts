import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import ruScarletSelector from "@/public/ruScarletSelector.png";
import stampProject from "@/public/stampProject.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    companyName: "Rutgers OIT-EAS",
    description: [
      "Working on the development of Rutgers University’s web portal, which is used over 70,000 students and faculty across three regional campuses.",
      "Developing custom reusable and responsive components using React.js, which reduced development time by 30% and improving code maintainability by enabling component reuse across entire project.",
      "Resolved bugs and identified errors, leading to 15% improvement in application performance.",
      "Engineered dark mode features in the application increasing the user engagement by 20%.",
    ],
    icon: React.createElement(FaReact),
    date: "Feb 2024 - Present",
  },
  {
    title: "Front-End Developer",
    companyName: "Skillsvista",
    description: [
      "Designed and developed 3+ responsive and user-friendly web application components using Vue.js for over 2000+ monthly users.",
      "Leveraged Vuex for robust state management, enhancing data flow and maintaining application stability.",
      "Identified 5+ critical bugs within the website, leading to a reduction in 15% reduction in support tickets.",
      "Implemented UI/UX improvements which boosted the user engagement by 20%.",
    ],
    icon: React.createElement(FaVuejs),
    date: "July 2022 - Aug 2022",
  },
] as const;

export const projectsData = [
  {
    title: "STAMP",
    description:
      "STAMP is a drone-based software designed for advanced surveillance systems, providing comprehensive monitoring and enhanced security capabilities.",
    tags: ["React.js", "Python", "Flask", "Chakra-UI"],
    imageUrl: stampProject,
  },
  {
    title: "RU-ScarletSelector",
    description:
      "RU-ScarletSelector, a course recommender for Rutgers students, integrating past performance data to recommend optimal courses and real-time professor suggestions.",
    tags: ["React.js", "Python", "Flask", "Material-UI"],
    imageUrl: ruScarletSelector,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Postman",
  "Firebase",
  "Python",
  "Framer Motion",
  "C#",
  "C/C++",
  "Java",
  "R",
  "Figma",
] as const;
