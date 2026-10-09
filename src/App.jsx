import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Header from './components/ui/Header';
import Sidebar from './components/ui/Sidebar';
import MapHud from './components/ui/MapHud';
import CompassOverlay from './components/ui/CompassOverlay';
import ModalDetail from './components/ui/ModalDetail';
import ArchipelagoScene from './components/3d/ArchipelagoScene';
import { ISLANDS_CONFIG } from './data/islandsConfig';

export default function App() {
  const [activeIsland, setActiveIsland] = useState('overview');
  const [selectedPoi, setSelectedPoi] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [compassHeading, setCompassHeading] = useState(0);

  const handleNavigate = (islandId) => {
    setActiveIsland(islandId);
    setSelectedPoi(null);
    setIsSidebarOpen(false);
  };

  const handleSelectPoi = (poiId) => {
    if (poiId === 'village') {
      setActiveIsland('aboutCity');
      setSelectedPoi(null);
      return;
    }

    for (const [key, config] of Object.entries(ISLANDS_CONFIG)) {
      if (config.pois && config.pois[poiId]) {
        setActiveIsland(poiId.startsWith('district') ? 'aboutCity' : key);
        break;
      }
    }
    setSelectedPoi(poiId);
  };

  const handleCloseModal = () => {
    setSelectedPoi(null);
  };

  const handleResetOverview = () => {
    setActiveIsland('overview');
    setSelectedPoi(null);
  };

  const isModalOpen = selectedPoi !== null;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-dark-bg font-sans select-none">
      {/* 2D Top Header */}
      <Header
        activeIsland={activeIsland}
        onNavigate={handleNavigate}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* 2D Left Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main 3D Canvas ("The Fake Map") */}
      <main className="absolute inset-0 h-full w-full">
        <Canvas
          camera={{
            position: ISLANDS_CONFIG.overview.camera.position,
            fov: 45,
            near: 0.1,
            far: 500,
          }}
          dpr={[1, Math.min(window.devicePixelRatio, 2)]}
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
          }}
          className="h-full w-full"
        >
          <Suspense fallback={null}>
            <ArchipelagoScene
              activeIsland={activeIsland}
              activePoi={selectedPoi}
              onSelectPoi={handleSelectPoi}
              isModalOpen={isModalOpen}
              onCompassHeading={setCompassHeading}
            />
          </Suspense>
        </Canvas>
      </main>

      {/* Floating HUD at the bottom */}
      <MapHud
        activeIsland={activeIsland}
        onNavigate={handleNavigate}
        onResetOverview={handleResetOverview}
      />

      <CompassOverlay heading={compassHeading} />

      {/* Contextual Modal for clicked POIs */}
      {isModalOpen && (
        <ModalDetail
          poiId={selectedPoi}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
