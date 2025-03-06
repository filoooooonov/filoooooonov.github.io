"use client";

import React from "react";
import { motion } from "motion/react";
import { TextEffect } from "../ui/text-effect";

interface GetInTouchProps {
  className?: string;
}

const contacts = [
  {
    title: "EMAIL",
    link: "mailto:alexfiloonov@gmail.com",
    displayText: "alexfiloonov@gmail.com",
  },
  {
    title: "LINKEDIN",
    link: "https://www.linkedin.com/in/aleksei-filonov",
    displayText: "linkedin.com/in/aleksei-filonov",
  },
  {
    title: "GITHUB",
    link: "https://github.com/filoooooonov",
    displayText: "filoooooonov",
  },
  {
    title: "TELEGRAM",
    link: "https://t.me/wheelsofsteel",
    displayText: "@wheelsofsteel",
  },
  {
    title: "INSTAGRAM",
    link: "https://www.instagram.com/filo.oal/",
    displayText: "@filo.oal",
  },
];

const GetInTouch = ({ className }: GetInTouchProps) => {
  const [trigger, setTrigger] = React.useState(false);

  return (
    <section id="contacts" className={className}>
      <TextEffect
        preset="fade-in-blur"
        speedReveal={1.3}
        speedSegment={0.3}
        as="h2"
        className="mt-4 mb-16"
        trigger={trigger}
      >
        Need a professional website? 🤝
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
        onAnimationStart={() => setTrigger(true)}
        className="mt-8"
      >
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="flex flex-col mt-4">
              <span className="contact-title">{contact.title}</span>
              <a href={contact.link} target="_blank" className="contact-link">
                {contact.displayText}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
