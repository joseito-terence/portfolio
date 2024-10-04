'use client'

import { useRef, useEffect, useState } from "react";
import { Group, Vector3, Mesh, DirectionalLight } from "three";
import { Canvas, useFrame, useThree, MeshProps } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <OrbitControls />
        <ambientLight intensity={.8} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={0.5} />
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
  const rotationRef = useRef<{ y: number }>({ y: 0 });
  const numBoxes = 250;
  const gridSize = Math.ceil(Math.sqrt(numBoxes));
  const spacing = 1.5;

  useEffect(() => {
    const timer = setTimeout(() => setIsGrid(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useFrame((state, delta) => {
    if (!isGrid) {
      rotationRef.current.y += delta * 0.5;
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
          rotateY: rotationRef.current.y,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Box
          width={1}
          height={1}
          depth={0.5}
          number={i + 1}
        />
      </motion.group>
    );
  }

  return <group>{boxes}</group>;
}

interface BoxProps extends MeshProps {
  width: number;
  height: number;
  depth: number;
  number: number;
}

function Box({ width, height, depth, number, ...props }: BoxProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.lookAt(0, 0, 0);
      meshRef.current.rotateOnAxis(new Vector3(0, 1, 0), Math.PI);
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={0.2} />
      <Text
        position={[0, 0, depth / 2 + 0.01]}
        fontSize={height * 0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {number}
      </Text>
    </mesh>
  );
}
