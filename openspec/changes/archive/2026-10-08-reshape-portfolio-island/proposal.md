## Why

The current Portfolio island is compact and uses generic project markers, which makes the five portfolio areas feel visually interchangeable. Reshaping it into a much larger, recognizable sideways-T island with themed project zones will make the Portfolio section easier to understand and more memorable.

## What Changes

- Enlarge the Portfolio island to approximately three times its current visual footprint.
- Reshape the Portfolio island into a sideways `T` composition with an organic, fluid coastline rather than visibly round or disconnected-looking areas.
- Place `MapGenPlus` in a port located on the island edge, rotated farther outward so the docks/port face the ocean rather than the island interior.
- Place `GeoBrasil` in a larger extensive low-rise residential zone inside the island.
- Place `LLM Local Llama` as an airport located on the leg of the sideways `T`.
- Place `Circula` in a forest zone whose visual language is consistent with the forest already used on Ilha Sobre Mim and whose base sits fully inside the island footprint.
- Place `Projetos Github` as a rocket launch station.
- Standardize all themed areas so they feel like coordinated parts of the same island instead of unrelated miniature scenes.
- Preserve existing POI identities, labels, icons, modal content, and click/hover interactions.
- Adjust Portfolio camera/configuration as needed so the larger island remains visible and usable beside the sidebar.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `portfolio-ui`: Updates the visible Portfolio island layout, themed zones, and framing requirements while preserving existing project POI behavior.

## Impact

- 3D UI code: `src/components/3d/IslandPortfolio.jsx`.
- Navigation/camera data: `src/data/islandsConfig.js`.
- Existing POI/icon mappings and modal content should remain compatible; no new dependencies expected.
