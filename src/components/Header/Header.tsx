"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { MenuHamburger } from "./AnimatedHamburgerButton";
import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import Modal from "../CvModal/CvModal";
import ContentModal from "../CvModal/Content";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState(false);

  const menuRef = useRef<HTMLUListElement | null>(null);

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header
      className={`duration-300 fixed w-full top-0 z-[999] ${
        isTop ? "bg-transparent" : "bg-[#050816]"
      }`}
    >
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContentModal />
      </Modal>
      <nav className="flex px-4 md:px-0 py-2 container items-center mx-auto justify-between">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
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
            <p className="text-white text-[18px] font-bold hidden sm:block">
              Tomás Quinteros{" "}
              <span className="md:block hidden">Frontend Developer</span>
            </p>
          </Link>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="md:gap-10 hidden md:items-center md:flex"
        >
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer p-1 hover:opacity-75 duration-300"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 font-bold hover:opacity-75 duration-300 rounded-2xl py-1"
            >
              <ImProfile size={40} />
            </button>
            <a
              href="https://github.com/tquinteros"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub
                size={40}
                className="text-white cursor-pointer font-bold relative hover:opacity-75 duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tomas-quinteros1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin
                size={40}
                className="text-white cursor-pointer font-bold relative hover:opacity-75 duration-300"
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
            <motion.ul
              ref={menuRef}
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -300,
              }}
              transition={{ duration: 0.5 }}
              className="md:hidden h-[300px] p-6 overflow-x-hidden absolute top-28 left-0 w-full border bg-[#050816]"
            >
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="cursor-pointer mb-2 w-full text-xl border-b p-1 px-3 hover:opacity-75 duration-300"
                >
                  <Link
                    onClick={() => setIsMobileMenuOpen(false)}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className="flex h-[80%] justify-center gap-4 items-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 font-bold hover:opacity-75 duration-300 rounded-2xl py-1"
                >
                  <ImProfile size={40} />
                </button>
                <a
                  href="https://github.com/tquinteros"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub
                    size={40}
                    className="text-white cursor-pointer font-bold relative hover:opacity-75 duration-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/tomas-quinteros1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin
                    size={40}
                    className="text-white cursor-pointer font-bold relative hover:opacity-75 duration-300"
                  />
                </a>
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
