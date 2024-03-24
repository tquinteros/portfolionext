"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import TechBadge from "../TechBadge/TechBadge";

type ProjectsCardProps = {
  title: string;
  description?: string;
  image: string;
  techs: string[];
  github?: string;
  deploy: string;
};

export const ProjectsCard = ({
  title,
  description,
  image,
  techs,
  deploy,
  github,
}: ProjectsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const handleMouseEnter = () => {
    if (!animationCompleted) {
      setIsHovered(true);
      setAnimationCompleted(true);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="md:col-span-4 mt-4 md:mt-0 relative col-span-12 w-full"
    >
      <motion.div
        className="relative shadow-card"
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="group">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="object-cover w-full rounded-lg h-[330px]"
          />
          <div className="opacity-0 bg-black bg-opacity-60 absolute inset-0 flex flex-col justify-end px-6 py-4 duration-300 group-hover:opacity-100">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              style={{
                textShadow:
                  "-1px -1px 0 #3f3f3f, " +
                  "-1px 0 0 #3f3f3f, " +
                  "-1px 1px 0 #3f3f3f, " +
                  "0 -1px 0 #3f3f3f, " +
                  "0 0 0 #3f3f3f, " +
                  "0 1px 0 #3f3f3f, " +
                  "1px -1px 0 #3f3f3f, " +
                  "1px 0 0 #3f3f3f, " +
                  "1px 1px 0 #3f3f3f",
              }}
              className="text-2xl font-bold text-white"
            >
              {title}
            </motion.h1>
            <p className="text-white">{description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {techs?.map((tech, index) => (
                <TechBadge
                  isHovered={isHovered}
                  index={index}
                  key={index}
                  label={tech}
                />
              ))}
            </div>
          </div>
          <div className="opacity-0 gap-8 bg-opacity-30 top-0 right-0 absolute flex px-6 py-4 duration-300 group-hover:opacity-100">
            {deploy && (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="cursor-pointer bg-gray-500/60 hover:opacity-75 duration-300 p-2 rounded-lg"
                target="_blank"
                href={deploy}
              >
                <AiOutlineLink size={40} />
              </motion.a>
            )}
            {github && (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{
                  duration: 0.4,
                }}
                className="cursor-pointer bg-gray-500/60 hover:opacity-75 duration-300 p-2 rounded-lg"
                target="_blank"
                href={github}
              >
                <AiOutlineGithub size={40} />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
