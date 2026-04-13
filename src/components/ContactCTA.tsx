"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Ready to turn your property
              <br className="hidden sm:block" /> into a performing asset?
            </h2>
            <p className="mt-4 text-white/40 text-lg">
              Get a free property analysis — no commitment, no setup fees.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {submitted ? (
            <div className="mt-12 text-center py-16">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                We&rsquo;ll be in touch
              </h3>
              <p className="mt-2 text-white/40">
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
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/25 focus:outline-none focus:border-brass/50 focus:ring-1 focus:ring-brass/25 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/25 focus:outline-none focus:border-brass/50 focus:ring-1 focus:ring-brass/25 transition-colors"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/25 focus:outline-none focus:border-brass/50 focus:ring-1 focus:ring-brass/25 transition-colors"
                />
                <select
                  name="properties"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/60 focus:outline-none focus:border-brass/50 focus:ring-1 focus:ring-brass/25 transition-colors appearance-none"
                >
                  <option value="" className="bg-dark text-white/60">
                    Number of Properties
                  </option>
                  <option value="1-3" className="bg-dark text-white">
                    1-3 Properties
                  </option>
                  <option value="4-10" className="bg-dark text-white">
                    4-10 Properties
                  </option>
                  <option value="11-20" className="bg-dark text-white">
                    11-20 Properties
                  </option>
                  <option value="20+" className="bg-dark text-white">
                    20+ Properties
                  </option>
                </select>
              </div>
              <input
                type="text"
                name="market"
                placeholder="Primary Market (City, State)"
                className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/25 focus:outline-none focus:border-brass/50 focus:ring-1 focus:ring-brass/25 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-brass hover:bg-brass-light text-dark py-4 rounded-xl font-semibold text-base transition-colors duration-200 mt-2 cursor-pointer"
              >
                Get Free Analysis
              </button>
            </form>
          )}
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="mt-8 text-center text-sm text-white/20">
            No setup fees &middot; Cancel anytime &middot; Free analysis
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
