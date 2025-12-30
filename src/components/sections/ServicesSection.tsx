import { Smartphone, Brain, BarChart3, Palette, Globe, Zap } from "lucide-react";

const services = [
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
    description: "Transform raw data into actionable insights with our advanced analytics and business intelligence solutions."
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "User-centered design that balances aesthetics with functionality to create memorable digital experiences."
  },
  {
    icon: Globe,
    title: "Global Scaling",
    description: "Infrastructure and strategies designed to help your product reach and serve billions of users worldwide."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed and efficiency improvements that enhance user satisfaction and reduce operational costs."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden h-[320px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              {service.image ? (
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                </div>
              ) : (
                <div className="absolute inset-0 bg-card" />
              )}
              
              {/* Content Overlay */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  {service.image ? (
                    <div className="text-white">
                      <service.icon size={28} />
                    </div>
                  ) : (
                    <service.icon 
                      size={28} 
                      className="text-primary group-hover:text-primary-foreground transition-colors duration-300" 
                    />
                  )}
                </div>
                
                <div className={service.image ? "text-white" : ""}>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className={service.image ? "text-white/90 leading-relaxed" : "text-muted-foreground leading-relaxed"}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
