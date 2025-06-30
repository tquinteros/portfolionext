import React from "react";

const EducationAndCertifications: React.FC = () => {
  const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    period: "2014 - 2018",
    gpa: "GPA: 3.8/4.0"
  };

  const certifications = [
    { name: "AWS Certified Developer", year: "2023" },
    { name: "Google Cloud Professional", year: "2022" },
    { name: "React Developer Certification", year: "2021" }
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
            <p className="text-gray-400 text-sm">{education.period} | {education.gpa}</p>
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