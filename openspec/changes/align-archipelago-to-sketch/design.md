## Context

The current archipelago is implemented as four independent island components with world-level group positions, plus `src/data/islandsConfig.js` for navigation centers, camera targets, and POI positions. Portfolio already uses `THREE.Shape` for a coastline, while About, Resume, and Contact still use layered primitive geometry. The sketch changes both world placement and internal area placement, so implementation needs to keep component-local coordinates and global config coordinates synchronized.

## Goals / Non-Goals

**Goals:**

- Use the sketch as the primary visual composition guide for overview placement and internal zone arrangement.
- Keep the existing four-section navigation model: About Me, Resume, Portfolio, Contact, plus the existing `aboutCity` zoom layer.
- Preserve all existing POI ids, icons, labels, modal content, and click behavior.
- Make each island silhouette organic and legible from overview, with enough ocean separation to distinguish the four islands.
- Update cameras so overview and per-island zooms frame the revised map on desktop and mobile.

**Non-Goals:**

- No new island sections, POI ids, modal content, assets, dependencies, or data model changes.
- No redesign of the sidebar, header, language system, or modal UI.
- No requirement to exactly trace every pixel of the hand sketch; the implementation should preserve the composition and relative placements while fitting the existing 3D scene.

## Decisions

### Use A Single World-Space Sketch Layout

Target the sketch as a top-down world-space composition:

```text
                 Portfolio
              [NW large island]


 About Me                         Resume/Curriculo
 [SW island]                      [E tall island]

                       Contact
                    [small island]
```

Proposed initial centers for implementation tuning:

```text
Island      Current center     Proposed starting center
Portfolio   [0, 0, -18]        [-22, 0, -30]
About       [-24, 0, 8]        [-32, 0, 18]
Resume      [48, 0, 2]         [32, 0, 4]
Contact     [12, 0, 22]        [4, 0, 22]
```

These values are starting points, not immutable constants. The implementer should adjust them if camera framing or sidebar clearance requires it.

Alternative considered: keep existing centers and only change island shapes. That would not satisfy the sketch because the user explicitly wants island positions changed.

### Prefer Shape-Based Coastlines Where Practical

Portfolio already uses `THREE.Shape` and should continue using shape points for direct coastline editing. Resume should likely move toward a `THREE.Shape` or a more deliberate multi-tier outline to match the tall eastern island in the sketch. About and Contact can either remain layered primitives if the silhouette reads correctly, or be converted to shape/extrude geometry if primitive overlap looks too circular.

Alternative considered: use only scaled cylinders for all islands. That is faster but makes it harder to match the sketch's asymmetric coastlines and risks returning to round island silhouettes.

### Keep Local Area Coordinates Paired With Global Config Coordinates

Each island component has a parent `<group position={[x, y, z]}>`. POIs inside the component use local coordinates; `islandsConfig.js` stores world coordinates. Whenever an island center or local POI position changes, compute:

```text
config position = island group position + local POI position
```

This is especially important for Portfolio, where recent changes manually synchronized local project positions with global config positions.

### Internal Zone Placement By Island

Portfolio local arrangement should follow the sketch:

```text
          Airport
       Forest       Rocket
    Port     Residential
```

About local arrangement should follow the sketch:

```text
          City

 Mountain
                 Forest
```

Resume local arrangement should follow the sketch:

```text
       City
              Forest

          Farm
     Factory
```

Contact should remain compact with the farol centered.

### Camera Updates Are Part Of The Layout Change

Overview camera should be recalibrated after island centers and footprints are updated. Per-island cameras should target the new centers and keep the selected island visible beside the desktop sidebar. `aboutCity` camera should continue framing the city after the About island and city location change.

## Risks / Trade-offs

- Large island footprints may collide in overview or be clipped by the sidebar -> verify overview and section zooms after center/camera updates, then tune centers before tuning internal POI positions.
- Moving island centers without synchronizing `islandsConfig.js` will break labels, navigation targets, or modal trigger alignment -> update component group positions and config positions in the same task.
- Exact sketch fidelity can conflict with camera readability -> prioritize the observable composition and POI usability over exact outline tracing.
- Converting multiple islands to shape geometry can increase implementation scope -> convert only where primitive geometry cannot achieve the desired silhouette.
- Mobile framing may regress because the map is wider and more asymmetric -> include explicit sub-768px verification for navigation, POI taps, and modal opening.

## Migration Plan

No data migration is required. Implement as a visual/code update, validate with production build and OpenSpec validation, and manually verify desktop and mobile views. Rollback is the normal source-control revert of the touched island components and `islandsConfig.js`.
