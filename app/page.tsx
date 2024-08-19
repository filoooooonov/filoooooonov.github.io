"use client";

import GetInTouch from "@/components/sections/GetInTouch";
import Hero from "@/components/sections/Hero";
import MyProjects from "@/components/sections/MyProjects";
import Skills from "@/components/sections/Skills";
import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "@/components/utils/useIsVisible";

export default function Home() {
  const refHero = useRef<HTMLDivElement>(null);
  const isVisibleHero = useIsVisible(refHero);

  const refProjects = useRef<HTMLDivElement>(null);
  const isVisibleProjects = useIsVisible(refProjects);

  const refSkills = useRef<HTMLDivElement>(null);
  const isVisibleSkills = useIsVisible(refSkills);

  return (
    <main className="relative max-w-[1024px] mx-auto px-6 md:px-4 lg:px-0 pb-40 overflow-hidden md:overflow-visible">
      <div className="relative z-0">
        <div className="absolute -top-16 -left-32 w-[300px] h-[300px] bg-[#32222f] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-56 left-8 w-[500px] h-[500px] bg-[#FC378A] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute -top-56 left-48 w-[500px] h-[500px] bg-[#dda8ff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute -top-56 -right-16 w-[600px] h-[600px] bg-[#ff8b1f] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      </div>

      <Hero className="relative z-10 mb-[150px]" />
      <MyProjects />
      <Skills />
      <GetInTouch />
    </main>
  );
}
