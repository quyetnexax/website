import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PublishingPreview } from "@/components/sections/PublishingPreview";
import { CTASection } from "@/components/sections/CTASection";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>NexaX - Engineering Intelligence for the World</title>
        <meta 
          name="description" 
          content="NexaX builds mobile and AI products that scale globally. Data-driven, design-led, results-focused. Creating world-class experiences for users around the world." 
        />
        <meta property="og:title" content="NexaX - Engineering Intelligence for the World" />
        <meta property="og:description" content="We build mobile and AI products that scale globally. Data-driven, design-led, results-focused." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NexaX - Engineering Intelligence for the World" />
        <meta name="twitter:description" content="We build mobile and AI products that scale globally. Data-driven, design-led, results-focused." />
      </Helmet>

      {/* Global Cosmic Background with Parallax */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base cosmic gradient */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: `
              radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at top right, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at bottom left, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at bottom right, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
              linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
            `,
            animation: 'gradientShift 20s ease infinite'
          }}
        />
        
        {/* Galaxy / Milky Way effect layers */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: 'transform'
          }}
        >
          {/* Milky Way band */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: `
                linear-gradient(45deg, 
                  transparent 0%, 
                  transparent 30%,
                  rgba(255, 255, 255, 0.05) 35%,
                  rgba(139, 92, 246, 0.15) 40%,
                  rgba(236, 72, 153, 0.2) 50%,
                  rgba(59, 130, 246, 0.15) 60%,
                  rgba(255, 255, 255, 0.05) 65%,
                  transparent 70%,
                  transparent 100%
                )
              `,
              transform: `rotate(-25deg) scale(1.5) translateY(${scrollY * 0.3}px)`
            }}
          />
        </div>

        {/* Stars layers with parallax */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: 'transform'
          }}
        >
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>

        {/* Nebula clouds with parallax */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            willChange: 'transform'
          }}
        >
          <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-3xl animate-float" />
          <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/20 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
          <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] rounded-full bg-teal-500/15 blur-3xl animate-float" style={{ animationDelay: "6s" }} />
        </div>

        {/* Cosmic dust with parallax */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            willChange: 'transform',
            backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
              radial-gradient(2px 2px at 60% 70%, white, transparent),
              radial-gradient(1px 1px at 50% 50%, white, transparent),
              radial-gradient(1px 1px at 80% 10%, white, transparent),
              radial-gradient(2px 2px at 90% 60%, white, transparent),
              radial-gradient(1px 1px at 33% 80%, white, transparent)`,
            backgroundSize: '200% 200%',
            animation: 'floatParticles 30s ease-in-out infinite'
          }}
        />
      </div>

      <Header />
      <main className="relative">
        <HeroSection />
        <PublishingPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
