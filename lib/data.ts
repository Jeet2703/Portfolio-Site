import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import project1 from "@/public/Project1.png";
import project2 from "@/public/Project2.png";

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
    title: "Frontend Developer",
    companyName: "Altiss Advance Tech Private Limited - XIRCLS",
    description: [
      "Developed WhatsApp templates using React, Bootstrap classes, and API Integration for client communication, enabling merchants to send marketing and utility messages.",
      "Integrated billing functionalities with multiple APIs and Razorpay for secure and efficient merchant payments.",
      " Built a global meeting scheduler using React Props, integrated multiple APIs, and implemented email notifications that adjust for different time zones, enhancing international client coordination.",
    ],
    icon: React.createElement(FaReact),
    date: "June 2024 - September 2024",
  },
  {
    title: "Full Stack Developer",
    companyName: "Space Agency",
    description: [
      "Tasked with working on the Estimation Ring Project, a B2B platform; built and integrated APIs that estimated ring prices based on various parameters.",
      "Connected the backend to a MongoDB database using Express.js; stored ring parameters and ensured seamless data flow between the backend and database.",
    ],
    icon: React.createElement(FaReact),
    date: "January 2024 - March 2024",
  },
  {
    title: "Frontend Developer",
    companyName: "Archer Print Innovations",
    description: [
      "I designed a responsive user interface using HTML, CSS, and Bootstrap4.",
      "This UI allowed users to add products to their cart and customize them based on their preferences.",
      "I also used JavaScript to manage product details.",
    ],
    icon: React.createElement(FaHtml5),
    date: "July 2021 - August 2021",
  },
] as const;

export const projectsData = [
  {
    title: "OptiFlow",
    description:
      "Designed an Agile project featuring task management, sprint planning, Kanban methodology, and visual analytics for efficient project execution and tracking.",
    tags: ["React.js", "Firebase", "Chatbot"],
    imageUrl: project1,
  },
  {
    title: "Gemesis",
    description:
      "Developed a MERN stack solution for diamond merchants, automating stock management, invoicing, PDF uploads, and securing software with copyright.",
      tags: ["React.js", "Express.js", "Node.js", "MongoDB"],
    imageUrl: project2,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  // "TypeScript",
  "React.js",
  // "Vue.js",
  // "Next.js",
  "Node.js",
  "Git",
  // "Tailwind CSS",
  "MongoDB",
  // "Redux",
  "Express",
  "MySQL",
  "Postman",
  "Firebase",
  "Python",
  // "Framer Motion",
  // "C#",
  "C/C++",
  "Java",
  // "R",
  // "Figma",
] as const;
