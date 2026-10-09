## 1. Resume Island Shape And Scale

- [x] 1.1 Expand the Resume island base to roughly 3x perceived size in `IslandResume.jsx` and verify the island still fits within the Resume camera frame.
- [x] 1.2 Reshape the Resume island base into an organic crescent/meia-lua footprint and verify the silhouette no longer reads as a compact circular island.
- [x] 1.3 Retune the Resume camera in `islandsConfig.js` and verify all four experience regions are visible in the normal Resume view.
- [x] 1.4 Rotate the full Resume island composition so the crescent concavity faces the other islands and verify all existing region spacing is preserved.
- [x] 1.5 Retune Resume camera/POI coordinates if needed after rotation and verify all four regions remain visible.
- [x] 1.6 Move the Resume island farther from Contact island so roughly three island widths of ocean separate them and verify Resume still remains reachable from navigation.
- [x] 1.7 Update Resume camera and POI world coordinates after the island move and verify labels remain aligned with regions.

## 2. Professional Region Models

- [x] 2.1 Replace or augment the Lifeshub visual anchor with a city model at one crescent tip and verify the Lifeshub POI still opens the same experience modal.
- [x] 2.2 Replace or augment the IPUF/LabTrans/UFSC visual anchor with a forest model in the crescent middle and verify the POI still opens the same experience modal.
- [x] 2.3 Replace or augment the Docencia visual anchor with a farm model in the crescent middle and verify the POI still opens the same experience modal.
- [x] 2.4 Replace or augment the Projetos Proprios visual anchor with a factory model at the opposite crescent tip and verify the POI still opens the same experience modal.

## 3. POI Labels And Coordinates

- [x] 3.1 Update Resume POI positions in `IslandResume.jsx` and `islandsConfig.js` to follow the crescent order city, forest, farm, factory and verify each label remains near its visual region.
- [x] 3.2 Update the Lifeshub label/tag to "Atual/Ultima Experiencia" and verify the Lifeshub content mapping is unchanged.
- [x] 3.3 Update the IPUF/LabTrans/UFSC label/tag to "Experiencias Anteriores" and verify the IPUF/LabTrans/UFSC content mapping is unchanged.

## 4. Validation

- [x] 4.1 Run the project build or available test command and verify it completes without errors.
- [x] 4.2 Manually validate the Resume island on desktop and a mobile-sized viewport, verifying all four regions are visible, selectable, and not clipped by the screen edges.

## 5. Compass Overlay

- [x] 5.1 Add a top-right compass overlay and verify it remains visible above the 3D scene.
- [x] 5.2 Verify the compass provides directional context during orbit/navigation without blocking primary controls.
- [x] 5.3 Make the compass orientation respond to current camera/view heading rather than staying static.
- [x] 5.4 Calibrate compass directions so Portfolio island is North and Contact island is South, then verify the compass updates during orbit/navigation.
