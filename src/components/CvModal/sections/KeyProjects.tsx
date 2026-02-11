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
      title: "Courtly – Sports Complex Management SaaS",
      description: "Designed and developed a multi-tenant SaaS platform for sports facility management and online reservations.\nImplemented real-time court availability, booking flows, admin analytics dashboards, and QR-based reservation validation.\nBuilt both owner-facing admin tools and customer-facing features including authentication, interactive map search, and booking management.",
      technologies: ["Next.js", "TypeScript", "TanStack Query", "MongoDB", "Shadcn/ui", "Leaflet", "Pusher", "NextAuth", "Zod"],
      liveUrl: "https://www.courtly.site/",
      borderColor: "border-custom-teal/30"
    },
    {
      title: "Snackly – Headless CMS E-commerce",
      description: "Developed a headless CMS solution enabling non-technical users to manage products, categories, media, and site configuration.\nImplemented role-based access control, media management, and real-time content preview.",
      technologies: ["Next.js", "TypeScript", "TanStack Query", "MongoDB", "Zod", "Resend", "Custom Authentication System"],
      liveUrl: "https://www.snackly.site/",
      borderColor: "border-custom-green/30"
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className={`bg-slate-800/50 ${project.borderColor}`}>
            <CardContent className="p-4 flex flex-col h-full min-h-44">
              <h3 className="font-bold text-white mb-2">{project.title}</h3>
              <div className="text-gray-300 text-sm mb-3">
                {project.description.split('\n').map((line, idx) => (
                  <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{line}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="bg-custom-teal/20 text-custom-green border-custom-teal/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                {project.liveUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs border-custom-teal/50 text-custom-green bg-transparent hover:bg-transparent hover:text-custom-green hover:opacity-75 duration-300 transition-all"
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
                    className="text-xs border-custom-green text-custom-teal bg-transparent hover:bg-transparent hover:text-custom-teal hover:opacity-75 duration-300 transition-all"
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