"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Slide-up distance in px. */
  y?: number;
}

/**
 * Scroll-triggered fade + slide-up with iOS-style spring easing. Collapses to
 * a plain fade when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{
        default: { type: "spring", stiffness: 90, damping: 18, delay },
        opacity: { duration: 0.5, ease: "easeOut", delay },
      }}
    >
      {children}
    </motion.div>
  );
}
