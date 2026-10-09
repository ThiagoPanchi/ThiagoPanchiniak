import React from 'react';
import InteractivePoi from './InteractivePoi';
import { POI_ICONS } from '../../data/poiIcons';

function ResumeBase() {
  const tiers = [
    [-7.2, 0.18, 2.8, 8.5, 0.65, 0.52, '#1a202c', 10, 0.72],
    [-2.9, 0.2, 0.4, 10.4, 0.68, 0.5, '#202a38', 11, 0.25],
    [2.7, 0.2, -0.1, 11.2, 0.68, 0.46, '#202a38', 11, -0.2],
    [7.6, 0.18, 2.2, 8.7, 0.65, 0.52, '#1a202c', 10, -0.68],
    [-4.0, 0.82, 1.0, 7.0, 0.72, 0.42, '#242e3d', 9, 0.35],
    [0.9, 0.92, -0.95, 8.2, 0.75, 0.38, '#2d3748', 9, 0.02],
    [5.4, 0.85, 0.75, 6.9, 0.72, 0.42, '#374151', 9, -0.36]
  ];

  return (
    <group>
      {tiers.map(([x, y, z, radius, height, zScale, color, segments, rot], index) => (
        <mesh key={index} position={[x, y, z]} rotation={[0, rot, 0]} scale={[1, 1, zScale]}>
          <cylinderGeometry args={[radius * 0.82, radius, height, segments]} />
          <meshStandardMaterial color={color} roughness={0.72} flatShading />
        </mesh>
      ))}
      <mesh position={[0, 1.62, 2.15]} rotation={[-Math.PI / 2, 0, 0.02]}>
        <ringGeometry args={[3.55, 7.2, 40, 1, 0.25, Math.PI * 1.52]} />
        <meshBasicMaterial color="#0f172a" opacity={0.5} transparent />
      </mesh>
      {[-10.4, -6.8, -2.6, 2.2, 6.8, 10.6].map((x, index) => (
        <mesh key={x} position={[x, 1.85, index < 3 ? 5.3 - index * 1.85 : 0.2 + (index - 3) * 1.7]} rotation={[0.2, index * 0.7, 0.1]}>
          <dodecahedronGeometry args={[0.42 + (index % 2) * 0.16, 0]} />
          <meshStandardMaterial color="#475569" roughness={0.9} flatShading />
        </mesh>
      ))}
    </group>
  );
}

function CareerBase({ color = '#10b981' }) {
  return (
    <group>
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[1.35, 1.6, 0.5, 7]} />
        <meshStandardMaterial color="#1e293b" roughness={0.55} flatShading />
      </mesh>
      <mesh position={[-0.45, 0.8, 0.2]}>
        <boxGeometry args={[0.65, 1.0, 0.65]} />
        <meshStandardMaterial color="#334155" roughness={0.55} />
      </mesh>
      <mesh position={[0.35, 1.05, -0.1]}>
        <cylinderGeometry args={[0.34, 0.42, 1.5, 6]} />
        <meshStandardMaterial color="#475569" roughness={0.5} flatShading />
      </mesh>
      <mesh position={[0, 1.65, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.06, 8, 18]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.55} />
      </mesh>
    </group>
  );
}

function CityRegion() {
  const buildings = [
    [-0.8, 0, 0.1, 0.55, 1.25, 0.55], [0.0, 0, -0.25, 0.7, 1.75, 0.58],
    [0.85, 0, 0.2, 0.52, 1.1, 0.5], [-0.2, 0, 0.62, 0.62, 1.45, 0.48]
  ];

  return (
    <group>
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[2.7, 0.22, 2.0]} />
        <meshStandardMaterial color="#64748b" roughness={0.7} />
      </mesh>
      {buildings.map(([x, y, z, width, height, depth], index) => (
        <group key={index} position={[x, y + 0.24, z]}>
          <mesh position={[0, height / 2, 0]}>
            <boxGeometry args={[width, height, depth]} />
            <meshStandardMaterial color={index % 2 ? '#111827' : '#1f2937'} roughness={0.5} />
          </mesh>
          <mesh position={[0, height * 0.62, depth / 2 + 0.012]}>
            <boxGeometry args={[width * 0.6, 0.08, 0.025]} />
            <meshStandardMaterial color="#f8fafc" emissive="#e5e7eb" emissiveIntensity={0.12} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 2.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.15, 0.06, 8, 20]} />
        <meshStandardMaterial color="#00ff88" emissive="#10b981" emissiveIntensity={0.45} />
      </mesh>
    </group>
  );
}

function Tree({ scale = 1, color = '#059669' }) {
  return (
    <group scale={scale}>
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.08, 0.13, 0.7, 6]} />
        <meshStandardMaterial color="#3d2817" roughness={0.85} />
      </mesh>
      <mesh position={[0, 0.95, 0]}>
        <coneGeometry args={[0.45, 1.05, 7]} />
        <meshStandardMaterial color={color} roughness={0.45} flatShading />
      </mesh>
    </group>
  );
}

function ForestRegion() {
  const trees = [
    [-1.0, 0, -0.4, 1.1, '#047857'], [-0.25, 0, 0.35, 0.95, '#059669'],
    [0.65, 0, -0.25, 1.0, '#065f46'], [1.1, 0, 0.55, 0.78, '#10b981'],
    [-0.75, 0, 0.85, 0.82, '#064e3b'], [0.25, 0, -0.9, 0.74, '#047857']
  ];

  return (
    <group>
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[1.55, 1.8, 0.16, 9]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} flatShading />
      </mesh>
      {trees.map(([x, y, z, scale, color], index) => (
        <group key={index} position={[x, y + 0.16, z]} rotation={[0, index * 0.7, 0]}>
          <Tree scale={scale} color={color} />
        </group>
      ))}
      <mesh position={[0, 1.85, 0]}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.45} flatShading />
      </mesh>
    </group>
  );
}

function FarmRegion() {
  return (
    <group>
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[2.8, 0.16, 1.9]} />
        <meshStandardMaterial color="#14532d" roughness={0.72} />
      </mesh>
      {[-0.75, 0, 0.75].map((x) => (
        <mesh key={x} position={[x, 0.2, -0.45]}>
          <boxGeometry args={[0.12, 0.05, 1.25]} />
          <meshStandardMaterial color="#84cc16" roughness={0.55} />
        </mesh>
      ))}
      <mesh position={[0, 0.65, 0.35]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1.05, 0.85, 1.05]} />
        <meshStandardMaterial color="#7f1d1d" roughness={0.48} />
      </mesh>
      <mesh position={[0, 1.25, 0.35]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[0.9, 0.65, 4]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.42} flatShading />
      </mesh>
    </group>
  );
}

function FactoryRegion() {
  return (
    <group>
      <mesh position={[0, 0.18, 0]}>
        <boxGeometry args={[2.6, 0.35, 1.6]} />
        <meshStandardMaterial color="#1f2937" roughness={0.58} />
      </mesh>
      <mesh position={[-0.55, 0.9, 0]}>
        <boxGeometry args={[1.0, 1.1, 1.35]} />
        <meshStandardMaterial color="#374151" roughness={0.55} />
      </mesh>
      <mesh position={[0.55, 0.75, 0]}>
        <boxGeometry args={[0.95, 0.8, 1.35]} />
        <meshStandardMaterial color="#475569" roughness={0.55} />
      </mesh>
      {[0, 1].map((index) => (
        <mesh key={index} position={[0.95 + index * 0.45, 1.25 + index * 0.15, -0.35]}>
          <cylinderGeometry args={[0.14, 0.18, 1.7 + index * 0.25, 8]} />
          <meshStandardMaterial color="#64748b" roughness={0.5} flatShading />
        </mesh>
      ))}
      <mesh position={[0.05, 1.8, 0.45]}>
        <boxGeometry args={[1.25, 0.18, 0.18]} />
        <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.35} />
      </mesh>
    </group>
  );
}

export default function IslandResume({ onSelectPoi, activePoi }) {
  return (
    <group position={[48, 0, 2]} rotation={[0, -Math.PI / 2, 0]}>
      <ResumeBase />

      <mesh rotation={[-Math.PI / 2, 0, 0.1]} position={[0.5, 1.92, 1.2]} scale={[1.2, 0.58, 1]}>
        <ringGeometry args={[4.8, 5.1, 40, 1, 0.35, Math.PI * 1.55]} />
        <meshBasicMaterial color="#10b981" opacity={0.32} transparent />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, -0.08]} position={[0.2, 1.94, 0.6]} scale={[1.35, 0.55, 1]}>
        <ringGeometry args={[3.5, 3.75, 28, 1, 0.45, Math.PI * 1.35]} />
        <meshBasicMaterial color="#38bdf8" opacity={0.28} transparent />
      </mesh>

      <InteractivePoi id="exp1" title="Atual/Ultima Experiencia" iconUrl={POI_ICONS.exp1} position={[-8.3, 2.1, 4.2]} onSelect={onSelectPoi} activePoi={activePoi}>
        <CityRegion />
      </InteractivePoi>

      <InteractivePoi id="exp2" title="Experiencias Anteriores" iconUrl={POI_ICONS.exp2} position={[-1.9, 2.08, -0.2]} onSelect={onSelectPoi} activePoi={activePoi}>
        <ForestRegion />
      </InteractivePoi>

      <InteractivePoi id="exp3" title="Docência" iconUrl={POI_ICONS.exp3} position={[2.4, 2.0, -1.2]} onSelect={onSelectPoi} activePoi={activePoi}>
        <FarmRegion />
      </InteractivePoi>

      <InteractivePoi id="exp4" title="Projetos Próprios" iconUrl={POI_ICONS.exp4} position={[8.5, 2.12, 3.6]} onSelect={onSelectPoi} activePoi={activePoi}>
        <FactoryRegion />
      </InteractivePoi>
    </group>
  );
}
