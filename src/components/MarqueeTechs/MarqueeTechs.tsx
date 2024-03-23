"use client";
import { techsItems } from "@/data/techs";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export const MarqueeTechs = () => {
  return (
    <Marquee autoFill speed={40} className="">
      {techsItems.map((item, index) => (
        <div key={index} className="flex mx-8 md:mx-16 flex-col justify-center items-center gap-3">
          <Image width={96} height={96} className="hidden md:block" src={item.icon} alt={item.label} />
          <Image width={64} height={64} className="block md:hidden" src={item.icon} alt={item.label} />
          <p>{item.label}</p>
        </div>
      ))}
    </Marquee>
  );
};
