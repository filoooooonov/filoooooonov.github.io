import Image from "next/image";
import React from "react";
import me from "@/public/my_image.jp";
import { IoLocationSharp } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import ContactPopup from "../ui/contact-popup";
import Link from "next/link";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={className}>
      <div className="flex flex-col lg:flex-row justify-between pt-[5vh] sm:pt-[12vh] pb-20 w-auto">
        <Image
          src={me}
          alt="Profile photo"
          className="rounded-full aspect-square object-cover max-w-[150px] sm:max-w-[200px] mx-auto lg:mx-0"
        />

        {/* INFO ABOUT ME */}
        <div className="space-y-2 max-w-[600px] md:mx-auto lg:mx-0">
          <h1 className="md:text-center lg:text-right my-8">Aleksei Filonov</h1>

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
      </div>

      <p className="sm:bg-zinc-800/30 sm:p-8 rounded-xl border-zinc-800/60 border-2 duration-300 hover:border-[#ffb40436] text-gray-200 p-4 w-[90%] sm:w-[60%]  mx-auto">
        Hey! I&apos;m a Data Science student at Aalto University who develops
        websites in his free time. Speaking of that, I focus on creating and
        upgrading websites for businesses to help them acquire more clients. You
        can check out my latest projects below!
      </p>
      <div className="flex flex-row gap-4 justify-center mt-12">
        <ContactPopup text="Contact me!" className="button-primary w-max" />
        <Link href="/pricing" className="button-secondary">
          Pricing
        </Link>
      </div>
    </section>
  );
};

export default Hero;
