"use client";
import { InfiniteSlider } from "./ui/infinite-slider";

const platforms = [
  "PadSplit",
  "Airbnb",
  "Furnished Finder",
  "TurboTenant",
  "TTLock",
  "Booking.com",
  "VRBO",
];

export default function SocialProof() {
  return (
    <section className="py-5 bg-white border-y border-charcoal/10 overflow-hidden">
      <div className="flex items-center gap-8 max-w-6xl mx-auto px-6">
        <p className="text-xs text-charcoal/40 uppercase tracking-widest whitespace-nowrap shrink-0 font-medium">
          Platforms
        </p>
        <InfiniteSlider gap={48} duration={25}>
          {platforms.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-charcoal/50 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
