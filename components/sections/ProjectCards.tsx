"use client";

import React, { useState, useEffect } from "react";
import { projects } from "./ProjectList";
import Image from "next/image";

export default function ProjectCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const middleIndex = Math.floor(projects.length / 2);
  const cardVisibleWidth = 64;
  const hoverOffset = 100;

  return (
    <div
      className="relative flex items-center pl-32 md:pl-36 h-60 [filter:drop-shadow(0_12px_10px_rgba(168,162,158,0.4))]"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {projects.map((project, index) => {
        let transform = `translateX(${
          (index - middleIndex) * cardVisibleWidth
        }px) rotate(20deg)`;
        let zIndex = index;

        // Desktop hover logic
        if (!isMobile && hoveredIndex !== null) {
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

        // Mobile tap logic
        if (isMobile && mobileActiveIndex !== null) {
          if (index === mobileActiveIndex) {
            transform = `translateX(${
              (index - middleIndex) * cardVisibleWidth
            }px) rotate(0deg) scale(1.2)`;
            zIndex = projects.length;
          } else {
            const side = index < mobileActiveIndex ? -1 : 1;
            transform = `translateX(${
              (index - middleIndex) * cardVisibleWidth + side * hoverOffset
            }px) rotate(20deg)`;
          }
        }

        const handleClick = (e?: React.MouseEvent) => {
          if (!project.link) return;
          if (isMobile) {
            if (mobileActiveIndex !== index) {
              setMobileActiveIndex(index);
              if (e) e.preventDefault();
            } else {
              // open link
            }
          }
        };

        if (project.link) {
          return (
            <a
              key={project.title}
              href={
                !isMobile || mobileActiveIndex === index
                  ? project.link
                  : undefined
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute transition-all duration-300 ease-in-out bg-white rounded-xl overflow-hidden p-[2px] md:p-1 cursor-pointer`}
              style={{ transform, zIndex }}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onClick={handleClick}
              tabIndex={0}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="rounded-[10px] size-36 object-cover aspect-square"
                width={144}
                height={144}
              />
            </a>
          );
        }
        return (
          <div
            key={project.title}
            className="absolute transition-all duration-300 ease-in-out bg-white rounded-xl overflow-hidden p-[2px] md:p-1"
            style={{ transform, zIndex }}
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onClick={() => isMobile && setMobileActiveIndex(index)}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="rounded-[10px] size-36 object-cover aspect-square"
              width={144}
              height={144}
            />
          </div>
        );
      })}
    </div>
  );
}
