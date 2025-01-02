"use client";

import React from "react";
import { motion } from "motion/react";

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
  return (
    <section id="contacts" className={className}>
      <h2 id="contacts" className="mb-8 sm:mb-16">
        Get in touch with me 👋
      </h2>
      <div className="mt-8">
        <ul>
          {contacts.map((contact, index) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: index / 10,
              }}
              variants={{
                visible: { opacity: 1, y: 5 },
                hidden: { opacity: 0, y: 5 },
              }}
              key={index}
              className="flex flex-col mt-4"
            >
              <span className="contact-title">{contact.title}</span>
              <a href={contact.link} target="_blank" className="contact-link">
                {contact.displayText}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GetInTouch;
