"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import me from "@/public/me.jpeg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  if (pathname.startsWith("/form")) return null;

  return (
    <header>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        className="pb-20 pt-10 px-6"
      >
        <Link href="/">
          <Image
            src={me}
            alt="Profile photo"
            className="rounded-full aspect-square object-cover size-12"
          />
        </Link>

        <h3 className="text-neutral-800 text-base mt-2">Aleksei Filonov</h3>
        <p className="text-neutral-600 text-sm">Website Developer & Designer</p>
      </motion.div>
    </header>
  );
}
