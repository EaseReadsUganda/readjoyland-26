
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/home/HeroSection";
import { PricingSection } from "../components/home/PricingSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { GettingStartedSection } from "../components/home/GettingStartedSection";
import { CTASection } from "../components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <GettingStartedSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
