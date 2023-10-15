import {Stars } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";


const StarsCanvas = () => {

  return (
        <div className="w-full h-auto absolute stars inset-0 z-1">
            <Canvas>
                <Suspense fallback={null}> 
                {/* <group rotation={[0, 0, Math.PI/4]}> */}
                <Stars radius={410} depth={70} count={5000} factor={64} saturation={5} fade={true} speed={2}/>
                {/* <OrbitControls enableDamping={false} enablePan={false} enableZoom={false}/> */}
                {/* </group> */}
                </Suspense>
            </Canvas>

        </div>

  );
};

export default StarsCanvas;