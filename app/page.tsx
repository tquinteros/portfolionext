import Contact from "@/src/components/Contact/Contact";
import Hero from "@/src/components/Hero/Hero";
import { MarqueeTechs } from "@/src/components/MarqueeTechs/MarqueeTechs";
import { Projects } from "@/src/components/Projects/Projects";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tomás Quinteros - FullStack Developer Portfolio",
  description: "FullStack developer specializing in React, TypeScript, Next.js, Node.js, and MongoDB. View my projects and get in touch for collaboration opportunities. Expert in both frontend and backend development.",
  keywords: [
    "fullstack developer",
    "full stack developer",
    "frontend developer",
    "backend developer",
    "react developer",
    "typescript developer",
    "next.js developer",
    "node.js developer",
    "mongodb developer",
    "web developer",
    "portfolio",
    "projects",
    "contact"
  ],
  openGraph: {
    title: "Tomás Quinteros - FullStack Developer Portfolio",
    description: "FullStack developer specializing in React, TypeScript, Next.js, Node.js, and MongoDB. View my projects and get in touch for collaboration opportunities.",
    url: "https://tquinteros.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomás Quinteros - FullStack Developer Portfolio",
    description: "FullStack developer specializing in React, TypeScript, Next.js, Node.js, and MongoDB. View my projects and get in touch for collaboration opportunities.",
    creator: "@tquinteros",
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
