## Context

See `proposal.md` for motivation. The current Portfolio island is implemented in `src/components/3d/IslandPortfolio.jsx` as stacked cylinder tiers with five generic `ProjectBase` POIs. `src/data/islandsConfig.js` duplicates Portfolio POI positions and camera values for navigation/framing. The current Portfolio spec already requires five visible areas with stable labels/icons and preserved modal behavior.

## Goals / Non-Goals

**Goals:**

- Build a Portfolio island silhouette that reads as a sideways `T`, is roughly three times larger than the current visual footprint, and has a fluid organic coastline rather than visibly round overlapping sections.
- Give each project a distinct themed zone that communicates the project identity before opening a modal while sharing a coherent visual language.
- Preserve existing POI ids (`proj1`, `proj2`, `proj3`, `proj5`, `proj7`), labels, icons, and modal lookup behavior.
- Adjust Portfolio POI positions and camera framing so the larger island remains usable with the existing sidebar.

**Non-Goals:**

- Changing project names, modal content, translations, or links.
- Adding new external assets or dependencies.
- Reworking global camera/navigation architecture beyond the Portfolio island values needed for framing.

## Decisions

1. Keep existing POI ids and data model.

   Rationale: modal selection, icons, and content already depend on ids such as `proj1`, `proj2`, `proj3`, `proj5`, and `proj7`. Preserving ids avoids broad changes outside Portfolio geometry/config.

   Alternative considered: renaming ids to semantic zone names. That would increase risk with little user-visible benefit.

2. Compose the sideways `T` from an organic coastline instead of visibly round land patches.

   Rationale: the project already uses React Three Fiber primitives for islands, but the visible shoreline should read as one integrated landmass. Use custom/shape-based geometry or carefully blended primitives to create fluid coastlines and avoid obvious circular zones.

   Alternative considered: keeping overlapping cylinders. That is quick, but it creates the rounded disconnected look the revision explicitly rejects.

3. Implement themed zones as dedicated small component groups under the existing `InteractivePoi` wrappers.

   Rationale: each project needs a distinctive scene while preserving hover/click/icon behavior. Dedicated zone components keep visuals localized, but they should share material choices, scale, and terrain integration so the island feels coherent.

   Alternative considered: one generic `ProjectBase` with parameterized colors. That is the current approach and does not satisfy the requested port/residential/airport/forest/rocket station identities.

4. Treat “triple size” as visual footprint, not exact mathematical area.

   Rationale: exact area is hard to validate from overlapping 3D primitives, while the observable requirement is that the island feels about three times larger and supports distinct zones.

   Alternative considered: scaling the current island by `3`. That would enlarge generic geometry but would not create the requested sideways-T silhouette or thematic areas.

5. Place the port on an exterior coastline and orient it toward open water.

   Rationale: a port inside the island or away from the coastline reads incorrectly. The MapGenPlus zone should sit on an edge/bay with docks projecting toward ocean space; if it visually points inward, rotate the port/docks roughly 45 degrees farther outward.

   Alternative considered: placing the port marker near a decorative water patch. That could still look like an inland pond and would not satisfy the requested ocean-facing port.

6. Use the About island forest as the reference for Circula's forest language.

   Rationale: the user specifically asked for a forest similar to Ilha Sobre Mim. Matching tree proportions/materials and density keeps the world visually consistent. The forest base must remain fully inside the island footprint; solve this by moving Circula inward or expanding the nearby coastline/base enough to contain it.

   Alternative considered: using a different stylized forest for Circula. That would reduce consistency across islands.

## Risks / Trade-offs

- Organic coastline geometry can be more complex than simple cylinders -> keep the geometry simple enough for maintainability and verify the build/performance remains acceptable.
- Larger island may be clipped by existing Portfolio camera -> update Portfolio camera/target and verify it remains visible beside the sidebar.
- Larger footprint may overlap other islands in overview -> verify overview framing and positions after implementation; adjust only if needed.
- More detailed themed geometry may become visually noisy -> use standardized materials/scales, keep themed details simple, and keep POI icons/labels readable.
- Edge-oriented features can still read as inward-facing if local rotation is off -> verify MapGenPlus docks/projected pier direction against the coastline and rotate outward if needed.
- Forest base can spill outside organic coastline after moving details -> verify Circula's terrain pad/tree cluster is fully over land and adjust either forest position or nearby coastline.
- POI positions in `IslandPortfolio.jsx` and `islandsConfig.js` can diverge -> update both together and verify click/modal behavior.

## Migration Plan

- Replace the current Portfolio base tiers with a larger sideways-T landform using a fluid organic coastline.
- Replace the generic project model with five themed project-zone groups, placing the port on the outer coastline facing ocean space, enlarging the residential zone, and matching the forest to the About island style while keeping the forest base inside the island.
- Update Portfolio POI positions and camera configuration to match the larger layout.
- Run the production build and manually verify Portfolio island shape, themed zones, POI icons, hover labels, clicks/modals, and framing in overview and Portfolio zoom.
