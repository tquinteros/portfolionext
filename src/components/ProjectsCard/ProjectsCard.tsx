"use client"

import React from "react";
import { ProjectsCardProps } from "@/types/types";
import Tilt from 'react-parallax-tilt';
import Image from "next/image";
import { motion } from "framer-motion";
import TechBadge from "../TechBadge/TechBadge";


export const ProjectsCard = ({ title, description, image, index, techs }: ProjectsCardProps) => {
    return (
        <Tilt perspective={500} className="md:col-span-4 col-span-12 w-full bg-[#151030] parallax-effect green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <motion.div
                className=""
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: (.75 * index) }}
            >
                <div className="bg-[#151030] rounded-[20px] flex flex-col gap-6">
                    <Image src={image} alt={title} width={400} className="h-[200px] w-full rounded-t-[20px] rounded object-cover" height={300} />
                    <div className=" px-6">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div className="flex px-6 pb-4 flex-wrap gap-6">
                        {techs?.map((tech, index) => {
                            return (
                                <TechBadge key={index} label={tech} />
                            )
                        })}
                    </div>
                </div>
            </motion.div>
        </Tilt>
    )
}