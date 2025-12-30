import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circle */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-foreground/5 animate-float" />
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-primary-foreground/5 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] rounded-full bg-primary-foreground/5 animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-primary-foreground/10 rotate-45 animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-primary-foreground/10 rotate-12 animate-pulse-slow" style={{ animationDelay: "1s" }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
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
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">1B+</div>
              <div className="text-primary-foreground/60 text-sm">Global Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">100+</div>
              <div className="text-primary-foreground/60 text-sm">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/60 text-sm">Products</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/60 text-sm">Team Members</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50">
        <span className="text-xs font-medium">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
