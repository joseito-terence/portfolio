'use client'

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import HeroSection from "@/components/HeroSection";
import ResumeSection from "@/components/ResumeSection";
import Skills from "@/components/Skills";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";
const Background3d = dynamic(() => import("@/components/BoxSphere"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 786px)' })

  useEffect(() => {
    // Simulate loading time
    if (isLargeScreen) {
      const timer = setTimeout(() => setLoading(false), 2800);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [isLargeScreen]);

  return (
    <div className="w-full min-h-screen bg-primary text-white overflow-hidden">
      <Background3d />

      <AnimatePresence>
        {!loading && (
          <>
            <Header />

            <motion.main
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="z-10 min-h-screen overflow-y-auto backdrop-blur-sm bg-[#0f1729]/10"
            >
              <HeroSection />
              <ResumeSection />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
