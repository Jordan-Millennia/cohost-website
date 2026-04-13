"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2000,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Number((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : value}
      {suffix}
    </span>
  );
}
