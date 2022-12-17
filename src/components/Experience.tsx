import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { Header } from "./Header";
import { Website } from "./Website";

export const Experience = () => {
  const canvas = useRef();

  const phone = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );

  return (
    <Canvas ref={canvas} className="touch-none">
      {/* <color args={["#222632"]} attach="background" /> */}
      <Environment preset="sunset" />

      <PresentationControls global polar={[-0.2, 0.2]} azimuth={[-0.5, 0.5]}>
        <Suspense>
          <Float rotationIntensity={0.25}>
            <primitive
              object={phone.scene}
              position-x={-0.24}
              position-y={-2.5}
              scale={1.5}
            >
              <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1}
                position={[0.17, 1.34, 0.07]}
                rotation-x={0}
              >
                <main id="website" className="bg-dark-primary">
                  <Header />
                  <Website />
                </main>
              </Html>
            </primitive>
          </Float>
        </Suspense>
      </PresentationControls>

      <ContactShadows position-y={-3} opacity={0.5} scale={5} blur={2.5} />
    </Canvas>
  );
};
