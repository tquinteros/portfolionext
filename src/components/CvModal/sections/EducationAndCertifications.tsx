import React from "react";

const EducationAndCertifications: React.FC = () => {
  const education = {
    degree: "Tecnicatura Universitaria en Programación",
    institution: "Universidad Tecnológica Nacional",
    period: "2021 - 2022 (Not completed)",
  };

  const certifications = [
    { name: "React Developer Certification", year: "2022" },
    { name: "Javascript Developer", year: "2022" }, 
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
          Education
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-white">{education.degree}</h3>
            <p className="text-custom-teal">{education.institution}</p>
            <p className="text-gray-400 text-sm">{education.period}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
          Certifications
        </h2>
        <div className="space-y-2 text-sm">
          {certifications.map((cert, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-white">{cert.name}</span>
              <span className="text-gray-400">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationAndCertifications; 