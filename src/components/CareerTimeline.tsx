import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Target, Wrench, Shield } from "lucide-react";

const CareerTimeline = () => {
  const mspSkills = [
    "Built and managed domain environments (on-prem and hybrid) for multiple clients",
    "Deployed Windows Servers, ESXI, VMware, and Proxmox environments",
    "Automated user onboarding/offboarding with PowerShell, ImmyBot, and Tactical RMM",
    "Created n8n workflows syncing data between ConnectWise, Hudu, and HighLevel",
    "Configured security tools: Defender, BitLocker, patch policies, and vulnerability scanning"
  ];

  const futureGoals = [
    "Cybersecurity roles focusing on threat analysis and incident response",
    "Security certifications (CompTIA Security+)",
    "Advanced automation for security monitoring and alerting",
    "Cloud security engineering with Azure and AWS",
    "SOC analyst work with SIEM tools and threat hunting"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From MSP infrastructure work to cybersecurity focus
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* What I Did - Left Side */}
          <Card className="project-card p-8 relative">
            <div className="absolute -top-4 left-8">
              <Badge className="achievement-badge badge-silver">
                <Wrench className="w-4 h-4" />
                MSP Experience
              </Badge>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">What I Do at the MSP</h3>
                  <p className="text-muted-foreground">Real-world infrastructure, security, and automation</p>
                </div>
              </div>

              <div className="space-y-4">
                {mspSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 animate-slide-in-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground leading-relaxed">{skill}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {['PowerShell', 'n8n', 'Proxmox', 'pfSense', 'Hyper-V', 'M365'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Arrow connecting the two sides */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-primary rounded-full p-3 animate-glow-pulse">
              <ArrowRight className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>

          {/* Where I'm Going - Right Side */}
          <Card className="project-card p-8 relative">
            <div className="absolute -top-4 left-8">
              <Badge className="achievement-badge badge-gold">
                <Target className="w-4 h-4" />
                Future Focus
              </Badge>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">My Cybersecurity Focus</h3>
                  <p className="text-muted-foreground">Current studies and career direction</p>
                </div>
              </div>

              <div className="space-y-4">
                {futureGoals.map((goal, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 animate-slide-in-left"
                    style={{ animationDelay: `${(index + 5) * 100}ms` }}
                  >
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground leading-relaxed">{goal}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {['Security+', 'SIEM', 'Threat Analysis', 'Azure Security', 'SOC', 'CISSP'].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-primary text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">Building towards cybersecurity roles with real MSP experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
