import Image from "next/image";
import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { BsBriefcase } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
const RightSide = () => {
    return (
        <div className="lg:col-span-8 col-span-12 p-6 pb-16 border-2 rounded-lg flex flex-col gap-8 ">

            <div className="flex flex-col gap-4">
                <h3 className="text-4xl flex items-center gap-6">
                    <RxAvatar size={48} />
                    About me
                </h3>
                <p className="max-w-xl text-md">
                    Experienced web developer specialized in Next.js, TypeScript, Tailwind CSS, and more. Skilled in creating web3 integrity, landing pages, and e-commerce, particularly through TiendaNube. Currently contributing to innovative web application development at ZX. Studied programming at UTN and further honed skills at CoderHouse.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-4xl flex items-center gap-6">
                    <PiStudentBold size={48} />
                    Education
                </h3>
                <div className="w-[50%] h-[2px] bg-white" />
                <div className="px-2">
                    <div className="flex items-center gap-4">
                        <Image src="/coder.png" width={64} height={64} alt="Me" className="rounded-full" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-bold">CoderHouse</h3>
                            <h3 className="text-md font-bold">2022 &nbsp; | &nbsp; ReactJs</h3>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="flex items-center gap-4">
                        <Image src="/coder.png" width={64} height={64} alt="Me" className="rounded-full" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-bold">CoderHouse</h3>
                            <h3 className="text-md font-bold">2022 &nbsp; | &nbsp; Javascript</h3>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="flex items-center gap-4">
                        <Image src="/coder.png" width={64} height={64} alt="Me" className="rounded-full" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-bold">CoderHouse</h3>
                            <h3 className="text-md font-bold">2022 &nbsp; | &nbsp; Introducción al Desarrollo Web</h3>
                        </div>
                    </div>
                </div>

                <div className="px-2">
                    <div className="flex items-center gap-4">
                        <Image src="/utn.png" width={64} height={64} alt="Me" className="rounded-full" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-bold">Universidad Tecnológica Nacional</h3>
                            <h3 className="text-md font-bold">2020 - 2021 &nbsp; | &nbsp; Tecnicatura Universitaria en Programación</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-4xl flex items-center gap-6">
                    <BsBriefcase size={48} />
                    Work Experience
                </h3>
                <div className="w-[50%] h-[2px] bg-white" />
                <div className="px-2">
                    <div className="flex items-center gap-4">
                        <a href="https://www.zetaequis.com" target="_blank" className="text-xl font-bold hover:opacity-75 duration-300"><Image src="/zetaequis.jpeg" width={64} height={64} alt="Me" className="rounded-full" /></a>
                        <div className="flex flex-col gap-1">
                            <a href="https://www.zetaequis.com" target="_blank" className="text-xl font-bold hover:opacity-75 duration-300">Zetaequis</a>
                            <h3 className="text-md font-bold">2022 - Present &nbsp; | &nbsp; Frontend Developer</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RightSide;