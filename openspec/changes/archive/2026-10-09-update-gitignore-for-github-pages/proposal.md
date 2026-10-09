## Why

The current `.gitignore` only excludes `node_modules`, so local Vite build output, environment files, editor metadata, caches, and logs can be accidentally committed. Tightening the ignore rules keeps the GitHub repository clean while preserving the source files needed for GitHub Pages publication.

## What Changes

- Update `.gitignore` to cover common Node/Vite development artifacts that do not need to be committed.
- Ignore local build output such as `dist/` because GitHub Pages deployment should publish from a build/deploy process rather than tracking generated artifacts in source.
- Ignore local environment files, package-manager debug logs, coverage output, caches, OS metadata, and editor workspace files.
- Preserve source assets, project configuration, lockfiles, and OpenSpec artifacts as tracked repository content.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- None. This is a repository hygiene/tooling change and does not alter application behavior; the change declares `skip_specs: true`.

## Impact

- Affected files: `.gitignore`.
- No runtime UI, API, dependency, or package script changes are planned.
- GitHub Pages readiness depends on keeping committed source and public assets intact while excluding generated/local-only files.
