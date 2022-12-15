import { DrafterProvider as Drafter, useDrafter } from 'draft-n-draw';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import './app.css';
import * as THREE from 'three';

function InnerApp() {
  const spotLightRef = useRef<THREE.SpotLight>(null!);
  const drafter = useDrafter();

  // useFrame(() => {
  //   if (spotLightRef.current) drafter.drawSpotlight(spotLightRef.current);
  // });

  useEffect(() => {
    drafter.drawSpotlight(spotLightRef.current, { persist: true });
    setTimeout(() => drafter.dispose(spotLightRef.current), 2000);
    return () => drafter.dispose(spotLightRef.current);
  });

  return (
    <>
      <OrbitControls />
      <spotLight ref={spotLightRef} />
    </>
  );
}

function App() {
  return (
    <Canvas>
      <Suspense>
        <Drafter>
          <InnerApp />
        </Drafter>
      </Suspense>
    </Canvas>
  );
}

export default App;
