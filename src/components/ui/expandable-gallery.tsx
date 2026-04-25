"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import React, { useState, useId, useRef } from "react";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { Button } from "./button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

// Artist Portfolio Photos
const PHOTOS = [
  {
    id: "photo-1",
    src: "/Assets/gallary/1.jpg",
    alt: "Indian Bridal Portrait",
    rotation: -15,
    x: -90,
    y: 10,
    zIndex: 10,
  },
  {
    id: "photo-2",
    src: "/Assets/gallary/3.jpg",
    alt: "Bridal Glow",
    rotation: -3,
    x: -10,
    y: -15,
    zIndex: 20,
  },
  {
    id: "photo-3",
    src: "/Assets/gallary/2.jpg",
    alt: "Traditional Artistry",
    rotation: 12,
    x: 75,
    y: 5,
    zIndex: 30,
  },
  {
    id: "photo-4",
    src: "/Assets/gallary/4.jpg",
    alt: "Bridal Detail",
  },
  {
    id: "photo-5",
    src: "/Assets/gallary/5.jpg",
    alt: "Editorial Look",
  },
  {
    id: "photo-6",
    src: "/Assets/gallary/6.jpg",
    alt: "Indian Wedding Detail",
  },
  {
    id: "photo-7",
    src: "/Assets/gallary/7.jpg",
    alt: "Soft Glam",
  },
  {
    id: "photo-8",
    src: "/Assets/gallary/8.jpg",
    alt: "Bridal Prep",
  },
  {
    id: "photo-9",
    src: "/Assets/gallary/9.jpg",
    alt: "Radiant Smile",
  },
];

const transition = {
  type: "spring",
  stiffness: 160,
  damping: 18,
  mass: 1,
} as const;

export function ExpandableGallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const layoutGroupId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  return (
    <section className="relative w-full px-4 md:px-8 bg-burgundy flex flex-col items-center justify-start min-h-[850px] overflow-hidden py-24">
      <LayoutGroup id={layoutGroupId}>
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="w-full h-12 flex items-center justify-between px-4 mb-2">
            <AnimatePresence>
              {isExpanded && (
                <motion.button
                  key="back-button"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 text-champagne/70 hover:text-champagne transition-all group z-50"
                >
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors text-champagne">
                    <ArrowLeft size={20} />
                  </div>
                  <span className="font-medium">Go back</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            ref={containerRef}
            layout
            className={cn(
              "relative w-full",
              isExpanded
                ? "grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
                : "flex flex-col items-center justify-start pt-4"
            )}
            transition={transition}
          >
            <div
              className={cn(
                "relative",
                isExpanded
                  ? "contents"
                  : "h-[450px] w-full flex items-center justify-center mb-8"
              )}
            >
              {PHOTOS.map((photo, index) => {
                const isPrimary = index < 3;
                if (!isPrimary && !isExpanded) return null;

                return (
                  <motion.div
                    key={`card-${photo.id}`}
                    layoutId={`card-container-${photo.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: !isExpanded ? photo.rotation || 0 : 0,
                      x: !isExpanded ? photo.x || 0 : 0,
                      y: !isExpanded ? photo.y || 0 : 0,
                      zIndex: !isExpanded ? photo.zIndex || index : 10,
                    }}
                    transition={transition}
                    whileHover={
                      !isExpanded
                        ? {
                          scale: 1.05,
                          y: (photo.y || 0) - 15,
                          rotate: (photo.rotation || 0) * 0.8,
                          zIndex: 50,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          },
                        }
                        : { scale: 1.02 }
                    }
                    className={cn(
                      "cursor-pointer overflow-hidden bg-ivory",
                      isExpanded
                        ? "relative aspect-[3/4] rounded-[1.5rem] md:rounded-[2rem] border-4 md:border-[6px] border-burgundy shadow-lg"
                        : "absolute w-44 h-60 md:w-60 md:h-80 rounded-[2rem] md:rounded-[2.5rem] border-[6px] border-burgundy shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    )}
                    onClick={() => !isExpanded && setIsExpanded(true)}
                  >
                    <motion.div
                      layoutId={`image-inner-${photo.id}`}
                      layout="position"
                      className="w-full h-full relative"
                      transition={transition}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  key="stack-content"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center max-w-2xl space-y-8"
                >
                  <h2 className="text-2xl md:text-4xl font-light tracking-tight text-champagne leading-tight font-display italic">
                    Beauty isn’t just about the products.{" "}
                    <br className="hidden md:block" />
                    It’s about how confident you feel in your own skin.
                  </h2>

                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      onClick={() => setIsExpanded(true)}
                      className="rounded-full cursor-pointer py-6 px-8 border-gold/40 text-gold hover:bg-gold/10 hover:text-gold font-normal group transition-all"
                    >
                      View complete gallery
                      <ArrowRight
                        size={20}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </LayoutGroup>
    </section>
  );
}

export default ExpandableGallery;
