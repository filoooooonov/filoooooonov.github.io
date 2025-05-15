"use client";

import { InboxIcon as EnvelopeIcon } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { BiLogoTelegram, BiLogoLinkedin } from "react-icons/bi";
import { MdVideoCall } from "react-icons/md";

const contacts = [
  {
    name: "Email Me",
    link: "mailto:alexfiloonov@gmail.com",
    icon: EnvelopeIcon,
  },
  {
    name: "Book a call",
    link: "https://cal.com/aleksei-filonov/intro",
    icon: MdVideoCall,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aleksei-filonov/",
    icon: BiLogoLinkedin,
  },
];

export function ContactBlock() {
  return (
    <BackgroundGradient className="p-4 sm:p-6 h-max lg:h-full bento-card">
      <div className="h-full flex flex-col bento-card-content">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
          <p className="text-[#a99b8c] text-sm">
            Have a project in mind? Let&apos;s make it happen!
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-auto">
          {contacts.map((contact, index) => (
            <div key={index} className="w-full">
              <Button
                variant="secondary"
                className="w-full !py-4 justify-start gap-2 bg-[#252019] border-[#352f29] hover:bg-[#352f29] text-stone-400 hover:text-primary duration-200"
                onClick={() => window.open(contact.link, "_blank")}
              >
                <contact.icon className="h-4 w-4" />
                {contact.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </BackgroundGradient>
  );
}
