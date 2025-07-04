import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  deploy: string;
  github?: string;
  techs: string[];
}

interface ProjectStructuredDataProps {
  projects: Project[];
}

const ProjectStructuredData: React.FC<ProjectStructuredDataProps> = ({ projects }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Portfolio Projects",
    "description": "A collection of web development projects by Tomás Quinteros",
    "numberOfItems": projects.length,
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.description,
        "url": project.deploy,
        "applicationCategory": "WebApplication",
        "operatingSystem": "Web Browser",
        "author": {
          "@type": "Person",
          "name": "Tomás Quinteros"
        },
        "programmingLanguage": project.techs,
        "image": project.image,
        ...(project.github && {
          "codeRepository": project.github
        })
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default ProjectStructuredData; 