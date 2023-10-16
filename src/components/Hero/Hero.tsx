"use client"

import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import { optionsParticles } from './particleOptions'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Hero = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])

    return (
        // <div className='relative w-full p-4 md:p-0 md:pt-8 h-screen mx-auto'>
        //     <div className="absolute w-full -z-50 h-full top-0 left-0">
        //         <Particles
        //             className="w-full h-full"
        //             id="tsparticles"
        //             init={particlesInit}
        //             loaded={particlesLoaded}
        //             options={optionsParticles}
        //         />
        //     </div>
        //     <div className='grid grid-cols-12 p-4 lg:p-8 container mx-auto'>
        //         <div className='flex flex-col gap-6 justify-center w-[80%] h-full col-span-12 lg:col-span-6'>
        //             <h1
        //                 className='text-5xl font-bold text-white'
        //             >
        //                 Hi, I&apos;m <span className='green-text-gradient'>Tomas</span>
        //             </h1>
        //             <h2
        //                 className='text-3xl -mt-2 font-bold text-white'
        //             >
        //                 Frontend Developer
        //             </h2>
        //             <p
        //                 className='text-xl mt-4 font-bold text-white'
        //             >
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis ut expedita! Cum at maiores laboriosam distinctio incidunt, voluptatum maxime quam totam praesentium?
        //             </p>
        //             <button
        //                 className='border-4 w-fit flex items-center gap-3 font-bold text-lg border-cyan-500/25  px-6 py-2 rounded-3xl'
        //             >
        //                 View Projects <AiOutlineArrowRight size={28} className="ml-2 " />
        //             </button>
        //         </div>
        //         <motion.div
        //             initial={{ opacity: 0, y: 20 }}
        //             animate={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 2.2 }}
        //             className='col-span-12 flex justify-center lg:col-span-6'>
        //             <Image src="/hero1.png" className='z-40 relative' width={650} height={650} alt="Hero" />
        //         </motion.div>
        //     </div>
        // </div>
        <div className='w-full h-screen z-10'>
            <div className="absolute w-full -z-50 h-full top-0 left-0">
                <Particles
                    className="w-full h-full"
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={optionsParticles}
                />
            </div>
            <div className='w-full h-full '>
                <div className='container gap-6 grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left'>
                    <motion.div className='hidden w-auto h-auto mx-auto md:block'
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <Image src="/hero1.png" className='z-40 relative' width={650} height={650} alt="Hero" />
                    </motion.div>
                    <motion.div className=''
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <h1 className='mb-5 text-4xl leading-tight md:mb-10'>Tomás Quinteros, <br /> <span className='green-text-gradient'>Frontend Developer</span></h1>
                        <p className='max-w-sm mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-16 md:text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum laboriosam obcaecati eaque voluptatum porro ut ex delectus dolorem excepturi.
                        </p>
                        <div className='flex flex-col items-center gap-3 md:gap-10 md:flex-row'>

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
