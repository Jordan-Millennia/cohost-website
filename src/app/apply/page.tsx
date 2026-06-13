import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for a Room — CoHost Management",
  description:
    "Browse available co-living rooms and apply today. Furnished rooms with all utilities included across 18 markets nationwide.",
};

export default function ApplyPage() {
  return (
    <>
      {/* Nav bar */}
      <nav className="bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <a
            href="/"
            className="text-[22px] font-bold tracking-tight text-white"
          >
            CoHost
          </a>
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="text-[13px] font-medium tracking-wide text-white/50 hover:text-white transition-colors hidden sm:inline"
            >
              Home
            </a>
            <a
              href="/#services"
              className="text-[13px] font-medium tracking-wide text-white/50 hover:text-white transition-colors hidden sm:inline"
            >
              Services
            </a>
            <a
              href="/#contact"
              className="bg-gold hover:bg-gold-light text-dark px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Property Owners
            </a>
          </div>
        </div>
      </nav>

      {/* Hero header */}
      <section className="bg-charcoal pt-12 pb-16 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            Find Your Room
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Apply for a Room
          </h1>
          <p className="mt-6 text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            Browse our available furnished rooms across 18 markets. All
            utilities included, flexible terms, and a simple application
            process.
          </p>
        </div>
      </section>

      {/* TurboTenant Embed */}
      <section className="bg-white min-h-[1200px]">
        <div className="max-w-6xl mx-auto">
          <iframe
            src="https://rental.turbotenant.com/embedpropertylist.html#/QmFzaWNVc2VyUHJvZmlsZTo5ODgzMDM="
            title="CoHost Management — Available Rooms"
            height="1240"
            width="100%"
            style={{ border: "none", minHeight: "1240px" }}
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-12 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <a
            href="/"
            className="text-[22px] font-bold tracking-tight text-white"
          >
            CoHost
          </a>
          <p className="mt-4 text-sm text-white/30 max-w-md mx-auto">
            We handle the members, the maintenance, and the 2am calls. You
            handle the deposits.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-white/20">
            <a
              href="/"
              className="hover:text-white/40 transition-colors"
            >
              Home
            </a>
            <a
              href="/#contact"
              className="hover:text-white/40 transition-colors"
            >
              Contact
            </a>
            <a
              href="/#markets"
              className="hover:text-white/40 transition-colors"
            >
              Markets
            </a>
          </div>
          <p className="mt-8 text-xs text-white/15">
            &copy; {new Date().getFullYear()} CoHost Management, LLC. Operated
            by CoSpace Management LLC.
          </p>
        </div>
      </footer>
    </>
  );
}
