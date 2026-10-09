import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function WaterPlane() {
  const meshRef = useRef();
  const geomRef = useRef();

  // Create base positions for wave calculation
  const { originalPositions } = useMemo(() => {
    const geom = new THREE.PlaneGeometry(240, 240, 40, 40);
    const pos = geom.attributes.position.array;
    const orig = new Float32Array(pos.length);
    for (let i = 0; i < pos.length; i++) {
      orig[i] = pos[i];
    }
    return { originalPositions: orig };
  }, []);

  useFrame(({ clock }) => {
    if (!geomRef.current) return;
    const time = clock.getElapsedTime() * 0.7;
    const position = geomRef.current.attributes.position;
    const array = position.array;

    for (let i = 0; i < array.length; i += 3) {
      const u = originalPositions[i];
      const v = originalPositions[i + 1];
      // Subtle organic wave equation
      const wave = Math.sin(u * 0.08 + time) * 0.25 + Math.cos(v * 0.08 + time * 0.8) * 0.2;
      array[i + 2] = wave;
    }
    position.needsUpdate = true;
  });

  return (
    <group position={[0, -0.3, 0]}>
      {/* Dynamic Water Surface */}
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry ref={geomRef} args={[240, 240, 40, 40]} />
        <meshStandardMaterial
          color="#0b3a5b"
          emissive="#082f49"
          roughness={0.25}
          metalness={0.7}
          flatShading={true}
        />
      </mesh>

      {/* Cartographic GIS Grid Lines on the Ocean */}
      <gridHelper
        args={[240, 30, '#38bdf8', '#164e63']}
        position={[0, 0.05, 0]}
      />
    </group>
  );
}
