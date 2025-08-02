// components/PortfolioGrid.tsx
"use client";
import { projects } from "./ProjectList";
import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const items = Array.from({ length: 4 });

export default function PortfolioGrid() {
  const [isGrid, setIsGrid] = useState(false);

  return (
    <div className="p-8">
      <LayoutGroup>
        <motion.div
          onHoverStart={() => setIsGrid(true)}
          className={`relative transition-all duration-700 ease-out ${
            isGrid
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              : "h-[300px]"
          }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layout
              className={`rounded-xl [filter:drop-shadow(0_12px_10px_rgba(168,162,158,0.4))]  bg-white size-38 p-1 cursor-pointer ${
                isGrid ? "" : "absolute left-1/2 -translate-x-1/2 h-48 w-48"
              }`}
              style={
                !isGrid
                  ? {
                      top: `${index * 20}px`,
                      zIndex: items.length,

                      rotate: `${
                        index == items.length / 2
                          ? 0
                          : index < items.length / 2
                          ? -3 * index
                          : 3 * index
                      }deg`,
                    }
                  : {}
              }
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
