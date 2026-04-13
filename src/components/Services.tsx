import { Home, ShieldCheck, Wrench, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Room-by-Room Leasing",
    description:
      "Maximize revenue per property with individual room listings, optimized pricing, and multi-platform syndication.",
    metric: "2-3x more revenue per door",
  },
  {
    icon: ShieldCheck,
    title: "Member Screening",
    description:
      "AI-enhanced background checks, income verification, and behavioral scoring to ensure quality tenants.",
    metric: "98% approval accuracy",
  },
  {
    icon: Wrench,
    title: "Property Operations",
    description:
      "Maintenance coordination, cleaning schedules, smart lock management, and 24/7 emergency response.",
    metric: "< 3 min avg response time",
  },
  {
    icon: BarChart3,
    title: "Revenue & Reporting",
    description:
      "Real-time dashboards, automated rent collection, financial reporting, and tax-ready statements.",
    metric: "Live portfolio tracking",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-in">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold">
            What We Do
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight">
            Full-Spectrum
            <br className="hidden sm:block" /> Operations
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-in delay-${(i + 1) * 100} group bg-white rounded-2xl p-8 border border-charcoal/[0.08] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gold/30`}
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-5 h-5 text-gold stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/60 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 text-gold-dark font-semibold text-sm">
                {service.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
