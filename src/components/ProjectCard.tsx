import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Shield, Cloud, Server, Database, Download, Briefcase } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: "professional" | "selfhosted";
  featured?: boolean;
  selfHostable?: boolean;
}

const categoryIcons = {
  professional: Briefcase,
  selfhosted: Download
};

const categoryColors = {
  professional: "badge-gold",
  selfhosted: "badge-silver"
};

const ProjectCard = ({ title, description, tags, category, featured = false, selfHostable = false }: ProjectCardProps) => {
  const Icon = categoryIcons[category];
  
  return (
    <Card className="project-card p-6 h-full transition-all duration-300 hover:ring-2 hover:ring-primary">
      <div className="space-y-4 h-full flex flex-col">
        {/* Header with icon and category */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              category === 'professional' ? 'bg-badge-gold/10' :
              category === 'selfhosted' ? 'bg-primary/10' :
              'bg-muted'
            }`}>
              <Icon className={`w-5 h-5 ${
                category === 'professional' ? 'text-badge-gold' :
                category === 'selfhosted' ? 'text-primary' :
                'text-muted-foreground'
              }`} />
            </div>
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <Badge className={`achievement-badge ${categoryColors[category]} text-xs`}> 
                {category === 'professional' ? 'MSP Experience' : 'Self-Hosted'}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {featured && (
              <Badge className="achievement-badge badge-gold">
                <Database className="w-3 h-3" />
                Featured
              </Badge>
            )}
            {selfHostable && (
              <Badge className="achievement-badge badge-bronze">
                <Download className="w-3 h-3" />
                Self-Host
              </Badge>
            )}
          </div>
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
          {category === 'selfhosted' ? 'Try It Yourself' : 'View Details'}
          {category === 'selfhosted' ? (
            <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
          ) : (
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          )}
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;