import Image from "next/image";
import React from "react";
import me from "@/public/me.jpeg";
import { IoLocationSharp } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import ContactPopup from "../ui/contact-popup";
import { motion } from "motion/react";
import { Tilt } from "../ui/tilt";
import { TextEffect } from "../ui/text-effect";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        className="flex flex-col lg:flex-row justify-between pt-[5vh] sm:pt-[12vh] pb-20 w-auto"
      >
        <Image
          src={me}
          alt="Profile photo"
          className="rounded-full aspect-square object-cover max-w-[150px] sm:max-w-[200px] mx-auto lg:mx-0"
        />

        {/* INFO ABOUT ME */}
        <div className="space-y-2 max-w-[600px] md:mx-auto lg:mx-0 flex flex-col justify-center mt-20 lg:mt-0">
          <TextEffect
            preset="fade-in-blur"
            speedReveal={1.1}
            speedSegment={0.3}
            as="h1"
            className="md:text-center lg:text-right"
          >
            Aleksei Filonov
          </TextEffect>

          {/* LOCATION */}
          <div className="flex lg:justify-end">
            <p className="text-lg flex items-center gap-2">
              <IoLocationSharp /> Helsinki, Finland
            </p>
          </div>
          {/* UNIVERSITY */}
          <div className="flex md:mx-auto lg:justify-end">
            <p className="flex items-center gap-2">
              <HiAcademicCap />
              <span className="text-lg">
                Studying Data Science at{" "}
                <a
                  target="_blank"
                  href="https://www.aalto.fi/en/study-options/data-science-bachelor-of-science-technology-master-of-science-technology"
                  className="block sm:inline text-[#e9c41ebf] hover:text-[#ffd722e8] duration-200 cursor-pointer"
                >
                  Aalto University
                </a>
              </span>
            </p>
          </div>
        </div>
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
      >
        <Tilt rotationFactor={6}>
          <p className="group sm:bg-stone-800/30 sm:p-8 rounded-xl border-stone-800/60 border-2  border-dashed duration-300 hover:border-[#ffb40421] text-gray-200 p-4 w-[90%] sm:w-[60%]  mx-auto">
            Hey! I&apos;m a{" "}
            <span className="group-hover:text-primary group-hover:font-medium duration-300">
              Data Science
            </span>{" "}
            student at Aalto University. Alongside my studies, I{" "}
            <span className="group-hover:text-primary group-hover:font-medium duration-300">
              create and upgrade websites
            </span>{" "}
            for businesses to help them acquire more clients and{" "}
            <span className="group-hover:text-primary group-hover:font-medium duration-300">
              boost their online presence.
            </span>
          </p>
        </Tilt>
        <div className="flex flex-row gap-4 justify-center mt-12">
          <ContactPopup
            text="Get in touch"
            className="button-primary select-none w-max"
          />

          {/* <Link href="/" className="button-secondary-disabled">
          Website pricing (soon)
        </Link> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
