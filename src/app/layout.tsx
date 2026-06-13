import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CoHost Management — Done-for-You Co-Living Property Management",
  description:
    "National done-for-you co-living and PadSplit property management. 500+ units across 18 markets with 94% occupancy. We handle everything — you collect returns.",
  openGraph: {
    title: "CoHost Management — Done-for-You Co-Living Property Management",
    description:
      "National done-for-you co-living management across 18 markets. We handle everything — you collect returns.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-cream text-charcoal antialiased">
        {children}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          strategy="afterInteractive"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a2cb4e49cb8f1e129ac3187"
          data-source="WEB_USER"
        />
      </body>
    </html>
  );
}
