## 1. About Island And Stack City Layout

- [x] 1.1 Expand the About island city-side terrain/lobe in `IslandAbout.jsx` and verify the About island still shows distinct forest, mountain, and city regions from the normal About view.
- [x] 1.2 Increase the Stack City footprint and building distribution in `IslandAbout.jsx` and verify the city reads as larger, with visible streets, gray ground, dark gray buildings, and light/white windows.
- [x] 1.3 Spread the five Stack City district positions across the enlarged city and verify their visual anchors do not overlap excessively.
- [x] 1.4 Enlarge the full About island base up to roughly 3x perceived footprint and verify forest, mountain, and city still fit clearly.
- [x] 1.5 Lighten island/base colors and verify the island is visually distinct from the sea on normal About and city zoom views.
- [x] 1.6 Restore the previous About island base/terrain color palette and verify the island itself no longer uses the newer lighter terrain colors.
- [x] 1.7 Lighten or blue-shift the ocean/space between islands and verify islands stand out through water contrast.
- [x] 1.8 Reshape the About island base into a bean-like silhouette and verify it no longer reads as circular.
- [x] 1.9 Redistribute About island areas so forest occupies about 25% in one corner, mountain about 25% near the center, and Stack City about 50%, then verify all regions remain readable.

## 2. POI And Camera Framing

- [x] 2.1 Update the Stack City district POI coordinates in `islandsConfig.js` to match the enlarged district layout and verify each POI still opens the correct stack modal.
- [x] 2.2 Retune the `aboutCity` camera preset in `islandsConfig.js` to a higher/farther centered frame and verify all five stack buttons are visible immediately after the zoom transition without manual orbit, pan, or zoom.
- [x] 2.3 Verify the pre-zoom flow still shows only the "Stacks & Tecnologias" entry POI before entering city zoom.

## 3. Validation

- [x] 3.1 Run the project build or available test command and verify it completes without errors.
- [x] 3.2 Manually validate the About island city zoom on desktop and a mobile-sized viewport, verifying none of the five stack buttons are clipped by the screen edges.
