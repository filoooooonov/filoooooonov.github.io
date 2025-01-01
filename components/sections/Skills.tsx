import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { DiScala } from "react-icons/di";

interface SkillsProps {
  className?: string;
}

const Skills = ({ className }: SkillsProps) => {
  return (
    <section id="skills" className={className}>
      <h2 className="animate-fade-up mb-8 sm:mb-16">My skills 🛠️</h2>
      <div className="flex flex-wrap gap-4 mt-8 mb-[200px] ">
        <span className="group skill-box">
          <RiNextjsFill
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          Next.js
        </span>
        <span className="group skill-box">
          <FaReact
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          React
        </span>
        <span className="group skill-box">
          <RiTailwindCssFill
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          Tailwind CSS
        </span>
        <span className="group skill-box">
          <SiDjango
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          Django
        </span>
        <span className="group skill-box">
          <IoLogoFirebase
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          Firebase
        </span>
        <span className="group skill-box">
          <FaPython
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          Python
        </span>
        <span className="group skill-box">
          <DiScala
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          Scala
        </span>
      </div>
    </section>
  );
};

export default Skills;
