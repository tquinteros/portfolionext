import { projects } from "@/data/projects";
import React from "react";
import { ProjectsCard } from "../ProjectsCards/ProjectsCards";


export const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-6xl text-center mt-32">Projects</h1>
      <p className="text-center mt-8 p-4 mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias libero
        tempora reiciendis voluptatibus! Incidunt, in?
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
