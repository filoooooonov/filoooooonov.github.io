"use client";

import Image from "next/image";
import React from "react";
import { Project } from "@/components/sections/ProjectList";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";

interface ProjectDemoVerticalProps {
  project: Project;
}

const ProjectDemoVertical = ({ project }: ProjectDemoVerticalProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, y: -30 },
        hidden: { opacity: 0, y: 0 },
      }}
      className="group flex flex-col mb-4"
    >
      {/* Image on top */}
      <div className="mb-4">
        <a href={project.link} target="_blank" className="cursor-pointer">
          <Image
            src={project.image}
            alt={`${project.title} image`}
            className="w-full rounded-xl group-hover:scale-[0.99] duration-300"
          />
        </a>
      </div>

      {/* Title, description, and tags below */}
      <div className="px-4">
        <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition duration-200">
          <a
            href={project.link}
            target="_blank"
            className="flex font-medium items-center gap-2"
          >
            {project.title}
            {project.link && <RxOpenInNewWindow />}
          </a>
        </h3>
        <p className="text-[#a99b8c] mb-4">{project.descriptionShort}</p>
        {/* <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag, i) => (
            <div key={i} className="tag">
              {tag}
            </div>
          ))}
        </div> */}
      </div>
    </motion.div>
  );
};

export default ProjectDemoVertical;
