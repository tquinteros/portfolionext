"use client";
import React, { useState, useRef } from "react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ProjectItem } from "../ProjectItem/ProjectItem";

export const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("Projects");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projectsRef = useRef<HTMLDivElement>(null);

  const toggleProjectsDisplay = () => {
    setShowAllProjects(!showAllProjects);
    const projectsRef = document.getElementById("projects");

    if (showAllProjects && projectsRef) {
      projectsRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="my-32" id="projects">
      <div className="mb-14">
        <h1 className="text-5xl font-bold text-center ">Projects</h1>
        <div className="flex justify-center">
          <span className="block w-20 h-0.5 my-4 violet-gradient"></span>
        </div>
      </div>
      <div>
        <div className="flex justify-center mb-16">
          <button
            onClick={() => handleTabChange("Experience")}
            className={`px-4 py-2 mr-4 text-4xl font-semibold ${
              selectedTab === "Experience" ? "text-white" : "text-gray-500"
            } text-5xl duration-300`}
          >
            Experience
          </button>
          <button
            onClick={() => handleTabChange("Projects")}
            className={`px-4 py-2 mr-4 text-4xl font-semibold ${
              selectedTab === "Projects" ? "text-white" : "text-gray-500"
            } text-5xl duration-300`}
          >
            Projects
          </button>
        </div>
      </div>
      {selectedTab === "Projects" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-12 px-4 gap-16 md:gap-20 md:p-0"
          ref={projectsRef}
        >
          {projects
            .slice(0, showAllProjects ? projects.length : 4)
            .map((project, index) => (
              <ProjectItem
                key={project.title}
                github={project.github}
                deploy={project.deploy}
                title={project.title}
                description={project.description}
                index={index}
                techs={project.techs}
                image={project.image}
              />
            ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.div>
      )}
      {selectedTab === "Projects" && (
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleProjectsDisplay}
            className="px-4 py-2 text-xl font-semibold text-white hover:underline rounded-lg"
          >
            {showAllProjects ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
