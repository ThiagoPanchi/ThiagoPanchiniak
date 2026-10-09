import React from 'react';
import WaterPlane from './WaterPlane';
import IslandAbout from './IslandAbout';
import IslandResume from './IslandResume';
import IslandPortfolio from './IslandPortfolio';
import IslandContact from './IslandContact';
import CameraRig from './CameraRig';

export default function ArchipelagoScene({
  activeIsland,
  activePoi,
  onSelectPoi,
  isModalOpen,
  onCompassHeading,
}) {
  return (
    <>
      {/* Dynamic Lighting System */}
      <ambientLight intensity={0.55} color="#c2e7ff" />
      <directionalLight
        position={[40, 60, 30]}
        intensity={1.2}
        color="#ffffff"
        castShadow={false}
      />
      <directionalLight
        position={[-30, 20, -30]}
        intensity={0.4}
        color="#10b981"
      />
      {/* Accent Point Light for the Core Tech Isle */}
      <pointLight position={[0, 10, -18]} intensity={1.5} color="#00ff88" distance={40} />

      {/* Camera Controller */}
      <CameraRig activeIsland={activeIsland} isModalOpen={isModalOpen} onCompassHeading={onCompassHeading} />

      {/* Styled Ocean Surface */}
      <WaterPlane />

      {/* Archipelago Islands */}
      <IslandAbout activeIsland={activeIsland} onSelectPoi={onSelectPoi} activePoi={activePoi} />
      <IslandResume onSelectPoi={onSelectPoi} activePoi={activePoi} />
      <IslandPortfolio onSelectPoi={onSelectPoi} activePoi={activePoi} />
      <IslandContact onSelectPoi={onSelectPoi} activePoi={activePoi} />
    </>
  );
}
