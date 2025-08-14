"use client";

import Hero from "@/components/sections/Hero";
import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "@/components/utils/useIsVisible";
import { motion } from "motion/react";
import Footer from "@/components/sections/Footer";
import Features from "@/components/sections/Features";
import AboutMe from "@/components/sections/AboutMe";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  const refHero = useRef<HTMLDivElement>(null);
  const isVisibleHero = useIsVisible(refHero);

  const refProjects = useRef<HTMLDivElement>(null);
  const isVisibleProjects = useIsVisible(refProjects);

  const refSkills = useRef<HTMLDivElement>(null);
  const isVisibleSkills = useIsVisible(refSkills);

  return (
    <motion.main
      animate={{ opacity: 1 }}
      className="relative main overflow-x-hidden md:overflow-visible"
    >
      {/* Noisy overlay */}
      <div className="z-10 overlay"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Hero />
        <Features />
        <Testimonials />
        <AboutMe />
      </motion.div>
    </motion.main>
  );
}
