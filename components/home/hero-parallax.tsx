"use client";

import { useRef, type ReactNode } from "react";
import {
  LazyMotion,
  domAnimation,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import * as m from "motion/react-m";

type HeroParallaxProps = {
  children: ReactNode;
  /** Image travel in percent. Limited to 0–12 to keep the image covering the hero. */
  strength?: number;
};

/** Scroll-linked image movement on mobile and desktop; the copy stays still. */
export function HeroParallax({ children, strength = 10 }: HeroParallaxProps) {
  const target = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const travel = Number.isFinite(strength)
    ? Math.min(12, Math.max(0, strength))
    : 10;

  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end start"],
  });

  // Motion values update the transform without re-rendering React on every scroll.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${travel}%`]);

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={target}
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <m.div
          style={{
            position: "absolute",
            // Overscan leaves room above the image as it moves down while scrolling.
            inset: "-18% 0 -8%",
            y: reduceMotion ? 0 : y,
            willChange: reduceMotion || travel === 0 ? "auto" : "transform",
          }}
        >
          {children}
        </m.div>
      </div>
    </LazyMotion>
  );
}
