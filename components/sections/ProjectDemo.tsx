import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Project } from "./ProjectList";

interface ProjectDemoProps {
  project: Project;
}

const ProjectDemo = ({ project }: ProjectDemoProps) => {
  return (
    <Dialog>
      <div className="flex flex-col group cursor-pointer">
        {/* Project demo */}
        <DialogTrigger asChild>
          <div>
            <Image
              src={project.image}
              alt={`${project.title} image`}
              className="transition duration-500 ease-out hover:scale-[1.02] rounded-xl mb-8 h-[300px] object-cover"
            />
            <h3 className="mb-2 group-hover:text-primary transition duration-300">
              {project.title}
            </h3>
            <div className="flex gap-2 text-white mb-6">
              {project.tags.map((tag, i) => {
                return (
                  <div key={i} className="tag ">
                    {tag}
                  </div>
                );
              })}
            </div>
            <p className="text-gray-400">{project.descriptionShort}</p>
            <span className="project-link mt-4 flex items-center gap-2">
              Read more <FaArrowRight />
            </span>
          </div>
        </DialogTrigger>

        {/* Inside the popup */}
        <DialogContent className="w-[90%] sm:max-w-[1024px] bg-[#101721df] border-[#45417136] opacity-1">
          <div className=" pt-6 sm:px-12 sm:pt-12">
            <Image
              src={project.image}
              alt={`${project.title} image`}
              className="rounded-xl mb-8"
            />
          </div>

          <DialogTitle className="text-white">{project.title}</DialogTitle>
          <div className="flex gap-2">
            {project.tags.map((tag, i) => {
              return (
                <div key={i} className="tag ">
                  {tag}
                </div>
              );
            })}
          </div>

          <p className="text-zinc-300">{project.descriptionLong}</p>

          <DialogClose asChild>
            <button
              type="submit"
              className="project-link border-none border-0 mt-12 w-max mx-auto "
            >
              Go back
            </button>
          </DialogClose>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default ProjectDemo;
