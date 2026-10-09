import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import InteractivePoi from './InteractivePoi';
import { POI_ICONS } from '../../data/poiIcons';

export default function IslandContact({ onSelectPoi, activePoi }) {
  const beamRef = useRef();

  useFrame(({ clock }) => {
    if (beamRef.current) {
      beamRef.current.rotation.y = clock.getElapsedTime() * 1.5;
    }
  });

  return (
    <group position={[12, 0, 22]}>
      {/* Island 4: asymmetric rocky beacon islet */}
      <mesh position={[0, 0.18, 0]} rotation={[0, 0.25, 0]} scale={[1, 1, 0.72]}>
        <cylinderGeometry args={[6.3, 7.4, 0.8, 9]} />
        <meshStandardMaterial color="#0e2329" roughness={0.7} flatShading />
      </mesh>
      <mesh position={[-1.9, 0.25, 1.1]} rotation={[0, -0.35, 0]} scale={[1, 1, 0.8]}>
        <cylinderGeometry args={[3.0, 3.7, 0.52, 7]} />
        <meshStandardMaterial color="#102c33" roughness={0.72} flatShading />
      </mesh>
      <mesh position={[1.8, 0.25, -1.2]} rotation={[0, 0.55, 0]} scale={[1, 1, 0.68]}>
        <cylinderGeometry args={[2.8, 3.4, 0.55, 7]} />
        <meshStandardMaterial color="#102c33" roughness={0.72} flatShading />
      </mesh>
      <mesh position={[0.2, 0.84, 0.1]} rotation={[0, -0.1, 0]} scale={[1, 1, 0.64]}>
        <cylinderGeometry args={[4.5, 5.5, 0.8, 8]} />
        <meshStandardMaterial color="#1b3038" roughness={0.6} flatShading />
      </mesh>
      <mesh position={[-0.6, 1.42, -0.25]} rotation={[0, 0.4, 0]} scale={[1, 1, 0.7]}>
        <cylinderGeometry args={[3.2, 4.2, 0.8, 7]} />
        <meshStandardMaterial color="#263d42" roughness={0.5} flatShading />
      </mesh>

      {[-2.9, -1.4, 1.8, 3.1].map((x, index) => (
        <mesh key={x} position={[x, 1.45 + (index % 2) * 0.2, index % 2 ? 2.6 : -2.5]} rotation={[0.3, index * 0.8, 0.2]}>
          <dodecahedronGeometry args={[0.36 + index * 0.06, 0]} />
          <meshStandardMaterial color="#475569" roughness={0.9} flatShading />
        </mesh>
      ))}

      {/* POI: The Lighthouse Beacon */}
      <InteractivePoi
        id="beacon"
        title="O Farol / Conexões & Contato"
        iconUrl={POI_ICONS.beacon}
        position={[0, 1.8, 0]}
        onSelect={onSelectPoi}
        activePoi={activePoi}
      >
        <group>
          {/* Lighthouse Base */}
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.9, 1.2, 1.0, 8]} />
            <meshStandardMaterial color="#1f2937" roughness={0.6} />
          </mesh>

          {/* Tower Body */}
          <mesh position={[0, 1.8, 0]}>
            <cylinderGeometry args={[0.6, 0.85, 1.6, 8]} />
            <meshStandardMaterial color="#374151" roughness={0.4} />
          </mesh>

          {/* Green Ring Pattern */}
          <mesh position={[0, 1.8, 0]}>
            <cylinderGeometry args={[0.62, 0.72, 0.4, 8]} />
            <meshStandardMaterial color="#10b981" roughness={0.3} />
          </mesh>

          {/* Lantern Room Platform */}
          <mesh position={[0, 2.7, 0]}>
            <cylinderGeometry args={[0.75, 0.75, 0.2, 8]} />
            <meshStandardMaterial color="#111827" roughness={0.5} />
          </mesh>

          {/* Light Glass & Glowing Core */}
          <mesh position={[0, 3.0, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 0.5, 8]} />
            <meshStandardMaterial
              color="#00ff88"
              emissive="#00ff88"
              emissiveIntensity={2.0}
              transparent
              opacity={0.9}
            />
          </mesh>

          {/* Conical Roof */}
          <mesh position={[0, 3.5, 0]}>
            <coneGeometry args={[0.7, 0.6, 8]} />
            <meshStandardMaterial color="#065f46" roughness={0.3} />
          </mesh>

          {/* Rotating Light Beam Group */}
          <group ref={beamRef} position={[0, 3.0, 0]}>
            {/* Forward Beam */}
            <mesh position={[0, 0, 5]} rotation={[Math.PI / 2, 0, 0]}>
              <coneGeometry args={[2.5, 10, 16, 1, true]} />
              <meshBasicMaterial
                color="#00ff88"
                transparent
                opacity={0.15}
                depthWrite={false}
                side={2}
              />
            </mesh>
            {/* Opposite subtle beam */}
            <mesh position={[0, 0, -5]} rotation={[-Math.PI / 2, 0, 0]}>
              <coneGeometry args={[2.5, 10, 16, 1, true]} />
              <meshBasicMaterial
                color="#10b981"
                transparent
                opacity={0.08}
                depthWrite={false}
                side={2}
              />
            </mesh>
          </group>
        </group>
      </InteractivePoi>
    </group>
  );
}
