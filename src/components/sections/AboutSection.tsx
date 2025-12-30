import { Target, TrendingUp, Users, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Product Craftsmanship",
    description: "We obsess over every detail, from pixel-perfect design to flawless code, ensuring each product we build is a masterpiece of engineering and creativity."
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Growth",
    description: "Every decision we make is backed by data. We measure, analyze, and iterate to ensure sustainable growth and continuous improvement."
  },
  {
    icon: Users,
    title: "User-First Design",
    description: "Our users are at the heart of everything we create. We design experiences that delight, engage, and solve real problems for real people."
  }
];

const milestones = [
  { year: "2018", event: "Founded with a vision to scale AI globally" },
  { year: "2020", event: "Reached 100 million users milestone" },
  { year: "2022", event: "Expanded to 100+ countries worldwide" },
  { year: "2024", event: "Serving 1 billion+ users globally" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              About NexaX
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Pioneering the Future of
              <span className="gradient-text"> Global Tech</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              NexaX is a technology company focused on building global mobile and AI products. 
              We combine product craftsmanship, user-first design, and data-driven insights to 
              accelerate growth and deliver world-class experiences at scale. Our mission is to 
              create products that make a meaningful difference in the lives of billions of users.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image & Timeline */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">NX</span>
                  </div>
                  <p className="text-muted-foreground">
                    Building technology for tomorrow, today
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-8 bg-card rounded-2xl p-6 shadow-lg border border-border/50">
              <h4 className="font-semibold text-foreground mb-4">Our Journey</h4>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-8 bg-border" />
                      )}
                    </div>
                    <div className="pb-4">
                      <span className="text-primary font-semibold">{milestone.year}</span>
                      <p className="text-muted-foreground text-sm">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-semibold">Since 2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
