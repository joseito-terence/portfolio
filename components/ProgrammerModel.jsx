import React, { useRef } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function ProgrammerModel(props) {
  const groupRef = useRef(null);
  const { scene } = useGLTF('./models/programmer.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)


  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.1;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0.752, -0.086]} rotation={[1.263, 0, 0]}>
          <primitive object={nodes.my_rig_rootJoint} />
          <skinnedMesh geometry={nodes.hair_0.geometry} material={materials.cloth} skeleton={nodes.hair_0.skeleton} />
          <skinnedMesh geometry={nodes.hair_1.geometry} material={materials.solidify} skeleton={nodes.hair_1.skeleton} />
          <skinnedMesh geometry={nodes.me_0.geometry} material={materials.body} skeleton={nodes.me_0.skeleton} />
          <skinnedMesh geometry={nodes.me_1.geometry} material={materials.solidify} skeleton={nodes.me_1.skeleton} />
          <skinnedMesh geometry={nodes.me002_0.geometry} material={materials.cloth} skeleton={nodes.me002_0.skeleton} />
          <skinnedMesh geometry={nodes.me002_1.geometry} material={materials.solidify} skeleton={nodes.me002_1.skeleton} />
          <skinnedMesh geometry={nodes.kemeja_0.geometry} material={materials.cloth} skeleton={nodes.kemeja_0.skeleton} />
          <skinnedMesh geometry={nodes.kemeja_1.geometry} material={materials.solidify} skeleton={nodes.kemeja_1.skeleton} />
        </group>
        <mesh geometry={nodes.Cube005_0.geometry} material={materials.laptop_tex} position={[-0.033, -0.442, -0.467]} rotation={[2.378, 0, 0]} scale={0.149} />
        <mesh geometry={nodes.bool1185_0.geometry} material={materials.Material} position={[2.403, 0.752, -0.428]} rotation={[-0.464, 0.296, -0.932]} scale={0.106} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/programmer.glb')
