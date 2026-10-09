## 1. Camera Navigation

- [x] 1.1 Refactor `CameraRig.jsx` so automatic lerp runs only while a navigation transition is active, and verify manual orbit no longer recenters after arriving at Overview, About, Resume, Portfolio, Contact, and `aboutCity`.
- [x] 1.2 Preserve camera safety constraints while allowing free horizontal rotation after transition completion, and verify dragging after transition keeps the user's final orientation without ground/ocean clipping.
- [x] 1.3 Validate navigation edge cases by switching between islands, returning to Overview, entering/exiting `aboutCity`, and verifying each transition still reaches its configured target before manual control takes over.

## 2. Stack City Visual Remodel

- [x] 2.1 Rework the Stack City cluster in `IslandAbout.jsx` to be larger and visually city-like with a light gray ground/base, darker gray buildings, white/light windows, and visible roads between blocks; verify it is recognizable from the About island view.
- [x] 2.2 Keep the city geometry lightweight with procedural primitives and verify production build still succeeds without adding dependencies.
- [x] 2.3 Tune the `aboutCity` camera target/position or city layout if needed so the enlarged city and district POIs are framed clearly in the zoom view.

## 3. Two-Level City Interaction

- [x] 3.1 Gate About island POIs so only the single `village`/"Stacks & Tecnologias" city-entry POI is visible/interactable before zoom, and verify individual district POIs are not exposed in the non-zoom About view.
- [x] 3.2 Reveal the five district POIs only when `activeIsland === 'aboutCity'`, and verify each district remains clickable and opens its existing modal content inside the city zoom.
- [x] 3.3 Verify clicking the city-entry POI transitions to `aboutCity` without opening a modal, while clicking district POIs inside `aboutCity` opens the correct district modal.

## 4. UI and Responsive Controls

- [x] 4.1 Update hover labels/HUD copy as needed so the city-entry action is identified as "Stacks & Tecnologias", and verify the label is clear in Portuguese and English.
- [x] 4.2 Ensure Header keeps About Me active during `aboutCity`, and verify active styling remains correct when entering and leaving the zoom.
- [x] 4.3 Verify the city zoom enter/exit controls remain visible and usable on desktop and mobile widths without covering the primary POIs.

## 5. Validation

- [x] 5.1 Run `npm run build` and verify the production build completes successfully.
- [x] 5.2 Manually verify the acceptance flow: free orbit after transitions, recognizable city in About view, single pre-zoom city entry POI, district POIs only after zoom, and district modals opening correctly.

## 6. City Scale and Zoom Corrections

- [x] 6.1 Increase the usable About island/city area around Stack City and verify the city has more room without visually crowding the forest or mountain POIs.
- [x] 6.2 Enlarge the Stack City footprint and space the five district POIs farther apart, verifying that each stack button is visible and individually selectable in `aboutCity`.
- [x] 6.3 Tune the `aboutCity` camera position/target to a slightly wider framing, verifying all district POIs remain visible after clicking "Stacks & Tecnologias".
- [x] 6.4 Run `npm run build` and verify the production build completes successfully after the scale/zoom corrections.
- [x] 6.5 Manually verify the corrected flow: About island appears larger, Stack City appears larger, city zoom is not too close, and all stack buttons are visible and usable.
