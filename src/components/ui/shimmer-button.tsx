"use client";
import { useRef, useState } from "react";
import { motion } from "motion/react";

interface ShimmerButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  shimmerInterval?: number;
}

export function ShimmerButton({
  children,
  href,
  className = "",
  shimmerInterval = 4000,
}: ShimmerButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = ((e.clientX - centerX) / rect.width) * 8;
    const y = ((e.clientY - centerY) / rect.height) * 8;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(201,168,76,0.4)" }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`relative inline-flex items-center overflow-hidden bg-gold hover:bg-gold-light text-dark font-semibold transition-colors ${className}`}
    >
      {/* Shimmer overlay */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: shimmerInterval / 1000 - 1.2,
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
