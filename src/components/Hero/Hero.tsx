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
        <div className='relative w-full p-8 md:p-0 md:pt-8 h-screen mx-auto'>
            <div className="absolute w-full -z-50 h-full top-0 left-0">
                <Particles
                    className="w-full h-full"
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={optionsParticles}
                />
            </div>
            <div className='grid grid-cols-12 p-4 lg:p-8 container mx-auto'>
                <div className='flex flex-col gap-6 justify-center  w-full h-full col-span-12 lg:col-span-6'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        className='text-5xl font-bold text-white'
                    >
                        Hi, I&apos;m <span className='green-text-gradient'>Tomas</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className='text-3xl -mt-2 font-bold text-white'
                    >
                        Frontend Developer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        className='text-xl mt-4 font-bold text-white'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis ut expedita! Cum at maiores laboriosam distinctio incidunt, voluptatum maxime quam totam praesentium?
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ opacity: 0.8, transition: { duration: 0.3 } }}
                        transition={{ duration: 2 }}
                        className='border-4 w-fit flex items-center gap-3 font-bold text-lg border-cyan-500/25  px-6 py-2 rounded-3xl'
                    >
                        View Projects <AiOutlineArrowRight size={28} className="ml-2 " />
                    </motion.button>
                </div>
                <div className='col-span-12 flex justify-center lg:col-span-6'>
                    <Image src="/hero1.png" className='z-40 relative' width={650} height={650} alt="Hero" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
