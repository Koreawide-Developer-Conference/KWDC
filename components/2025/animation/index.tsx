"use client"

import React from 'react';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh  } from "three";
import { prefix } from "@/constants";
import { GLTFLoader } from "three-stdlib";

export const Animation: React.FC = () => {

  function MeshComponent() {
    const fileUrl = `${prefix}/assets/2024/objects/kv_object.gltf`;
    const mesh = React.useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
      mesh.current.rotation.z -= 0.005;
      mesh.current.scale.x = 5;
      mesh.current.scale.y = 5;
      mesh.current.scale.z = 5;
    });


    return (
      <mesh ref={mesh}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }


  return (
    <div className='flex justify-center items-center h-screen absolute top-0 left-0 w-screen z-0'>
      <Canvas className='w-screen h-screen'>
        <OrbitControls enableZoom={false} enablePan={true} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} color={'#E8EEF0'} />
        <MeshComponent />
      </Canvas>
    </div>
  )
}
