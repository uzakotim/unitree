import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/custom/Footer";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unitree G1 Apps",
  description: "Collection of apps for unitree's humanoid robot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body
        className={`antialiased bg-zinc-200`}
      >
        <div className="flex flex-col min-w-screen h-screen">
          <div className="flex flex-1 items-center justify-center">
            {children}
          </div>
          <Footer />
        </div>
      
      </body>
    </html>
  );
}
