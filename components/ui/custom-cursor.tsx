"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { createPortal } from "react-dom";

interface CustomCursorProps {
  text?: string;
  visible: boolean;
  link?: string;
}

export default function CustomCursor({
  text,
  visible,
  link,
}: CustomCursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  if (!mounted) return null;

  const cursor = (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={text} // This will trigger re-animation when text changes
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.3,
            ease: [0.32, 0.72, 0, 1],
          }}
          whileInView={{
            scale: [1, 1.1, 1],
            transition: {
              duration: 0.4,
              times: [0, 0.2, 1],
              ease: "easeInOut",
            },
          }}
          className="pointer-events-none"
          style={{
            position: "fixed",
            left: `${position.x + 40}px`,
            top: `${position.y + 40}px`,
            zIndex: 9999,
          }}
        >
          <div className="relative flex items-center justify-center rounded-full bg-black/80 backdrop-blur-lg">
            <div className="absolute w-full " />
            {text && (
              <div className="px-5 py-3 rounded-full flex gap-1 items-center">
                <span className="text-neutral-400 font-normal">
                  {link ? "Visit" : "WIP"}
                </span>

                <span className="text-neutral-200 font-medium  text-base relative">
                  {text}
                </span>
                {link && <MdOutlineArrowOutward className="text-neutral-400" />}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(cursor, document.body);
}
