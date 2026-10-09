## Why

The sidebar currently shows a `TP` initials fallback where the profile photo should appear, and the sidebar skill tags are overly granular for a compact recruiter-facing summary. Replacing the fallback with the full provided portrait and simplifying the visible tags makes the personal presentation more recognizable, readable, and aligned with the portfolio identity.

## What Changes

- Use the provided portrait image as the visible profile image in the sidebar profile area.
- Size the profile-image area responsively so the full photo is visible without cropping or distortion, allowing a slightly narrower image area and taller frame when needed to preserve the portrait proportion.
- Keep the image accessible with appropriate alternate text and ensure it remains visually contained within the rounded frame.
- Generalize the sidebar skill tags into at most two visible lines using recruiter-oriented themes around GIS development, data engineering, web development, and AI.
- Preserve responsive sidebar behavior on desktop and mobile.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `portfolio-ui`: Updates the sidebar presentation requirement so the profile area displays the full provided portrait without cropping and the sidebar tags use a concise recruiter-oriented grouping.

## Impact

- UI code: `src/components/ui/Sidebar.jsx`.
- Content/data: sidebar profile tag translations/content in `src/data/content.pt.json` and `src/data/content.en.json`.
- Assets: use the provided portrait from a stable public asset path under `public/assets/`.
- Specs: update the existing `portfolio-ui` capability to require a real full-photo profile image and concise recruiter-oriented sidebar tags.
- No new dependencies expected.
