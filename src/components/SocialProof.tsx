const partners = [
  "PadSplit",
  "Airbnb",
  "Furnished Finder",
  "TurboTenant",
  "TTLock",
];

export default function SocialProof() {
  const items = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-5 bg-white border-y border-charcoal/[0.04] overflow-hidden">
      <div className="flex items-center gap-6 sm:gap-10">
        <span className="shrink-0 pl-6 sm:pl-10 text-[0.65rem] uppercase tracking-[0.2em] text-charcoal/25 font-semibold whitespace-nowrap">
          Trusted partners
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee">
            {items.map((name, i) => (
              <span
                key={i}
                className="shrink-0 px-8 sm:px-12 text-sm sm:text-base font-bold text-charcoal/[0.12] uppercase tracking-[0.15em] select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
