## 1. Failure Diagnosis

- [x] 1.1 Build the app with `npm run build` and inspect `dist/index.html` plus emitted asset references to verify the production build points to existing files.
- [x] 1.2 Search runtime source for root-relative public asset paths such as `/assets/...` and `/favicon.svg`; verify each finding is either base-path-safe or listed for correction.
- [x] 1.3 Reproduce or inspect the deployed GitHub Pages page with browser console/network evidence and verify whether public asset 404s, a JavaScript exception, WebGL failure, or Pages publishing configuration is causing the dark screen.

## 2. Base-Path-Safe Asset URLs

- [x] 2.1 Add or update a small public asset URL helper based on Vite's hosted base path and verify it produces URLs that work for local dev, production preview, and GitHub Pages project paths.
- [x] 2.2 Update POI icon URL generation in `src/data/poiIcons.js` to use the base-path-safe helper and verify all mapped PNG filenames still resolve under `public/assets/png`.
- [x] 2.3 Update the sidebar profile photo URL in `src/components/ui/Sidebar.jsx` to use the same base-path-safe asset handling and verify the profile image remains visible.
- [x] 2.4 Update the fallback asset path in `src/components/3d/InteractivePoi.jsx` if needed and verify a missing or absent icon URL does not request a domain-root favicon on GitHub Pages.

## 3. Deployment Verification

- [x] 3.1 Run `npm run build` and verify the build completes successfully after the path changes.
- [x] 3.2 Run a production preview (`npm run preview` or equivalent static serving of `dist`) and verify the portfolio remains visible after initial render with no persistent dark screen.
- [x] 3.3 Verify representative public assets load from the production output path: profile photo, at least one POI PNG icon, and favicon fallback if used.
- [x] 3.4 If a GitHub Pages workflow or publishing configuration exists or is added, verify it publishes the production build output rather than source files.
- [x] 3.5 Run `openspec validate "fix-github-pages-dark-screen" --strict` and verify the change remains valid.
