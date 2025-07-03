import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  borderColor: string;
}

const KeyProjects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory and payment processing",
      technologies: ["Next.js", "TypeScript", "Stripe"],
      liveUrl: "#",
      codeUrl: "#",
      borderColor: "border-custom-teal/30"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team features",
      technologies: ["React", "Node.js", "Socket.io"],
      liveUrl: "#",
      codeUrl: "#",
      borderColor: "border-custom-green/30"
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
        Key Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className={`bg-slate-800/50 ${project.borderColor}`}>
            <CardContent className="p-4">
              <h3 className="font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex}
                    variant="outline" 
                    className="text-xs border-custom-teal text-custom-green"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {project.liveUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs border-custom-teal/50 text-custom-green bg-transparent"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live
                  </Button>
                )}
                {project.codeUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs border-custom-green text-custom-teal bg-transparent"
                    onClick={() => window.open(project.codeUrl, '_blank')}
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KeyProjects; 