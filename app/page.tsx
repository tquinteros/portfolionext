import Contact from "@/src/components/Contact/Contact";
import { Header } from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import { MarqueeTechs } from "@/src/components/MarqueeTechs/MarqueeTechs";
import { Projects } from "@/src/components/Projects/Projects";
import Image from "next/image";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <Header />
      <Hero />
      <MarqueeTechs />
      <Projects />
      <Contact />
      <ToastContainer />
    </main>
  );
}
