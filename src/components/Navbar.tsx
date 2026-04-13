"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Owner Portal", href: "#portal" },
  { label: "Markets", href: "#markets" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo — wordmark only, no icon */}
        <a href="#" className="font-display text-[22px] italic font-semibold tracking-tight text-white">
          CoHost
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-medium tracking-wide text-white/50 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">
          <span
            className={`text-[13px] font-medium transition-all duration-300 cursor-pointer ${
              scrolled
                ? "opacity-100 text-white/40 hover:text-white"
                : "opacity-0 pointer-events-none"
            }`}
          >
            Log In
          </span>
          <a
            href="#contact"
            className="bg-gold hover:bg-gold-light text-dark px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            Get Free Analysis
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative w-7 h-5 flex flex-col justify-between"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-charcoal/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-1">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block py-3 text-white font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 bg-gold text-dark px-5 py-3.5 rounded-lg text-center font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Get Free Analysis
          </a>
        </div>
      </div>
    </nav>
  );
}
