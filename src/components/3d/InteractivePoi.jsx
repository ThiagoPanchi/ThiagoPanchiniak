import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export default function InteractivePoi({
  id,
  title,
  iconUrl,
  iconOffset = [0, 0.05, 0],
  position = [0, 0, 0],
  onSelect,
  activePoi,
  children
}) {
  const [hovered, setHovered] = useState(false);
  const pinRef = useRef();
  const isSelected = activePoi === id;
  const iconTexture = useLoader(THREE.TextureLoader, iconUrl || '/favicon.svg');

  useFrame(({ clock }) => {
    if (pinRef.current) {
      // Gentle floating animation
      pinRef.current.position.y = position[1] + 2.5 + Math.sin(clock.getElapsedTime() * 3 + position[0]) * 0.2;
    }
  });

  const handlePointerOver = (e) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  const handleClick = (e) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
    if (onSelect) onSelect(id);
  };

  return (
    <group position={position}>
      {/* Clickable and Hoverable 3D Object Group */}
      <group
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        {children}

        {/* Highlight Ring around base on hover or select */}
        {(hovered || isSelected) && (
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
            <ringGeometry args={[1.5, 1.8, 24]} />
            <meshBasicMaterial color="#00ff88" opacity={0.8} transparent />
          </mesh>
        )}
      </group>

      {/* Floating 3D Beacon / Pin */}
      <group
        ref={pinRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        {iconUrl && (
          <sprite position={iconOffset} scale={hovered || isSelected ? 2.25 : 1.95}>
            <spriteMaterial
              map={iconTexture}
              transparent
              depthTest={false}
              depthWrite={false}
            />
          </sprite>
        )}

        <mesh position={[iconOffset[0], iconUrl ? iconOffset[1] - 0.33 : 0, iconOffset[2]]}>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color={hovered || isSelected ? '#00ff88' : '#10b981'}
            emissive={hovered || isSelected ? '#00ff88' : '#059669'}
            emissiveIntensity={hovered || isSelected ? 1.5 : 0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Small floating HUD tag on hover */}
        {hovered && title && (
          <Html position={[iconOffset[0], iconOffset[1] + 0.55, iconOffset[2]]} center distanceFactor={25}>
            <div className="whitespace-nowrap rounded border border-accent-neon bg-dark-bg/95 px-2.5 py-1 text-xs font-semibold text-accent-neon shadow-lg backdrop-blur">
              {title}
            </div>
          </Html>
        )}
      </group>
    </group>
  );
}
