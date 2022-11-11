import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { Fox } from "./Fox";
import { Hamburger } from "./Hamburger";

export const Root = () => {
  return (
    <main className="fixed w-screen h-screen inset-0 bg-black">
      <Leva />

      <Canvas>
        <Perf position="top-left" />
        <OrbitControls />

        <mesh rotation-x={-Math.PI * 0.5} scale={20}>
          <planeGeometry />
          <MeshReflectorMaterial mirror={1} resolution={3840} />
        </mesh>

        <ambientLight />
        <directionalLight position={[0, 1.5, 3]} />

        <Suspense>
          {/* <Hamburger /> */}
          <Fox />
        </Suspense>
      </Canvas>
    </main>
  );
};
