## 1. Sidebar Layout

- [x] 1.1 Update `src/components/ui/Sidebar.jsx` so the desktop sidebar occupies approximately 35% of the viewport while preserving mobile drawer behavior, and verify in desktop and sub-768px viewport sizes that content remains scrollable and the drawer opens/closes.
- [x] 1.2 Adjust island zoom/camera framing so each selected island remains fully visible in the remaining map area beside the enlarged desktop sidebar, and verify About, Resume, Portfolio, Contact, and Stack city views are not cut off by the sidebar.
- [x] 1.3 Adjust the `overview` camera framing so all islands are visible in full in `Visão Geral`, especially the Ilha Sobre Mim, and verify no island is cropped by the viewport edges.
- [x] 1.4 Refine the `overview` camera by moving the framing farther west/left and slightly farther away so Ilha Sobre Mim is not below the enlarged sidebar, and verify all islands remain visible in `Visão Geral`.

## 2. POI Icon Rendering

- [x] 2.1 Extend `src/components/3d/InteractivePoi.jsx` to accept an optional icon asset URL and render it as part of the clickable/hoverable POI marker, and verify POIs without icons still render and remain clickable.
- [x] 2.2 Add or centralize the requested POI-to-icon filename mapping using existing files under `public/assets/png`, and verify every mapped filename exists: `001-Quem-sou-eu.png`, `002-formacao.png`, `003-stack.png`, `004-gis.png`, `005-backend.png`, `006-IA-ML.png`, `007-ETL.png`, `008-Futuro.png`, `009-ai-assistant.png`, `010-experience.png`, `011-docencia.png`, `012-atual.png`, `013-projetos-proprios.png`, `014-GeoBrasil.png`, `015-github.png`, `16-Mapgen.png`, and `17-Circula.png`.

## 3. About And Stack POIs

- [x] 3.1 Update `src/components/3d/IslandAbout.jsx`, `src/data/islandsConfig.js`, and translation content so `forest` displays `Quem sou eu`, `mountain` displays `Formação`, and `village` displays `Stacks & Tecnologias`, each with the requested icon, and verify hover labels and modals use the new visible names.
- [x] 3.1.1 Fix the remaining `Quem sou eu` marker issue so `001-Quem-sou-eu.png` is visibly rendered in the Ilha Sobre Mim scene, and verify the marker remains clickable and opens the expected modal.
- [x] 3.1.2 Replace or revise the `Quem sou eu` icon render path so the actual `001-Quem-sou-eu.png` image is visible instead of only the previous point marker, and verify the marker remains clickable and opens the expected modal.
- [x] 3.2 Update Stack city district labels/icons to `Geotecnologia GIS`, `Backend e Bancos`, `IA ML`, `Cloud ETL`, and `Tecnologias Futuras`, and verify clicking each district in city zoom opens the expected modal.

## 4. Resume POIs

- [x] 4.1 Update `src/components/3d/IslandResume.jsx` and related config labels so the four resume POIs display icons `012`, `010`, `011`, and `013` for current experience, previous experiences, teaching, and personal projects respectively, and verify each POI still opens its existing modal content.

## 5. Portfolio POIs

- [x] 5.1 Update `src/components/3d/IslandPortfolio.jsx`, `src/data/islandsConfig.js`, and both translation files so the visible portfolio areas are `MapGenPlus`, `LLM Local Llama`, `GeoBrasil`, `Projetos Github`, and `Circula`, and verify `GeoBrasil Censo 2022` is no longer shown as the visible title.
- [x] 5.2 Consolidate `Pipeline ETL Azure`, `API de Drones`, and `Inteligência de Mercado` into the single `Projetos Github` modal/content area in Portuguese and English, and verify the modal represents all three former areas after clicking the consolidated POI.
- [x] 5.3 Attach portfolio icons `009`, `014`, `015`, `16`, and `17` to their corresponding visible areas, and verify all five portfolio POIs render with icons and remain clickable.

## 6. Contact POI

- [x] 6.1 Attach icon `018-contato.png` to the contact/farol POI and verify the marker remains clickable and opens the expected contact modal.

## 7. Verification

- [x] 7.1 Run `npm run build` and verify the production build completes successfully.
- [x] 7.2 Manually verify desktop behavior for sidebar width, all-island visibility in `Visão Geral`, Ilha Sobre Mim visibility outside the sidebar-covered area, full-island visibility after zoom, `Quem sou eu` icon visibility, contact icon visibility, POI icon visibility, hover labels, city zoom, modal opening/closing, and consolidated portfolio grouping.
- [x] 7.3 Manually verify mobile behavior below 768px for sidebar drawer accessibility and that the added icons do not block touch/click interaction with the 3D scene.
