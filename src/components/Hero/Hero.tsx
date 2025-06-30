"use client";

import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
// import Modal from '../CvModal/CvModal'
// import ContentModal from '../CvModal/Content'
import { optionsParticles } from "./particleOptions";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { Button } from "@/components/ui/button";
import { FileUser, Github, Linkedin, Mail, Rocket } from "lucide-react";
import { useModal } from "@/src/contexts/ModalContext";

const Hero = () => {

  const { openModal } = useModal();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Cv.pdf";
    link.download = "Cv.pdf";
    link.click();
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);

  return (
    <div className="w-full h-screen z-10" id="hero">
      <div className="absolute w-full -z-50 h-full top-0 left-0">
        <Particles
          className="w-full h-full"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={optionsParticles}
        />
      </div>
      <div className="w-full h-full">
        {/* <div className="container gap-6 grid items-center h-full px-5 mx-auto lg:grid-cols-2 lg:text-left"> */}
        <div className="container gap-6 grid items-center h-full px-5 mx-auto">
          {/* <motion.div
            className="hidden w-auto h-auto mx-auto lg:block"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <Image
              src="/hero1.png"
              className="z-40 relative select-none"
              width={650}
              height={650}
              alt="Hero"
            />
          </motion.div> */}
          <motion.div
            className="flex flex-col gap-4"
          // initial={{ opacity: 0, x: 80 }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* <h1 className="mb-3 text-4xl leading-tight md:mb-10">
              Tomás Quinteros, <br />{" "}
              <span className="green-text-gradient">Frontend Developer</span>
            </h1> */}
            {/* <h1 className="text-5xl text-center max-w-lg mx-auto">
              <span className="green-text-gradient">Crafting Modern Web Interfaces
              </span>
            </h1> */}
            <h1 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl md:text-6xl lg:text-7xl/none">
              <span className="green-text-gradient">Crafting Modern</span>
              <br />
              <span className="green-text-gradient">Web Interfaces</span>
            </h1>
            {/* <p className="max-w-sm mb-10 text-xl md:max-w-xl md:mx-0 md:mb-16 md:text-xl"> */}
            <p className="mx-auto mt-1 max-w-[700px] text-gray-300 text-center md:text-xl">
              {/* Experienced web developer with expertise in Next.js, TypeScript,
              Tailwind CSS, and more. With expertise in building responsive web
              applications, landing pages, and e-commerce platforms particularly
              using TiendaNube. */}
              I craft responsive and performant web applications using TypeScript,
              React, and modern libraries like Next.js and React Query—along with a broader set of
              tools adapted to each project’s needs.
            </p>
            <div className="flex mb-2 flex-col md:flex-row md:justify-center gap-2">
              <Button asChild className="green-gradient-bg h-10 green-gradient-hover text-white border-0">
                <a href="#projects">
                  <Rocket className="mr-2 h-4 w-4" />
                  View Projects
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-custom-teal/50 h-10 text-custom-green hover:bg-custom-teal/20 hover:border-custom-green hover:text-white bg-transparent"
              >
                <a href='#contact'>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              {/* <button
                onClick={handleDownload}
                className={` relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-medium text-xl tracking-tighter w-full text-white bg-[#151030] rounded-2xl group`}
              >
                <span
                  className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-[#9999ff] rounded-full group-hover:w-full group-hover:h-56`}
                ></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-2xl opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative">{"Download CV"}</span>
              </button>
              <a
                href="#projects"
                className={` relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-medium text-xl tracking-tighter text-white bg-[#151030] w-full rounded-2xl group`}
              >
                <span
                  className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-[#9999ff] rounded-full group-hover:w-full group-hover:h-56`}
                ></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-2xl opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative">{"View Projects"}</span>
              </a> */}
            </div>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/tquinteros" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-green transition-colors">
                <Github className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/tomas-quinteros1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-green transition-colors">
                <Linkedin className="h-8 w-8" />
              </a>
              <FileUser className="h-8 w-8 text-gray-400 hover:text-custom-green transition-colors cursor-pointer" onClick={openModal} />
              {/* <a href="mailto:tomasquinteros@gmail.com" className="text-gray-400 hover:text-custom-green transition-colors">
                <Mail className="h-6 w-6" />
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
