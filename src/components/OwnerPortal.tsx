import ScrollReveal from "./ScrollReveal";
import { Check } from "lucide-react";

const portalFeatures = [
  "Real-time occupancy and revenue dashboards",
  "Automated monthly financial reports",
  "Maintenance request tracking",
  "Lease management and document storage",
  "Direct messaging with your operations team",
  "Tax-ready income and expense statements",
];

export default function OwnerPortal() {
  return (
    <section id="portal" className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Copy */}
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-brass font-semibold">
              Owner Portal
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-charcoal tracking-tight leading-[1.1]">
              Your portfolio.
              <br />
              Live. Anytime.
            </h2>
            <p className="mt-6 text-charcoal/50 text-lg leading-relaxed max-w-md">
              Everything you need to monitor and manage your investments,
              accessible from any device, updated in real time.
            </p>
            <ul className="mt-8 space-y-4">
              {portalFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-brass/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-brass" />
                  </span>
                  <span className="text-charcoal/60">{feature}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Right — Browser Mockup */}
          <ScrollReveal delay={200}>
            <div
              className="relative"
              style={{
                transform:
                  "perspective(1200px) rotateY(-8deg) rotateX(2deg)",
              }}
            >
              <div className="rounded-xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-charcoal/[0.08]">
                {/* Browser Title Bar */}
                <div className="bg-[#F5F5F5] px-4 py-3 flex items-center gap-3 border-b border-charcoal/[0.06]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-4 py-1.5 text-xs text-charcoal/40 text-center border border-charcoal/[0.06]">
                      portal.cohostmanagement.com
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="bg-white p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-[0.65rem] text-charcoal/30 uppercase tracking-wider font-medium">
                        Portfolio Overview
                      </div>
                      <div className="mt-1 font-display text-2xl font-bold text-charcoal">
                        $12,847
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        +12.3% vs last month
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-charcoal/30">
                        April 2026
                      </div>
                      <div className="mt-1 text-sm font-semibold text-charcoal">
                        8 Properties
                      </div>
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="h-20 mb-6 flex items-end gap-1.5">
                    {[40, 55, 45, 65, 58, 72, 68, 85, 78, 92, 88, 95].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm overflow-hidden bg-brass/10"
                          style={{ height: `${h}%` }}
                        >
                          <div className="w-full h-full rounded-sm bg-brass/40" />
                        </div>
                      )
                    )}
                  </div>

                  {/* Property Rows */}
                  <div className="space-y-0">
                    {[
                      {
                        name: "123 Oak Street",
                        rooms: "4/4",
                        revenue: "$3,200",
                        status: "Fully Occupied",
                        ok: true,
                      },
                      {
                        name: "456 Maple Ave",
                        rooms: "3/4",
                        revenue: "$2,400",
                        status: "1 Vacancy",
                        ok: false,
                      },
                      {
                        name: "789 Pine Blvd",
                        rooms: "5/5",
                        revenue: "$4,100",
                        status: "Fully Occupied",
                        ok: true,
                      },
                    ].map((p) => (
                      <div
                        key={p.name}
                        className="flex items-center justify-between py-3.5 border-t border-charcoal/[0.04]"
                      >
                        <div>
                          <div className="text-sm font-semibold text-charcoal">
                            {p.name}
                          </div>
                          <div className="text-xs text-charcoal/30">
                            {p.rooms} rooms
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-charcoal">
                            {p.revenue}
                          </div>
                          <div
                            className={`text-xs font-medium ${
                              p.ok ? "text-green-600" : "text-amber-500"
                            }`}
                          >
                            {p.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
