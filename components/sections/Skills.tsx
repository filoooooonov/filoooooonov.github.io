import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaPython } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <h2>My tools and skills 🛠️</h2>
      <div className="flex gap-4 mt-8 mb-20">
        <span className="group bg-box text-zinc-400 hover:text-zinc-200 transition duration-200 rounded-xl p-4 flex items-center gap-4 select-none">
          <RiNextjsFill
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          Next.js
        </span>
        <span className="group bg-box text-zinc-400 hover:text-zinc-200 transition duration-200 rounded-xl p-4 flex items-center gap-4 select-none">
          <FaReact
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          React
        </span>
        <span className="group bg-box text-zinc-400 hover:text-zinc-200 transition duration-200 rounded-xl p-4 flex items-center gap-4 select-none">
          <RiTailwindCssFill
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          Tailwind CSS
        </span>
        <span className="group bg-box text-zinc-400 hover:text-zinc-200 transition duration-200 rounded-xl p-4 flex items-center gap-4 select-none">
          <SiDjango
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          Django
        </span>
        <span className="group bg-box text-zinc-400 hover:text-zinc-200 transition duration-200 rounded-xl p-4 flex items-center gap-4 select-none ">
          <IoLogoFirebase
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          Firebase
        </span>
        <span className="group bg-box text-zinc-400 hover:text-zinc-200 transition duration-200 rounded-xl p-4 flex items-center gap-4 select-none ">
          <FaPython
            className="group-hover:fill-primary transition duration-200"
            size={30}
          />
          Python
        </span>
      </div>
    </>
  );
};

export default Skills;
