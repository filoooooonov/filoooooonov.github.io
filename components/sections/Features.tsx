"use client";

import React from "react";
import feature1 from "@/public/feature1.svg";
import feature2 from "@/public/feature2.svg";
import feature3 from "@/public/feature3.svg";
import feature4 from "@/public/feature4.svg";
import feature5 from "@/public/feature5.svg";
import feature6 from "@/public/feature6.svg";
import feature7 from "@/public/feature7.svg";
import feature8 from "@/public/feature8.svg";

const features = [
  { name: "Fast", icon: feature1 },
  { name: "Responsive", icon: feature2 },
  { name: "Modern", icon: feature3 },
  { name: "SEO-friendly", icon: feature4 },
  { name: "Scalable", icon: feature5 },
  { name: "Secure", icon: feature6 },
  { name: "Customizable", icon: feature7 },
  { name: "Easy to use", icon: feature8 },
];

export default function Features() {
  return (
    <section className="my-20">
      <h2>Your website should be ...</h2>
      <div className="grid grid-cols-4 gap-8 my-12">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="bg-stone-200 rounded-lg px-3 py-2 text-sm text-center text-stone-600 font-medium flex justify-center items-center gap-2 cursor-pointer transition-all duration-200 hover:bg-stone-300 hover:scale-105 pointer-events-auto"
          >
            <img
              src={feature.icon.src}
              alt={feature.name}
              className="size-4 opacity-50"
            />
            {feature.name}
          </div>
        ))}
      </div>
      <h2>and I take care of that.</h2>
    </section>
  );
}
