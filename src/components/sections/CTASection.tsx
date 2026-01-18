import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding relative">
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Scale Your
            <br />
            Digital Presence?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
            Let's discuss how we can help you build products that reach billions 
            of users and create lasting impact in the global market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <a href="mailto:admin@nexax.global">
                <Mail size={20} />
                Get in Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/publishing">
                Learn More
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
