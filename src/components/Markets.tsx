import ScrollReveal from "./ScrollReveal";

const activeMarkets = [
  "Atlanta, GA",
  "Dallas, TX",
  "Houston, TX",
  "San Antonio, TX",
  "Charlotte, NC",
  "Nashville, TN",
  "Memphis, TN",
  "Birmingham, AL",
  "Jacksonville, FL",
  "Tampa, FL",
  "Orlando, FL",
  "Indianapolis, IN",
  "Columbus, OH",
  "Kansas City, MO",
  "St. Louis, MO",
  "Milwaukee, WI",
  "Phoenix, AZ",
  "Denver, CO",
];

const expandingMarkets = [
  "Austin, TX",
  "Raleigh, NC",
  "Richmond, VA",
  "Oklahoma City, OK",
  "Louisville, KY",
  "Tucson, AZ",
];

export default function Markets() {
  return (
    <section id="markets" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-brass font-semibold">
              Coverage
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
              18 Markets and Growing
            </h2>
            <p className="mt-4 text-charcoal/45 text-lg">
              We operate in high-demand metros across the US with proven
              co-living demand.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {activeMarkets.map((market) => (
              <span
                key={market}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-charcoal/[0.06] text-sm font-medium text-charcoal/70"
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                {market}
              </span>
            ))}
            {expandingMarkets.map((market) => (
              <span
                key={market}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-charcoal/[0.06] text-sm font-medium text-charcoal/40"
              >
                <span className="w-2 h-2 rounded-full bg-brass" />
                {market}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-8 flex items-center justify-center gap-8 text-xs text-charcoal/30">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Active
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brass" />
              Expanding
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
