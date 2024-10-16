import { Canvas } from "@react-three/fiber"
import ProgrammerModel from "@/components/ProgrammerModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { metadata } from "@/app/constants";
import { useMediaQuery } from 'react-responsive'

export default function About() {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' })
  
  return (
    <section className="bg-primary ">
      <div className="mx-auto max-w-screen-xl lg:flex lg:flex-row">
        <div className="flex-1">
          <Canvas style={{ height: isLargeScreen ? 600 : 300 }}>
            <ambientLight intensity={1} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <OrbitControls enabled={isLargeScreen} />
            <ProgrammerModel />
          </Canvas>
        </div>

        <div className="flex-1 p-12 flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            {metadata.description}
          </p>
        </div>
      </div>
    </section>
  );
}
