import Counter from "./Counter";

const stats = [
  { value: 500, suffix: "+", label: "Units Managed" },
  { value: 94, suffix: "%", label: "Avg Occupancy" },
  { value: 18, suffix: "", label: "Active Markets" },
  { value: 0, suffix: "", label: "Setup Fee", prefix: "$", isStatic: true },
];

export default function Hero() {
  return (
    <section className="relative">
      {/* Main hero */}
      <div className="relative min-h-screen bg-dark grid lg:grid-cols-2">
        {/* Mobile bg image */}
        <div className="lg:hidden absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=70&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-15"
            loading="eager"
            width={800}
            height={600}
          />
        </div>

        {/* Left — Copy */}
        <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-16 lg:py-20">
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold text-white leading-[1.05] tracking-[-0.02em]">
            Your Properties.
            <br />
            <span className="text-brass">Optimized.</span> Paid.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/50 max-w-lg leading-relaxed">
            Done-for-you co-living management across 18 markets. We handle
            everything — you collect returns.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center bg-brass hover:bg-brass-light text-dark px-8 py-4 rounded-lg font-semibold text-base transition-colors duration-200"
            >
              Get Free Analysis
            </a>
            <a
              href="#portal"
              className="inline-flex items-center border border-white/15 hover:border-white/30 text-white/80 hover:text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-200"
            >
              View Owner Portal
            </a>
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative hidden lg:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop"
            alt="Modern furnished co-living interior"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            width={1200}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/50 to-transparent" />
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 sm:px-8 py-8 sm:py-10 text-center ${
                i % 2 === 1 ? "border-l border-white/[0.06]" : ""
              } ${i >= 2 ? "max-lg:border-t max-lg:border-white/[0.06]" : ""} ${
                i >= 2 ? "lg:border-l lg:border-white/[0.06]" : ""
              }`}
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {stat.isStatic ? (
                  <span>$0</span>
                ) : (
                  <Counter
                    target={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-white/30 uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
