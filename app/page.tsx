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
    <main className="max-w-[1024px] mx-auto px-6 md:px-4 lg:px-0 pb-40">
      <div></div>
      <Hero />
      <MyProjects />
      <Skills />
      <GetInTouch />
    </main>
  );
}
