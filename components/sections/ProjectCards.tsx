"use client";

import React, { useState } from "react";
import { projects } from "./ProjectList";
import Image from "next/image";

export default function ProjectCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const middleIndex = Math.floor(projects.length / 2);
  const cardVisibleWidth = 64;
  const hoverOffset = 100;

  return (
    <div
      className="relative flex items-center pl-40 md:pl-52 h-60 [filter:drop-shadow(0_12px_10px_rgba(168,162,158,0.4))]"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {projects.reverse().map((project, index) => {
        let transform = `translateX(${
          (index - middleIndex) * cardVisibleWidth
        }px) rotate(20deg)`;
        let zIndex = index;

        if (hoveredIndex !== null) {
          if (index === hoveredIndex) {
            transform = `translateX(${
              (index - middleIndex) * cardVisibleWidth
            }px) rotate(0deg) scale(1.2)`;
            zIndex = projects.length;
          } else {
            const side = index < hoveredIndex ? -1 : 1;
            transform = `translateX(${
              (index - middleIndex) * cardVisibleWidth + side * hoverOffset
            }px) rotate(20deg)`;
          }
        }

        return (
          <div
            key={project.title}
            className="absolute transition-all duration-300 ease-in-out bg-white rounded-xl overflow-hidden p-[2px] md:p-1"
            style={{ transform, zIndex }}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="cursor-pointer rounded-[10px] size-36 object-cover aspect-square"
              width={144}
              height={144}
            />
          </div>
        );
      })}
    </div>
  );
}
