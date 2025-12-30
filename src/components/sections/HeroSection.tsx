import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
