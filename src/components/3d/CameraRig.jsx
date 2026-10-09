import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { ISLANDS_CONFIG } from '../../data/islandsConfig';

const DESKTOP_BREAKPOINT = 768;
const SIDEBAR_WIDTH_RATIO = 0.35;

export default function CameraRig({ activeIsland = 'overview', isModalOpen = false, onCompassHeading }) {
  const { camera, size } = useThree();
  const controlsRef = useRef();
  const isTransitioning = useRef(true);
  const lastCompassHeading = useRef(null);

  // Target vectors for camera position and lookAt target
  const targetCamPos = useRef(new THREE.Vector3(...ISLANDS_CONFIG.overview.camera.position));
  const targetLookAt = useRef(new THREE.Vector3(...ISLANDS_CONFIG.overview.camera.target));

  // Whenever activeIsland changes, update the target vectors
  useEffect(() => {
    const config = ISLANDS_CONFIG[activeIsland] || ISLANDS_CONFIG.overview;
    if (config?.camera) {
      targetCamPos.current.set(...config.camera.position);
      targetLookAt.current.set(...config.camera.target);
      isTransitioning.current = true;
    }
  }, [activeIsland]);

  useEffect(() => {
    const shouldOffsetForSidebar = size.width >= DESKTOP_BREAKPOINT && activeIsland !== 'overview';

    if (shouldOffsetForSidebar && camera.setViewOffset) {
      camera.setViewOffset(
        size.width,
        size.height,
        -size.width * (SIDEBAR_WIDTH_RATIO / 2),
        0,
        size.width,
        size.height
      );
    } else if (camera.clearViewOffset) {
      camera.clearViewOffset();
    }

    camera.updateProjectionMatrix();
  }, [activeIsland, camera, size.height, size.width]);

  useFrame(() => {
    if (!controlsRef.current) return;

    if (isTransitioning.current) {
      const lerpFactor = 0.045;

      camera.position.lerp(targetCamPos.current, lerpFactor);
      controlsRef.current.target.lerp(targetLookAt.current, lerpFactor);

      if (
        camera.position.distanceTo(targetCamPos.current) < 0.08 &&
        controlsRef.current.target.distanceTo(targetLookAt.current) < 0.04
      ) {
        camera.position.copy(targetCamPos.current);
        controlsRef.current.target.copy(targetLookAt.current);
        isTransitioning.current = false;
      }
    }

    controlsRef.current.update();

    if (onCompassHeading) {
      const forward = new THREE.Vector3();
      camera.getWorldDirection(forward);
      forward.y = 0;

      if (forward.lengthSq() > 0.0001) {
        forward.normalize();

        const north = new THREE.Vector3(
          ISLANDS_CONFIG.portfolio.center[0] - ISLANDS_CONFIG.contact.center[0],
          0,
          ISLANDS_CONFIG.portfolio.center[2] - ISLANDS_CONFIG.contact.center[2]
        ).normalize();
        const heading = THREE.MathUtils.radToDeg(
          Math.atan2(
            north.x * forward.z - north.z * forward.x,
            north.x * forward.x + north.z * forward.z
          )
        );

        if (lastCompassHeading.current === null || Math.abs(heading - lastCompassHeading.current) > 0.5) {
          lastCompassHeading.current = heading;
          onCompassHeading(heading);
        }
      }
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={!isModalOpen}
      enableRotate={!isModalOpen}
      minDistance={10}
      maxDistance={90}
      maxPolarAngle={Math.PI / 2 - 0.05} // Never submerge below water plane
      minPolarAngle={0.1}
      dampingFactor={0.06}
      enableDamping={true}
    />
  );
}
