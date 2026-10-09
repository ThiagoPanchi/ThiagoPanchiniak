## Context

See `proposal.md` for motivation. The current app is a Vite/React portfolio with React Three Fiber islands and i18next JSON content. POIs are rendered by `InteractivePoi.jsx` using a generic 3D octahedron beacon and hover label; island components pass hard-coded titles, while modal content comes from `src/data/content.pt.json` and `src/data/content.en.json`. `src/data/islandsConfig.js` also duplicates POI labels/positions for navigation/HUD context. The requested PNG assets already exist in `public/assets/png`.

## Goals / Non-Goals

**Goals:**

- Keep a single explicit mapping from POI ids to icon files where practical, including the contact POI, and feed it into the existing POI rendering flow.
- Preserve current 3D interaction behavior: hover highlight, click selection, modal opening, and city zoom for Stack & Technology.
- Keep Portuguese and English content files structurally aligned after renames and portfolio grouping.
- Make the desktop sidebar width approximately 35% while retaining mobile drawer behavior and scrollability.
- Keep island zoom/focus usable after the sidebar increase by framing selected islands inside the remaining visible map area.

**Non-Goals:**

- Redesigning the full island geometry or camera system.
- Adding new image processing, asset generation, or external dependencies.
- Changing contact, language switching, CV download, or unrelated modal behavior.

## Decisions

1. Use public asset URLs for POI icons.

   Rationale: the files are under `public/assets/png`, so they can be referenced with `/assets/png/<filename>` without bundler imports or dependency changes. This keeps implementation small and avoids importing many image files in multiple island components.

   Alternative considered: importing each PNG from source files. This would provide bundler validation but adds repetitive imports and does not match the current use of public CV assets.

2. Extend `InteractivePoi` with an optional icon prop and ensure visible icon rendering for each POI.

   Rationale: all islands already use `InteractivePoi`, so adding an optional marker there centralizes hover/click behavior and keeps existing 3D child models intact. If the HTML image marker path leaves only the old point visible for a specific POI, use a real 3D/sprite/image marker or another render path that guarantees the PNG is visible while preserving click/hover behavior. The generic octahedron beacon can remain as a fallback when no icon is provided.

   Alternative considered: embedding image planes manually in each island component. That would duplicate interaction and styling logic across About, Resume, and Portfolio.

3. Keep POI identity stable where possible and update labels/content around it.

   Rationale: `App.jsx` relies on POI ids such as `village` and `district*` for navigation and modal selection. Keeping stable ids minimizes behavioral risk while allowing visible labels and content to change.

   Alternative considered: renaming ids to match new labels. That would require broader updates across config, content, modal lookup, and camera selection with little user-visible benefit.

4. Represent `Projetos Github` as a consolidated portfolio POI.

   Rationale: the request asks to unite `Pipeline ETL Azure`, `API de Drone`, and `Inteligencia de Mercado` into one area. The implementation should reduce the rendered portfolio POI list to five visible areas and map the consolidated POI to combined modal content in both languages.

   Alternative considered: keeping three POIs and only changing labels. That would not satisfy the visible grouping requirement.

5. Apply sidebar width with responsive utility classes.

   Rationale: current sidebar uses fixed `w-80` and mobile translate behavior. Replacing the desktop width with an approximate viewport-based width while retaining a bounded mobile/full-width drawer keeps the layout predictable.

   Alternative considered: changing global layout to reserve canvas space beside the sidebar. This would be more invasive and could alter the 3D camera framing unexpectedly.

6. Adjust camera framing for the enlarged desktop sidebar.

   Rationale: with a 35% fixed sidebar, the visual center of the usable map area shifts to the right. Island zoom positions should compensate through camera target/position values or the existing camera rig so the focused island appears fully inside the visible map area, rather than hidden behind the sidebar.

   Alternative considered: reducing the sidebar width during island zoom. That would conflict with the explicit sidebar sizing requirement and create layout shifts while navigating.

## Risks / Trade-offs

- Larger sidebar may cover more of the 3D canvas on desktop -> keep the sidebar fixed/overlay behavior and verify that core controls remain accessible.
- Camera positions tuned before the sidebar expansion may crop islands on desktop -> adjust and verify zoom framing for each navigable island with the enlarged sidebar visible.
- Overview camera framing may crop the far-left Ilha Sobre Mim or leave it below the enlarged sidebar after layout/camera changes -> pull the `overview` camera farther back and shift the framing west/left so all islands are visible at once in the unobstructed map area.
- Public PNG paths are string-based and not compile-time validated -> verify each requested filename exists before implementation and run the production build.
- A POI icon mapping can be correct while a specific marker remains visually absent because of marker placement, asset URL usage, or render layering -> verify `Quem sou eu` specifically renders `001-Quem-sou-eu.png` in the scene instead of only showing the old point marker.
- Consolidating portfolio POIs changes the number of clickable project areas -> update `islandsConfig.js`, `IslandPortfolio.jsx`, and both translation files together to avoid stale labels or unreachable modal content.
- Contact icon support may be missed because contact uses a separate island component -> include `IslandContact.jsx` in the icon mapping/render verification.
- Icon overlays in 3D can become visually crowded -> size icons consistently and keep hover labels concise.

## Migration Plan

- Update UI code and data files in one implementation pass.
- Run `npm run build` to catch syntax/import issues.
- Manually inspect desktop and mobile layouts, especially sidebar width, drawer behavior, all-island visibility in `Visão Geral`, Ilha Sobre Mim visibility outside the sidebar-covered area, full-island visibility after zoom, `Quem sou eu` icon visibility, POI hover/click, Stack city zoom, and consolidated portfolio modal.
- Rollback is limited to reverting the modified UI/data files; no persisted data migration is required.
