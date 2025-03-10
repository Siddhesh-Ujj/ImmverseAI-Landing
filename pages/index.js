import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer/Footer";
import Experience from "@/components/Experience/Experience";
import HeroSection from "@/components/Herosection/HeroSection";
import Header from "@/components/Navbar/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Immverse AI</title>
        <meta name="description" content="Demo Develope by Siddhesh Ujjainkar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Aiicon.jpeg" />
      </Head>
      <div
      // className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Header />
          <HeroSection />
          <Experience />
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
}
