import { useRef, useEffect, useState, useMemo } from "react";
import { Vector3, Mesh, Group } from "three";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { skills } from "@/app/constants";

const icons = skills.map(skill => skill.Icon);

const numBoxes = 250;
const gridSize = Math.ceil(Math.sqrt(numBoxes));
const spacing = 1.5;

export default function BoxSphere() {
  const [isGrid, setIsGrid] = useState(true);
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsGrid(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current && !isGrid) {
      const rotationSpeed = delta * 0.2;
      groupRef.current.rotation.x += rotationSpeed;
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  const boxes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < numBoxes; i++) {
      let x, y, z;
      if (isGrid) {
        x = (i % gridSize - (gridSize - 1) / 2) * spacing;
        y = (Math.floor(i / gridSize) - (gridSize - 1) / 2) * spacing;
        z = 0;
      } else {
        const phi = Math.acos(-1 + (2 * i) / numBoxes);
        const theta = Math.sqrt(numBoxes * Math.PI) * phi;
        x = 5 * Math.cos(theta) * Math.sin(phi);
        y = 5 * Math.sin(theta) * Math.sin(phi);
        z = 5 * Math.cos(phi);
      }

      arr.push(
        <motion.group
          key={i}
          initial={{ 
            x: isGrid ? x : 0, 
            y: isGrid ? y : 0, 
            z: isGrid ? z : 0
          }}
          animate={{ x, y, z }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Box width={1} height={1} depth={0.4} isGrid={isGrid} />
        </motion.group>
      );
    }
    return arr;
  }, [isGrid]);

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
