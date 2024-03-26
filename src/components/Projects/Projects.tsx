import { projects } from "@/data/projects";
import React from "react";
import { ProjectsCard } from "../ProjectsCards/ProjectsCards";

export const Projects = () => {
  return (
    <div id="projects" className="pt-0.5">
      <h1 className="text-6xl text-center mt-32">Projects</h1>
      <p className="text-center mt-8 p-4 mb-4">
        These are a few of the projects I&apos;ve created. If you&apos;d like to see more,
        feel free to get in touch with me.
      </p>
      <div className="container p-4 mt-8 mx-auto grid grid-cols-12 md:gap-12 gap-8">
        {projects.map((project) => (
          <ProjectsCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            techs={project.techs}
            github={project.github}
            deploy={project.deploy}
          />
        ))}
      </div>
    </div>
  );
};
