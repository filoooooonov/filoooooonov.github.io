import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import ProjectCards from "./ProjectCards";
import PortfolioGrid from "./Portfolio";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className="relative px-6 z-10 mb-[150px]">
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
        {/* <PortfolioGrid /> */}
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
            <Button variant="default">Book a call</Button>
          </a>

          <a href="mailto:contact@alekseifilonov.com">
            <Button variant="secondary">I don't like calls</Button>
          </a>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-lime-500"></span>
          </span>
          <p className="text-sm">1 spot left for September</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
