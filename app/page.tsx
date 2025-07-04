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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Frontend developer specializing in React, TypeScript, and Next.js. View my projects and get in touch for collaboration opportunities.",
  keywords: [
    "frontend developer",
    "react developer",
    "typescript developer",
    "next.js developer",
    "web developer",
    "portfolio",
    "projects",
    "contact"
  ],
  openGraph: {
    title: "Tomás Quinteros - Frontend Developer Portfolio",
    description: "Frontend developer specializing in React, TypeScript, and Next.js. View my projects and get in touch for collaboration opportunities.",
    url: "https://tquinteros.vercel.app",
  },
  twitter: {
    card: "summary",
    title: "Tomás Quinteros - Frontend Developer Portfolio",
    description: "Frontend developer specializing in React, TypeScript, and Next.js. View my projects and get in touch for collaboration opportunities.",
  },
  alternates: {
    canonical: "/",
  },
};

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
