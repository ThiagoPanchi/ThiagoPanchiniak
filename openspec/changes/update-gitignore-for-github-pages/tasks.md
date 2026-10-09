## 1. Git Ignore Rules

- [x] 1.1 Replace the minimal `.gitignore` with organized sections for dependencies, Vite build output, caches, logs, local environment files, coverage, OS metadata, and editor files; verify `.gitignore` still keeps `package-lock.json`, source files, `public/` assets, and OpenSpec artifacts trackable.
- [x] 1.2 Add `dist/` to ignored generated output and verify GitHub Pages source publication remains based on committed source/config rather than committed build artifacts.
- [x] 1.3 Add `.env*` ignores with an exception for `.env.example` and verify an example environment file would remain trackable if one is added later.

## 2. Verification

- [x] 2.1 Run `git check-ignore` against representative generated/local files such as `dist/index.html`, `node_modules/.vite/cache`, `.env.local`, `npm-debug.log`, `.DS_Store`, and `.vscode/settings.json` and verify they are ignored.
- [x] 2.2 Run `git check-ignore` against representative required files such as `package-lock.json`, `package.json`, `vite.config.js`, `src/App.jsx`, and `public/assets/png/001-Quem-sou-eu.png` and verify they are not ignored.
- [x] 2.3 Run `npm run build` and verify the Vite build still succeeds after the ignore-only change.
- [x] 2.4 Run `openspec validate "update-gitignore-for-github-pages" --strict` and verify the change artifacts remain valid.
