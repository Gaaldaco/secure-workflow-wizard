import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "./ProjectCard";
import { Filter, Grid3X3, Shield, Cloud, Code, Server } from "lucide-react";

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("all");

const professionalProjects = [
    {
      title: "Automated User Provisioning",
      description: "Developed scalable onboarding workflows using PowerShell, ImmyBot, and Rewst for Microsoft 365 tenants. Automated license assignment, Active Directory setup, user profile configuration, and Intune policy deployment. Streamlined and standardized the client onboarding process across multiple tenants.",
      tags: ["PowerShell", "ImmyBot", "M365", "Intune", "Automation"],
      type: "professional" as const,
      featured: true
    },
    {
      title: "ConnectWise + Hudu Sync Tool",
      description: "Used n8n to keep documentation, company info, and contact records synchronized across multiple systems. Eliminated manual data entry and ensured consistency across platforms.",
      tags: ["n8n", "ConnectWise", "Hudu", "API", "Integration"],
      type: "professional" as const,
      featured: true
    },
    {
      title: "Hybrid Cloud Infrastructure Deployment",
      description: "Built secure, scalable environments across Microsoft 365 and Azure for multiple clients. Led tenant migrations, automated provisioning tasks, and implemented security best practices using Intune, Conditional Access policies, and Microsoft Defender.",
      tags: ["M365", "Azure", "PowerShell", "Cloud", "Security"],
      type: "professional" as const
    },
    {
      title: "Vulnerability Management Pipeline",
      description: "Set up and managed scheduled Nessus scans for client environments. Automated report parsing, ticket creation, and remediation tracking. Implemented hardening baselines for endpoints and servers.",
      tags: ["Nessus", "Security", "Hardening", "Compliance"],
      type: "professional" as const
    },
    {
      title: "Network Security Implementation",
      description: "Deployed and configured pfSense, SonicWall, and Fortinet firewalls for clients. Implemented SSL VPN, WireGuard tunnels, and network segmentation for secure remote access.",
      tags: ["pfSense", "SonicWall", "VPN", "Network", "Security"],
      type: "professional" as const
    }
  ];

  const selfHostedProjects = [
    {
      title: "Cybersecurity Dashboard",
      description: "Aggregates logs and service status from local systems (pfSense, Proxmox, Uptime Kuma) into a visual dashboard. Self-hostable via Docker Compose. Shows core log aggregation and alert routing concepts.",
      tags: ["Docker", "Node-RED", "pfSense", "Monitoring", "Dashboard"],
      type: "selfhosted" as const,
      featured: true,
      selfHostable: true
    },
    {
      title: "Self-Service Onboarding Form",
      description: "A mock onboarding portal built in Node.js and SQLite. Simulates intake of client info and generates internal JSON/webhook payloads for use in n8n automations. Great for testing automation flows.",
      tags: ["Node.js", "SQLite", "Automation", "Webhooks", "n8n"],
      type: "selfhosted" as const,
      selfHostable: true
    },
    {
      title: "Basic Threat Simulation Lab",
      description: "Docker-based project for testing endpoint detection and log alerting using simple simulated threats (failed SSH, service crashes). Great for cybersecurity students to practice alerting and response flows.",
      tags: ["Docker", "Security", "Lab", "Testing", "Education"],
      type: "selfhosted" as const,
      selfHostable: true
    },
    {
      title: "Network Monitoring & Alerting",
      description: "Self-hosted solution using ntfy, Discord, and firewall integration for real-time security alerts. Includes automated IP blocking and notification workflows. Fully containerized for easy deployment.",
      tags: ["Docker", "ntfy", "Discord", "Monitoring", "Security"],
      type: "selfhosted" as const,
      selfHostable: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Experience</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Real-world MSP experience and self-hosted projects that showcase security-conscious automation, 
            scalable infrastructure, and practical problem solving
          </p>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Professional MSP Experience</h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Real-world projects and infrastructure work completed for clients in a managed service provider environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {professionalProjects.map((project, index) => (
              <div 
                key={project.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} category="professional" />
              </div>
            ))}
          </div>
        </div>

        {/* Self-Hosted Projects Section */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Self-Hosted Projects</h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Open-source tools and automation workflows you can deploy yourself. Great for learning and testing concepts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {selfHostedProjects.map((project, index) => (
              <div 
                key={project.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} category="selfhosted" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-muted-foreground">
              Professional projects demonstrate real-world MSP experience. Self-hosted projects are available for deployment and learning.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="achievement-badge badge-gold">
                <Shield className="w-3 h-3" />
                MSP Experience
              </Badge>
              <Badge className="achievement-badge badge-silver">
                <Server className="w-3 h-3" />
                Self-Hostable
              </Badge>
              <Badge className="achievement-badge badge-bronze">
                <Code className="w-3 h-3" />
                Open Source
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
