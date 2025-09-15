"use client";

import { cn } from "@/lib/utils"; 
import { motion, useScroll } from "framer-motion"; 
import type { MotionProps } from "framer-motion";
import React from "react";

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  containerRef?: React.RefObject<HTMLElement | null >; 
}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, containerRef,  ...props }, ref) => {

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <motion.div
      ref={ref} 
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#776dfb] via-[#67deee] to-[#adf374]",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
