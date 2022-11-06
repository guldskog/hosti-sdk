import { OrbitControls, MeshReflectorMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Perf } from "r3f-perf";
import React from "react";

export interface RootProps {}

export const Root: React.FC<RootProps> = (props) => {
  const { position } = useControls({
    position: {
      value: { x: 0, z: 0 },
      min: -0.5,
      max: 0.5,
    },
  });

  return (
    <main className="fixed w-screen h-screen inset-0">
      <Leva />

      <Canvas>
        <Perf position="top-left" />
        <OrbitControls />

        <mesh position={[position.x, 0, position.z]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>

        <mesh position={[0, -0.5, 0]} rotation-x={-Math.PI * 0.5} scale={2}>
          <planeGeometry />
          <MeshReflectorMaterial mirror={1} resolution={3840} />
        </mesh>

        <ambientLight />
        <directionalLight position={[0, 1.5, 3]} />
      </Canvas>
    </main>
  );
};
