import Chat from "@/src/components/Chat/Chat";
import Contact from "@/src/components/Contact/Contact";
import { Header } from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import { MarqueeTechs } from "@/src/components/MarqueeTechs/MarqueeTechs";
import { Projects } from "@/src/components/Projects/Projects";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <Hero />
      <MarqueeTechs />
      <Projects />
      <Contact />
      {/* <Chat /> */}
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
