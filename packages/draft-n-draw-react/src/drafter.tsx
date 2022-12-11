import { useThree, useFrame } from '@react-three/fiber';
import { Drafter as DrafterCore } from '@draft-n-draw/vanilla';
import React, { createContext, useContext } from 'react';
import * as THREE from 'three';

const drafter = new DrafterCore(new THREE.Scene());
export const getDrafter = () => drafter;

export const DrafterContext = createContext<DrafterCore>(drafter);

export function Drafter({ children }: { children: React.ReactNode }) {
  const scene = useThree((state) => state.scene);
  drafter.scene = scene;

  useFrame(() => {
    drafter.update();
  });

  return <DrafterContext.Provider value={drafter}>{children}</DrafterContext.Provider>;
}

export function useDrafter() {
  return useContext(DrafterContext);
}
