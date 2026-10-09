## 1. Portfolio Content Links

- [x] 1.1 Update `src/data/content.pt.json` so `portfolio.pois.proj3.demo` is `https://thiagopanchi.github.io/GeoBrasil/` and `portfolio.pois.proj7.demo` is `https://thiagopanchi.github.io/Mock-Circula/`; verify the GeoBrasil and Circula `github` fields remain unchanged.
- [x] 1.2 Update `src/data/content.en.json` with the same GeoBrasil and Circula `demo` URLs; verify the English project ids, titles, descriptions, and `github` fields remain unchanged.

## 2. Verification

- [x] 2.1 Search the localized content files and verify GeoBrasil and Circula each contain the expected GitHub Pages demo URL in both languages.
- [x] 2.2 Run `npm run build` and verify the Vite build completes successfully after the JSON-only content update.
- [x] 2.3 Run `openspec validate "add-portfolio-project-live-links" --strict` and verify the change remains valid.
- [x] 2.4 Manually verify the Portfolio modals for GeoBrasil and Circula in Portuguese and English: the live-demo button opens the requested GitHub Pages URL and the source-code button behavior is unchanged.
