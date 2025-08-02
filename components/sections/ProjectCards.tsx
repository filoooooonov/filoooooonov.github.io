"use client";

import React, { useState, useEffect } from "react";
import { projects } from "./ProjectList";
import Image from "next/image";
import CustomCursor from "@/components/ui/custom-cursor";

export default function ProjectCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  // Debug cursor visibility
  useEffect(() => {
    console.log("Cursor visible:", cursorVisible);
    console.log("Hovered index:", hoveredIndex);
  }, [cursorVisible, hoveredIndex]);

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
  const boxStyles =
    "absolute transition-all duration-300 ease-in-out bg-white rounded-xl p-[2px] md:p-0.5";

  return (
    <div
      className="relative flex items-center pl-32 md:pl-36 h-80 [filter:drop-shadow(0_12px_10px_rgba(168,162,158,0.4))]"
      onMouseLeave={() => {
        setHoveredIndex(null);
        setCursorVisible(false);
      }}
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
            }px) rotate(0deg) scale(1.6)`;
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
              className={boxStyles}
              style={{ transform, zIndex }}
              onMouseEnter={() => {
                if (!isMobile) {
                  setHoveredIndex(index);
                  setCursorVisible(true);
                  console.log("Mouse entered project:", projects[index].title);
                }
              }}
              onMouseMove={() => {
                if (!isMobile && !cursorVisible) {
                  setCursorVisible(true);
                }
              }}
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
            className={boxStyles}
            style={{ transform, zIndex }}
            onMouseEnter={() => {
              if (!isMobile) {
                setHoveredIndex(index);
                setCursorVisible(true);
                console.log("Mouse entered project:", projects[index].title);
              }
            }}
            onMouseMove={() => {
              if (!isMobile && !cursorVisible) {
                setCursorVisible(true);
              }
            }}
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
      <CustomCursor
        visible={cursorVisible && !isMobile}
        link={hoveredIndex !== null ? projects[hoveredIndex].link : undefined}
        text={hoveredIndex !== null ? projects[hoveredIndex].title : undefined}
      />
    </div>
  );
}
