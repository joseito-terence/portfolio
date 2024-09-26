'use client'

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { useRef } from "react";
import { Group, Vector3, Mesh } from "three";
import { MeshProps } from '@react-three/fiber';

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <BoxSphere />
      </Canvas>
    </div>
  );
}

function BoxSphere() {
  const groupRef = useRef<Group>(null);
  const radius = 5;
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = .5;
  const numBoxes = 200;

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const boxes = [];
  for (let i = 0; i < numBoxes; i++) {
    const phi = Math.acos(-1 + (2 * i) / numBoxes);
    const theta = Math.sqrt(numBoxes * Math.PI) * phi;

    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    boxes.push(
      <Box 
        key={i} 
        position={[x, y, z]} 
        width={boxWidth}
        height={boxHeight}
        depth={boxDepth}
        number={i + 1}
      />
    );
  }

  return <group ref={groupRef}>{boxes}</group>;
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
      <meshStandardMaterial color="orange" />
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
