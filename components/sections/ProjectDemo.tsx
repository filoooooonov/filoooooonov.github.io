import Image, { StaticImageData } from "next/image";
import React from "react";

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
    <>
      <Image
        src={imagePath}
        alt={title}
        className="transition duration-500 ease-out hover:scale-[1.01] rounded-xl border-none"
      />
    </>
  );
};

export default ProjectDemo;
