import Image from "next/image";
import React from "react";

import { Project } from "@/components/sections/ProjectList";
import { RxOpenInNewWindow } from "react-icons/rx";

interface ProjectDemoHorizontalProps {
  project: Project;
}

const ProjectDemoHorizontal = ({ project }: ProjectDemoHorizontalProps) => {
  return (
    <div className="group flex flex-col sm:grid grid-cols-5 mb-12">
      <div className="col-span-3">
        <h3 className="mb-2 group-hover:text-primary transition duration-200">
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

      <div className="col-span-2 sm:pl-8">
        <Image
          src={project.image}
          alt={`${project.title} image`}
          className="mt-8 sm:mt-0 mx-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default ProjectDemoHorizontal;
