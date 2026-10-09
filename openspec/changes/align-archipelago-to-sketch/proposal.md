## Why

The current archipelago layout has evolved through separate island updates, but it no longer follows a single intentional composition. The supplied sketch defines a clearer map-level arrangement and internal zone placement for the islands, making the portfolio feel more deliberate and easier to read visually.

## What Changes

- Reposition the four main islands to follow the sketch composition: Portfolio in the northwest, About Me in the southwest, Resume/Curriculum on the east, and Contact as a smaller lighthouse island near the lower center.
- Redraw island silhouettes so each island matches the sketch's broad shape language while preserving organic, non-circular coastlines.
- Reposition each island's internal themed areas to match the sketch labels:
  - Portfolio: airport at the upper area, forest on the western interior, port at the southwest coast, residential area across the lower-middle, rocket station on the eastern edge.
  - About Me: city toward the upper area, mountain to the western/lower area, forest toward the southeastern/lower area.
  - Resume/Curriculum: city at the north/northwest, forest through the middle/east, farm in the lower-middle, factory near the southern/lower-left end.
  - Contact: lighthouse/farol centered on a compact island between the southwest and east islands.
- Update island centers, POI positions, and camera targets so navigation, labels, icons, modal triggers, overview framing, section zooms, and mobile behavior remain usable after the new layout.
- Preserve existing POI ids, labels, icons, modal content, and navigation semantics unless positioning requires config synchronization.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `3d-map-navigation`: The archipelago's observable spatial layout, island silhouettes, internal zone placement, POI alignment, and camera framing will change to match the supplied sketch.

## Impact

- Affected source likely includes `src/components/3d/IslandAbout.jsx`, `src/components/3d/IslandResume.jsx`, `src/components/3d/IslandPortfolio.jsx`, `src/components/3d/IslandContact.jsx`, and `src/data/islandsConfig.js`.
- The change should not alter data models, external APIs, dependencies, localization content, or modal payloads.
- Visual verification is required on desktop and mobile because the change affects map composition, camera framing, POI hit targets, and modal accessibility.
