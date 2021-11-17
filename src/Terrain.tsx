import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Terrain() {
  const mesh = useRef();

  // Raf loop
  useFrame(() => {
    mesh.current.rotation.z += 0.01;
  });
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[25, 25, 75, 75]} />
      <meshPhongMaterial
        attach="material"
        color="hotpink"
        specular="hotpink"
        shininess={3}
        flatShading
      />
    </mesh>
  );
}
