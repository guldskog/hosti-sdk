import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import BROTHERS from "../assets/Brothers.gltf";

export function World(props) {
  const { nodes, materials } = useGLTF(BROTHERS);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[-1.04, 0.25, 0.59]}
        scale={[1, 3.36, 1.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_1.geometry}
        material={nodes.mesh_1.material}
        position={[4.84, 0.77, 4.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_2.geometry}
        material={nodes.mesh_2.material}
        position={[4.84, 2.36, 4.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_3.geometry}
        material={nodes.mesh_3.material}
        position={[4.25, 3.19, 4.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_4.geometry}
        material={nodes.mesh_4.material}
        position={[5.42, 3.19, 4.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_5.geometry}
        material={nodes.mesh_5.material}
        position={[4.2, 3.3, 5.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_6.geometry}
        material={nodes.mesh_6.material}
        position={[4.14, 3.47, 4.87]}
        rotation={[0, 0.75, 0]}
        scale={[1, 1, 1.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_7.geometry}
        material={nodes.mesh_7.material}
        position={[-0.02, 2.91, 1.38]}
      />
    </group>
  );
}

useGLTF.preload(BROTHERS);
