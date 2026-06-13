"use client";
import { motion } from "motion/react";
import { NumberTicker } from "./ui/number-ticker";
import { ShimmerButton } from "./ui/shimmer-button";

const stats = [
  { value: 94, suffix: "%", label: "Avg Occupancy Rate" },
  { value: 3, prefix: "< ", suffix: " min", label: "Avg Member Response Time" },
  { label: "To Get Started", isStatic: true, display: "$0" },
];

export default function RevenueProof() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#141413] overflow-hidden">
      {/* Subtle gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] font-semibold">
            By the Numbers
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            The numbers say enough.
          </h2>
          <p className="mt-4 text-lg text-white/40">
            We&rsquo;re not building case studies. We&rsquo;re building returns.
          </p>
        </motion.div>

        {/* 3-Stat Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <div className="text-5xl sm:text-6xl font-bold text-white font-display">
                {stat.isStatic ? (
                  stat.display
                ) : (
                  <NumberTicker
                    value={stat.value!}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix ?? ""}
                  />
                )}
              </div>
              <div className="mt-3 text-xs text-white/30 uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] my-16 lg:my-20" />

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-white/80 italic leading-[1.3]">
            &ldquo;500 units. 18 markets. $0 to get started.
            Most platforms ask you to manage more.
            We ask you to manage nothing.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold tracking-widest uppercase text-[#C9A84C]">
            &mdash; CoHost Management
          </p>

          {/* CTA */}
          <div className="flex justify-center mt-10">
            <ShimmerButton
              href="#contact"
              className="px-8 py-4 rounded-lg text-base"
            >
              Get Your Free Property Analysis
            </ShimmerButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
