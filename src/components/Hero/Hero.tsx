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

    const particlesLoaded = useCallback(async () => { }, [])

    return (
        <div className='w-full h-screen z-10' id='hero'>
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
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        <Image src="/hero1.png" className='z-40 relative select-none' width={650} height={650} alt="Hero" />
                    </motion.div>
                    <motion.div className=''
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        <h1 className='mb-3 text-4xl leading-tight md:mb-10'>Lorem Ipsum, <br /> <span className='green-text-gradient'>Lorem Ipsum</span></h1>
                        <p className='max-w-sm mb-10 text-xl md:max-w-xl md:mx-0 md:mb-16 md:text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum laboriosam obcaecati eaque voluptatum porro ut ex delectus dolorem excepturi.
                        </p>
                        <div className='flex flex-col items-center gap-3 md:gap-10 md:flex-row'>
                            <button>asd</button>
                            <button>asd</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
