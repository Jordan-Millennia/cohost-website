"use client";
import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 30,
}: {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
}) {
  const [ref, { width }] = useMeasure();
  const translation = useMotionValue(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (width <= 0) return;
    setIsReady(true);
    const controls = animate(translation, [0, -(width + gap) / 2], {
      ease: "linear",
      duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      onRepeat: () => translation.set(0),
    });
    return controls.stop;
  }, [translation, width, gap, duration]);

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        className="flex w-max"
        style={{ x: translation, gap, opacity: isReady ? 1 : 0 }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
