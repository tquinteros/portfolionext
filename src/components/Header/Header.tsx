"use client"
import { navLinks } from '@/data/navLinks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className='bg-[#050816] py-2 sticky top-0 z-[999]'>
            <nav className='flex justify-between px-4 md:px-0 container mx-auto items-center'>
                <Link href="/" className="flex items-center gap-2 cursor-pointer  hover:opacity-75 duration-300" onClick={() => {
                    window.scrollTo(0, 0)
                }}>
                    <Image src='/logo.png' className='object-contain' width={75} height={75} alt="Logo" />
                    <p className="text-white text-[18px] font-bold">Tomás Quinteros <span className="md:block hidden">Frontend Developer</span></p>
                </Link>
                {
                    isMenuOpen ? <AiOutlineClose size={48} className="md:hidden block" onClick={() => setIsMenuOpen(!isMenuOpen)} /> : <AiOutlineMenu size={48} className="md:hidden block" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                }
                {
                    isMenuOpen && (
                        <motion.ul className='flex absolute top-24 pb-4 -mt-2 z-50 w-[360px] right-0 bg-[#050816] flex-col gap-12 md:hidden' initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
                            {navLinks.map((navLink, index) => (
                                <li className='font-bold border-b relative hover:opacity-75 duration-300 group' key={index}>
                                    <Link className='relative' href={navLink.href}>
                                        {navLink.name}
                                        <span className='block w-full h-0.5 green-pink-gradient absolute top-6 left-0 transform scale-x-0 transition-transform group-hover:scale-x-100'></span>
                                    </Link>
                                </li>
                            ))}
                        </motion.ul>
                    )
                }
                <ul className='md:gap-12 hidden md:flex'>
                    {navLinks.map((navLink, index) => (
                        <li className='font-bold relative hover:opacity-75 duration-300 group' key={index}>
                            <Link className='relative' href={navLink.href}>
                                {navLink.name}
                                <span className='block w-full h-0.5 green-pink-gradient absolute top-6 left-0 transform scale-x-0 transition-transform group-hover:scale-x-100'></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header >
    )
}

export default Header;
