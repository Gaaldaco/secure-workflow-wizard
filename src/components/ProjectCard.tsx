import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Shield, Cloud, Server, Database } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: "security" | "cloud" | "automation" | "infrastructure";
  featured?: boolean;
}

const categoryIcons = {
  security: Shield,
  cloud: Cloud,
  automation: Code,
  infrastructure: Server
};

const categoryColors = {
  security: "badge-gold",
  cloud: "badge-silver", 
  automation: "badge-bronze",
  infrastructure: "border-muted-foreground text-muted-foreground"
};

const ProjectCard = ({ title, description, tags, category, featured = false }: ProjectCardProps) => {
  const Icon = categoryIcons[category];
  
  return (
    <Card className={`project-card p-6 h-full transition-all duration-300 ${featured ? 'ring-2 ring-primary' : ''}`}>
      <div className="space-y-4 h-full flex flex-col">
        {/* Header with icon and category */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              category === 'security' ? 'bg-badge-gold/10' :
              category === 'cloud' ? 'bg-primary/10' :
              category === 'automation' ? 'bg-accent/10' :
              'bg-muted'
            }`}>
              <Icon className={`w-5 h-5 ${
                category === 'security' ? 'text-badge-gold' :
                category === 'cloud' ? 'text-primary' :
                category === 'automation' ? 'text-accent' :
                'text-muted-foreground'
              }`} />
            </div>
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <Badge className={`achievement-badge ${categoryColors[category]} text-xs`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Badge>
            </div>
          </div>
          {featured && (
            <Badge className="achievement-badge badge-gold">
              <Database className="w-3 h-3" />
              Featured
            </Badge>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Action button */}
        <Button 
          variant="outline" 
          className="w-full mt-auto glow-on-hover group"
        >
          View Details
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;