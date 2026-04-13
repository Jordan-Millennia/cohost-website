import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import WhyCoHost from "@/components/WhyCoHost";
import OwnerPortal from "@/components/OwnerPortal";
import HowItWorks from "@/components/HowItWorks";
import Markets from "@/components/Markets";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <WhyCoHost />
      <OwnerPortal />
      <HowItWorks />
      <Markets />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </>
  );
}
