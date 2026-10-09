## Purpose

Defines how the portfolio must behave when built as a static site and served from GitHub Pages or another non-root hosting path.

## Requirements

### Requirement: GitHub Pages static deployment loads reliably
The system SHALL render the portfolio without a blank or all-dark screen when served from a GitHub Pages project URL or any equivalent static hosting path below a domain root.

#### Scenario: Production page remains visible after initial load
- **WHEN** the production build is opened from a GitHub Pages project path
- **THEN** the portfolio remains visible after initial render, including the header, sidebar or drawer entry, 3D scene, HUD, and controls, without transitioning to a persistent all-dark screen.

#### Scenario: Public assets resolve under hosted base path
- **WHEN** the production build requests public assets such as the profile photo, POI PNG icons, or fallback favicon
- **THEN** those assets resolve relative to the configured hosted base path rather than the domain root.

#### Scenario: Missing visual asset does not blank the app
- **WHEN** a non-critical visual asset fails to load in the production deployment
- **THEN** the app keeps its shell and available UI visible instead of leaving the user on a persistent dark screen.

#### Scenario: Local production preview matches deployment behavior
- **WHEN** the app is built and served through the production preview flow
- **THEN** the same static asset paths used for GitHub Pages resolve successfully and the page remains usable.
