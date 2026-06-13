"use client";
import { useRef, useState } from "react";
import { motion } from "motion/react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function SpotlightCard({
  children,
  className = "",
  index = 0,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl bg-[#1a1a18] border transition-colors duration-300 ${
        isHovered
          ? "border-[rgba(201,168,76,0.3)]"
          : "border-[rgba(255,255,255,0.06)]"
      } ${className}`}
    >
      {/* Spotlight glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201,168,76,0.15), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
