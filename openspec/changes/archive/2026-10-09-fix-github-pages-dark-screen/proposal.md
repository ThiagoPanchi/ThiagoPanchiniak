## Why

After publishing the portfolio to GitHub Pages, the page appears briefly and then turns dark, which indicates a production-only runtime or asset-loading failure after the initial HTML/CSS shell renders. The inspected code uses absolute public asset paths such as `/assets/...` for the profile photo and POI textures, which are likely to resolve incorrectly when the app is served from a GitHub Pages project subpath.

## What Changes

- Diagnose the GitHub Pages dark-screen failure using the production build and browser/runtime evidence.
- Make public asset references compatible with GitHub Pages project URLs so images and Three.js textures load under the deployed base path.
- Keep local development and production preview behavior working after the fix.
- Add verification steps that catch missing static assets and runtime blank-screen regressions before deployment.

## Capabilities

### New Capabilities

- `static-site-deployment`: Covers static deployment behavior for the portfolio when served from GitHub Pages or another non-root static path.

### Modified Capabilities

- None.

## Impact

- Likely affected files: `src/data/poiIcons.js`, `src/components/ui/Sidebar.jsx`, and possibly `src/components/3d/InteractivePoi.jsx` if a fallback path needs the same base-path treatment.
- Deployment-related files may be added or adjusted if verification shows GitHub Pages is publishing the wrong folder or missing built assets.
- No visual redesign, content change, dependency change, or 3D island layout change is planned.
