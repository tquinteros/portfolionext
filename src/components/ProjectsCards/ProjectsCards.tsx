"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ExternalLink, Github, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type ProjectsCardProps = {
  title: string;
  description?: string;
  image: string;
  techs: string[];
  github?: string;
  deploy: string;
  hasInfo?: boolean;
  infoText?: string;
};

export const ProjectsCard = ({
  title,
  description,
  image,
  techs,
  deploy,
  github,
  hasInfo = false,
  infoText,
}: ProjectsCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-slate-900/30 border border-slate-700/50 hover:border-custom-green/50 transition-all duration-300"
      initial={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          width={400}
          height={300}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex gap-2 ml-2">
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-custom-green transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {deploy && (
              <Link
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-custom-green transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
            {hasInfo && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-gray-400 hover:text-custom-green transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{infoText}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
        {description && <p className="text-sm text-gray-400 line-clamp-2">{description}</p>}
        <div className="flex flex-wrap gap-2">
          {techs?.map((tech) => (
            <Badge key={tech} className="bg-custom-teal/20 text-custom-green border-custom-teal/50">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
