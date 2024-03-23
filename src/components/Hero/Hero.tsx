"use client";

import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { optionsParticles } from "./particleOptions";
import Image from "next/image";
import { TestParticles } from "./TestParticles";
// import Modal from '../CvModal/CvModal'
// import ContentModal from '../CvModal/Content'

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Cv.pdf";
    link.download = "Cv.pdf";
    link.click();
  };

  return (
    <div className="w-full h-screen z-10" id="hero">
      <div className="absolute w-full -z-50 h-full top-0 left-0">
        <TestParticles />
      </div>
      <div className="w-full h-full ">
        <div className="container gap-6 grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
          <motion.div
            className="hidden w-auto h-auto mx-auto md:block"
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
          </motion.div>
          <motion.div
            className=""
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <h1 className="mb-3 text-4xl leading-tight md:mb-10">
              Tomás Quinteros, <br />{" "}
              <span className="green-text-gradient">Frontend Developer</span>
            </h1>
            <p className="max-w-sm mb-10 text-xl md:max-w-xl md:mx-0 md:mb-16 md:text-xl">
              Experienced web developer with expertise in Next.js, TypeScript,
              Tailwind CSS, and more. Skilled in building
              landing pages, and e-commerce, particularly using TiendaNube.
            </p>
            <div className="flex md:max-w-xl max-w-sm flex-col md:flex-row gap-4 md:gap-8">
              <button
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
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
