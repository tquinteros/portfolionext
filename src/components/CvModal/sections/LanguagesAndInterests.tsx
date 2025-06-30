import React from "react";
import { Badge } from "@/components/ui/badge";

const LanguagesAndInterests: React.FC = () => {
  const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Advanced" },
  ];

  const interests = [
    "Web3",
    "Blockchain",
    "AI",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
          Languages
        </h2>
        <div className="space-y-2 text-sm">
          {languages.map((language, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-white">{language.name}</span>
              <span className="text-gray-400">{language.level}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
          Interests
        </h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-custom-teal text-custom-green"
            >
              {interest}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagesAndInterests; 