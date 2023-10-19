"use client"

import React from "react";
import { ProjectsCardProps } from "@/types/types";
import Image from "next/image";
import { motion } from "framer-motion";
import TechBadge from "../TechBadge/TechBadge";
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'

export const ProjectsCard = ({ title, description, image, index, techs, deploy, github }: ProjectsCardProps) => {
    return (
        <div className="md:col-span-4 relative col-span-12 w-full">
            <motion.div
                className="relative shadow-card"
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
            >
                <div className="group">
                    <Image src={image} alt={title} width={500} height={300} className="object-cover rounded-lg h-[330px]" />
                    <div className="opacity-0 bg-black bg-opacity-30 absolute inset-0 flex flex-col justify-end px-6 py-4 duration-300 group-hover:opacity-100">
                        <h1 className="text-2xl font-bold text-white">{title}</h1>
                        <p className="text-white">{description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {techs?.map((tech, index) => (
                                <TechBadge key={index} label={tech} />
                            ))}
                        </div>
                    </div>
                    <div className="opacity-0 gap-8 bg-opacity-30 top-0 right-0 absolute flex px-6 py-4 duration-300 group-hover:opacity-100">
                        {
                            deploy && (
                                <div className=" bg-gray-400/30 hover:opacity-75 duration-300 p-2 rounded-lg">
                                    <a className="cursor-pointer" target="_blank" href={deploy}><AiOutlineLink size={40} /></a>
                                </div>
                            )
                        }
                        {
                            github && (
                                <div className=" bg-gray-400/30 hover:opacity-75 duration-300 p-2 rounded-lg">
                                    <a className="cursor-pointer" target="_blank" href={github}><AiOutlineGithub size={40} /></a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    );
};