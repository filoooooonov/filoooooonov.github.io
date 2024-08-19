import Image from "next/image";
import React from "react";
import me from "../../public/me.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";

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
          className="rounded-full aspect-square object-cover max-w-[150px] sm:max-w-[200px]"
        />
        <div className="space-y-2">
          <h1 className="text-right my-8">Aleksei Filonov</h1>
          <div className="flex justify-end">
            <p className="text-lg flex items-center gap-2">
              <IoLocationSharp /> Helsinki, Finland
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-lg flex items-center gap-2">
              <HiAcademicCap /> Studying for Bachelor&apos;s of Data Science at{" "}
              <a
                target="_blank"
                href="https://www.aalto.fi/en/study-options/data-science-bachelor-of-science-technology-master-of-science-technology"
                className="text-[#e9c41ebf] hover:text-[#ffd722e8] duration-200 cursor-pointer"
              >
                Aalto University
              </a>
            </p>
          </div>
        </div>
      </div>

      <p className="sm:bg-box sm:p-8 rounded-3xl sm:border-t border-[#45417136] border duration-300 hover:border-[#ffb40436] text-gray-200  p-4 w-[60%] mx-auto">
        Hey! I&apos;m an incoming freshman at Aalto University pursuing a career
        in Data Science. I also develop and upgrade websites for businesses and
        help them acquire more clients. You can check out my latest projects
        below!
      </p>

      {/* <div className="flex flex-col sm:flex-row justify-evenly gap-6 mt-12">
        <a
          href="https://www.linkedin.com/in/aleksei-filonov"
          target="_blank"
          className="button flex items-center gap-2"
        >
          Linkedin
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/filoooooonov"
          target="_blank"
          className="hidden sm:flex button  items-center gap-2"
        >
          Github <FaGithub />
        </a>
        <Link href="#contacts" className="button">
          Contact me
        </Link>
      </div> */}
    </section>
  );
};

export default Hero;
