"use client";

import React from "react";
import { ProjectsCardProps } from "@/types/types";
import Image from "next/image";
import { motion } from "framer-motion";
import TechBadge from "../TechBadge/TechBadge";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

export const ProjectItem = ({
  title,
  description,
  image,
  index,
  techs,
  deploy,
  github,
}: ProjectsCardProps) => {
  return (
    <div className="grid gap-12 grid-cols-12 mt-4 md:mt-0 relative col-span-12 w-full">
      <div className="md:col-span-5 col-span-12 relative rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="object-cover hover:brightness-50 duration-300 w-full rounded-lg h-[330px]"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
          <a
            href={deploy}
            className="text-white p-16 hover:underline text-xl duration-300"
            target="_blank"
          >
            View Page
          </a>
        </div>
      </div>
      <div className="md:col-span-7 col-span-12 flex flex-col">
        <div>
          <h3 className="text-4xl font-bold">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="flex mt-auto justify-between items-center gap-6">
          <div className="flex gap-4">
            {techs?.map((tech, index) => (
              <Image
                key={index}
                src={`/techs/${tech}.svg`}
                alt={tech}
                width={48}
                height={48}
              />
            ))}
          </div>
          <div className="gap-8 flex py-4">
            {deploy && (
              <a
                className="cursor-pointer bg-gray-500/60 hover:opacity-75 duration-300 p-2 rounded-lg"
                target="_blank"
                href={deploy}
              >
                <AiOutlineLink size={40} />
              </a>
            )}
            {github && (
              <a
                className="cursor-pointer bg-gray-500/60 hover:opacity-75 duration-300 p-2 rounded-lg"
                target="_blank"
                href={github}
              >
                <AiOutlineGithub size={40} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
