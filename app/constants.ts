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

export const metadata: Metadata = {
  title: "Joseito Fernandes",
  description: "👋 Hello! I'm a dedicated Software Developer fueled by an unwavering commitment to perpetual learning and progress. With 3 years of professional experience, I've crafted applications using an extensive tech stack, including React.js, React Native, TypeScript, Express.js, MongoDB, and more. My unwavering dedication lies in continually refining my expertise and competencies.",
};

export const skills = [
  { name: 'React', icon: ReactIcon },
  { name: 'Sass', icon: SassIcon },
  { name: 'Javascript', icon: JavaScriptIcon },
  { name: 'CSS', icon: Css3Icon },
  { name: 'Tailwind', icon: TailwindIcon },
  { name: 'Typescript', icon: TypeScriptIcon },
  { name: 'NextJS', icon: NextjsIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'Database', icon: DatabaseIcon }
]
