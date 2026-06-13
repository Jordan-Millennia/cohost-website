"use client";
import { useState } from "react";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full bg-white border border-charcoal/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-charcoal placeholder:text-charcoal/40 transition-all";

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="animate-in text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-dark font-semibold">
            Ready to Start
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.1]">
            Find Out What Your Property
            <br className="hidden sm:block" /> Could Actually Earn.
          </h2>
          <p className="mt-4 text-charcoal/50 text-lg">
            Free analysis. No commitment. No setup fees.
          </p>
        </div>

        <div className="animate-in delay-200">
          {submitted ? (
            <div className="mt-12 text-center py-16">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal">
                We&rsquo;ll be in touch
              </h3>
              <p className="mt-2 text-charcoal/50">
                Expect a response within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-12 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Full Name" required className={inputClass} />
                <input type="email" name="email" placeholder="Email Address" required className={inputClass} />
              </div>
              <select name="properties" required className={`${inputClass} text-charcoal/60`}>
                <option value="">Number of Properties</option>
                <option value="1-3">1-3 Properties</option>
                <option value="4-10">4-10 Properties</option>
                <option value="11-20">11-20 Properties</option>
                <option value="20+">20+ Properties</option>
              </select>
              <input type="text" name="market" placeholder="Primary Market (City, State)" className={inputClass} />
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-dark py-4 rounded-lg font-semibold text-base transition-colors cursor-pointer mt-2"
              >
                Run My Free Analysis
              </button>
            </form>
          )}
        </div>

        <p className="animate-in delay-300 mt-8 text-center text-sm text-charcoal/30">
          No setup fees &middot; Cancel anytime &middot; Free analysis
        </p>
      </div>
    </section>
  );
}
