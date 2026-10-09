## Why

The `Quem sou eu` marker on the About island is visually offset from its intended forest area, and the MapGenPlus area on the Portfolio island should read as a mountain rather than a port. This small visual adjustment improves spatial clarity without changing navigation or modal content.

## What Changes

- Move the `Quem sou eu` icon/POI on the About island slightly west so it aligns better with the forest area.
- Replace the visible `MapGenPlus` port/bay model on the Portfolio island with a mountain-themed visual area.
- Preserve the existing `forest` and `proj1` POI ids, labels, icons, hover behavior, click targets, and modal content.
- Keep the existing island positions, cameras, and overall archipelago layout unchanged unless minor POI/config synchronization is required.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `portfolio-ui`: Updates observable POI/icon placement for `Quem sou eu` and changes the visible Portfolio `MapGenPlus` themed area from a port to a mountain while preserving existing modal behavior.

## Impact

- Affected source likely includes `src/components/3d/IslandAbout.jsx`, `src/components/3d/IslandPortfolio.jsx`, and `src/data/islandsConfig.js`.
- No API, dependency, content, localization, or modal data changes are expected.
- Visual verification is required to confirm the About marker alignment and the new MapGenPlus mountain appearance.
