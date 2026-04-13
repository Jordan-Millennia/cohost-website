import ScrollReveal from "./ScrollReveal";
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.2em] text-brass font-semibold">
            What We Do
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight">
            Full-Spectrum
            <br className="hidden sm:block" /> Operations
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div className="group bg-white rounded-2xl border border-charcoal/[0.06] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] h-full">
                <service.icon className="w-7 h-7 text-brass stroke-[1.5]" />
                <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 text-charcoal/50 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass" />
                  {service.metric}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
