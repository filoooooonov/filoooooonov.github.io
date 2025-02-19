import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { DiScala } from "react-icons/di";
import { motion } from "motion/react";
import { TextEffect } from "../ui/text-effect";

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
  const [trigger, setTrigger] = React.useState(false);

  return (
    <section id="skills" className={className}>
      <TextEffect
        preset="fade-in-blur"
        speedReveal={1.1}
        speedSegment={0.3}
        as="h2"
        className="mb-16"
        trigger={trigger}
      >
        My skills &#x1F527;
      </TextEffect>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "0px 0px -100px 0px",
          amount: 0.3,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.2,
            },
          },
          hidden: { opacity: 0, y: 10 },
        }}
        className="flex flex-wrap gap-4 mt-8 mb-[200px]"
        onAnimationStart={() => setTrigger(true)}
      >
        {skills.map((skill, index) => (
          <span key={index} className="group skill-box">
            <skill.icon
              className="group-hover:fill-primary transition duration-200"
              size={30}
            />
            {skill.name}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
