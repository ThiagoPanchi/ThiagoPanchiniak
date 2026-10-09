import React, { useMemo } from 'react';
import * as THREE from 'three';
import InteractivePoi from './InteractivePoi';
import { POI_ICONS } from '../../data/poiIcons';

const projectPositions = [
  ['proj1', 'MapGenPlus', [-20.5, 2.35, 2.3], '#10b981', MountainZone],
  ['proj2', 'Projetos Github', [19, 2.65, -2.4], '#22c55e', RocketZone],
  ['proj3', 'GeoBrasil', [5.8, 2.35, 3.5], '#38bdf8', ResidentialZone],
  ['proj5', 'LLM Local Llama', [0, 2.65, -22], '#a78bfa', AirportZone],
  ['proj7', 'Circula', [-7.2, 2.35, -9.0], '#ef4444', ForestZone],
];

const treeData = [
  [-2.6, 0, -1.0, 1.2, '#047857'], [-1.8, 0, 0.3, 0.95, '#059669'], [-3.4, 0, 0.35, 0.82, '#065f46'],
  [-0.8, 0, -0.9, 1.1, '#10b981'], [0.1, 0, 0.4, 0.78, '#047857'], [1.0, 0, -0.25, 0.96, '#064e3b'],
  [-1.6, 0, 1.45, 0.75, '#059669'], [-3.0, 0, -1.7, 0.9, '#10b981'], [0.8, 0, 1.25, 0.7, '#065f46'],
  [-4.1, 0, -0.35, 0.72, '#047857'], [-2.3, 0, 2.05, 0.64, '#10b981'], [-0.4, 0, 1.9, 0.74, '#059669'],
];

function PortfolioBase() {
  const coastline = useMemo(() => {
    const worldPoints = [
      [-27, 2.8], [-25, 7.5], [-18, 9.4], [-8, 9.0], [3, 8.7], [13, 8.2],
      [23, 5.8], [27, 1.2], [25, -4.2], [17, -7.4], [10, -8.2],
      [8.2, -15.2], [7.3, -24.8], [3.8, -32.2], [-1.4, -34.0], [-6.0, -31.4],
      [-7.7, -22.5], [-8.7, -14.2], [-13.8, -11.2], [-19.5, -8.1], [-25.5, -4.2],
    ];
    const shape = new THREE.Shape();
    worldPoints.forEach(([x, z], index) => {
      const y = -z;
      if (index === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    });
    shape.closePath();
    return shape;
  }, []);

  const zonePads = [
    [-22, 1.04, 3.8, 4.7, 0.18, '#1d453b', 0.08],
    [5.8, 1.05, 3.5, 8.8, 0.16, '#214d41', -0.05],
    [19, 1.05, -2.4, 4.8, 0.16, '#1d453b', 0.22],
    [-7.2, 1.05, -9.0, 5.6, 0.16, '#214d41', -0.18],
    [0, 1.05, -22, 5.0, 0.16, '#1d453b', 0],
  ];

  const shorelineRocks = [
    [-26, 1.05, 2.2], [-22, 1.05, -5.2], [-16, 1.12, 8.2], [-5, 1.05, 9.0],
    [7, 1.08, 8.4], [19, 1.05, 6.2], [26, 1.08, -1.4], [7, 1.05, -28.5],
    [0, 1.1, -33], [-7.2, 1.05, -26.2], [-14, 1.05, -10.5],
  ];

  return (
    <group>
      <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <extrudeGeometry args={[coastline, { depth: 0.88, bevelEnabled: false }]} />
        <meshStandardMaterial color="#0b1f24" roughness={0.7} flatShading />
      </mesh>

      <mesh position={[0, 1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <shapeGeometry args={[coastline]} />
        <meshStandardMaterial color="#163832" roughness={0.62} flatShading />
      </mesh>

      {zonePads.map(([x, y, z, radius, height, color, rot], index) => (
        <mesh key={index} position={[x, y, z]} rotation={[0, rot, 0]} scale={[1.18, 1, 0.64]}>
          <cylinderGeometry args={[radius * 0.82, radius, height, 9]} />
          <meshStandardMaterial color={color} roughness={0.68} flatShading />
        </mesh>
      ))}

      {shorelineRocks.map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]} rotation={[0.35, index * 0.5, 0.25]}>
          <dodecahedronGeometry args={[0.6 + (index % 3) * 0.12, 0]} />
          <meshStandardMaterial color="#263d42" roughness={0.9} flatShading />
        </mesh>
      ))}
    </group>
  );
}

function MountainZone({ color }) {
  return (
    <group rotation={[0, -0.35, 0]}>
      <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0.1]} scale={[1.25, 0.85, 1]}>
        <ringGeometry args={[2.35, 2.62, 32]} />
        <meshBasicMaterial color="#0f172a" transparent opacity={0.32} />
      </mesh>
      <mesh position={[-0.85, 1.15, 0.15]} rotation={[0, 0.28, 0]}>
        <coneGeometry args={[1.55, 2.8, 5]} />
        <meshStandardMaterial color="#1f2937" roughness={0.74} flatShading />
      </mesh>
      <mesh position={[0.75, 0.95, -0.35]} rotation={[0, -0.22, 0]}>
        <coneGeometry args={[1.25, 2.25, 5]} />
        <meshStandardMaterial color="#334155" roughness={0.72} flatShading />
      </mesh>
      <mesh position={[0.15, 1.65, 0.55]} rotation={[0, 0.1, 0]}>
        <coneGeometry args={[0.95, 2.35, 5]} />
        <meshStandardMaterial color="#475569" roughness={0.68} flatShading />
      </mesh>
      <mesh position={[0.15, 2.95, 0.55]} rotation={[0, 0.1, 0]}>
        <coneGeometry args={[0.36, 0.72, 5]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.28} roughness={0.35} flatShading />
      </mesh>
      <mesh position={[-0.85, 2.58, 0.15]}>
        <coneGeometry args={[0.5, 0.82, 5]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.4} flatShading />
      </mesh>
    </group>
  );
}

function ResidentialZone({ color }) {
  const houses = [
    [-3.1, 0, -1.2], [-2.1, 0, 0.45], [-1.1, 0, -0.65], [-0.1, 0, 1.05],
    [1.0, 0, -0.35], [2.0, 0, 0.8], [3.0, 0, -0.9], [3.8, 0, 0.55],
  ];

  return (
    <group>
      <mesh position={[0.35, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0.02]} scale={[1.7, 1.0, 1]}>
        <ringGeometry args={[2.6, 2.78, 32]} />
        <meshBasicMaterial color="#94a3b8" opacity={0.26} transparent />
      </mesh>
      {houses.map(([x, y, z], index) => (
        <group key={index} position={[x, y, z]} rotation={[0, index * 0.35, 0]}>
          <mesh position={[0, 0.38, 0]}>
            <boxGeometry args={[0.7, 0.52, 0.62]} />
            <meshStandardMaterial color={index % 2 ? '#e2e8f0' : '#cbd5e1'} roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.78, 0]} rotation={[0, Math.PI / 4, 0]}>
            <coneGeometry args={[0.55, 0.42, 4]} />
            <meshStandardMaterial color={color} roughness={0.45} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function AirportZone({ color }) {
  return (
    <group>
      <mesh position={[0, 0.22, 0]} rotation={[0, 0.02, 0]}>
        <boxGeometry args={[1.05, 0.18, 5.8]} />
        <meshStandardMaterial color="#1f2937" roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.34, 0]} rotation={[0, 0.02, 0]}>
        <boxGeometry args={[0.08, 0.04, 4.8]} />
        <meshBasicMaterial color="#e5e7eb" />
      </mesh>
      <mesh position={[1.0, 0.55, 1.5]}>
        <boxGeometry args={[1.15, 0.5, 0.7]} />
        <meshStandardMaterial color="#334155" roughness={0.45} />
      </mesh>
      <mesh position={[-0.85, 0.72, -1.3]} rotation={[0, -0.55, 0]}>
        <coneGeometry args={[0.45, 1.55, 3]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} flatShading />
      </mesh>
    </group>
  );
}

function ForestZone({ color }) {
  return (
    <group>
      <mesh position={[-1.2, 0.06, 0.05]} rotation={[-Math.PI / 2, 0, -0.08]} scale={[1.35, 0.84, 1]}>
        <ringGeometry args={[3.45, 3.72, 32]} />
        <meshBasicMaterial color="#064e3b" opacity={0.18} transparent />
      </mesh>
      {treeData.map(([x, y, z, scale, treeColor], index) => (
        <group key={index} position={[x, y, z]} rotation={[0, index * 0.6, 0]} scale={scale}>
          <mesh position={[0, 0.35, 0]}>
            <cylinderGeometry args={[0.1, 0.17, 0.7, 6]} />
            <meshStandardMaterial color="#3d2817" roughness={0.85} />
          </mesh>
          <mesh position={[0, 1.0, 0]}>
            <coneGeometry args={[0.58, 1.1, 7]} />
            <meshStandardMaterial color={index % 4 === 0 ? color : treeColor} roughness={0.45} flatShading />
          </mesh>
          <mesh position={[0, 1.55, 0]}>
            <coneGeometry args={[0.42, 0.85, 7]} />
            <meshStandardMaterial color={index % 4 === 0 ? color : treeColor} roughness={0.45} flatShading />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function RocketZone({ color }) {
  return (
    <group>
      <mesh position={[0, 0.18, 0]}>
        <cylinderGeometry args={[1.55, 1.85, 0.28, 12]} />
        <meshStandardMaterial color="#111827" roughness={0.55} flatShading />
      </mesh>
      <mesh position={[0, 1.15, 0]}>
        <cylinderGeometry args={[0.32, 0.42, 1.8, 12]} />
        <meshStandardMaterial color="#e5e7eb" metalness={0.25} roughness={0.35} />
      </mesh>
      <mesh position={[0, 2.25, 0]}>
        <coneGeometry args={[0.42, 0.85, 12]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.28} roughness={0.3} />
      </mesh>
      {[0, 1, 2].map((index) => (
        <mesh key={index} position={[Math.cos(index * 2.09) * 0.48, 0.62, Math.sin(index * 2.09) * 0.48]} rotation={[0, index * 2.09, 0]}>
          <boxGeometry args={[0.12, 0.8, 0.45]} />
          <meshStandardMaterial color="#64748b" roughness={0.4} />
        </mesh>
      ))}
      <mesh position={[0, 0.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.95, 2.18, 28]} />
        <meshBasicMaterial color="#f97316" opacity={0.28} transparent />
      </mesh>
    </group>
  );
}

export default function IslandPortfolio({ onSelectPoi, activePoi }) {
  return (
    <group position={[0, 0, -18]}>
      <PortfolioBase />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.08, -5]} scale={[1.3, 0.78, 1]}>
        <ringGeometry args={[18.8, 19.15, 64]} />
        <meshBasicMaterial color="#00ff88" opacity={0.12} transparent />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.18, -20]} scale={[0.45, 1.12, 1]}>
        <ringGeometry args={[10.8, 11.12, 40]} />
        <meshBasicMaterial color="#10b981" opacity={0.16} transparent />
      </mesh>

      {projectPositions.map(([id, title, position, color, Zone]) => (
        <InteractivePoi key={id} id={id} title={title} iconUrl={POI_ICONS[id]} position={position} onSelect={onSelectPoi} activePoi={activePoi}>
          <Zone color={color} />
        </InteractivePoi>
      ))}
    </group>
  );
}
