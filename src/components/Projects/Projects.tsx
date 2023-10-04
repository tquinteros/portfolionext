import React from "react";
import { ProjectsCard } from "../ProjectsCard/ProjectsCard";
import { projects } from "@/data/projects";

export const Projects = () => {
    return (
        <section>
            <div className="mb-14">
                <h1 className="text-5xl font-bold text-center ">Projects</h1>
                <div className="flex justify-center">
                    <span className="block w-20 h-0.5 my-4 violet-gradient "></span>
                </div>
            </div>
            <div className="grid grid-cols-12 p-4 md:p-0 gap-8 md:gap-12">
                {
                    projects.map((project, index) => (
                        <ProjectsCard key={project.title} title={project.title} description={project.description} index={index} techs={project.techs} image={project.image} />
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;