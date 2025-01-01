"use client";

import React from "react";

interface GetInTouchProps {
  className?: string;
}

const GetInTouch = ({ className }: GetInTouchProps) => {
  return (
    <section id="contacts" className={className}>
      <h2 id="contacts" className="mb-8 sm:mb-16">
        Get in touch with me 👋
      </h2>
      <div className="mt-8">
        <ul>
          <li className="flex flex-col">
            <span className="contact-title">EMAIL</span>
            <a
              href="mailto:alexfiloonov@gmail.com"
              target="_blank"
              className="contact-link"
            >
              alexfiloonov@gmail.com
            </a>
          </li>

          <li className="mt-4 flex flex-col">
            <span className="contact-title">LINKEDIN</span>
            <a
              href="https://www.linkedin.com/in/aleksei-filonov"
              target="_blank"
              className="contact-link"
            >
              in/aleksei-filonov
            </a>
          </li>
          <li className="mt-4 flex flex-col">
            <span className="contact-title">GITHUB</span>
            <a
              href="https://github.com/filoooooonov"
              target="_blank"
              className="contact-link"
            >
              filoooooonov
            </a>
          </li>
          <li className="mt-4 flex flex-col">
            <span className="contact-title">TELEGRAM</span>
            <a
              className="contact-link"
              target="_blank"
              href="https://t.me/wheelsofsteel"
            >
              @wheelsofsteel
            </a>
          </li>
          <li className="mt-4 flex flex-col">
            <span className="contact-title">INSTAGRAM</span>
            <a
              href="https://www.instagram.com/filo.oal/"
              target="_blank"
              className="contact-link"
            >
              @filo.oal
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default GetInTouch;
