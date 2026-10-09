## Context

The portfolio content is localized in `src/data/content.pt.json` and `src/data/content.en.json`. Each portfolio project entry can provide `github` and `demo` URLs, and `src/components/ui/ModalDetail.jsx` already renders those as the source-code and live-demo buttons when present.

## Goals / Non-Goals

**Goals:**

- Set the GeoBrasil `demo` URL to `https://thiagopanchi.github.io/GeoBrasil/` in both locales.
- Set the Circula `demo` URL to `https://thiagopanchi.github.io/Mock-Circula/` in both locales.
- Preserve existing modal rendering, labels, icons, project ids, and source-code links.

**Non-Goals:**

- Change 3D island layout, POI positions, icons, or project ordering.
- Add new modal button types or alter the modal component styling.
- Validate the external pages' content beyond ensuring the configured URLs are present in the built app data.

## Decisions

- Update only the localized content JSON `demo` fields for `proj3` and `proj7`.
  - Rationale: the modal already reads `poiData.demo`, so changing the data is the smallest correct implementation.
  - Alternative considered: add project-specific link logic in `ModalDetail.jsx`; rejected because it would duplicate data mapping and make localization/content harder to maintain.
- Keep the existing `github` fields unchanged.
  - Rationale: the user requested adding the GitHub Pages links, which map to live-demo buttons, not replacing source-code behavior.
  - Alternative considered: update both `github` and `demo`; rejected because it would remove the current source-code/profile behavior without an explicit request.

## Risks / Trade-offs

- A locale may be updated without the other, causing different behavior after language switching.
  - Mitigation: implementation tasks explicitly update and verify both `content.pt.json` and `content.en.json`.
- The live-demo button label remains generic while the target URL changes.
  - Mitigation: keep existing UI text and behavior; only the requested target URLs change.
