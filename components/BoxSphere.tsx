import { useRef, useEffect, useState, useMemo } from "react";
import { Vector3, Mesh, Group } from "three";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { skills } from "@/app/constants";

const icons = skills.map(skill => skill.Icon);

export default function BoxSphere() {
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
        <Box width={1} height={1} depth={0.5} isGrid={isGrid} />
      </motion.group>
    );
  }

  return <group ref={groupRef}>{boxes}</group>;
}

interface BoxProps {
  width: number;
  height: number;
  depth: number;
  isGrid?: boolean;
}

function Box({ width, height, depth, isGrid }: BoxProps) {
  const meshRef = useRef<Mesh>(null);
  
  const Icon = useMemo(() => icons[Math.floor(Math.random() * icons.length)], []);

  useFrame(() => {
    if (meshRef.current && !isGrid) {
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
