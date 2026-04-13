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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-charcoal/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/cohost-website/logo.png"
            alt="CoHost"
            className="h-9 w-9 rounded-lg object-contain"
            width={36}
            height={36}
          />
          <span
            className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            CoHost
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`text-[0.8125rem] font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-charcoal/50 hover:text-charcoal"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">
          <span
            className={`text-[0.8125rem] font-medium transition-all duration-300 cursor-pointer ${
              scrolled
                ? "opacity-100 text-charcoal/40 hover:text-charcoal"
                : "opacity-0 pointer-events-none"
            }`}
          >
            Log In
          </span>
          <a
            href="#contact"
            className="bg-brass hover:bg-brass-light text-dark px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
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
            className={`h-0.5 w-full rounded-full transition-all duration-300 origin-center ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`}
          />
          <span
            className={`h-0.5 w-full rounded-full transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`h-0.5 w-full rounded-full transition-all duration-300 origin-center ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-charcoal/[0.06] px-6 py-6 space-y-1">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block py-3 text-charcoal font-medium text-base"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 bg-brass text-dark px-5 py-3.5 rounded-lg text-center font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Get Free Analysis
          </a>
        </div>
      </div>
    </nav>
  );
}
