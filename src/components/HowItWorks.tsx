const steps = [
  {
    number: "01",
    title: "Free Property Analysis",
    description:
      "We evaluate your property's co-living potential, market comps, and projected revenue — no commitment required.",
  },
  {
    number: "02",
    title: "Onboarding & Setup",
    description:
      "We handle furnishing, smart locks, listing creation, and compliance. Your property goes live within weeks.",
  },
  {
    number: "03",
    title: "Sit Back & Collect",
    description:
      "We manage operations, tenants, maintenance, and reporting. You receive monthly distributions and live dashboards.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-in text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold">
            How It Works
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
            Three Steps to Passive Income
          </h2>
        </div>

        <div className="mt-16 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[16.67%] right-[16.67%] h-px bg-charcoal/[0.08]" />

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`animate-in delay-${(i + 1) * 100} text-center lg:px-6`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cream mb-6 relative z-10">
                  <span className="font-display text-2xl font-bold text-gold">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 text-charcoal/45 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
