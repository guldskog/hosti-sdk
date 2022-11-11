import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Perf } from "r3f-perf";
import { Suspense, useEffect } from "react";
import { Fox } from "./Fox";
import { Hamburger } from "./Hamburger";

export const Root = () => {
  const { position } = useControls({
    position: {
      value: { x: 0, z: 0 },
      min: -0.5,
      max: 0.5,
    },
  });

  return (
    <main className="fixed w-screen h-screen inset-0 bg-black">
      <Leva />

      <Canvas>
        <Perf position="top-left" />
        <OrbitControls />

        <mesh rotation-x={-Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <MeshReflectorMaterial mirror={1} resolution={3840} />
        </mesh>

        <ambientLight />
        <directionalLight position={[0, 1.5, 3]} />

        <Suspense>
          <Fox />
        </Suspense>
      </Canvas>
    </main>
  );
};
