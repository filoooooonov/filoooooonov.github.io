"use client";

import React, { useState, useRef, useEffect } from "react";
import feature1 from "@/public/feature1.svg";
import feature2 from "@/public/feature2.svg";
import feature3 from "@/public/feature3.svg";
import feature4 from "@/public/feature4.svg";
import feature5 from "@/public/feature5.svg";
import feature6 from "@/public/feature6.svg";
import feature7 from "@/public/feature7.svg";
import feature8 from "@/public/feature8.svg";
import Link from "next/link";

const featureIcons = [
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  feature7,
  feature8,
];

const features = [
  { name: "Fast", icon: feature1 },
  { name: "Reliable", icon: feature2 },
  { name: "Easy to use", icon: feature3 },
  { name: "SEO-friendly", icon: feature4 },
  { name: "Brand-aligned", icon: feature5 },
  { name: "Secure", icon: feature6 },
  { name: "Customizable", icon: feature7 },
  { name: "Responsive", icon: feature8 },
];

function FeatureCard({ name, icon }: { name: string; icon: any }) {
  const [currentIcon, setCurrentIcon] = useState(icon);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function getRandomIcon() {
    // Exclude the current icon to avoid flicker
    const otherIcons = featureIcons.filter((i) => i !== currentIcon);
    return otherIcons[Math.floor(Math.random() * otherIcons.length)];
  }

  function handleMouseEnter() {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentIcon(getRandomIcon());
    }, 100);
  }

  function handleMouseLeave() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentIcon(icon);
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="bg-stone-200 rounded-lg px-3 py-2 text-sm text-center text-stone-600 font-medium flex justify-center items-center gap-2 select-none transition-all duration-200 hover:bg-stone-200 hover:scale-[1.02] pointer-events-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={currentIcon.src} alt={name} className="size-4 opacity-50" />
      {name}
    </div>
  );
}

export default function Features() {
  return (
    <section className="px-6 my-20">
      <h2>Your website should be ...</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4  gap-8 my-12">
        {features.map((feature) => (
          <FeatureCard
            key={feature.name}
            name={feature.name}
            icon={feature.icon}
          />
        ))}
      </div>
      <h2>and I take care of that.</h2>

      <div className="mt-32 space-y-2">
        <h2>
          Have a project in mind?{" "}
          <span className="text-stone-600">
            Shoot me an{" "}
            <a target="_blank" href="mailto:contact@alekseifilonov.com">
              email
            </a>{" "}
            or{" "}
            <a target="_blank" href="https://cal.com/aleksei-filonov/intro">
              book a call
            </a>
            .
          </span>
        </h2>
        <h2>
          Have questions?{" "}
          <span className="text-stone-600">
            Check out the <Link href="/faq">FAQ</Link> or send me an{" "}
            <a target="_blank" href="mailto:contact@alekseifilonov.com">
              email
            </a>
            .
          </span>
        </h2>
      </div>
    </section>
  );
}
