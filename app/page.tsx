'use client'

import { useState, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import BoxSphere from "../components/BoxSphere";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { DirectionalLight } from "three";
import HeroSection from "@/components/HeroSection";
import ResumeSection from "@/components/ResumeSection";
import Skills from "@/components/Skills";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-primary text-white overflow-hidden">
      {/* Sphere background */}
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

      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 flex items-center justify-center"
          >
            <h2 className="text-4xl font-bold"></h2>
          </motion.div>
        ) : (
          <>
            <Header />

            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="z-10 min-h-screen overflow-y-auto"
            >
              <div className="backdrop-blur-sm bg-[#0f1729]/10">
                <main>
                  <HeroSection />
                  <ResumeSection />
                  <About />
                  <Skills />
                  <Projects />
                  {/* <Experience /> */}
                  <Contact />
                </main>
              </div>
            </motion.div>
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