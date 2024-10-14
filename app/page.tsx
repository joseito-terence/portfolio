'use client'

import { useRef, useEffect, useState, useMemo } from "react";
import { Vector3, Mesh, DirectionalLight, Group } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import Css3Icon from './icons/css3';
import DatabaseIcon from './icons/database';
import DockerIcon from './icons/docker';
import GitIcon from './icons/git';
import JavaScriptIcon from './icons/javascript';
import NextjsIcon from './icons/nextjs';
import ReactIcon from './icons/react';
import SassIcon from './icons/sass';
import TailwindIcon from './icons/tailwind';
import TypeScriptIcon from './icons/typescript';

const icons = [
  Css3Icon,
  DatabaseIcon,
  DockerIcon,
  GitIcon,
  JavaScriptIcon,
  NextjsIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TypeScriptIcon
];

export default function Home() {
  return (
    <div className="w-full h-[100vh]">
      <Canvas className="bg-[#0f1729]">
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={0.3} />
        <FixedDirectionalLight />
        <BoxSphere />
      </Canvas>
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

function BoxSphere() {
  const [isGrid, setIsGrid] = useState(true);
  const groupRef = useRef<Group>(null);
  const numBoxes = 250;
  const gridSize = Math.ceil(Math.sqrt(numBoxes));
  const spacing = 1.5;

  useEffect(() => {
    const timer = setTimeout(() => setIsGrid(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current && !isGrid) {
      groupRef.current.rotation.x += delta * 0.2;
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  const boxes = [];
  for (let i = 0; i < numBoxes; i++) {
    const gridX = (i % gridSize - gridSize / 2) * spacing;
    const gridY = (Math.floor(i / gridSize) - gridSize / 2) * spacing;
    const gridZ = 0;

    const phi = Math.acos(-1 + (2 * i) / numBoxes);
    const theta = Math.sqrt(numBoxes * Math.PI) * phi;
    const sphereX = 5 * Math.cos(theta) * Math.sin(phi);
    const sphereY = 5 * Math.sin(theta) * Math.sin(phi);
    const sphereZ = 5 * Math.cos(phi);

    boxes.push(
      <motion.group
        key={i}
        initial={{ x: gridX, y: gridY, z: gridZ }}
        animate={{
          x: isGrid ? gridX : sphereX,
          y: isGrid ? gridY : sphereY,
          z: isGrid ? gridZ : sphereZ,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Box width={1} height={1} depth={0.5} />
      </motion.group>
    );
  }

  return <group ref={groupRef}>{boxes}</group>;
}

interface BoxProps {
  width: number;
  height: number;
  depth: number;
}

function Box({ width, height, depth }: BoxProps) {
  const meshRef = useRef<Mesh>(null);
  
  const Icon = useMemo(() => icons[Math.floor(Math.random() * icons.length)], []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.lookAt(0, 0, 0);
      meshRef.current.rotateOnAxis(new Vector3(0, 1, 0), Math.PI);
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color="#c8cad0" emissive="#c8cad0" emissiveIntensity={0.2} />
      <Html
        transform
        occlude
        position={[0, 0, depth / 2 + 0.01]}
        className="w-full h-full flex justify-center items-center"
      >
        <Icon width={30} height={30} />
      </Html>
    </mesh>
  );
}
