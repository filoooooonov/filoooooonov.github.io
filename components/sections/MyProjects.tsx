import React from "react";
import { projects } from "@/components/sections/ProjectList";
import ProjectDemoHorizontal from "./ProjectDemoHorizontal";
import { motion } from "motion/react";

interface MyProjectProps {
  className?: string;
}

const MyProjects = ({ className }: MyProjectProps) => {
  return (
    <motion.section
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
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        className="mb-16 sm:mb-40"
      >
        My projects 🧑‍💻
      </motion.h2>

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
