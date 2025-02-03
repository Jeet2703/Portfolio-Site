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
  I am a passionate <span className="font-bold">software and web developer</span> with a strong interest in creating impactful solutions. With over two years of experience working with the <span className="font-bold">MERN stack</span>, I have developed and delivered multiple projects, both as a <span className="font-bold">full-stack</span> and <span className="font-bold">frontend developer</span>. I pride myself on being a <span className="font-bold">quick learner</span> and have successfully collaborated on <span className="font-bold">client-based projects</span>, ensuring timely delivery of high-quality results.
</p>
<p className="mb-3">
  I am currently pursuing my <span className="font-bold">Bachelor's in Technology (BTech)</span> at <span className="font-bold">Dwarkadas J Sanghvi College of Engineering</span>, with an expected graduation in <span className="font-bold">June 2025</span>. I began my career in the field by completing a <span className="font-bold">Diploma in Information Technology</span> from Shri Mafatlal Polytechnic, graduating in <span className="font-bold">July 2022</span>.
</p>
<p>
  Let's <span className="font-bold">collaborate</span> and bring your ideas to life with efficient, scalable, and user-friendly solutions!
</p>

    </motion.section>
  );
}
