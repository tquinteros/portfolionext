import React from "react";
import { Badge } from "@/components/ui/badge";

const TechnicalSkills: React.FC = () => {
  const skillsCategories = [
    {
      title: "Frontend",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Shadcn/ui"
      ]
    },
    {
      title: "Backend",
      technologies: [
        "Node.js",
        "Next.js API Routes",
        "Server Actions",
        "tRPC",
        "Authentication",
        "(NextAuth, Auth0)"
      ]
    },
    {
      title: "Database & Realtime",
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Pusher"
      ]
    },
    {
      title: "Tools & Testing",
      technologies: [
        "Git",
        "GitHub",
        "Vercel",
        "Docker",
        "Jest",
        "React Testing Library"
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillsCategories.map((category) => (
          <div key={category.title}>
            <h3 className="font-semibold text-custom-teal mb-2">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech) => (
                <Badge 
                  key={tech}
                  className="bg-custom-teal/20 text-custom-green border-custom-teal/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills; 