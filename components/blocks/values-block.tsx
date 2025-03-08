"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { GiClick } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { BsFillLightningFill } from "react-icons/bs";

export function Values() {
  const values = [
    {
      title: "User Experience",
      icon: GiClick,
      description: "Intuitive interface that keeps users engaged",
    },
    {
      title: "Brand Identity",
      icon: BsStars,
      description: "Custom design that reflects your unique brand personality",
    },
    {
      title: "Performance",
      icon: BsFillLightningFill,
      description: "Lightning-fast website optimized for conversion and SEO",
    },
  ];

  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 h-full bento-card">
      <div className="h-full flex flex-col bento-card-content">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Core Values</h3>
          <p className="text-[#a99b8c] text-sm">What we guarantee</p>

          {/* Mobile: icon on left and text on right; Desktop: stack vertically */}
          <div className="flex flex-col lg:flex-row justify-center items-stretch lg:divide-x divide-stone-800 gap-8 lg:gap-0">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative group flex flex-row items-center pt-10 w-full lg:w-60 px-4 lg:flex-col lg:items-center"
              >
                <div className="p-4 shadow-inner shadow-[#29221b] bg-gradient-to-t from-[#171310] to-[#1f1a15] border-2 border-[#2e261e] rounded-2xl transition-all duration-300 mb-0 lg:mb-4 group-hover:-translate-y-4">
                  <value.icon className="size-8 text-stone-200 duration-300" />
                </div>
                <div className="flex flex-col ml-4 lg:ml-0">
                  <p
                    className="text-base text-left md:text-center font-medium opacity-100 transform translate-y-0 transition-all duration-300 
                    lg:group-hover:opacity-0 lg:group-hover:-translate-y-4"
                  >
                    {value.title}
                  </p>
                  <p
                    className="text-sm text-left md:text-center text-stone-400 opacity-100 transform translate-y-0 transition-all duration-300 mt-2
                    lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:-translate-y-4"
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
}
