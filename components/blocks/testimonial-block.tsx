"use client";

import { Quote } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "@/public/timeliner_hero.png";
import image2 from "@/public/kukibit_img.png";
import image3 from "@/public/hcs_hero.png";
import Link from "next/link";

export function TestimonialBlock() {
  return (
    <Link href="/#projects" className="cursor-pointer overflow-hidden h-full">
      <BackgroundGradient className="group rounded-[22px] p-4 sm:p-6 min-h-[300px] lg:h-full bento-card">
        <div className="h-full flex flex-col bento-card-content">
          <div className="mb-4 flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Recent Projects
              </h3>
              <p className="text-[#a99b8c] text-sm"></p>
            </div>
            <Quote className="w-6 h-6 text-primary" />
          </div>

          {/* First Image: Bottom Right */}
          <Image
            src={image1}
            alt="Decorative Image 1"
            className="border-2 border-stone-400/10 absolute -bottom-16 group-hover:-bottom-8 group-hover:rotate-3 -right-12 w-60 group-hover:w-64 rounded-xl duration-300"
          />

          {/* Second Image: Smaller and shifted to the left, behind first */}
          <Image
            src={image2}
            alt="Decorative Image 2"
            className="absolute border-stone-400/10 -bottom-8 group-hover:bottom-10 group-hover:-rotate-3 -left-20 w-52 z-[-1] rounded-xl duration-300"
          />

          {/* Third Image: Even smaller, shifted higher and behind first two */}
          <Image
            src={image3}
            alt="Decorative Image 3"
            className="absolute border-stone-400/10  bottom-4 group-hover:bottom-32  group-hover:rotate-3 right-20 w-40 group-hover:w-36 z-[-2] rounded-xl duration-300"
          />
        </div>

        {/* <motion.div
          className="flex-1 bg-[#252019] rounded-xl p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#a99b8c] italic text-sm leading-relaxed">
            "The website exceeded our expectations. Not only does it look
            stunning, but it's also incredibly fast and easy to manage. Our
            conversion rate has increased by 40% since launch."
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary"></div>
            <div>
              <p className="text-white text-sm font-medium">Jane Smith</p>
              <p className="text-[#a99b8c] text-xs">CEO, Example Company</p>
            </div>
          </div>
        </motion.div> */}
      </BackgroundGradient>
    </Link>
  );
}
