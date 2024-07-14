import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectDemoProps {
  imagePath: StaticImageData | string;
  title: string;
  tags: string[];
  description: string;
}

const ProjectDemo = ({
  imagePath,
  title,
  tags,
  description,
}: ProjectDemoProps) => {
  return (
    <Dialog>
      <div className="flex flex-col group cursor-pointer">
        {/* Project demo */}
        <DialogTrigger asChild>
          <div>
            <Image
              src={imagePath}
              alt={`${title} image`}
              className="transition duration-500 ease-out hover:scale-[1.02] rounded-xl mb-8 h-[300px] object-cover"
            />
            <h3 className="mb-2 group-hover:text-primary transition duration-300">
              {title}
            </h3>
            <div className="flex gap-2 text-white mb-6">
              {tags.map((tag, i) => {
                return (
                  <div key={i} className="tag ">
                    {tag}
                  </div>
                );
              })}
            </div>
            <p className="text-gray-400">{description}</p>
            <span className="project-link mt-4 flex items-center gap-2">
              Read more <FaArrowRight />
            </span>
          </div>
        </DialogTrigger>

        {/* Inside the popup */}
        <DialogContent className="sm:max-w-[1024px] bg-[#101721df] border-[#45417136] opacity-1">
          <div className="px-12 pt-12">
            <Image
              src={imagePath}
              alt={`${title} image`}
              className="rounded-xl mb-8"
            />
          </div>

          <DialogTitle className="text-white">{title}</DialogTitle>
          <div className="flex gap-2">
            {tags.map((tag, i) => {
              return (
                <div key={i} className="tag ">
                  {tag}
                </div>
              );
            })}
          </div>

          <p className="text-zinc-300">{description}</p>

          <DialogClose asChild>
            <button
              type="submit"
              className="project-link border-none border-0 mt-12 w-max mx-auto"
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
