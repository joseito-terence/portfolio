"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export default function HeroSection() {
  return (
    <HeroHighlight className="flex flex-col gap-4 relative">
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
      <ScrollDown />
    </HeroHighlight>
  );
}

const ScrollDown = () => (
  <div className="mx-auto absolute bottom-[-150%] left-[50%] -ml-[30px] scale-75 md:scale-100">
    <svg className="w-[60px] h-[72px]">
      <path className="stroke-white fill-none animate-pulse [animation-delay:-1s]" d="M0 0 L30 32 L60 0"></path>
      <path className="stroke-white fill-none animate-pulse [animation-delay:-0.5s]" d="M0 20 L30 52 L60 20"></path>
      <path className="stroke-white fill-none animate-pulse" d="M0 40 L30 72 L60 40"></path>
    </svg>
  </div>
)
