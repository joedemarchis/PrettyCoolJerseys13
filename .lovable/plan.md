## Goal
Every jersey photo on the homepage grid should display fully (no cropped sleeves), matching how Cam Crotty currently reads. Standardize this in CSS so it applies to all existing and future uploads — no per-photo processing required.

## Approach
Switch the card image from `object-cover` (which crops edges) to `object-contain` (which fits the whole photo inside the square), and give the container the site's dark vault surface color so any letterbox space blends seamlessly into the card instead of showing as a gray box.

## Changes
Single file: `src/routes/index.tsx`, `JerseyCard` component (around lines 40–47).

1. Image container `<div>`: add `bg-vault-surface` back so padding areas match the site's dark surface.
2. `<img>`: change `object-cover` → `object-contain`. Keep `aspect-square`, keep `width/height={1024}`, keep hover scale.

Result:
- Knierim (edge-to-edge photo) → fits fully inside the square, tiny dark inset on the sides that blends with the card.
- Crotty (already padded) → looks identical to today.
- Any future upload at any aspect ratio → fits without cropping, dark padding matches surface.

## Technical notes
- `bg-vault-surface` is the existing semantic token used elsewhere on the page (hero image, filter section), so no new tokens needed.
- Detail route pages aren't touched — this is the grid-card standard only.
- No image reprocessing, no data changes, no new dependencies.

## Out of scope
- Detail page layout
- Any content/data edits to jersey entries
- Automated image padding pipeline (rejected in favor of pure CSS)