## Context

See `proposal.md` for motivation. `IslandResume.jsx` currently renders the Resume island as layered irregular cylinders with four POIs: Lifeshub, IPUF/LabTrans/UFSC, Docencia, and Projetos Proprios. `islandsConfig.js` defines their world-space POI positions, labels, and the Resume camera. The requested change modifies the visual metaphor and labels for the Resume island while preserving the existing four experience records and modal content.

## Goals / Non-Goals

**Goals:**
- Make the Resume island visibly larger, roughly 3x perceived size compared to the current island.
- Reshape the island footprint into an organic crescent/meia-lua rather than a compact central island.
- Rotate the full Resume island composition so the crescent concavity faces the other islands.
- Move the Resume island away from the Contact island so approximately three island widths of ocean separate them.
- Place Lifeshub/city on one crescent tip, IPUF/LabTrans/UFSC/forest and Docencia/farm in the middle, and Projetos Proprios/factory on the opposite tip.
- Update POI labels for Lifeshub and IPUF/LabTrans/UFSC while preserving the mapping to the same experience details.
- Retune Resume POI coordinates and camera framing so all four regions are visible and selectable.
- Add a top-right compass overlay that responds to the current user view/camera orientation, with Portfolio as North and Contact as South.

**Non-Goals:**
- Changing modal content, resume text, links, or the number of experience POIs.
- Adding a new island or new navigation section.
- Changing About, Portfolio, or Contact island behavior.
- Adding dependencies or external assets.

## Decisions

### 1. Model The Resume Island As A Wide Crescent

- **Decision**: Build the island footprint from larger overlapping organic base lobes arranged along a curved arc, leaving a visible inner negative space so the silhouette reads as a crescent.
- **Rationale**: A crescent layout directly supports the requested one-tip/middle/other-tip placement of experience regions.
- **Alternative considered**: Uniformly scale the current Resume island. Rejected because it would increase size but still read as a compact island rather than meia lua.

### 2. Use Region-Specific Visual Models

- **Decision**: Keep four POIs but replace/augment their visual anchors so Lifeshub reads as a city, IPUF/LabTrans/UFSC as forest, Docencia as farm, and Projetos Proprios as factory.
- **Rationale**: The user asked for distinct environments, not only renamed labels.
- **Alternative considered**: Rename POIs without changing 3D models. Rejected because the requested layout depends on visual storytelling across the island.

### 3. Keep Experience Identity Stable Behind Updated Labels

- **Decision**: Update only the visible labels for Lifeshub and IPUF/LabTrans/UFSC while keeping POI ids and modal mappings stable.
- **Rationale**: This avoids unnecessary data/model churn and preserves existing content behavior.
- **Alternative considered**: Rename POI ids. Rejected because ids are implementation details and changing them increases risk without changing user-visible behavior.

### 4. Retune Resume Camera Around The Wider Arc

- **Decision**: Adjust the Resume camera and POI positions after the crescent layout so all four environments fit in the normal Resume view.
- **Rationale**: Tripling perceived island size and spreading regions along a crescent can otherwise push end POIs out of frame.
- **Alternative considered**: Keep current camera. Rejected because the current frame was tuned for a smaller compact island.

### 5. Rotate The Resume Island As One Composition

- **Decision**: Rotate the Resume island at the parent/group composition level when possible so the base, visual regions, and POIs preserve their relative crescent layout.
- **Rationale**: The requested change is an orientation change of the whole island, not a redesign of the individual region ordering.
- **Alternative considered**: Reposition each region independently. Rejected because it increases the risk of breaking spacing and POI/model alignment.

### 6. Implement Compass As A UI Overlay

- **Decision**: Add the compass as a lightweight interface overlay in the top-right corner rather than as a 3D world object, while rotating/updating its indicator according to the current camera/view heading.
- **Rationale**: A UI overlay remains visible during camera transitions and manual orbit, and a dynamic heading gives useful orientation instead of a static decoration.
- **Alternative considered**: Place a 3D compass in the world. Rejected because it could leave the viewport, be occluded, or compete with island POIs.

### 7. Move Resume Island As A Complete Layout

- **Decision**: Move the Resume island center, Resume camera target/position, and Resume POI world coordinates together to increase the gap from Contact while preserving the crescent composition.
- **Rationale**: The reported issue is island overlap; shifting the complete layout avoids redesigning region spacing.
- **Alternative considered**: Shrink the Resume island. Rejected because the requested island scale should remain large.

### 8. Calibrate Compass North/South Anchors

- **Decision**: Treat the direction toward the Portfolio island as North and the direction toward the Contact island as South when deriving the compass heading.
- **Rationale**: The user explicitly defined semantic map directions by island, so the compass should reflect those anchors rather than generic world axes alone.
- **Alternative considered**: Use static cardinal letters only. Rejected because it would not respond to user view and would not encode the requested island-based orientation.

## Risks / Trade-offs

- **[Crescent reads too circular]** -> Use asymmetric lobe placement and visible inner gap, not only a ring overlay.
- **[End regions fall outside frame]** -> Tune Resume camera height/distance and POI coordinates together.
- **[Middle forest and farm overlap]** -> Give each middle region a distinct side of the crescent center and distinct visual elements.
- **[Labels no longer match modal titles]** -> Keep ids/content mapping stable and only change the visible tag/label where requested.
- **[Rotation changes framing]** -> Recheck Resume camera and POI positions after rotating the whole composition.
- **[Compass clutters UI]** -> Keep it compact, fixed to the top-right, and visually subordinate to primary controls.
- **[Moving Resume affects overview composition]** -> Move only as far as needed for roughly three-island spacing and retune the Resume camera.
- **[Compass heading mismatch]** -> Calibrate against Portfolio/North and Contact/South anchors and verify during orbit/navigation.

## Migration Plan

- No data migration is required.
- Rollback is limited to `IslandResume.jsx` and Resume entries in `islandsConfig.js`.
