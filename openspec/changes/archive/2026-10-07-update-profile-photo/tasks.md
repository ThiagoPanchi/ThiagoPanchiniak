## 1. Asset Preparation

- [x] 1.1 Save the provided portrait image to a stable public asset path, such as `public/assets/profile-photo.jpg`, and verify the file loads from the app's public URL path.

## 2. Sidebar Profile Image

- [x] 2.1 Update `src/components/ui/Sidebar.jsx` to replace the `TP` initials fallback with the portrait image element and verify the image has appropriate alternate text.
- [x] 2.2 Update the profile-image frame so the full portrait is visible without cropping or distortion, allowing a slightly narrower frame and taller responsive height while preserving the rounded frame, border/glow styling, and status badge placement; verify the face remains visible and the badge does not significantly cover it.
- [ ] 2.3 Verify the updated profile area remains contained, proportional, fully visible, and undistorted across desktop sidebar widths and mobile drawer widths.

## 3. Sidebar Tags

- [x] 3.1 Update Portuguese sidebar profile tags to a recruiter-oriented set of at most four broad themes, such as `Desenvolvimento GIS`, `Engenharia de Dados`, `Desenvolvimento Web`, and `IA`, and verify the tags fit in at most two visible lines.
- [x] 3.2 Update English sidebar profile tags with equivalent recruiter-oriented themes and verify the tag content stays aligned with Portuguese.

## 4. Verification

- [x] 4.1 Run `npm run build` and verify the production build completes successfully after the uncropped image and tag updates.
- [ ] 4.2 Manually verify desktop and sub-768px mobile sidebar behavior, including full-image visibility, proportional image sizing, scrollability, two-line tag wrapping, profile text layout, status badge placement, and unchanged drawer open/close behavior.
