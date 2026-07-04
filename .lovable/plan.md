## Goal
Every jersey card should look like the Cam Crotty screenshot: the photo sits on a **light gray background** inside the square, not the dark vault surface.

## Change
Single file: `src/routes/index.tsx`, `JerseyCard` image container (line ~40).

- Swap the container background from `bg-vault-surface` (dark) to a light neutral gray that matches the Crotty screenshot (e.g. `bg-neutral-200`).
- Keep `object-contain` so no photo gets cropped.
- Keep everything else (aspect-square, rounded corners, hover scale, carousel arrows) unchanged.

## Result
- Crotty: unchanged (his photo already has that light gray backdrop baked in — it will blend).
- Knierim and any edge-to-edge photo: sits centered on the light gray square with matching letterbox padding.
- Every future upload lands on the same light gray card, no per-image processing.

## Out of scope
Detail pages, hero, filter section, data edits.
