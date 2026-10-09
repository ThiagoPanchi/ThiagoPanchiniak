import React from 'react';
import InteractivePoi from './InteractivePoi';
import { POI_ICONS } from '../../data/poiIcons';

const treeData = [
  [-1.8, 0, -0.4, 1.2, '#047857'], [-1.1, 0, 0.6, 0.9, '#059669'], [-2.7, 0, 0.5, 0.8, '#065f46'],
  [-0.2, 0, -0.7, 1.1, '#10b981'], [0.5, 0, 0.4, 0.75, '#047857'], [1.2, 0, -0.2, 0.95, '#064e3b'],
  [-0.9, 0, 1.3, 0.7, '#059669'], [-2.2, 0, -1.1, 0.85, '#10b981'], [0.9, 0, 1.2, 0.65, '#065f46'],
  [-3.1, 0, -0.3, 0.7, '#047857'], [-1.6, 0, 1.8, 0.6, '#10b981'], [0.1, 0, 1.7, 0.72, '#059669']
];

function IrregularBase() {
  const shelves = [
    [1.4, 0.15, 0.1, 17.8, 0.72, 0.56, '#0f2427', 13, 0.08],
    [-6.2, 0.2, 3.0, 8.6, 0.58, 0.66, '#102c2e', 9, 0.52],
    [7.6, 0.18, -0.9, 11.7, 0.58, 0.58, '#102c2e', 9, -0.18],
    [2.6, 0.72, 0.25, 14.4, 0.76, 0.5, '#163832', 11, 0.22],
    [-1.9, 1.28, -2.35, 7.4, 0.7, 0.48, '#1d453b', 8, -0.42],
    [7.4, 1.42, 2.6, 9.8, 0.66, 0.62, '#214d41', 8, 0.46]
  ];

  return (
    <group>
      {shelves.map(([x, y, z, radius, height, zScale, color, segments, rot], index) => (
        <mesh key={index} position={[x, y, z]} rotation={[0, rot, 0]} scale={[1, 1, zScale]}>
          <cylinderGeometry args={[radius * 0.86, radius, height, segments]} />
          <meshStandardMaterial color={color} roughness={0.65} flatShading />
        </mesh>
      ))}
      {[-11.8, -8.6, -5.2, -1.3, 2.4, 5.9, 9.1, 12.6].map((x, index) => (
        <mesh key={x} position={[x, 1.1 + (index % 2) * 0.25, index % 2 ? 4.95 : -5.35]} rotation={[0.4, index, 0.2]}>
          <dodecahedronGeometry args={[0.55 + (index % 3) * 0.18, 0]} />
          <meshStandardMaterial color="#263d42" roughness={0.85} flatShading />
        </mesh>
      ))}
    </group>
  );
}

function Tree({ scale = 1, color = '#059669' }) {
  return (
    <group scale={scale}>
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.1, 0.17, 0.7, 6]} />
        <meshStandardMaterial color="#3d2817" roughness={0.85} />
      </mesh>
      <mesh position={[0, 1.0, 0]}>
        <coneGeometry args={[0.58, 1.1, 7]} />
        <meshStandardMaterial color={color} roughness={0.45} flatShading />
      </mesh>
      <mesh position={[0, 1.55, 0]}>
        <coneGeometry args={[0.42, 0.85, 7]} />
        <meshStandardMaterial color={color} roughness={0.45} flatShading />
      </mesh>
    </group>
  );
}

const cityBlocks = [
  [-3.45, -2.45, 0.92, 1.0, 0.74, '#1f2937'], [-1.95, -2.35, 0.68, 1.55, 0.64, '#374151'],
  [-0.35, -2.55, 0.82, 1.2, 0.72, '#2d3748'], [1.45, -2.38, 0.64, 1.85, 0.66, '#111827'],
  [3.2, -2.2, 0.86, 1.25, 0.7, '#334155'], [-3.1, -0.55, 0.72, 1.45, 0.78, '#334155'],
  [-1.25, -0.35, 0.86, 2.15, 0.82, '#1f2937'], [0.75, -0.42, 0.78, 1.7, 0.76, '#475569'],
  [2.75, -0.2, 0.72, 1.15, 0.68, '#111827'], [4.15, 0.05, 0.64, 1.7, 0.72, '#1f2937'],
  [-2.7, 1.95, 0.88, 1.35, 0.68, '#374151'], [-0.75, 1.85, 0.68, 1.95, 0.72, '#1f2937'],
  [1.35, 2.05, 0.82, 1.5, 0.7, '#334155'], [3.35, 1.75, 0.76, 1.3, 0.66, '#475569']
];

function Building({ width, height, depth, color }) {
  const rows = Math.max(2, Math.floor(height * 2));

  return (
    <group>
      <mesh position={[0, height / 2, 0]}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color={color} roughness={0.52} />
      </mesh>
      {Array.from({ length: rows }).map((_, row) => (
        <group key={row}>
          <mesh position={[0, 0.35 + row * 0.36, depth / 2 + 0.011]}>
            <boxGeometry args={[width * 0.55, 0.08, 0.025]} />
            <meshStandardMaterial color="#f8fafc" emissive="#e5e7eb" emissiveIntensity={0.15} />
          </mesh>
          <mesh position={[width / 2 + 0.011, 0.35 + row * 0.36, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[depth * 0.48, 0.07, 0.025]} />
            <meshStandardMaterial color="#f8fafc" emissive="#e5e7eb" emissiveIntensity={0.12} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function StackCityModel({ detailed = false }) {
  return (
    <group scale={detailed ? 1.22 : 1.16}>
      <mesh position={[0, 0.04, 0]}>
        <boxGeometry args={[9.8, 0.18, 7.4]} />
        <meshStandardMaterial color="#9ca3af" roughness={0.72} />
      </mesh>
      <mesh position={[0, 0.16, 0]}>
        <boxGeometry args={[9.95, 0.08, 0.32]} />
        <meshStandardMaterial color="#374151" roughness={0.75} />
      </mesh>
      <mesh position={[0, 0.17, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[7.55, 0.08, 0.32]} />
        <meshStandardMaterial color="#374151" roughness={0.75} />
      </mesh>
      <mesh position={[-4.45, 0.18, 0.25]} rotation={[0, 0.25, 0]}>
        <boxGeometry args={[0.2, 0.08, 5.8]} />
        <meshStandardMaterial color="#4b5563" roughness={0.75} />
      </mesh>
      <mesh position={[4.35, 0.18, -0.18]} rotation={[0, -0.22, 0]}>
        <boxGeometry args={[0.2, 0.08, 5.55]} />
        <meshStandardMaterial color="#4b5563" roughness={0.75} />
      </mesh>
      {cityBlocks.map(([x, z, width, height, depth, color], index) => (
        <group key={index} position={[x, 0.18, z]} rotation={[0, (index % 3 - 1) * 0.05, 0]}>
          <Building width={width} height={height} depth={depth} color={color} />
        </group>
      ))}
      <mesh position={[0, 2.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.85, 3.08, 32]} />
        <meshBasicMaterial color="#f8fafc" opacity={detailed ? 0.28 : 0.18} transparent />
      </mesh>
    </group>
  );
}

function CityDistrict({ color = '#10b981', height = 1.2 }) {
  return (
    <group>
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[1.25, 0.14, 0.95]} />
        <meshStandardMaterial color="#9ca3af" roughness={0.7} />
      </mesh>
      <mesh position={[-0.38, height / 2, -0.18]}>
        <boxGeometry args={[0.34, height, 0.34]} />
        <meshStandardMaterial color="#1f2937" roughness={0.55} />
      </mesh>
      <mesh position={[0.1, height * 0.35, 0.15]}>
        <boxGeometry args={[0.44, height * 0.7, 0.38]} />
        <meshStandardMaterial color="#334155" roughness={0.55} />
      </mesh>
      <mesh position={[0.5, height * 0.48, -0.02]}>
        <boxGeometry args={[0.28, height * 0.96, 0.42]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.22} roughness={0.35} />
      </mesh>
      <mesh position={[0.1, height + 0.12, 0]}>
        <boxGeometry args={[0.85, 0.08, 0.06]} />
        <meshStandardMaterial color="#f8fafc" emissive="#e5e7eb" emissiveIntensity={0.16} />
      </mesh>
    </group>
  );
}

export default function IslandAbout({ activeIsland, onSelectPoi, activePoi }) {
  const isCityZoom = activeIsland === 'aboutCity';

  return (
    <group position={[-24, 0, 8]}>
      <IrregularBase />

      <mesh rotation={[-Math.PI / 2, 0, 0.18]} position={[-1.1, 1.83, 0.55]} scale={[1.18, 0.72, 1]}>
        <ringGeometry args={[6.2, 6.55, 44]} />
        <meshBasicMaterial color="#10b981" opacity={0.22} transparent />
      </mesh>

      <InteractivePoi id="forest" title="Quem sou eu" iconUrl={POI_ICONS.forest} iconOffset={[1.6, 0.25, 0]} position={[-8.3, 1.9, 3.6]} onSelect={onSelectPoi} activePoi={activePoi}>
        <group>
          {treeData.map(([x, y, z, scale, color], index) => (
            <group key={index} position={[x, y, z]} rotation={[0, index * 0.6, 0]}>
              <Tree scale={scale} color={color} />
            </group>
          ))}
          {[[-2.4, 0.15, 1.6], [0.8, 0.15, -1.0], [-0.6, 0.15, 2.0]].map((pos, index) => (
            <mesh key={index} position={pos}>
              <dodecahedronGeometry args={[0.28, 0]} />
              <meshStandardMaterial color="#475569" roughness={0.85} flatShading />
            </mesh>
          ))}
        </group>
      </InteractivePoi>

      <InteractivePoi id="mountain" title="Formação" iconUrl={POI_ICONS.mountain} position={[-0.8, 2.0, -1.9]} onSelect={onSelectPoi} activePoi={activePoi}>
        <group>
          {[[0, 1.9, 0, 2.1, 3.8], [-1.7, 1.25, 0.7, 1.4, 2.5], [1.6, 1.35, 0.6, 1.25, 2.7], [-0.7, 1.1, -1.2, 1.1, 2.2], [1.1, 0.95, -1.1, 0.9, 1.9]].map(([x, y, z, r, h], index) => (
            <mesh key={index} position={[x, y, z]} rotation={[0, index * 0.4, 0]}>
              <coneGeometry args={[r, h, 5]} />
              <meshStandardMaterial color={index === 0 ? '#2d3748' : '#1f2937'} roughness={0.76} flatShading />
            </mesh>
          ))}
          {[-1.3, 0.2, 1.4].map((x, index) => (
            <mesh key={x} position={[x, 2.9 - index * 0.35, index ? 0.25 : 0]}>
              <coneGeometry args={[0.45, 0.85, 5]} />
              <meshStandardMaterial color="#00ff88" emissive="#059669" emissiveIntensity={0.22} roughness={0.35} flatShading />
            </mesh>
          ))}
        </group>
      </InteractivePoi>

      <group position={[6.7, 1.82, 1.9]}>
        <StackCityModel detailed={isCityZoom} />
      </group>

      {!isCityZoom && (
        <InteractivePoi id="village" title="Stacks & Tecnologias" iconUrl={POI_ICONS.village} position={[6.7, 2.15, 1.9]} onSelect={onSelectPoi} activePoi={activePoi}>
          <group>
            <mesh position={[0, 0.12, 0]}>
              <cylinderGeometry args={[0.95, 1.1, 0.24, 8]} />
              <meshStandardMaterial color="#374151" roughness={0.55} flatShading />
            </mesh>
            <mesh position={[0, 0.58, 0]}>
              <boxGeometry args={[0.9, 0.62, 0.9]} />
              <meshStandardMaterial color="#111827" emissive="#059669" emissiveIntensity={0.16} roughness={0.5} />
            </mesh>
          </group>
        </InteractivePoi>
      )}

      {isCityZoom && (
        <>
          <InteractivePoi id="districtGeo" title="Geotecnologia GIS" iconUrl={POI_ICONS.districtGeo} position={[2.0, 2.1, -1.2]} onSelect={onSelectPoi} activePoi={activePoi}>
            <CityDistrict color="#10b981" height={1.2} />
          </InteractivePoi>
          <InteractivePoi id="districtBackend" title="Backend e Bancos" iconUrl={POI_ICONS.districtBackend} position={[5.1, 2.1, -2.3]} onSelect={onSelectPoi} activePoi={activePoi}>
            <CityDistrict color="#22c55e" height={1.45} />
          </InteractivePoi>
          <InteractivePoi id="districtCloud" title="Cloud ETL" iconUrl={POI_ICONS.districtCloud} position={[8.3, 2.1, 0.8]} onSelect={onSelectPoi} activePoi={activePoi}>
            <CityDistrict color="#38bdf8" height={1.25} />
          </InteractivePoi>
          <InteractivePoi id="districtAi" title="IA ML" iconUrl={POI_ICONS.districtAi} position={[4.9, 2.1, 4.2]} onSelect={onSelectPoi} activePoi={activePoi}>
            <CityDistrict color="#a78bfa" height={1.6} />
          </InteractivePoi>
          <InteractivePoi id="districtFuture" title="Tecnologias Futuras" iconUrl={POI_ICONS.districtFuture} position={[10.2, 2.1, -1.5]} onSelect={onSelectPoi} activePoi={activePoi}>
            <CityDistrict color="#f59e0b" height={1.1} />
          </InteractivePoi>
        </>
      )}
    </group>
  );
}
