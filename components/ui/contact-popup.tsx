"use client";

import clsx from "clsx";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Import for Next.js image handling
import GmailIcon from "@/public/gmail_icon.png";
import TelegramIcon from "@/public/telegram_icon.webp";
import WhatsAppIcon from "@/public/whatsapp_icon.webp";

interface ContactPopupProps {
  className?: string;
  text: string;
}

export default function ContactPopup({ className, text }: ContactPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const contactMethods = [
    {
      name: "Email",
      icon: <Image src={GmailIcon} alt="Gmail Icon" width={16} height={16} />,
      href: "mailto:alexfiloonov@gmail.com",
    },
    {
      name: "Telegram",
      icon: (
        <Image src={TelegramIcon} alt="Telegram Icon" width={16} height={16} />
      ), // Telegram Icon
      href: "https://t.me/wheelsofsteel",
    },
    {
      name: "WhatsApp",
      icon: (
        <Image src={WhatsAppIcon} alt="WhatsApp Icon" width={24} height={20} />
      ), // WhatsApp Icon
      href: "https://wa.me/+358414771601",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className={clsx("", className)}>{text}</button>
      </DialogTrigger>
      <AnimatePresence>
        {isOpen && (
          <DialogContent
            className="sm:max-w-[425px] bg-zinc-900 border-2 border-zinc-800"
            forceMount
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-lg font-semibold mb-8">
                Let&apos;s find the best deal for you!
              </h2>
              <div className="grid gap-4">
                {contactMethods.map((method) => (
                  <motion.div
                    key={method.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="destructive"
                      className="w-full justify-start items-center bg-zinc-800/80 hover:bg-zinc-800/70"
                      onClick={() => window.open(method.href, "_blank")}
                    >
                      <div className="mr-2 h-4 w-4">{method.icon}</div>
                      {method.name}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
