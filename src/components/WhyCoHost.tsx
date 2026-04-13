import ScrollReveal from "./ScrollReveal";
import Counter from "./Counter";
import { Cpu, Lock, Monitor, Clock } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Communications",
    description:
      "Automated responses, lead nurturing, and member communications that feel personal.",
  },
  {
    icon: Lock,
    title: "Smart Lock Integration",
    description:
      "TTLock-powered keyless entry with remote access and audit trails for every door.",
  },
  {
    icon: Monitor,
    title: "Transparent Owner Portal",
    description:
      "Real-time visibility into occupancy, revenue, expenses, and property performance.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description:
      "Round-the-clock support for members and immediate response to property issues.",
  },
];

const counters = [
  { target: 94, suffix: "%", label: "Avg Occupancy", decimals: 0 },
  { target: 2.1, suffix: "x", label: "Revenue vs Traditional", decimals: 1 },
  { target: 4.9, suffix: "", label: "Member Rating", decimals: 1, prefix: "" },
  { target: 3, suffix: " min", label: "Response Time", decimals: 0, prefix: "<" },
];

export default function WhyCoHost() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Pull Quote */}
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brass font-semibold">
              Why CoHost
            </span>
            <blockquote className="mt-8 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.2] italic">
              &ldquo;We treat your property like an asset, not a listing.&rdquo;
            </blockquote>
          </ScrollReveal>

          {/* Right — Features */}
          <div className="space-y-8 lg:pt-4">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="flex gap-5">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-brass stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-white/40 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Stat Counters */}
        <div className="mt-20 pt-16 border-t border-white/[0.06] grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {counters.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="font-display text-4xl sm:text-5xl font-bold text-white">
                  <Counter
                    target={stat.target}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="mt-2 text-xs text-white/25 uppercase tracking-[0.15em] font-medium">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
