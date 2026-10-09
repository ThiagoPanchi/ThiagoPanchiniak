## Why

GeoBrasil and Circula already appear as portfolio projects, but their modal links currently point to the generic GitHub profile. Adding the live GitHub Pages URLs lets visitors open the actual deployed project pages directly from the portfolio.

## What Changes

- Update the GeoBrasil portfolio project demo link to `https://thiagopanchi.github.io/GeoBrasil/`.
- Update the Circula portfolio project demo link to `https://thiagopanchi.github.io/Mock-Circula/`.
- Apply the same link updates in both Portuguese and English content so language switching preserves the correct project URLs.
- Preserve existing project ids, labels, icons, descriptions, modal layout, and GitHub/source-code link behavior.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `portfolio-ui`: Portfolio project detail modals shall expose the correct live demo URLs for GeoBrasil and Circula.

## Impact

- Affected files: `src/data/content.pt.json` and `src/data/content.en.json`.
- Existing modal rendering in `src/components/ui/ModalDetail.jsx` already supports `demo` links and should not require structural changes.
- No dependency, routing, 3D layout, icon, or camera changes are planned.
