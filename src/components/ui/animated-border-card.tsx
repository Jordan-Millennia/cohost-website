"use client";
import { motion } from "motion/react";

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function AnimatedBorderCard({
  children,
  className = "",
  index = 0,
}: AnimatedBorderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className={`group relative rounded-xl p-[1px] ${className}`}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-xl bg-[rgba(255,255,255,0.06)] group-hover:bg-[conic-gradient(from_var(--border-angle),#1a1a18_0%,#C9A84C_25%,#1a1a18_50%,#C9A84C_75%,#1a1a18_100%)] transition-all duration-500 animate-border-rotate" />
      {/* Card interior */}
      <div className="relative rounded-[11px] bg-[#FAF9F5]">{children}</div>
    </motion.div>
  );
}
