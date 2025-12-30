import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cosmic Background with Animated Gradient */}
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
          animation: 'gradientShift 15s ease infinite'
        }}
      />
      
      {/* Stars and Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated stars */}
        {[...Array(50)].map((_, i) => (
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
        
        {/* Large glowing orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/20 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-teal-500/15 blur-3xl animate-float" style={{ animationDelay: "6s" }} />
        
        {/* Cosmic dust effect */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
              radial-gradient(2px 2px at 60% 70%, white, transparent),
              radial-gradient(1px 1px at 50% 50%, white, transparent),
              radial-gradient(1px 1px at 80% 10%, white, transparent),
              radial-gradient(2px 2px at 90% 60%, white, transparent),
              radial-gradient(1px 1px at 33% 80%, white, transparent)`,
            backgroundSize: "200% 200%",
            animation: 'floatParticles 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="opacity-0 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Powering products for 1B+ users
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up stagger-1">
            Engineering Intelligence
            <br />
            <span className="relative">
              for the World
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 8" stroke="rgba(255,255,255,0.3)" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-up stagger-2">
            We build mobile and AI products that scale globally. Data-driven, 
            design-led, results-focused. Creating world-class experiences for 
            users around the world.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/#contact">
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/publishing">
                <Play size={20} />
                View Publishing
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-primary-foreground/10 opacity-0 animate-fade-up stagger-4">
            <div>
              <div className="text-primary-foreground/60 text-sm">Global presence across key markets</div>
            </div>
            <div>
              <div className="text-primary-foreground/60 text-sm">A growing portfolio of digital products</div>
            </div>
            <div>
              <div className="text-primary-foreground/60 text-sm">User-first & data-driven product philosophy</div>
            </div>
            <div>
              <div className="text-primary-foreground/60 text-sm">A compact, high-performance cross-functional team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
