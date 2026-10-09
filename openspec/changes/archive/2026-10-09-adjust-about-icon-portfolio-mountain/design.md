## Context

The About island renders `Quem sou eu` as the `forest` `InteractivePoi` in `src/components/3d/IslandAbout.jsx`, with a matching global config position in `src/data/islandsConfig.js`. The Portfolio island maps `proj1` / `MapGenPlus` to `PortZone` in `src/components/3d/IslandPortfolio.jsx`, while the POI id, icon, label, and modal data are driven separately and should remain unchanged.

## Goals / Non-Goals

**Goals:**

- Move only the `Quem sou eu` marker/icon slightly west so it visually sits better over the About island forest.
- Replace the visible `MapGenPlus` port/bay model with a mountain-themed model.
- Preserve current island positions, camera framing, labels, icons, POI ids, and modal behavior.

**Non-Goals:**

- No new assets, icons, modals, sections, or content changes.
- No change to the overall archipelago layout or Portfolio island coastline.
- No rename of `MapGenPlus`; only its visible 3D themed area changes.

## Decisions

### Move The About Forest POI, Not The Forest Geometry

The user specifically called out the icon/marker being offset. Move the `forest` `InteractivePoi` position west by a small amount, and update `islandsConfig.js` for the same world coordinate. Avoid moving the tree group unless visual verification shows the icon still does not align.

Alternative considered: move the whole forest model. That changes the island composition more than requested.

### Replace `PortZone` With A Mountain Visual For `proj1`

Keep the `proj1` entry, MapGenPlus label, existing icon URL, color, and modal behavior. Replace the rendered zone component from `PortZone` to a mountain-themed component, or repurpose `PortZone` into a mountain component if it is no longer used. The mountain should fit the existing `proj1` pad and remain clickable through the existing `InteractivePoi` wrapper.

Alternative considered: create a new POI id or icon. That would change user-facing navigation and is outside the requested visual adjustment.

### Keep Camera And Island Layout Stable

The requested changes are local visual refinements. Do not adjust overview/section cameras unless the mountain model clips or hides the POI in the current Portfolio view.

## Risks / Trade-offs

- Moving the About POI too far west could detach it from the visible forest -> use a small offset and verify icon alignment.
- A tall mountain could obscure the POI icon or nearby zones -> keep the mountain height visually readable but not so tall that it blocks markers.
- The spec still references the MapGenPlus icon and modal content -> preserve `proj1` id and existing icon/modal wiring.

## Migration Plan

No migration is required. Implement as a visual component/config update, run the production build and strict OpenSpec validation, then visually verify About and Portfolio on desktop and mobile.
