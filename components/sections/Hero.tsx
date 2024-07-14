import Image from "next/image";
import React from "react";

import Link from "next/link";
import me from "../../public/me.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:grid grid-cols-2 pt-[30vh] h-[90vh]">
        <Image
          src={me}
          alt="Profile photo"
          className="rounded-full aspect-square object-cover max-w-[350px] mx-auto"
        />
        <div>
          <h1 className="text-center my-8">Aleksei Filonov</h1>
          <p className="border text-gray-200 border-primary p-4 rounded-xl w-[90%] mx-auto">
            Hey! I am an incoming freshman at Aalto University pursuing a career
            in Data Science. I'm also into web development and design, you can
            check out my latest projects below!
          </p>
          <div className="flex justify-evenly mt-12">
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
              className="button flex items-center gap-2"
            >
              Github <FaGithub />
            </a>
            <Link href="/" className="button">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
