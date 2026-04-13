"use client";

export function ProgressiveBlur({
  direction = "right",
  blurLayers = 6,
  blurIntensity = 0.3,
  className = "",
}: {
  direction?: "left" | "right" | "top" | "bottom";
  blurLayers?: number;
  blurIntensity?: number;
  className?: string;
}) {
  const angles: Record<string, number> = {
    left: 270,
    right: 90,
    top: 0,
    bottom: 180,
  };
  const angle = angles[direction] ?? 90;
  const segSize = 1 / (blurLayers + 1);

  return (
    <div className={`relative ${className}`}>
      {Array.from({ length: blurLayers }).map((_, i) => {
        const stops = [i, i + 1, i + 2, i + 3]
          .map(
            (p, pi) =>
              `rgba(0,0,0,${pi === 1 || pi === 2 ? 1 : 0}) ${p * segSize * 100}%`
          )
          .join(", ");
        return (
          <div
            key={i}
            className="pointer-events-none absolute inset-0"
            style={{
              maskImage: `linear-gradient(${angle}deg, ${stops})`,
              WebkitMaskImage: `linear-gradient(${angle}deg, ${stops})`,
              backdropFilter: `blur(${i * blurIntensity}px)`,
            }}
          />
        );
      })}
    </div>
  );
}
