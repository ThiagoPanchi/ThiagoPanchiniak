## 1. Portfolio Island Landform

- [x] 1.1 Rework `src/components/3d/IslandPortfolio.jsx` so the Portfolio island base reads as a sideways `T` with roughly triple the current visual footprint and a fluid organic coastline, avoiding visibly round or disconnected land areas, and verify the five project areas can fit without overlap.
- [x] 1.2 Add a bay/port area for `MapGenPlus` on the exterior island edge, rotate it roughly 45 degrees farther outward so it faces the ocean rather than the island interior, and verify the `proj1` POI remains clickable and opens the existing MapGenPlus modal.
- [x] 1.3 Add a larger extensive low-rise residential area for `GeoBrasil` inside the island and verify the `proj3` POI remains clickable and opens the existing GeoBrasil modal.
- [x] 1.4 Add an airport area on the leg of the sideways `T` for `LLM Local Llama` and verify the `proj5` POI remains clickable and opens the existing LLM Local Llama modal.
- [x] 1.5 Add a forest area for `Circula` using a visual style consistent with the forest on Ilha Sobre Mim, keep the forest base fully inside the island by moving it inward or expanding the nearby coastline/base, and verify the `proj7` POI remains clickable and opens the existing Circula modal.
- [x] 1.6 Standardize the visual language, material scale, and terrain integration across all themed project areas, including the rocket launch station for `Projetos Github`, and verify the `proj2` POI remains clickable and opens the existing Projetos Github modal.

## 2. Positioning And Framing

- [x] 2.1 Update Portfolio project POI positions in `IslandPortfolio.jsx` and `src/data/islandsConfig.js` so labels/icons align with the revised port and forest positions and verify ids, labels, and icons remain unchanged.
- [x] 2.2 Update Portfolio camera framing in `src/data/islandsConfig.js` so the revised larger organic sideways-T island is fully visible in Portfolio zoom beside the sidebar and verify no major zone is clipped.
- [x] 2.3 Verify the larger Portfolio island still fits acceptably in the overview composition and does not visually collide with neighboring islands.

## 3. Verification

- [x] 3.1 Run `npm run build` and verify the production build completes successfully after the port orientation and forest containment revisions.
- [x] 3.2 Manually verify the Portfolio island shape, fluid coastline, approximate triple-size footprint, themed zone standardization, outward-facing port placement, contained forest base, larger residential zone, forest style consistency, POI hover labels, icon visibility, modal opening/closing, Portfolio zoom framing, and overview framing on desktop.
- [x] 3.3 Manually verify mobile/sub-768px behavior for Portfolio navigation, POI tap targets, icon visibility, and modal opening after the larger island update.
