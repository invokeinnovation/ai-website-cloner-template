# WeAreDelta Specification (+ ServiceIconBox)

## Overview
- **Target files:** `WeAreDelta.tsx` (+ inline `ServiceIconBox`) in the page component namespace.
- **Interaction model:** scroll-reveal (fade-up stagger via IntersectionObserver + `.delta-reveal`). Client component for the reveal.

## Section
- Background **#F8F8F8** (light). Vertical padding ~60px top, large bottom.
- Container max-width 1170px, centered, 15px side padding.
- Centered heading block:
  - **H2** "WE ARE DELTA GROUP" — Open Sans 700, 31.28px, lh 37.5, ls 1.564px, uppercase, color ~#333/#1e1e1e, text-align center.
  - **Two paragraphs** (see content) — Open Sans 400, ~15.6px, lh 24.96, color #777 (muted gray rgb(117,117,117)), text-align center, max-width ~830px centered.
  - **Red divider** below: 50px × 1px, background #EE171F, margin 16px auto.

## Service icon-boxes (4 across)
- Row of 4 equal columns (each ~262px, padding 40px), centered icon + label, text-align center.
- **Icon:** 48px, color #757575 (currentColor). Kinds:
  - Residential → `<ResidentialIcon>` ; Restaurant → storefront `<img src={STOREFRONT_ICON}>` 48px; Nail Salon → storefront `<img>` 48px; Commercial → `<CommercialIcon>`.
  - margin-bottom 16px.
- **Label:** Open Sans 700, ~16px, color #757575, uppercase-ish (site shows Title Case bold), centered, 2 lines.
- **Reveal:** each box fades up on scroll into view, **staggered** (delay 0/0.15/0.3/0.45s). Use `.delta-reveal` + `is-visible` toggled by IntersectionObserver (threshold ~0.2).
- **Hover:** box lifts into a white rounded card with soft shadow (Flatsome hover). Approx: on hover add background #fff, border-radius ~5px, box-shadow 0 10px 30px rgba(0,0,0,0.08), transition .3s. (Live site shows first box already as a white card — treat as hover/active style.)

## Content (verbatim)
Heading: "We Are Delta Group"
P1: "We associate with many partners throughout the country, effectively taking advantage of a network of highly specialized suppliers and subcontractors to achieve our work goals in the most effective way."
P2: "DELTA wishes to build strategic cooperative relationships to go further and stronger together. Hurry up and join us !"
Services: Residential Construction · Restaurant Construction · Nail Salon Construction · Commercial Construction

## Data
`WE_ARE_DELTA`, `SERVICES`, `STOREFRONT_ICON` from content.ts. Icons from shared/icons.

## Responsive
- ≥850px: 4 in a row. 550–849px: 2×2. <550px: 1 column stacked. Heading ~26px on mobile.
