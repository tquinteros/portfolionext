"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { MenuHamburger } from "./AnimatedHamburgerButton";
import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import { ImProfile } from "react-icons/im";
import CvDialog from "../CvModal/CvDialog";
import { useModal } from "@/src/contexts/ModalContext";
import { Github, Linkedin, FileUser, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [active, setActive] = useState(false);
  const { openModal } = useModal();

  const menuRef = useRef<HTMLDivElement | null>(null);

  const closeMenuOnOutsideClick = (e: MouseEvent) => {
    if (
      menuRef.current &&
      e.target instanceof Node &&
      !menuRef.current.contains(e.target)
    ) {
      setIsMobileMenuOpen(false);
      setActive(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("click", closeMenuOnOutsideClick);
    } else {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    }
    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-[50] border-b border-custom-teal/20 backdrop-blur-sm transition-all duration-300 ${isTop ? "bg-transparent" : "bg-[#050816]/90 backdrop-blur-md "
        }`}
    >
      <CvDialog />
      <nav className="flex px-4 lg:px-0 py-0.5 container items-center mx-auto justify-between">
        <motion.div
        // initial={{ opacity: 0, y: -100 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Link
            href="#hero"
            className="flex items-center gap-2 cursor-pointer  hover:opacity-75 duration-300"
          >
            <Image
              src="/logo.png"
              className="object-contain"
              width={75}
              height={75}
              alt="Logo"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">Tomás Quinteros</span>
              <span className="text-sm text-gray-400">Frontend Developer</span>
            </div>
          </Link>
        </motion.div>
        <motion.ul
          // initial={{ opacity: 0, y: -100 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1.2, delay: 0.3 }}
          className="md:gap-6 xl:gap-10 hidden md:items-center md:flex"
        >
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="text-sm font-medium text-gray-300 hover:text-custom-green transition-colors cursor-pointer"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          <div className="flex gap-4 items-center">
            <button
              onClick={openModal}
              className="flex items-center gap-2 font-bold duration-300 rounded-2xl py-1 text-gray-400 hover:text-custom-green transition-colors"
            >
              <FileUser
                className="h-7 w-7" />
            </button>
            <a
              href="https://github.com/tquinteros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-custom-green transition-colors"
            >
              <Github
                className="h-7 w-7"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tomas-quinteros1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-custom-green transition-colors"
            >
              <Linkedin
                className="h-7 w-7"
              />
            </a>
          </div>
        </motion.ul>
        {/* MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="block md:hidden"
        >
          <MenuHamburger
            onClick={toggleMobileMenu}
            isActive={isMobileMenuOpen}
            toggleActive={toggleMobileMenu}
          />
        </motion.div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -300,
              }}
              transition={{ duration: 0.5 }}
              className="md:hidden flex flex-col h-[300px] p-6 overflow-x-hidden absolute top-[5.7rem] left-0 w-full border bg-[#050816]"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                  href={link.href}
                  className="cursor-pointer mb-2 w-full text-xl border-b p-1 px-3 hover:opacity-75 duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex h-full mt-12 justify-center gap-4 items-center">
                <button
                  onClick={openModal}
                  className="flex items-center gap-2 text-gray-400 font-bold hover:opacity-75 duration-300 rounded-2xl py-1"
                >
                  <FileUser />
                </button>
                <a
                  href="https://github.com/tquinteros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-custom-green transition-colors"
                >
                  <Github

                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/tomas-quinteros1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-custom-green transition-colors"
                >
                  <Linkedin


                  />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
