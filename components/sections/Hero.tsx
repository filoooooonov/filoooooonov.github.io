import Image from "next/image";
import React from "react";
import me from "@/public/me.jpeg";
import { IoLocationSharp } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import ContactPopup from "../ui/contact-popup";
import { motion } from "motion/react";
import { Tilt } from "../ui/tilt";
import { TextEffect } from "../ui/text-effect";
import Link from "next/link";
import { Button } from "../ui/button";
import ProjectCards from "./ProjectCards";
import TimeInHelsinki from "../ui/TimeInHelsinki";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className="relative z-10 mb-[150px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        className="mb-20 mt-10"
      >
        <Image
          src={me}
          alt="Profile photo"
          className="rounded-full aspect-square object-cover size-12"
        />

        <h3 className="text-neutral-800 text-base mt-2">Aleksei Filonov</h3>
        <p className="text-neutral-600 text-sm">Website Developer</p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        className="space-y-6"
      >
        <h1>Your business deserves a proper website.</h1>
        <p className="text-sm max-w-md">
          You have 10 seconds to impress your website's visitor. And a WordPress
          template won't do it. A professional business requires a professional
          website - and I know exactly how to make you stand out.
        </p>
        <ProjectCards />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
      >
        <div className="flex flex-row gap-4 mt-12">
          <a
            href="https://cal.com/aleksei-filonov/intro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default">Get Started</Button>
          </a>

          <a href="mailto:alexfiloonov@gmail.com">
            <Button variant="secondary">I don't like calls</Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
