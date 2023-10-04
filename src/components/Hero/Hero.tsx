"use client"

import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import { optionsParticles } from './particleOptions'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'
import Image from 'next/image'

const Hero = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => {}, [])

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
            <div className=' grid grid-cols-12 container mx-auto'>
                <div className='flex flex-col gap-6 justify-center  w-full h-full col-span-12 md:col-span-6'>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis ut expedita! Cum at maiores laboriosam distinctio incidunt, voluptatum maxime quam totam praesentium? Voluptatem aperiam quis qui corporis doloremque temporibus!
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <button className='border-4 font-bold text-lg border-cyan-500/25 px-8 py-2 rounded-3xl'>
                            View Projects
                        </button>
                    </motion.div>
                </div>
                <div className='col-span-12 flex justify-center md:col-span-6'>
                    <Image src="/hero1.png" className='z-50 relative' width={650} height={650} alt="Hero" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
