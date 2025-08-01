import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CareerTimeline from "@/components/CareerTimeline";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import WhatsNext from "@/components/WhatsNext";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="about">
          <CareerTimeline />
        </section>
        
        <section id="projects">
          <ProjectsShowcase />
        </section>
        
        <section id="next">
          <WhatsNext />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-mono text-xs">G</span>
              </div>
              <span className="font-medium">Gene's Portfolio</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              MSP → Cloud Engineer | Security Analyst. 
              Building secure, scalable automation that actually works in production.
            </p>
            <div className="text-xs text-muted-foreground">
              © 2024 Gene. Built with React, TypeScript, and way too much coffee.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
