import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Download, 
  Github, 
  Linkedin, 
  Send,
  MessageSquare,
  Coffee,
  Handshake
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="achievement-badge badge-gold mb-4">
            <Handshake className="w-4 h-4" />
            Let's Connect
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking for cybersecurity talent, need help with IT infrastructure, 
            or want to discuss automation projects, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Links */}
          <div className="space-y-8">
            <Card className="project-card p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Get In Touch</h3>
                    <p className="text-muted-foreground">Multiple ways to connect</p>
                  </div>
                </div>

                {/* Quick action buttons */}
                <div className="grid gap-4">
                  <Button size="lg" className="glow-on-hover group justify-start">
                    <Download className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Download Resume</div>
                      <div className="text-sm text-primary-foreground/80">Full technical background & experience</div>
                    </div>
                  </Button>

                  <Button variant="outline" size="lg" className="glow-on-hover group justify-start">
                    <Github className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">View GitHub</div>
                      <div className="text-sm text-muted-foreground">Code samples & project repositories</div>
                    </div>
                  </Button>

                  <Button variant="outline" size="lg" className="glow-on-hover group justify-start">
                    <Linkedin className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">LinkedIn Profile</div>
                      <div className="text-sm text-muted-foreground">Professional network & recommendations</div>
                    </div>
                  </Button>
                </div>

                {/* Quick stats */}
                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground mb-4">Quick facts about me:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Real MSP experience with client infrastructure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Cybersecurity bootcamp graduate & college student</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Hands-on automation and scripting experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>Security-focused learning and homelab testing</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Fun CAPTCHA reference */}
            <Card className="project-card p-6 border-2 border-dashed border-accent/30">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-accent">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-medium">Human Verification</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Are you a toaster? ☐ Yes ☑ No, I'm a recruiter looking for real talent
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="project-card p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                  <p className="text-muted-foreground">Let's discuss your needs</p>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" className="glow-on-hover" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Company name" className="glow-on-hover" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@company.com" className="glow-on-hover" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Role/Position Type</label>
                  <Input placeholder="e.g., Cloud Engineer, Security Analyst, DevOps" className="glow-on-hover" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about the role, your tech stack, or what challenges you're trying to solve..."
                    rows={4}
                    className="glow-on-hover"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full glow-on-hover group">
                  Send Message
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </form>
            </div>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-terminal-bg rounded-lg">
            <span className="text-terminal-accent font-mono text-sm">$</span>
            <span className="text-terminal-text font-mono text-sm">contact_me --interest="cybersecurity" --experience="msp-infrastructure"</span>
            <span className="text-terminal-accent font-mono text-sm animate-pulse">_</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;