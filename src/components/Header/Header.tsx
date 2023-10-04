"use client"
import { navLinks } from '@/data/navLinks'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className='bg-[#050816] py-2 sticky top-0 z-50'>
            <nav className='flex justify-between container mx-auto items-center'>
                <Link href="/" className="flex items-center gap-2 cursor-pointer  hover:opacity-75 duration-300" onClick={() => {
                    window.scrollTo(0, 0)
                }}>
                    <Image src='/logo.png' className='object-contain' width={75} height={75} alt="Logo" />
                    <p className="text-white text-[18px] font-bold">Tomás Quinteros <span className="md:block hidden">Frontend Developer</span></p>
                </Link>
                <ul className='flex gap-12'>
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
