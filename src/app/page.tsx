import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { FeatureBento } from "@/components/FeatureBento";
import { SigningProcess } from "@/components/SigningProcess";
import { HowItWorks } from "@/components/HowItWorks";
import { AIFeature } from "@/components/AIFeature";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SigningProcess />
        <TrustStrip />
        <FeatureBento />
        <HowItWorks />
        <AIFeature />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
