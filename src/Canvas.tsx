import { Suspense } from "react";
import Controls from "./Controls";

export default function Canvas() {
  return (
    <Canvas camera={{ zoom: 40, position: [0, 0, 500] }}>
      <Suspense fallback={<span className="loading" children="Loading..." />}>
        <Controls />
        <Scene />
      </Suspense>
    </Canvas>
  );
}



export  function Scene(){
    return (
        <scen
    )
}