"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: boolean;
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
  x = 0,
  scale,
  blur = false,
  once = true,
}: FadeInProps) {
  const shouldReduce = useReducedMotion();

  const initial: TargetAndTransition = {
    opacity: 0,
    y: shouldReduce ? 0 : y,
    x: shouldReduce ? 0 : x,
    ...(scale !== undefined && !shouldReduce && { scale }),
    ...(blur && !shouldReduce && { filter: "blur(8px)" }),
  };
  const animate: TargetAndTransition = {
    opacity: 1,
    y: 0,
    x: 0,
    ...(scale !== undefined && { scale: 1 }),
    ...(blur && { filter: "blur(0px)" }),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: shouldReduce ? 0 : duration,
        delay: shouldReduce ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
  once = true,
}: StaggerProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: shouldReduce ? 0 : stagger,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  scale?: boolean;
  blur?: boolean;
}

export function StaggerItem({
  children,
  className,
  scale = false,
  blur = false,
}: StaggerItemProps) {
  const shouldReduce = useReducedMotion();

  const hidden: TargetAndTransition = {
    opacity: 0,
    y: shouldReduce ? 0 : 20,
    ...(scale && !shouldReduce && { scale: 0.95 }),
    ...(blur && !shouldReduce && { filter: "blur(6px)" }),
  };
  const show: TargetAndTransition = {
    opacity: 1,
    y: 0,
    ...(scale && { scale: 1 }),
    ...(blur && { filter: "blur(0px)" }),
  };

  return (
    <motion.div
      variants={{
        hidden,
        show: {
          ...show,
          transition: {
            duration: shouldReduce ? 0 : 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
