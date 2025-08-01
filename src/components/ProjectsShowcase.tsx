import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "./ProjectCard";
import { Filter, Grid3X3, Shield, Cloud, Code, Server } from "lucide-react";

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Multi-Tenant Automation with n8n",
      description: "Built secure, scoped automations that sync users, contacts, and KBs across platforms for multiple companies. Implemented role-based access controls and audit logging.",
      tags: ["n8n", "Multi-tenant", "API", "Automation", "Security"],
      category: "automation" as const,
      featured: true
    },
    {
      title: "Zero-Trust Remote Access System",
      description: "Combined Pi-hole, pfSense, SonicWall, and WireGuard to create hardened remote environments with conditional access and continuous monitoring.",
      tags: ["Zero-Trust", "pfSense", "WireGuard", "Network", "Security"],
      category: "security" as const,
      featured: true
    },
    {
      title: "Infrastructure Chatbot + Vector Search",
      description: "Created internal chatbot using Gemini and MySQL to surface company docs by context—not keywords. Integrated with Slack for real-time support.",
      tags: ["AI", "Vector-Search", "MySQL", "Gemini", "Documentation"],
      category: "automation" as const
    },
    {
      title: "Secure Imaging & Deployment Pipeline",
      description: "Migrated MDT to SCCM, integrated self-healing deployment with ImmyBot and security tagging. Reduced deployment time by 60%.",
      tags: ["SCCM", "ImmyBot", "Imaging", "PowerShell", "Automation"],
      category: "infrastructure" as const
    },
    {
      title: "Self-Hosted Alerting (ntfy + Docker)",
      description: "Used ntfy, Discord, and firewall integration for real-time security/event alerts and temporary block/unblock workflows with auto-remediation.",
      tags: ["Docker", "ntfy", "Discord", "Monitoring", "DevOps"],
      category: "infrastructure" as const
    },
    {
      title: "Terraform Cloud Lab Environment",
      description: "Building a multi-cloud lab environment with Terraform for AWS and Azure, including automated security scanning and compliance checks.",
      tags: ["Terraform", "AWS", "Azure", "IaC", "Security"],
      category: "cloud" as const
    }
  ];

  const filterOptions = [
    { id: "all", label: "All Projects", icon: Grid3X3 },
    { id: "security", label: "Security", icon: Shield },
    { id: "cloud", label: "Cloud", icon: Cloud },
    { id: "automation", label: "Automation", icon: Code },
    { id: "infrastructure", label: "Infrastructure", icon: Server }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Security & Infrastructure Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-ready projects that showcase security-conscious automation, 
            scalable infrastructure, and real-world problem solving
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Button
                key={option.id}
                variant={activeFilter === option.id ? "default" : "outline"}
                onClick={() => setActiveFilter(option.id)}
                className="glow-on-hover"
              >
                <Icon className="w-4 h-4 mr-2" />
                {option.label}
              </Button>
            );
          })}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-muted-foreground">
              All projects focus on production readiness, security best practices, and scalability.
              No home lab toys—just real solutions that solve real problems.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="achievement-badge badge-gold">
                <Shield className="w-3 h-3" />
                Security-First
              </Badge>
              <Badge className="achievement-badge badge-silver">
                <Server className="w-3 h-3" />
                Production-Ready
              </Badge>
              <Badge className="achievement-badge badge-bronze">
                <Code className="w-3 h-3" />
                Scalable
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;