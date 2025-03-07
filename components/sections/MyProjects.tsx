import React from "react";
import { projects } from "@/components/sections/ProjectList";
import ProjectDemoHorizontal from "./ProjectDemoHorizontal";
import { motion } from "motion/react";
import { TextEffect } from "../ui/text-effect";

interface MyProjectProps {
  className?: string;
}

const MyProjects = ({ className }: MyProjectProps) => {
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
        className="mb-16 sm:mb-32"
      >
        Recent projects ✨
      </TextEffect>

      <div>
        {projects.map((project, index) => {
          return (
            <React.Fragment key={index}>
              <ProjectDemoHorizontal project={project} />
            </React.Fragment>
          );
        })}
      </div>
    </motion.section>
  );
};

export default MyProjects;
