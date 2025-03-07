"use client";

import React, { useState } from "react";
import { projects } from "@/components/sections/ProjectList";
import ProjectDemoHorizontal from "./ProjectDemoHorizontal";
import { motion, AnimatePresence } from "framer-motion";
import { TextEffect } from "../ui/text-effect";

interface MyProjectProps {
  className?: string;
}

const MyProjects = ({ className }: MyProjectProps) => {
  // Get first 4 and the extra projects separately
  const firstProjects = projects.slice(0, 4);
  const extraProjects = projects.slice(4);

  const [showExtra, setShowExtra] = useState(false);

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      className={className}
    >
      <TextEffect
        preset="fade-in-blur"
        speedReveal={1.1}
        speedSegment={0.3}
        as="h2"
        per="word"
        className="mb-16 sm:mb-20"
      >
        Recent projects ✨
      </TextEffect>

      {/* Always show the first 4 projects */}
      <motion.div layout className="grid grid-cols-2 gap-12">
        {firstProjects.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectDemoHorizontal project={project} />
          </React.Fragment>
        ))}
      </motion.div>

      {/* Extra projects (only if there are any) */}
      {/* {extraProjects.length > 0 && (
        <>
          <AnimatePresence>
            {showExtra && (
              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mt-8 grid grid-cols-2 gap-12"
              >
                {extraProjects.map((project, index) => (
                  <React.Fragment key={index}>
                    <ProjectDemoHorizontal project={project} />
                  </React.Fragment>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowExtra(!showExtra)}
              className="rounded-2xl w-full py-3 bg-stone-900/50 hover:bg-stone-800/50 text-stone-500 transition duration-300"
            >
              {showExtra ? "Hide" : "View More"}
            </button>
          </div>
        </>
      )} */}
    </motion.section>
  );
};

export default MyProjects;
