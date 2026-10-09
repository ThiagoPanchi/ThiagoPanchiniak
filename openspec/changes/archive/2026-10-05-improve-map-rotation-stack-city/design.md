## Context

See `proposal.md` for motivation. The current camera controller in `CameraRig.jsx` updates target camera position and look-at vectors when `activeIsland` changes, then lerps both camera and OrbitControls target toward those vectors on every frame. That creates smooth transitions, but it also keeps correcting the camera after the user manually rotates the scene.

The About island currently renders the Stack City area in `IslandAbout.jsx` using one `village` POI plus five district POIs (`districtGeo`, `districtBackend`, `districtCloud`, `districtAi`, `districtFuture`) in the same island view. The existing `App.jsx` routes `village` clicks to `aboutCity`, and district clicks keep `activeIsland` as `aboutCity`, but the district POIs are visually present before entering the city zoom.

## Goals / Non-Goals

**Goals:**
- Preserve cinematic camera transitions when navigating via header, overview, city entry, or return controls.
- Stop continuous camera recentering once the transition is effectively complete so manual orbit remains where the user leaves it.
- Make Stack City read clearly as a city from the About island view and especially inside the city zoom.
- Increase the usable About island/city footprint enough to avoid cramped district controls in the city zoom.
- Reveal only one city-entry POI in the About island view, then reveal the five district POIs after entering `aboutCity`.
- Keep the implementation lightweight with existing Three.js/R3F primitives and no new dependencies.

**Non-Goals:**
- Replacing OrbitControls or adding a new camera/navigation library.
- Adding new curriculum content or changing district/project modal copy beyond labels needed for the interaction flow.
- Creating photorealistic city assets, textures, or external 3D models.
- Changing the overall island count, header navigation sections, or sidebar behavior.

## Decisions

### 1. Transition Phase Flag for Camera Guidance

- **Decision**: Change camera control from unconditional per-frame lerp to a transition-guided mode that activates when `activeIsland` changes and deactivates once camera position and controls target are within a small threshold of the destination.
- **Rationale**: This keeps existing cinematic transitions but prevents the map from pulling back after the user rotates it.
- **Alternative considered**: Disable all automatic camera movement. Rejected because the portfolio still needs guided navigation between islands and the city zoom.

### 2. Preserve Polar Safety, Relax Horizontal Recenter

- **Decision**: Keep polar/elevation limits and distance limits to avoid going below the map or losing spatial orientation, while allowing free horizontal orbit after transition completion.
- **Rationale**: The user specifically wants more freedom to rotate, not unrestricted camera movement that can break the scene.
- **Alternative considered**: Remove all OrbitControls constraints. Rejected because it could allow disorienting camera positions and underwater/ground clipping.

### 3. Two-Layer City POI Visibility

- **Decision**: Gate district POI interactivity/visibility by active view: show only the `village`/"Stacks & Tecnologias" entry in the About island view, and show individual district POIs only when `activeIsland === 'aboutCity'`.
- **Rationale**: This matches the requested flow and prevents visual clutter before zooming into the city.
- **Alternative considered**: Keep all district buttons visible but reduce their opacity before zoom. Rejected because the request explicitly asks for only one button before clicking into the city.

### 4. Expand City Visual Language with Procedural Primitives

- **Decision**: Rework Stack City as a larger urban cluster using a light gray base, road strips between blocks, dark gray building primitives, and white/light window elements. District buildings can remain color-accented subtly after zoom, but the base city language should be grayscale.
- **Rationale**: This improves legibility while preserving the existing low-poly style and performance constraints.
- **Alternative considered**: Use texture maps for windows/roads. Rejected to avoid new assets and keep the scene cheap to render.

### 5. Wider City Footprint and Less-Cramped Zoom

- **Decision**: Slightly scale up or expand the About island plateau that hosts Stack City, increase the city footprint, place the five district POIs farther from one another, and tune the `aboutCity` camera to a wider/framed view rather than an overly close zoom.
- **Rationale**: The current zoom can make the district buttons difficult to see or select. More physical separation and a wider camera frame improves readability without changing the two-level interaction model.
- **Alternative considered**: Keep the city geometry size and only shrink POI labels/buttons. Rejected because the underlying spatial problem remains: districts are too close together for clear selection in the zoomed view.

## Risks / Trade-offs

- **[Transition completion threshold feels abrupt]** -> Tune threshold and lerp factor so the transition settles naturally before manual orbit fully takes over.
- **[User rotates during an active transition]** -> Treat manual input as allowed after the target is reached; if early interruption support is implemented, ensure it does not prevent navigation from completing unexpectedly.
- **[More building/window meshes increase draw calls]** -> Use a bounded number of boxes/planes and avoid excessive per-window geometry; prefer grouped simple primitives.
- **[District POIs hidden before zoom could reduce discoverability]** -> Keep the single "Stacks & Tecnologias" entry label clear on hover and keep HUD copy indicating that zoom reveals technologies.
- **[Larger About island/city crowds nearby forest or mountain POIs]** -> Expand primarily toward the existing city side and tune positions so forest and mountain landmarks remain readable.
- **[Wider `aboutCity` camera reduces sense of zoom]** -> Keep the frame focused on the city while pulling back only enough to show all district buttons comfortably.

## Migration Plan

- No data migration is required.
- Rollback is limited to reverting the camera transition gating and About island city rendering changes.
