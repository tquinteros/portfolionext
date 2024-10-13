import Chat from "@/src/components/Chat/Chat";
import Contact from "@/src/components/Contact/Contact";
import { Header } from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import { MarqueeTechs } from "@/src/components/MarqueeTechs/MarqueeTechs";
import { Projects } from "@/src/components/Projects/Projects";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Home() {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <Header />
      <Hero />
      <MarqueeTechs />
      <Projects />
      <Contact />
      {/* <Chat /> */}
      <Analytics />
      <SpeedInsights />
      <ToastContainer position="bottom-right" autoClose={3000} closeOnClick pauseOnHover theme="dark" />
    </main>
  );
}
