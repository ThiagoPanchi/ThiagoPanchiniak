## 1. About Island Marker Alignment

- [x] 1.1 Move the `forest` / `Quem sou eu` `InteractivePoi` position in `src/components/3d/IslandAbout.jsx` slightly west and verify the marker remains clickable with the same label, icon, and modal behavior.
- [x] 1.2 Synchronize the `forest` POI world position in `src/data/islandsConfig.js` with the updated local About position and verify navigation/config labels still point to the intended area.

## 2. Portfolio MapGenPlus Mountain

- [x] 2.1 Replace the `MapGenPlus` visual zone in `src/components/3d/IslandPortfolio.jsx` from a port/bay model to a mountain-themed model and verify `proj1` remains clickable with the existing MapGenPlus label, icon, and modal behavior.
- [x] 2.2 Remove or stop using the old port-only visual elements for `proj1` while preserving Portfolio island coastline, project POI order, and existing camera framing.

## 3. Verification

- [x] 3.1 Run `npm run build` and verify the production build completes successfully.
- [x] 3.2 Run `openspec validate "adjust-about-icon-portfolio-mountain" --strict` and verify the change remains valid.
- [ ] 3.3 Manually verify desktop About and Portfolio views: `Quem sou eu` icon alignment, MapGenPlus mountain appearance, POI hover labels, icon visibility, and modal opening/closing.
- [ ] 3.4 Manually verify mobile/sub-768px About and Portfolio behavior: POI tap targets, icon visibility, section framing, and modal opening.
