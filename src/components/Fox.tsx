import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";
import FOX from "../assets/Fox/glTF/Fox.gltf";
import BIN from "../assets/Fox/glTF/Fox.bin";
import TEXTURE from "../assets/Fox/glTF/Texture.png";
import * as THREE from "three";

export const Fox = () => {
  console.log(FOX, BIN, TEXTURE);
  const fox = useGLTF(FOX);
  const animations = useAnimations(fox.animations, fox.scene);

  const { animation } = useControls({
    animation: { options: animations.names },
  });

  useEffect(() => {
    const action = animations.actions[animation];
    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
  }, [animation]);

  return <primitive object={fox.scene} scale={0.05} />;
};
