"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useScroll } from "framer-motion";
import React from "react";
interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> { }

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed right-0 top-0 z-50 w-1.5 h-full origin-top bg-white/65 backdrop-blur-sm rounded-full",
        className,
      )}
      style={{
        scaleY: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
