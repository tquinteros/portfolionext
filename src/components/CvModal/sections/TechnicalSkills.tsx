import React from "react";
import { Badge } from "@/components/ui/badge";

const TechnicalSkills: React.FC = () => {
  const frontendTechnologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Tanstack Query",
    "MongoDB",
    "Zustand",
    "Zod Server Actions",
    "Framer Motion",
    "Material UI"
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-custom-teal mb-2">Frontend Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {frontendTechnologies.map((tech) => (
              <Badge 
                key={tech}
                className="bg-custom-teal/20 text-custom-green border-custom-teal/50"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills; 