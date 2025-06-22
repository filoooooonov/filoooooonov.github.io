import React from "react";
import aboutMe1 from "@/public/aboutme1.jpg";
import aboutMe2 from "@/public/aboutme2.jpg";
import aboutMe3 from "@/public/aboutme3.jpg";
import Image from "next/image";
import rope from "@/public/pin_rope.svg";
import { MdOutlineArrowOutward } from "react-icons/md";

const contactLinks = [
  {
    href: "https://cal.com/aleksei-filonov/intro?overlayCalendar=true",
    label: "Book a call",
  },
  {
    href: "mailto:alexfiloonov@gmail.com",
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/aleksei-filonov/",
    label: "LinkedIn",
  },
];

export default function AboutMe() {
  return (
    <section className="mt-40">
      <h2>Behind the curtains</h2>

      <div className="w-full relative h-80 my-12">
        <Image
          src={rope}
          alt="rope"
          className="absolute -top-8 left-0 w-full"
        />
        <div className="absolute top-[4.5rem] left-16 w-40 bg-white/80 rounded-xl p-1 shadow-xl rotate-[10deg]">
          <Image src={aboutMe1} alt="about me" className="rounded-lg" />
        </div>
        <div className="bg-[#7e5b3e] rounded-sm w-1.5 h-8 absolute top-14 left-40 rotate-[10deg]"></div>

        <div className="absolute top-[5.5rem] left-72 w-40 bg-white/80 rounded-xl p-1 shadow-xl rotate-2">
          <Image src={aboutMe2} alt="about me" className="rounded-lg" />
        </div>
        <div className="bg-[#7e5b3e] rounded-sm w-1.5 h-8 absolute top-[4.3rem] left-[22.5rem] -rotate-[2deg]"></div>

        <div className="absolute top-16 right-10 w-40 bg-white/80 rounded-xl p-1 shadow-xl -rotate-12">
          <Image src={aboutMe3} alt="about me" className="rounded-lg" />
        </div>
        <div className="bg-[#7e5b3e] rounded-sm w-1.5 h-8 absolute top-12 right-36 -rotate-12"></div>
      </div>
      <div className="space-y-4 text-sm max-w-xl">
        <p>
          Born in Saint-Petersburg, Russia, I moved to Finland around 5 years
          ago. Growing up in a family that valued both fine arts and
          engineering, I've always been into design and programming. Years after
          this led me to website development.
        </p>

        <p>
          I'm currently a 2nd year data science student at Aalto University.
          Outside of work and studies, you can find me in the gym, cycling,
          taking photos or travelling and making memories with my friends. I try
          to keep an active and adventurous lifestyle, while combining it with
          my goals, and not forgetting to enjoy life in the meantime.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-16 text-base mt-12">
        {contactLinks.map((link) => (
          <a
            href={link.href}
            target="_blank"
            key={link.label}
            className="flex items-center gap-2 hover:font-semibold text-neutral-600 hover:text-neutral-900 duration-300"
          >
            {link.label} <MdOutlineArrowOutward />
          </a>
        ))}
      </div>
    </section>
  );
}
