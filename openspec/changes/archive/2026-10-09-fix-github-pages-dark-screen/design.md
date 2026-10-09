## Context

The app is a Vite React portfolio with `base: './'` in `vite.config.js`, no `.github` workflow currently present, and public assets under `public/assets/`. `index.html` uses a relative Vite entry path, but runtime code still contains absolute asset URLs: `src/data/poiIcons.js` builds `/assets/png/<file>`, `src/components/ui/Sidebar.jsx` references `/assets/Foto-Perfil.jpg`, and `InteractivePoi.jsx` falls back to `/favicon.svg`. On GitHub Pages project sites, root-relative `/assets/...` points at the user/organization domain root, not the repository/project path, which can cause 404s and failed Three.js texture loads after the initial shell appears.

## Goals / Non-Goals

**Goals:**

- Make all runtime public asset references work from the deployed GitHub Pages base path.
- Preserve local `npm run dev`, `npm run build`, and production preview behavior.
- Verify the deployed-style production build does not fall into a persistent dark-screen state.

**Non-Goals:**

- Redesign the portfolio UI or 3D scene.
- Change project content, POI positions, modal data, or localization copy.
- Add new dependencies unless investigation proves a current dependency causes the production failure.

## Decisions

- Use Vite's base-aware public URL handling for runtime public assets.
  - Rationale: `import.meta.env.BASE_URL` reflects the configured Vite base and avoids hard-coded root paths that break under GitHub Pages project URLs.
  - Alternative considered: keep `base: './'` and manually prefix all asset paths with `.`. Rejected because it is more error-prone and less explicit when deployment base changes.
- Centralize public asset URL construction instead of scattering string concatenation.
  - Rationale: POI icons and UI images need the same path policy; a small helper reduces future regressions.
  - Alternative considered: import every image asset from `src`. Rejected because the existing assets are already in `public/` and the requested fix can be smaller.
- Treat the likely root cause as asset-path-related, but verify with production preview and browser-console/network evidence.
  - Rationale: the observed symptom could also come from WebGL context loss, an uncaught runtime error, or a deployment publishing mismatch, so tasks include evidence gathering before finalizing.
  - Alternative considered: change only paths without diagnosing. Rejected because it may miss a separate GitHub Pages publishing issue.

## Risks / Trade-offs

- If GitHub Pages is configured to publish the wrong folder, asset path fixes alone will not resolve the deployment.
  - Mitigation: verify `dist/index.html` references existing files and include a task to inspect Pages publishing configuration or workflow if available.
- If the dark screen is caused by WebGL/device limits rather than asset 404s, the first fix may be incomplete.
  - Mitigation: include browser console/network verification and production preview checks, then update artifacts before implementing broader fallback behavior if needed.
- `base: './'` can work for static previews, but root-relative runtime asset paths bypass it.
  - Mitigation: leave build config unchanged unless verification shows the GitHub Pages repository path requires an explicit base.
