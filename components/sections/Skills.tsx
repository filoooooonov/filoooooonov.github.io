import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { DiScala } from "react-icons/di";
import { motion } from "motion/react";

interface SkillsProps {
  className?: string;
}

const skills = [
  { name: "Next.js", icon: RiNextjsFill },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "Django", icon: SiDjango },
  { name: "Firebase", icon: IoLogoFirebase },
  { name: "Python", icon: FaPython },
  { name: "Scala", icon: DiScala },
];

const Skills = ({ className }: SkillsProps) => {
  return (
    <section id="skills" className={className}>
      <h2 className="animate-fade-up mb-8 sm:mb-16">My skills 🛠️</h2>
      <div className="flex flex-wrap gap-4 mt-8 mb-[200px] ">
        {skills.map((skill, index) => (
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: index / 10 }}
            variants={{
              visible: { opacity: 1, y: 5 },
              hidden: { opacity: 0, y: 5 },
            }}
            key={index}
            className="group skill-box"
          >
            <skill.icon
              className="group-hover:fill-primary transition duration-200"
              size={30}
            />
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
