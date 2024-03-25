"use client"
import { useState, useEffect } from 'react';
import Chat from "@/src/components/Chat/Chat";
import Contact from "@/src/components/Contact/Contact";
import { Header } from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import Loader from "@/src/components/Loader/Loader";
import { MarqueeTechs } from "@/src/components/MarqueeTechs/MarqueeTechs";
import { Projects } from "@/src/components/Projects/Projects";
import Image from "next/image";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkIfLoaded = () => {
      if (document.readyState === 'complete') {
        setIsLoaded(true);
      }
    };

    checkIfLoaded();

    document.addEventListener('readystatechange', checkIfLoaded);

    return () => {
      document.removeEventListener('readystatechange', checkIfLoaded);
    };
  }, []);

  return (
    <main className="overflow-x-hidden scroll-smooth">
      {!isLoaded && <Loader />}
      {isLoaded && (
        <> 
          <Header />
          <Hero />
          <MarqueeTechs />
          <Projects />
          <Contact />
          <Chat />
          <ToastContainer />
        </>
      )}
    </main>
  );
}