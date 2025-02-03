"use client";

import Image from "next/image";
import React from "react";
import tanayImage from "@/public/tanayImage.png";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 sm:mt-10 mt-20 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: "0.2" }}
          >
            <Image
              src={tanayImage}
              width={192}
              height={192}
              quality="95"
              priority={true}
              alt="Tanay"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.4] sm:text-4xl"
      >
        <span className="font-bold">Hello, I'm Jeet Shah, </span> a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">a passion for coding</span> and building{" "}
        <span className="font-bold italic">web applications.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/TanayResume.pdf"
          className="group bg-white text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-100 transition cursor-pointer borderBlack dark:text-white/60 dark:bg-white/30"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/tanaydesai1510/"
          target="_blank"
          className="bg-white text-gray-950 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:text-white/60 dark:bg-white/30"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/TanayDesai-1510"
          target="_blank"
          className="bg-white text-gray-950 p-4 flex items-center gap-2 text-[1.19rem] rounded-full outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-105 active:scale-105 transition cursor-pointer border-black/10 dark:text-white/60 dark:bg-white/30"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
