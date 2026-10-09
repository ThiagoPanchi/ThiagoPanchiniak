## 1. Archipelago Layout

- [x] 1.1 Update the world-level group positions for Portfolio, About Me, Resume/Curriculum, and Contact to match the sketch composition and verify the overview places Portfolio northwest, About southwest, Resume east, and Contact near the lower center without obvious overlap.
- [x] 1.2 Update `src/data/islandsConfig.js` island centers to match the revised group positions and verify navigation targets still select the correct island sections.
- [x] 1.3 Recalibrate the overview camera in `src/data/islandsConfig.js` and verify all four islands fit in the visible map area beside the desktop sidebar.

## 2. Island Silhouettes And Internal Zones

- [x] 2.1 Redraw the Portfolio island coastline and internal zone positions so airport, forest, port, residential area, and rocket station match the sketch placement, then verify all five project POIs remain clickable and visually aligned with their zones.
- [x] 2.2 Redraw or retune the About Me island silhouette and internal positions so city, mountain, and forest match the sketch placement, then verify the main About POIs and `aboutCity` entry remain clickable.
- [x] 2.3 Redraw or retune the Resume/Curriculum island silhouette and internal positions so city, forest, farm, and factory match the sketch placement, then verify the four experience POIs remain clickable and keep their existing labels/content.
- [x] 2.4 Retune the Contact island placement and compact silhouette so the farol remains centered on a separate small island, then verify the contact POI remains clickable and opens the existing modal.

## 3. POI And Camera Synchronization

- [x] 3.1 Synchronize every changed local POI coordinate with the corresponding world coordinate in `src/data/islandsConfig.js` and verify labels/icons render over the intended zones.
- [x] 3.2 Update per-island camera positions and targets for Portfolio, About, Resume, Contact, and `aboutCity` and verify each section zoom frames the selected island without sidebar clipping on desktop.
- [x] 3.3 Verify the `aboutCity` zoom still reveals all five district POIs inside the initial frame after the About island and city move.

## 4. Verification

- [x] 4.1 Run `npm run build` and verify the production build completes successfully.
- [x] 4.2 Run `openspec validate "align-archipelago-to-sketch" --strict` and verify the change remains valid.
- [x] 4.3 Manually verify desktop overview, island section navigation, POI hover labels, icon visibility, modal opening/closing, and sketch-like composition after the layout update.
- [x] 4.4 Manually verify mobile/sub-768px navigation, POI tap targets, icon visibility, section framing, and modal opening after the wider archipelago layout update.
