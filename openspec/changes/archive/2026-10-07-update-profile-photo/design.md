## Context

See `proposal.md` for motivation. The current sidebar profile frame in `src/components/ui/Sidebar.jsx` was a compact square avatar card that rendered the `TP` initials fallback instead of an image. The first implementation passes replaced that fallback with `/assets/Foto-Perfil.jpg` and then moved to a responsive full-width cropped frame, but the revised requirement is for the full portrait to remain visible without cropping. The existing `portfolio-ui` spec already requires responsive drawer behavior. Sidebar tags come from profile content data and are currently rendered as a wrapping list in the sidebar.

## Goals / Non-Goals

**Goals:**

- Replace the initials fallback with the provided portrait as a local app asset.
- Show the full profile photo without cropping or distortion while preserving the sidebar's current visual language, status badge, and responsive behavior.
- Replace granular sidebar tags with a concise recruiter-oriented set that fits within two visible lines.
- Keep the image accessible and visually contained without introducing new runtime dependencies.

**Non-Goals:**

- Redesigning the full sidebar, changing sidebar width, or changing the profile bio/title beyond the tag list.
- Adding remote image hosting, image upload flows, or runtime image processing.
- Changing the mobile drawer interaction.

## Decisions

1. Store the provided portrait as a static public asset.

   Rationale: the app already uses static public assets for portfolio resources, and the profile image is a fixed site asset rather than user-uploaded data. A public path keeps the implementation small and avoids bundler import changes.

   Alternative considered: importing the image from `src`. This would work, but adds no meaningful benefit for a single static profile photo in this project.

2. Render the portrait with a semantic image element inside the existing frame.

   Rationale: using an image element provides native alt text support and predictable object-fit behavior. The existing outer frame can keep the border, glow, rounded corners, and status badge.

   Alternative considered: using a CSS background image. That would be visually simple but weaker for accessibility and harder to validate via alt text.

3. Use a responsive contained portrait frame rather than a cropped full-width image.

   Rationale: the revised request prioritizes showing the entire image. The implementation can reduce the image frame width slightly and increase frame height so the portrait keeps its natural proportion while remaining visually prominent.

   Alternative considered: keeping `object-fit: cover` in a full-width frame. That fills the area but crops the portrait, which is the problem being corrected.

4. Preserve image proportions with containment rather than crop.

   Rationale: `object-fit: contain` or equivalent sizing preserves the entire image and avoids distortion. The surrounding frame can still provide rounded corners, border, glow, and background fill where the image does not occupy the full frame.

   Alternative considered: stretching the image to the frame. That would avoid empty frame space but distort the portrait.

5. Reduce visible sidebar tags to four recruiter-oriented themes.

   Rationale: broad market terms improve scanability for recruiters and keep the tag area compact. Suggested Portuguese labels are `Desenvolvimento GIS`, `Engenharia de Dados`, `Desenvolvimento Web`, and `IA`; English equivalents should preserve the same themes.

   Alternative considered: keeping all detailed tags and only reducing font size. That would still create visual noise and likely exceed two lines.

## Risks / Trade-offs

- Showing the full portrait can leave background space inside the frame on wider sidebars -> use a styled frame/background so the contained image still looks intentional.
- A taller portrait frame can reduce vertical space for bio/tags -> allow sidebar scroll and keep the tag list to at most two lines.
- Generalized tag labels can lose detail -> keep the detailed skills in modal/content areas and use the sidebar tags only as recruiter-facing summaries.
- The code was already partially implemented for a cropped responsive frame -> rerun apply so the implementation matches this revised uncropped portrait and tag plan.

## Migration Plan

- Keep the provided portrait at a stable public path.
- Update the sidebar profile frame to render the full portrait with alt text in a responsive contained frame.
- Update Portuguese and English profile tag content to the four generalized themes.
- Run the production build and manually verify desktop and mobile sidebar rendering, image containment, and tag wrapping.
- Rollback is limited to restoring the initials fallback and removing the added asset if needed.
