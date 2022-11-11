import { MeshReflectorMaterial, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { Fox } from "./Fox";
import { Hamburger } from "./Hamburger";
import { World } from "./World";

export const Root = () => {
  return (
    <main className="fixed w-screen h-screen inset-0">
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

        <Sky sunPosition={5} />

        <Suspense>
          {/* <Hamburger /> */}
          {/* <Fox /> */}
          <World />
        </Suspense>
      </Canvas>
    </main>
  );
};
