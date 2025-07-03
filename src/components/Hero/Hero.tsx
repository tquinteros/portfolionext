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
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);
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

  const particlesLoaded = useCallback(async () => {
    setIsParticlesLoaded(true);
  }, []);

  return (
    <>
      {!isParticlesLoaded && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-green mx-auto mb-4"></div>
            <p className="text-custom-green text-lg">Loading...</p>
          </div>
        </div>
      )}

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
          <div className="container gap-6 grid items-center h-full px-5 mx-auto">
            <motion.div
              className="flex flex-col gap-4"
            // initial={{ opacity: 0, x: 80 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1.2, delay: 0.3 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl md:text-6xl lg:text-7xl/none">
                <span className="green-text-gradient">Crafting Modern</span>
                <br />
                <span className="green-text-gradient">Web Interfaces</span>
              </h1>
              <p className="mx-auto mt-1 max-w-[700px] text-gray-300 text-center md:text-xl">
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
              </div>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/tquinteros" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-green transition-colors">
                  <Github className="h-8 w-8" />
                </a>
                <a href="https://www.linkedin.com/in/tomas-quinteros1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-green transition-colors">
                  <Linkedin className="h-8 w-8" />
                </a>
                <FileUser className="h-8 w-8 text-gray-400 hover:text-custom-green transition-colors cursor-pointer" onClick={openModal} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
