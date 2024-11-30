import Image from "next/image";
import React from "react";

import { Project } from "@/components/sections/ProjectList";
import { RxOpenInNewWindow } from "react-icons/rx";

interface ProjectDemoHorizontalProps {
  project: Project;
}

const ProjectDemoHorizontal = ({ project }: ProjectDemoHorizontalProps) => {
  return (
    <div className="group flex flex-col sm:grid grid-cols-2 mb-16">
      <div className="">
        <h3 className="mb-4 group-hover:text-primary transition duration-200">
          <a
            href={project.link}
            target="_blank"
            className={`flex gap-4 items-center ${
              project.link && "cursor-pointer"
            }`}
          >
            {project.title}
            {project.link && <RxOpenInNewWindow />}
          </a>
        </h3>

        <p>{project.descriptionShort}</p>
        <div className="flex gap-2 mt-6 flex-wrap mb-4">
          {project.tags.map((tag, i) => {
            return (
              <div key={i} className="tag">
                {tag}
              </div>
            );
          })}
        </div>
      </div>

      <div className="sm:pl-8">
        <a href={project.link} target="_blank" className="cursor-pointer">
          <Image
            src={project.image}
            alt={`${project.title} image`}
            className="mt-8 sm:mt-0 mx-auto rounded-md"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectDemoHorizontal;
