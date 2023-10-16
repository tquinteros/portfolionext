import React from "react";
import Image from "next/image";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin, AiFillHtml5 } from "react-icons/ai";
import RightSide from "./RightSide";
import { IoLogoCss3 } from "react-icons/io5";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import {  TbBrandFramerMotion } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
const ContentModal = () => {
    return (
        <div className="grid grid-cols-12 pb-8 gap-4">
            <div className="lg:col-span-4 col-span-12 pb-16 p-6 flex flex-col gap-6 border-2 rounded-lg">
                <Image src="/me.jpeg" width={200} height={200} alt="Me" className="rounded-full" />
                <div>
                    <h3 className="text-xl font-bold">Tomás Quinteros</h3>
                    <h3 className="text-xl font-bold">Frontend Developer</h3>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <h3 className="text-3xl text-center font-bold">Contact</h3>
                        <hr className="w-[25%]" />
                    </div>
                    <a className="flex hover:opacity-75 duration-300 gap-2 w-fit items-center" href="mailto:tomyquinteros494@gmail.com">
                        <AiOutlineMail size={32} />
                        <span className="text-md font-semibold">tomyquinteros494@gmail.com</span>
                    </a>
                    <a className="flex hover:opacity-75 duration-300 gap-2 w-fit items-center" href='https://github.com/tquinteros' target='_blank' rel='noopener noreferrer'>
                        <AiOutlineGithub size={40} className="text-white cursor-pointer font-bold relative hover:opacity-75 duration-300" />
                        <span className="text-md font-semibold">GitHub Profile</span>

                    </a>
                    <a className="flex hover:opacity-75 duration-300 gap-2 w-fit items-center" href='https://www.linkedin.com/in/tomas-quinteros1/' target='_blank' rel='noopener noreferrer'>
                        <AiFillLinkedin size={40} className="text-white cursor-pointer font-bold relative hover:opacity-75 duration-300" />
                        <span className="text-md font-semibold">Linkedin Profile</span>
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <h3 className="text-3xl text-center font-bold">Languages</h3>
                        <hr className="w-[25%]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-md font-semibold">Spanish - Native</span>
                        <span className="text-md font-semibold">English - Advanced</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <h3 className="text-3xl text-center font-bold">Skills</h3>
                        <hr className="w-[25%]" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <AiFillHtml5 size={64} />
                        <IoLogoCss3 size={64} />
                        <RiJavascriptFill size={64} />
                        <BiLogoReact size={64} />
                        <SiNextdotjs size={64} />
                        <BiLogoTypescript size={64} />
                        <BiLogoTailwindCss size={64} />
                        <TbBrandFramerMotion size={64} />
                    </div>
                </div>
            </div>
            <RightSide />
        </div>
    )
}

export default ContentModal;