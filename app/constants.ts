import type { Metadata } from "next";
import Css3Icon from '../icons/css3';
import DatabaseIcon from '../icons/database';
import DockerIcon from '../icons/docker';
import GitIcon from '../icons/git';
import JavaScriptIcon from '../icons/javascript';
import NextjsIcon from '../icons/nextjs';
import ReactIcon from '../icons/react';
import SassIcon from '../icons/sass';
import TailwindIcon from '../icons/tailwind';
import TypeScriptIcon from '../icons/typescript';
import NodejsIcon from "../icons/nodejs";
import TamaguiIcon from "@/icons/tamagui";

export const metadata: Metadata = {
  title: "Joseito Fernandes",
  description: "👋 Hello! I'm a dedicated Software Developer fueled by an unwavering commitment to perpetual learning and progress. With 3 years of professional experience, I've crafted applications using an extensive tech stack, including React.js, React Native, TypeScript, Express.js, MongoDB, and more. My unwavering dedication lies in continually refining my expertise and competencies.",
};

export const skills = [
  { 
    name: 'React / React Native',
    Icon: ReactIcon,
    accent: '#60c7de',
  },
  {
    name: 'NextJS',
    Icon: NextjsIcon,
    accent: '#ffffff',
  },
  {
    name: 'Typescript',
    Icon: TypeScriptIcon,
    accent: '#007acc',
  },
  {
    name: 'Javascript',
    Icon: JavaScriptIcon,
    accent: '#f0db4f',
  },
  {
    name: 'NodeJS',
    Icon: NodejsIcon,
    accent: '#68a063',
  },
  {
    name: 'Tamagui',
    Icon: TamaguiIcon,
    accent: '#f0db4f',
  },
  {
    name: 'Tailwind',
    Icon: TailwindIcon,
    accent: '#06b6d4',
  },
  {
    name: 'Sass',
    Icon: SassIcon,
    accent: '#cc6699',
  },
  {
    name: 'CSS',
    Icon: Css3Icon,
    accent: '#379ad6',
  },
  {
    name: 'Docker',
    Icon: DockerIcon,
    accent: '#2496ed',
  },
  {
    name: 'Git',
    Icon: GitIcon,
    accent: '#f34f29',
  },
  {
    name: 'SQL',
    Icon: DatabaseIcon,
    accent: '#4479a1',
  }
]
