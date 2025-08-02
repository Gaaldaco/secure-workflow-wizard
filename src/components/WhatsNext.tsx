import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Cloud, 
  Bot, 
  GitFork, 
  BookOpen,
  Target,
  Award,
  Zap
} from "lucide-react";

const WhatsNext = () => {
  const learningGoals = [
    {
      title: "CompTIA Security+ Certification",
      description: "Building foundation in cybersecurity principles, risk management, and threat analysis based on bootcamp knowledge and MSP experience",
      progress: 60,
      icon: Award,
      status: "In Progress",
      timeline: "2024"
    },
    {
      title: "Homelab Security Testing",
      description: "Expanding my Proxmox homelab to test security tools, practice incident response, and simulate enterprise environments",
      progress: 70,
      icon: Zap,
      status: "Active",
      timeline: "Ongoing"
    },
    {
      title: "Advanced PowerShell Automation",
      description: "Building more sophisticated security automation scripts for vulnerability scanning, compliance checking, and alert management",
      progress: 80,
      icon: Bot,
      status: "Active",
      timeline: "Ongoing"
    },
    {
      title: "SIEM and SOC Skills",
      description: "Learning advanced SIEM tools and SOC processes to prepare for security analyst roles",
      progress: 30,
      icon: GitFork,
      status: "Planning",
      timeline: "2024"
    }
  ];

  const upcomingCerts = [
    { name: "CompTIA Security+", priority: "high", status: "studying" },
    { name: "AWS Solutions Architect", priority: "medium", status: "planned" },
    { name: "CompTIA CySA+", priority: "high", status: "next" },
    { name: "Azure Security Engineer", priority: "medium", status: "planned" }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="achievement-badge badge-gold mb-4">
            <Target className="w-4 h-4" />
            Continuous Learning
          </Badge>
          <h2 className="text-4xl font-bold mb-4">What I'm Building Towards</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Current studies, projects, and the cybersecurity path ahead...
          </p>
        </div>

        {/* Learning Goals Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-6xl mx-auto">
          {learningGoals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <Card 
                key={goal.title} 
                className="project-card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{goal.title}</h3>
                        <p className="text-sm text-muted-foreground">{goal.timeline}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        goal.status === 'In Progress' ? 'border-accent text-accent' :
                        goal.status === 'Active' ? 'border-primary text-primary' :
                        'border-muted-foreground text-muted-foreground'
                      }`}
                    >
                      {goal.status}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {goal.description}
                  </p>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="project-card p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-badge-gold/10 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-badge-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Certification Roadmap</h3>
              <p className="text-muted-foreground">
                Building credibility through industry-recognized certifications
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {upcomingCerts.map((cert, index) => (
                <div 
                  key={cert.name}
                  className="flex items-center justify-between p-4 rounded-lg border border-border animate-fade-in"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      cert.status === 'studying' ? 'bg-accent animate-pulse' :
                      cert.status === 'next' ? 'bg-primary' :
                      'bg-muted-foreground'
                    }`}></div>
                    <span className="font-medium">{cert.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        cert.priority === 'high' ? 'border-destructive text-destructive' :
                        'border-muted-foreground text-muted-foreground'
                      }`}
                    >
                      {cert.priority} priority
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {cert.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
            <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
            <blockquote className="text-lg italic text-foreground">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </blockquote>
            <p className="text-muted-foreground mt-2">
              - My approach to continuous learning and skill development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNext;