"use client";

import React from "react";
import { motion } from "motion/react";
import { TextEffect } from "../ui/text-effect";
import { AdminPanelBlock } from "../blocks/admin-block";
import { ContactBlock } from "../blocks/contact-block";
import { ProcessSteps } from "../blocks/process-block";
import { BentoGrid } from "../ui/bento-grid";
import { RxOpenInNewWindow } from "react-icons/rx";

interface ContactsProps {
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

const Contacts = ({ className }: ContactsProps) => {
  const [trigger, setTrigger] = React.useState(false);

  return (
    <section id="contacts" className={className}>
      <div className="flex justify-between mt-4 mb-16">
        <TextEffect
          preset="fade-in-blur"
          speedReveal={1.3}
          speedSegment={0.3}
          as="h2"
          per="word"
          trigger={trigger}
        >
          Need a professional website? 🤝
        </TextEffect>
        <a
          href="https://web.alekseifilonov.com"
          target="_blank"
          className="button-secondary h-max flex items-center gap-2"
        >
          More about websites <RxOpenInNewWindow />
        </a>
      </div>
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
        <BentoGrid />
      </motion.div>
    </section>
  );
};

export default Contacts;
