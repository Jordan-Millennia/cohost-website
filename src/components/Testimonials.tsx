export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="animate-in text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold">
          What Owners Say
        </span>

        <div className="animate-in delay-100 mt-10 relative">
          <svg
            className="mx-auto w-14 h-14 text-gold/10 mb-4"
            viewBox="0 0 64 64"
            fill="currentColor"
          >
            <path d="M14.4 41.6c-3.2 0-5.8-1.1-7.8-3.2C4.5 36.2 3.5 33.4 3.5 30c0-4.3 1.4-8.2 4.3-11.7C10.7 15 14.8 12.3 20 10.5l2 3.5c-3.7 1.5-6.5 3.4-8.5 5.7-2 2.3-3 4.7-3.1 7.2.7-.3 1.6-.5 2.7-.5 2.4 0 4.3.8 5.8 2.3 1.5 1.6 2.2 3.5 2.2 5.9 0 2.3-.8 4.2-2.5 5.8-1.6 1.5-3.6 2.2-6.2 2.2zm30.5 0c-3.2 0-5.8-1.1-7.8-3.2-2.1-2.2-3.1-5-3.1-8.4 0-4.3 1.4-8.2 4.3-11.7 2.9-3.3 7-6 12.2-7.8l2 3.5c-3.7 1.5-6.5 3.4-8.5 5.7-2 2.3-3 4.7-3.1 7.2.7-.3 1.6-.5 2.7-.5 2.4 0 4.3.8 5.8 2.3 1.5 1.6 2.2 3.5 2.2 5.9 0 2.3-.8 4.2-2.5 5.8-1.6 1.5-3.6 2.2-6.2 2.2z" />
          </svg>
          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal leading-[1.3] italic">
            &ldquo;We&rsquo;re building the case studies now. In the meantime,
            our numbers speak louder than testimonials ever could.&rdquo;
          </blockquote>
          <div className="mt-8">
            <div className="text-sm font-semibold text-charcoal">
              CoHost Management Team
            </div>
            <div className="text-sm text-charcoal/40">
              500+ Units &middot; 94% Occupancy &middot; 18 Markets
            </div>
          </div>
        </div>

        <a
          href="#contact"
          className="animate-in delay-200 inline-flex items-center mt-10 text-sm font-semibold text-gold-dark hover:text-gold transition-colors gap-2"
        >
          Become one of our success stories
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </section>
  );
}
