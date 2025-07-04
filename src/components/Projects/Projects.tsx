import { projects } from "@/data/projects";
import React from "react";
import { ProjectsCard } from "../ProjectsCards/ProjectsCards";
import ProjectStructuredData from "../SEO/ProjectStructuredData";

export const Projects = () => {
  return (
    <div id="projects" className="pt-0.5 mt-32">
      <ProjectStructuredData projects={projects} />
      <h1 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl md:text-6xl lg:text-7xl/none">
        <span className="green-text-gradient">Projects</span>
      </h1>
      <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto text-center mt-4 mb-8 p-2 md:p-0">
        These are a few of the projects I&apos;ve created. If you&apos;d like to see more, feel free to get in touch
        with me.
      </p>
      <div className="p-4 xl:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto col-span-12">
        {projects.map((project) => (
          <ProjectsCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            techs={project.techs}
            hasInfo={project.hasInfo}
            infoText={project.infoText}
            github={project.github}
            deploy={project.deploy}
          />
        ))}
      </div>
    </div>
  );
};
