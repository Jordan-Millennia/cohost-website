"use client";
import { NumberTicker } from "./ui/number-ticker";

const stats = [
  { value: 500, suffix: "+", label: "Units Managed" },
  { value: 94, suffix: "%", label: "Avg Occupancy" },
  { value: 18, suffix: "", label: "Active Markets" },
  { value: 0, suffix: "", label: "Setup Fee", prefix: "$", isStatic: true },
];

export default function StatBar() {
  return (
    <section className="bg-charcoal py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-4xl lg:text-5xl font-bold text-white">
              {stat.isStatic ? (
                "$0"
              ) : (
                <NumberTicker
                  value={stat.value}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix}
                />
              )}
            </div>
            <div className="mt-2 text-xs text-white/30 uppercase tracking-[0.15em] font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
