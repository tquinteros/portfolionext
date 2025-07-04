import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/src/contexts/ModalContext";
import { Toaster } from "sonner";
import Footer from "@/src/components/Footer/Footer";
import { Header } from "@/src/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tomás Quinteros - Frontend Developer Portfolio",
    template: "%s | Tomás Quinteros"
  },
  description: "Frontend developer specializing in React, TypeScript, and Next.js. Creating modern, responsive web applications with cutting-edge technologies.",
  keywords: [
    "frontend developer",
    "react developer",
    "typescript developer",
    "next.js developer",
    "web developer",
    "javascript developer",
    "portfolio",
    "tomas quinteros",
    "argentina developer"
  ],
  authors: [{ name: "Tomás Quinteros" }],
  creator: "Tomás Quinteros",
  publisher: "Tomás Quinteros",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tquinteros.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tquinteros.vercel.app',
    title: 'Tomás Quinteros - Frontend Developer Portfolio',
    description: 'Frontend developer specializing in React, TypeScript, and Next.js. Creating modern, responsive web applications with cutting-edge technologies.',
    siteName: 'Tomás Quinteros Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Tomás Quinteros - Frontend Developer Portfolio',
    description: 'Frontend developer specializing in React, TypeScript, and Next.js. Creating modern, responsive web applications with cutting-edge technologies.',
    creator: '@tquinteros',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tomás Quinteros",
    "jobTitle": "Frontend Developer",
    "description": "Frontend developer specializing in React, TypeScript, and Next.js",
    "url": "https://tquinteros.vercel.app",
    "sameAs": [
      "https://github.com/tquinteros",
      "https://linkedin.com/in/tomas-quinteros1"
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "Frontend Development",
      "Web Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Córdoba",
      "addressCountry": "Argentina"
    },
    "email": "tomyquinteros494@gmail.com"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ModalProvider>
          <Header />
          {children}
        </ModalProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
