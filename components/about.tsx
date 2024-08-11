"use client";

import React from "react";
import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
      id="about"
    >
      <SectionHeader>About me</SectionHeader>
      <p className="mb-3">
        I'm a skilled <span className="font-bold">software developer</span> with
        experience in <span className="font-bold">TypeScript</span> and{" "}
        <span className="font-bold">JavaScript</span>, and expertise in
        frameworks like <span className="font-bold">React.js</span> and{" "}
        <span className="font-bold">Node.js</span>. I'm a{" "}
        <span className="font-bold">quick learner</span> and collaborate closely
        with clients to create{" "}
        <span className="font-bold">efficient, scalable,</span> and
        <span className="font-bold"> user-friendly</span> solutions that solve
        real-world problems.
      </p>
      <p className="mb-3">
        I'm currently pursuing a Bachelors in{" "}
        <span className="font-bold">Computer Science</span> from{" "}
        <span className="font-bold text-red-600">
          Rutgers University-New Brunswick
        </span>{" "}
        with expected graduation in May 2027. I started my career in Computer
        Science with a Diploma in{" "}
        <span className="font-bold">Information Technology</span> from Shri
        Bhagubhai Mafatlal Polytechnic, graduated in June 2023.
      </p>
      <p>
        Let's <span className="font-bold">work together</span> to bring your
        ideas to life!
      </p>
    </motion.section>
  );
}
