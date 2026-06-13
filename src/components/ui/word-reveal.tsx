"use client";
import { motion } from "motion/react";

interface WordRevealProps {
  text: string;
  highlight?: string;
  highlightClass?: string;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  onComplete?: () => void;
}

export function WordReveal({
  text,
  highlight,
  highlightClass = "text-gold",
  className = "",
  staggerDelay = 0.12,
  initialDelay = 0.3,
  onComplete,
}: WordRevealProps) {
  const words = text.split(" ");
  const totalWords = words.length;

  return (
    <span className={className}>
      {words.map((word, i) => {
        const isHighlight = highlight && word.includes(highlight);
        const isLast = i === totalWords - 1;
        const delay = initialDelay + i * staggerDelay;
        return (
          <motion.span
            key={i}
            className={`inline-block ${isHighlight ? highlightClass : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: isHighlight ? 1.02 : 1,
            }}
            transition={{
              duration: 0.5,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={isLast && onComplete ? onComplete : undefined}
          >
            {word}
            {!isLast && "\u00A0"}
          </motion.span>
        );
      })}
    </span>
  );
}
