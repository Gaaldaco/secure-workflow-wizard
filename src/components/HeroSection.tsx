import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Terminal, Shield, Cloud, ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building Secure IT Infrastructure & Automation";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Achievement badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 px-4">
            <Badge className="achievement-badge badge-gold">
              <Shield className="w-3 h-3" />
              Security-Focused
            </Badge>
            <Badge className="achievement-badge badge-silver">
              <Terminal className="w-3 h-3" />
              Automation-Builder
            </Badge>
            <Badge className="achievement-badge badge-gold">
              <Cloud className="w-3 h-3" />
              Infrastructure-Driven
            </Badge>
          </div>

          {/* Main heading */}
          <div className="space-y-4 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-fade-in">
              Welcome!
            </h1>
            
            {/* Typewriter effect */}
            <div className="text-lg sm:text-xl md:text-3xl text-muted-foreground font-medium h-10 md:h-12 flex items-center justify-center px-2">
              <span className="border-r-2 border-primary animate-pulse">
                {typedText}
              </span>
            </div>
          </div>

          {/* Tagline */}
          <div className="space-y-2 animate-fade-in delay-500">
            <p className="text-xl md:text-2xl font-semibold text-primary">
              MSP Technician. Security Student. Automation Builder.
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto animate-fade-in delay-700 px-4">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Currently working at an MSP where I build and manage infrastructure, automate workflows, 
              and secure client environments. Studying <span className="text-primary font-medium">cybersecurity </span> 
              in college and recently completed a bootcamp. I focus on practical solutions that work in 
              <span className="text-primary font-medium"> real production environments</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in delay-1000">
            <Button
              size="lg"
              className="glow-on-hover group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See My Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button asChild variant="outline" size="lg" className="glow-on-hover">
              <a
                href="/Gene%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Terminal window */}
          <div className="mt-12 md:mt-16 max-w-2xl mx-auto animate-fade-in delay-1200 px-4">
            <div className="terminal-glow rounded-lg p-4 md:p-6 text-left overflow-x-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-badge-gold"></div>
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="text-terminal-text text-sm ml-4">gene@portfolio:~$</span>
              </div>
              <div className="space-y-2 text-terminal-text font-mono text-sm">
                <div className="flex items-center">
                  <span className="text-terminal-accent">$</span>
                  <span className="ml-2">whoami</span>
                </div>
                <div className="text-terminal-text">MSP Technician | Cybersecurity Student</div>
                <div className="flex items-center">
                  <span className="text-terminal-accent">$</span>
                  <span className="ml-2">cat specialties.txt</span>
                </div>
                <div className="text-terminal-text">PowerShell, n8n, Proxmox, pfSense, M365, ESXI</div>
                <div className="flex items-center">
                  <span className="text-terminal-accent">$</span>
                  <span className="ml-2 animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
