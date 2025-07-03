import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/src/contexts/ModalContext";
import { Toaster } from "sonner";
import Footer from "@/src/components/Footer/Footer";
import { Header } from "@/src/components/Header/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomás Quinteros - Portfolio",
  description: "Tomás Quinteros frontend developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
