import { ProgressiveBlur } from "./ui/progressive-blur";

export default function Hero() {
  return (
    <section className="relative h-screen max-h-[900px] overflow-hidden bg-dark">
      {/* Background Image — absolute, NOT fixed */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop"
        alt="Modern furnished co-living interior"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        width={1400}
        height={900}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

      {/* Progressive blur on right edge */}
      <ProgressiveBlur
        direction="left"
        blurLayers={8}
        blurIntensity={0.4}
        className="absolute right-0 inset-y-0 w-48 pointer-events-none z-10"
      />

      {/* Content — vertically centered */}
      <div className="relative z-20 h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="animate-in inline-flex items-center gap-2 border border-gold/40 rounded-full px-4 py-1.5 mb-6 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-gold text-xs uppercase tracking-widest font-medium">
            Now in 18 Markets
          </span>
        </div>

        <h1 className="animate-in delay-100 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold text-white leading-[1.08] tracking-[-0.02em] max-w-2xl">
          Your Properties.
          <br />
          <span className="text-gold">Optimized.</span> Paid.
        </h1>

        <p className="animate-in delay-200 mt-6 text-lg lg:text-xl text-white/50 max-w-lg leading-relaxed">
          Done-for-you co-living management across 18 markets. We handle
          everything — you collect returns.
        </p>

        <div className="animate-in delay-300 mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center bg-gold hover:bg-gold-light text-dark px-8 py-4 rounded-lg font-semibold text-base transition-colors"
          >
            Get Free Analysis
          </a>
          <a
            href="#portal"
            className="inline-flex items-center border border-white/15 hover:border-white/30 text-white/80 hover:text-white px-8 py-4 rounded-lg font-medium text-base transition-all"
          >
            View Owner Portal
          </a>
        </div>
      </div>
    </section>
  );
}
