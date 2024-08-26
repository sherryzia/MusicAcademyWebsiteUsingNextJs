import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Music Academy",
  description: "Join the best online music academy to learn and master the art of music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="My Music Academy" />
        <meta property="og:description" content="Join the best online music academy to learn and master the art of music." />
        <meta property="og:image" content="https://raw.githubusercontent.com/sherryzia/Simple-Portfolio-With-HTML-CSS-JS/main/image/Music%20Website.png" />
        <meta property="og:url" content="https://sherrymusicacademy-next.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Music Academy" />
        <meta name="twitter:description" content="Join the best online music academy to learn and master the art of music." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/sherryzia/Simple-Portfolio-With-HTML-CSS-JS/main/image/Music%20Website.png" />
      </Head>

      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
