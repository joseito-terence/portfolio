'use client'

import { useState, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import BoxSphere from "../components/BoxSphere";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { DirectionalLight } from "three";
import HeroSection from "@/components/HeroSection";
import ResumeSection from "@/components/ResumeSection";
import Skills from "@/components/Skills";
import { useMediaQuery } from "react-responsive";

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
      {/* Sphere background */}
      {isLargeScreen && (
        <div className="fixed inset-0 z-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.3} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />
            <pointLight position={[0, 0, 0]} intensity={0.3} />
            <FixedDirectionalLight />
            <BoxSphere />
          </Canvas>
        </div>
      )}

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


function FixedDirectionalLight() {
  const lightRef = useRef<DirectionalLight>(null);
  const { camera } = useThree();

  useEffect(() => {
    const light = lightRef.current;
    if (light) {
      camera.add(light);
      return () => {
        camera.remove(light);
      };
    }
  }, [camera]);

  return (
    <directionalLight ref={lightRef} />
  );
}
