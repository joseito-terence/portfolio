"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export default function HeroSection() {
  return (
    <HeroHighlight className="flex flex-col gap-4">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl text-center mx-auto "
      >
        Hey! I&apos;m Joseito
        <br />
        <Highlight className="text-white mt-4">
          A Full Stack Developer
        </Highlight>
        <br />
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.2,
        }}
        className="text-lg px-4 md:text-xl lg:text-2xl text-white max-w-4xl text-center mx-auto"
      >
        Experienced in building Mobile apps, Web apps, APIs, and more.
      </motion.p>
    </HeroHighlight>
  );
}
