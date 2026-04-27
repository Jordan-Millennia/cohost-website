const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand — wordmark only */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-display text-[22px] italic font-semibold tracking-tight text-white">
              CoHost
            </span>
            <p className="mt-4 text-sm text-white/30 leading-relaxed max-w-xs">
              National done-for-you co-living and PadSplit property management.
              Institutional-grade operations without the complexity.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/20 font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Room-by-Room Leasing",
                "Member Screening",
                "Property Operations",
                "Revenue & Reporting",
                "Owner Portal",
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/20 font-semibold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {["About", "Markets", "Case Studies", "Careers", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/20 font-semibold mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <a href="mailto:info@cohostmgmt.net" className="hover:text-white/70 transition-colors">
                  info@cohostmgmt.net
                </a>
              </li>
              <li>United States</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {currentYear} CoHost Management. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/20">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
