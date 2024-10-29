import { Canvas } from "@react-three/fiber"
import ProgrammerModel from "@/components/ProgrammerModel";
import { OrbitControls } from "@react-three/drei";
import { metadata } from "@/app/constants";
import { useMediaQuery } from 'react-responsive'
import { FadeUp } from "./ui/fade-up";
import { motion } from "framer-motion-3d"
import { useInView } from "framer-motion"
import { useRef } from "react";
import { IconMapPin } from "@tabler/icons-react";

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <section id="about" className="bg-primary">
      <div className="mx-auto max-w-screen-xl lg:flex lg:flex-row">
        <div ref={ref} className="flex-1 w-screen lg:w-[55vw]"  style={{ height: isLargeScreen ? 600 : 300 }}>
          <Canvas>
            <ambientLight intensity={1} />
            <OrbitControls enabled={isLargeScreen} />
            
            <motion.group
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 2.5 }
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 2 }}
            >
              <ProgrammerModel />
            </motion.group>
          </Canvas>
        </div>

        <div className="flex-1 p-12 flex flex-col justify-center items-start">
          <FadeUp>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
          </FadeUp>
          <FadeUp delay={0.5}>
            <p className="text-lg">
              {metadata.description}
            </p>
            <p className="text-md mt-4 opacity-70 flex items-center gap-1">
              <IconMapPin size={20} />
              Hounslow, London, UK
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
