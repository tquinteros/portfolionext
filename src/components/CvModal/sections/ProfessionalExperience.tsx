import React from "react";
import { Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const ProfessionalExperience: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Full Stack Developer",
      company: "BLKMarket",
      period: "Feb 2023 - Present",
      location: "Remote",
      responsibilities: [
        "Developed and maintained scalable web applications using React, Next.js, and TypeScript",
        "Collaborated with cross-functional teams to implement new features and improve user experience",
        "Optimized application performance and implemented best practices for accessibility and SEO",
        "Worked on a variety of projects, including e-commerce platforms, admin dashboards, and user management tools"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Zetaequis",
      period: "Feb 2022 - Present",
      location: "Remote (Part time)",
      responsibilities: [
        "Developed and maintained scalable web applications using React, Next.js, and TypeScript",
        "Collaborated with cross-functional teams to implement new features and improve user experience",
        "Optimized application performance and implemented best practices for accessibility and SEO",
        "Worked on a variety of projects, including e-commerce platforms, admin dashboards, and user management tools"
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
        Professional Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="border-l-2 border-gray-600 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-white">{experience.title}</h3>
                <p className="text-custom-teal">{experience.company}</p>
              </div>
              <div className="text-right text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {experience.period}
                </div>
                <div>{experience.location}</div>
              </div>
            </div>
            <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience; 