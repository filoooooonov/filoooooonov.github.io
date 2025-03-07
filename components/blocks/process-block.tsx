"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  CodeIcon,
  PenToolIcon,
  SearchIcon,
  LayoutIcon,
  RocketIcon,
} from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const steps = [
  {
    id: "01",
    title: "Discovery",
    icon: <SearchIcon className="h-5 w-5" />,
    description:
      "We begin with understanding your business goals, target audience, and project requirements. This foundation ensures we build exactly what you need.",
  },
  {
    id: "02",
    title: "Design",
    icon: <PenToolIcon className="h-5 w-5" />,
    description:
      "We create a vision board and wireframes follow your brand identity. We focus on user experience, intuitive navigation and ease-of-use, as well as a professional look.",
  },
  {
    id: "03",
    title: "Development",
    icon: <CodeIcon className="h-5 w-5" />,
    description:
      "We build your website with clean, efficient code in three stages. After each stage you get to review the progress and make adjustments.",
  },
  {
    id: "04",
    title: "Testing",
    icon: <LayoutIcon className="h-5 w-5" />,
    description:
      "We test your website across devices and browsers to ensure your website works flawlessly. We optimize for speed, accessibility, and SEO before launch.",
  },
  {
    id: "05",
    title: "Launch",
    icon: <RocketIcon className="h-5 w-5" />,
    description: "We deploy your website and guide you if help is needed!",
  },
];

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState("01");
  const activeStepData = steps.find((step) => step.id === activeStep);

  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 h-full bento-card">
      <div className="h-full flex flex-col bento-card-content">
        {/* Desktop Active Step Content */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">
            Development Process
          </h3>
          <p className="text-[#a99b8c] text-sm">How it&apos;s done</p>
        </div>

        <motion.div
          key={activeStep}
          initial={{ opacity: 0.7, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="hidden lg:block flex-1 rounded-3xl mb-6 p-4 sm:p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#8B7355] flex items-center justify-center">
              {activeStepData?.icon}
            </div>
            <h4 className="text-lg font-medium text-white">
              {activeStepData?.id} {activeStepData?.title}
            </h4>
          </div>
          <p className="text-[#a99b8c] leading-relaxed text-sm">
            {activeStepData?.description}
          </p>
        </motion.div>

        {/* Desktop Step Buttons */}
        <div className="hidden lg:relative lg:flex flex-nowrap gap-2 w-full justify-start lg:justify-between rounded-3xl">
          <div className="absolute inset-0 bg-[#2a2520] rounded-full z-0"></div>
          {steps.map((step) => (
            <motion.button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              layout
              className={cn(
                "relative z-50 px-3 py-2 rounded-full text-xs flex items-center gap-2 transition-all duration-200 whitespace-nowrap",
                activeStep === step.id
                  ? " text-black"
                  : " text-[#a99b8c] hover:bg-[#352f29]"
              )}
            >
              {step.icon}
              {step.title}
              {activeStep === step.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 z-[-1] bg-primary rounded-full"
                  transition={{ type: "ease", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="lg:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {steps.map((step) => (
              <div
                key={step.id}
                className="snap-center min-w-[80%] bg-[#2a2520]/50 rounded-xl p-4 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#8B7355] flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-medium text-white">
                    {step.id} {step.title}
                  </h4>
                </div>
                <p className="text-[#a99b8c] leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
}
