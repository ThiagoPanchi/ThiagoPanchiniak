## Context

See `proposal.md` for motivation. The current implementation already expanded Stack City, but `IslandAbout.jsx` still places the city and its district POIs within a bounded footprint and `islandsConfig.js` uses an `aboutCity` camera preset that can be too close for the full set of district buttons. The current target is centered near the city and the camera is at moderate height/distance, which may not include all POIs in the initial zoom frame on all viewports.

## Goals / Non-Goals

**Goals:**
- Make the About island's full base substantially larger, up to roughly 3x the current perceived footprint if needed, so Stack City can expand without crowding forest or mountain landmarks.
- Restore the previous About island base/terrain color palette and separate the island from the sea by making the ocean/space between islands lighter or more blue.
- Reshape the About island into a bean-like organic silhouette instead of a circular footprint.
- Redistribute About island regions so forest occupies about 25% in one corner, mountain about 25% near the center, and Stack City about 50%.
- Increase the Stack City footprint and spread district POIs farther apart while keeping all five visible in the initial `aboutCity` frame.
- Tune `aboutCity` to a higher/farther camera position and centered target that frames the entire enlarged city, not just its central buildings.
- Preserve the current two-step interaction model: one city-entry POI before zoom, five district POIs after zoom.

**Non-Goals:**
- Adding or removing stack districts.
- Changing modal text, translations, contacts, portfolio data, or sidebar content.
- Replacing the camera/orbit system or adding dependencies/assets.
- Reworking other islands.

## Decisions

### 1. Expand The Full About Island Base

- **Decision**: Increase the full About island base substantially, while preserving the organic/disformed contour and then repositioning or spacing landmarks as needed to keep forest, mountain, and city readable.
- **Rationale**: The city grew, but the island base still reads too small; enlarging the full base gives all regions more breathing room and makes the island feel intentionally scaled.
- **Alternative considered**: Continue expanding only the current city-side lobe. Rejected because it leaves the overall island base feeling undersized relative to the enlarged city.

### 2. Restore Island Palette And Lighten Ocean

- **Decision**: Restore the About island base/terrain palette to the previous darker colors and instead adjust the ocean/space between islands toward a lighter or bluer tone.
- **Rationale**: The desired contrast should make islands stand out without changing their terrain identity.
- **Alternative considered**: Keep the newly lightened terrain palette. Rejected because the user prefers the previous island colors and wants contrast from the surrounding water.

### 3. Use A Bean-Shaped About Island Silhouette

- **Decision**: Shape the About island footprint as an elongated, organic, bean-like silhouette with asymmetric lobes instead of a circular or near-circular footprint.
- **Rationale**: The current expanded base reads too circular; a bean shape makes the island feel more natural and gives a clearer direction for region layout.
- **Alternative considered**: Only add small edge irregularities. Rejected because minor noise would not fix the circular overall read.

### 4. Use A 25/25/50 Region Distribution

- **Decision**: Allocate roughly 25% of About island area to forest in one corner, 25% to mountain near the center, and 50% to Stack City.
- **Rationale**: The city is the main interaction focus, but forest and mountain should remain distinct landmarks.
- **Alternative considered**: Evenly distribute all three regions. Rejected because the requested composition gives the city more space for stack interactions.

### 5. Treat Button Visibility as the Primary Acceptance Criterion

- **Decision**: Tune district spacing and camera framing around the requirement that all five district POIs are visible immediately after the `aboutCity` transition.
- **Rationale**: The reported problem is not only city size but discoverability/selectability of the stack buttons.
- **Alternative considered**: Only enlarge the city meshes. Rejected because a larger city without camera/POI retuning can still leave buttons outside the viewport.

### 6. Pull Back and Raise the `aboutCity` Camera

- **Decision**: Set the `aboutCity` camera farther and higher than the current preset, targeting the center of the full district spread rather than only the city core.
- **Rationale**: A wider initial frame keeps the zoom meaningful while preventing edge POIs from being clipped.
- **Alternative considered**: Reduce district spacing to fit the existing camera. Rejected because the user specifically wants the island/city larger and the stack areas more visible.

## Risks / Trade-offs

- **[Zoom feels less close]** -> Keep the camera focused on Stack City while pulling back only enough to include all five buttons.
- **[Bean silhouette affects camera framing]** -> Retune the About camera only as needed so the full bean-shaped island remains readable.
- **[Ocean gets too bright]** -> Use a lighter/bluer water tone that improves island contrast without overpowering terrain and POIs.
- **[City dominance crowds landmarks]** -> Keep the requested 50% city allocation while anchoring forest in a corner and mountain near the center.
- **[Mobile view still clips edge POIs]** -> Validate with the existing responsive/mobile canvas assumptions and adjust camera height/distance if necessary.
- **[More city geometry affects performance]** -> Prefer scaling/spacing existing primitive groups over adding many new meshes.

## Migration Plan

- No migration is required.
- Rollback is limited to the About island city layout and `aboutCity` camera/POI coordinate changes.
