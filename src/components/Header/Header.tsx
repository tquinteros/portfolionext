"use client"

import { navLinks } from '@/data/navLinks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef  } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const menuRef = useRef<HTMLUListElement | null>(null);

    const closeMenuOnOutsideClick = (e: MouseEvent) => {
        if (menuRef.current && e.target instanceof Node && !menuRef.current.contains(e.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('click', closeMenuOnOutsideClick);
        } else {
            document.removeEventListener('click', closeMenuOnOutsideClick);
        }
        return () => {
            document.removeEventListener('click', closeMenuOnOutsideClick);
        };
    }, [isMenuOpen]);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTop(true);
            } else {
                setIsTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`py-2 sticky top-0 z-[999] ${isTop ? 'bg-transparent' : 'bg-[#050816]'} duration-300`}
        >
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
                        <motion.ul ref={menuRef} className='flex px-4 border pt-6 rounded-lg absolute top-24 pb-4 -mt-2 z-50 w-[360px] right-4 bg-[#050816] flex-col gap-12 md:hidden' initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
                            {navLinks.map((navLink, index) => (
                                <li className='font-bold border-b-[4px] relative hover:opacity-75 duration-300 group' key={index}>
                                    <Link className='relative' href={navLink.href}>
                                        {navLink.name}
                                        <span className='block w-full h-0.5 absolute top-6 left-0 transform scale-x-0 transition-transform group-hover:scale-x-100'></span>
                                    </Link>
                                </li>
                            ))}
                            <div className='flex gap-4 justify-center items-center'>
                                <a href='https://github.com/tquinteros' target='_blank' rel='noopener noreferrer'>
                                    <AiOutlineGithub size={52} className="text-white cursor-pointer font-bold relative hover:opacity-75 duration-300" />
                                </a>
                                <a href='https://www.linkedin.com/in/tomas-quinteros1/' target='_blank' rel='noopener noreferrer'>
                                    <AiFillLinkedin size={52} className="text-white cursor-pointer font-bold relative hover:opacity-75 duration-300" />
                                </a>
                            </div>
                        </motion.ul>
                    )
                }
                <ul className='md:gap-12 hidden md:flex md:items-center'>
                    {navLinks.map((navLink, index) => (
                        <li className='font-bold relative hover:opacity-75 duration-300 group' key={index}>
                            <Link className='relative' href={navLink.href}>
                                {navLink.name}
                                <span className='block w-full h-0.5 green-pink-gradient absolute top-6 left-0 transform scale-x-0 transition-transform group-hover:scale-x-100'></span>
                            </Link>
                        </li>
                    ))}
                    <div className='flex gap-4 items-center'>
                        <a href='https://github.com/tquinteros' target='_blank' rel='noopener noreferrer'>
                            <AiOutlineGithub size={40} className="text-white cursor-pointer font-bold relative hover:opacity-75 duration-300" />
                        </a>
                        <a href='https://www.linkedin.com/in/tomas-quinteros1/' target='_blank' rel='noopener noreferrer'>
                            <AiFillLinkedin size={40} className="text-white cursor-pointer font-bold relative hover:opacity-75 duration-300" />
                        </a>
                    </div>
                </ul>
            </nav>
        </header >
    )
}

export default Header;
