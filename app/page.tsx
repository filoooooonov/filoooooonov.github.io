"use client";

import GetInTouch from "@/components/sections/GetInTouch";
import Hero from "@/components/sections/Hero";
import MyProjects from "@/components/sections/MyProjects";
import Skills from "@/components/sections/Skills";
import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "@/components/utils/useIsVisible";
import Contacts from "@/components/sections/contacts";
import { motion } from "motion/react";

export default function Home() {
  const refHero = useRef<HTMLDivElement>(null);
  const isVisibleHero = useIsVisible(refHero);

  const refProjects = useRef<HTMLDivElement>(null);
  const isVisibleProjects = useIsVisible(refProjects);

  const refSkills = useRef<HTMLDivElement>(null);
  const isVisibleSkills = useIsVisible(refSkills);

  const year = new Date().getFullYear();

  return (
    <motion.main
      animate={{ opacity: 1 }}
      className="relative main overflow-hidden"
    >
      {/* Noisy overlay */}
      {/* <div className="z-10 overlay"></div> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="max-w-[1024px] mx-auto px-6 md:px-4 lg:px-0 pb-20">
          {/* Blury background */}
          <div className="relative z-0">
            <div className="absolute top-12 -left-24 w-[300px] h-[300px] bg-[#ffbd22e3] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-56 left-8 w-[500px] h-[500px] bg-[#FC378A] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
            <div className="absolute -top-56 left-48 w-[500px] h-[500px] bg-[#dda8ff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            <div className="absolute -top-56 -right-16 w-[600px] h-[600px] bg-[#ffa21f] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-56 right-24 w-[500px] h-[500px] bg-[#963a85] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            {/* <div className="absolute top-16 -right-48 w-[300px] h-[300px] bg-[#642559] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div> */}
          </div>
          <Hero className="relative z-10 mb-[150px]" />
          <MyProjects className="relative z-10 mb-40" />
          {/* <Skills className="relative z-10" /> */}
          {/* <GetInTouch className="relative z-10" /> */}

          <Contacts className="relative z-10" />
        </div>
        <div className="w-full flex flex-col justify-center items-center pb-10 pt-20 relative">
          <span className="text-[#4d4038] text-sm mx-auto z-10">
            © {year} Aleksei Filonov. All rights reserved.
          </span>
          <div className="w-full bg-gradient-to-t from-[#1f1913] to-transparent h-[500px] absolute bottom-0"></div>
        </div>
      </motion.div>
    </motion.main>
  );
}
