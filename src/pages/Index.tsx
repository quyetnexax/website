import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PublishingPreview } from "@/components/sections/PublishingPreview";
import { CTASection } from "@/components/sections/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NexaX - Scaling Intelligence for Billions</title>
        <meta 
          name="description" 
          content="NexaX builds mobile and AI products that scale globally. Data-driven, design-led, results-focused. Creating world-class experiences for users around the world." 
        />
        <meta property="og:title" content="NexaX - Scaling Intelligence for Billions" />
        <meta property="og:description" content="We build mobile and AI products that scale globally. Data-driven, design-led, results-focused." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NexaX - Scaling Intelligence for Billions" />
        <meta name="twitter:description" content="We build mobile and AI products that scale globally. Data-driven, design-led, results-focused." />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PublishingPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
