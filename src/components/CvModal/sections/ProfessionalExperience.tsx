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
      title: "Full-stack Developer",
      company: "Zetaequis",
      period: "December 2022 – Present",
      location: "Remote",
      responsibilities: [
        "Contributed to multiple client-facing web projects, including a large-scale full-stack e-commerce and social platform (BLKMarket) serving 5,000+ registered users, working within a 5–10 person development team",
        "Built and maintained features across several web applications, including product and content management, order flows with refunds/returns, real-time social feeds, user profiles, and admin dashboards",
        "Developed a cross-platform mobile application using React Native, published on the App Store and Google Play",
        "Stack: Next.js, TypeScript, TanStack Query, MongoDB, Shadcn/ui, Leaflet, Pusher, NextAuth, Zod"
      ]
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
        Professional Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="border-l-2 border-gray-600 pl-4">
            <div className="flex justify-between items-center  mb-2">
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