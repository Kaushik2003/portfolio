"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: 'spring' as const, stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const [resetting, setResetting] = useState(false);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children],
    );
    const total = childrenArray.length;
    const pauseAfterFull = 1500; // ms to pause after all items are shown

    useEffect(() => {
      if (resetting) {
        // After fade out, reset index to 0 and stop resetting
        const timeout = setTimeout(() => {
          setIndex(0);
          setResetting(false);
        }, 400); // fade out duration
        return () => clearTimeout(timeout);
      }
      if (index < total) {
        const timeout = setTimeout(() => {
          setIndex((prev) => prev + 1);
        }, delay);
        return () => clearTimeout(timeout);
      } else if (index === total) {
        // Pause, then fade out all
        const timeout = setTimeout(() => {
          setResetting(true);
        }, pauseAfterFull);
        return () => clearTimeout(timeout);
      }
    }, [index, delay, total, resetting]);

    // Show items if not resetting, else show none (triggers AnimatePresence exit)
    const itemsToShow = useMemo(() => {
      if (resetting) return [];
      return childrenArray.slice(0, index).reverse();
    }, [index, childrenArray, resetting]);

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";
