"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TbBrandNextjs, TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandReact, TbBrandTypescript, TbBrandFramer } from "react-icons/tb"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SiStyledcomponents } from "react-icons/si";
import { techsCarouselIcons } from "@/data/techsCarousel";

interface IconComponents {
    [key: string]: {
        component: React.ComponentType<any>;
        colorClass: string;
    };
}

const iconComponents: IconComponents = {
    TbBrandHtml5: { component: TbBrandHtml5, colorClass: "text-custom-color1" },
    TbBrandCss3: { component: TbBrandCss3, colorClass: "text-custom-color2" },
    TbBrandJavascript: { component: TbBrandJavascript, colorClass: "text-custom-color3" },
    TbBrandReact: { component: TbBrandReact, colorClass: "text-custom-color4" },
    TbBrandNextjs: { component: TbBrandNextjs, colorClass: "text-custom-color5" },
    TbBrandTypescript: { component: TbBrandTypescript, colorClass: "text-custom-color6" },
    TbBrandFramer: { component: TbBrandFramer, colorClass: "text-custom-color7" },
    SiStyledcomponents: { component: SiStyledcomponents, colorClass: "text-custom-color8" },
};

const getIconComponent = (iconName: string | undefined) => {
    const iconInfo = iconName ? iconComponents[iconName] : undefined;
    if (iconInfo) {
        const IconComponent = iconInfo.component;
        const colorClass = iconInfo.colorClass;
        return <IconComponent color="" size={124} className={`text-4xl text-[#11998e]`} />;
    }
    return null;
};

const TechCarousel: React.FC = () => {
    var settings = {
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        drag: true,
        pauseOnHover: false,
        autoplaySpeed: 750,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.5,
                }
            }
        ]
    };

    return (
        <div className="">
            <Slider {...settings} className="cursor-grab">
                {/* {techsCarousel.map((tech, index) => (
                    <div key={index} className="flex justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex justify-center items-center rounded-full">
                                {getIconComponent(tech.icon)}
                            </div>
                            <span className="text-xl font-bold text-center green-text-gradient">{tech.label}</span>
                            <div className="flex justify-center">
                                <span className="block w-8 h-1 mt-2 bg-custom-color12"></span>
                            </div>
                        </div>
                    </div>
                ))} */}
                {
                    techsCarouselIcons.map((tech, index) => {
                        return (
                            <div key={index} className="flex justify-center">
                                <div className="flex flex-col gap-4 items-center justify-center">
                                    <div className="flex justify-center items-center rounded-full">
                                        <Image src={tech.icon} alt={tech.label} width={100} height={100} />
                                    </div>
                                    <span className="text-xl font-bold text-center">{tech.label}</span>
                                    <div className="flex justify-center">
                                        <span className="block w-8 h-1 mt-2 bg-custom-color12"></span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            {/* <div className='relative mt-12'>
                <h1 className='text-4xl mb-2 text-center font-bold'>COLORES</h1>
                <div className='flex justify-center gap-4'>
                    <span className="block w-10 h-8 my-6 bg-custom-color1"></span>
                    <span className="block w-10 h-8 my-6 bg-custom-color2"></span>
                    <span className="block w-10 h-8 my-6 bg-custom-color3"></span>
                    <span className="block w-10 h-8 my-6 bg-custom-color4"></span>
                    <span className="block w-10 h-8 my-6 bg-custom-color5"></span>
                    <span className="block w-10 h-8 my-6 bg-custom-color6"></span>
                    <span className="block w-10 h-8 my-6 bg-custom-color7"></span>
                    <span className="block w-10 h-8 my-6 bg-custom-color8"></span>
                    <span className="block w-10 h-8 my-6 bg-custom-color9"></span>
                    <span className="block w-10 h-8 my-6 bg-custom-color10"></span>
                    <span className="block w-10 h-8 my-6 bg-custom-color11"></span>
                </div>
            </div> */}
        </div>
    )
}

export default TechCarousel;
