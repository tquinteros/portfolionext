"use client";
import Chat from "@/src/components/Chat/Chat";
import Contact from "@/src/components/Contact/Contact";
import { Header } from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import { MarqueeTechs } from "@/src/components/MarqueeTechs/MarqueeTechs";
import { Projects } from "@/src/components/Projects/Projects";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import Loader from "@/src/components/Loader/Loader";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const simulatePageLoad = () => {
      setTimeout(() => {
        setPageLoaded(true);
      }, 2000);
    };

    simulatePageLoad();
  }, []);

  return (
    <main className="overflow-x-hidden scroll-smooth">
      {!pageLoaded && <Loader />}

      {pageLoaded && (
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
