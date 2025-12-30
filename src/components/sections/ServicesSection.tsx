import { Smartphone, Brain, BarChart3, Palette, Globe, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const servicesWithImages = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps built for performance, scalability, and exceptional user experience.",
    image: "/mobile-dev.png"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI, from recommendation engines to natural language processing.",
    image: "/ai-ml.png"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics and business intelligence solutions.",
    image: "/data.png"
  }
];

const otherServices = [
  {
    icon: Palette,
    title: "Product Design",
    description: "User-centered design that balances aesthetics with functionality to create memorable digital experiences.",
    image: "/product.png"
  },
  {
    icon: Globe,
    title: "Global Scaling",
    description: "Infrastructure and strategies designed to help your product reach and serve billions of users worldwide.",
    image: "/global.png"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed and efficiency improvements that enhance user satisfaction and reduce operational costs.",
    image: "/performace.png"
  }
];

export const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(autoScroll);
    };

    const animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef2.current;
    if (!scrollContainer) return;

    let scrollAmount = scrollContainer.scrollWidth / 2;
    const scrollSpeed = 0.5;

    const autoScroll = () => {
      scrollAmount -= scrollSpeed;
      if (scrollAmount <= 0) {
        scrollAmount = scrollContainer.scrollWidth / 2;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(autoScroll);
    };

    const animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="services" className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building the Future of
            <span className="gradient-text"> Digital Products</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We combine technical excellence with creative thinking to deliver solutions 
            that drive growth and create lasting value for businesses worldwide.
          </p>
        </div>

        {/* Sliding Image Cards - Right to Left */}
        <div className="mb-8 overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden pb-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {[...servicesWithImages, ...servicesWithImages].map((service, index) => (
              <div
                key={`${service.title}-${index}`}
                className="group relative rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden flex-shrink-0 w-[400px] h-[320px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                </div>
                
                {/* Content Overlay */}
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services Sliding - Left to Right */}
        <div className="overflow-hidden">
          <div 
            ref={scrollRef2}
            className="flex gap-6 overflow-x-hidden pb-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {[...otherServices, ...otherServices].map((service, index) => (
              <div
                key={`${service.title}-${index}`}
                className="group relative rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden flex-shrink-0 w-[400px] h-[320px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                </div>
                
                {/* Content Overlay */}
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
