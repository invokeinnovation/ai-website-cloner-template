# SiteFooter Specification

## Overview
- **Target file:** `SiteFooter.tsx` in page component namespace.
- **Interaction model:** static (link hovers + FB card). Server component OK.

## Structure
Two stacked bands:
### Footer main (dark, wavy texture bg)
- Background: `#1e1e1e` with `footer-image.jpg` overlay (dark wavy pattern), `background-size: cover`. Vertical padding ~50px.
- Container 1170px centered → **4 columns** (grid/flex), gap ~30px:
  1. **ABOUT US**
     - phone (919) 822-2922 · email admin@deltagroupnc.com · 3107 Glen Royal Road, Raleigh, NC 27617 · www.deltagroupnc.com · Monday - Friday : 9:00 am - 5:00 pm
     - each line ~15px, light gray (#cfcfcf), line spacing generous (~1.8).
  2. **PROJECTS**: Restaurant · Nails Salon · Hotel · Mall Center · Spa
  3. **MENU**: Portfolio · About · Design/Build · Blog · Contact
  4. **FANPAGE FAEBOOK**: styled static Facebook page card (see below).
- **Column heading:** white, Open Sans 700, 15px, uppercase, with a **short red underline** beneath (~40px × 2px, #EE171F, margin-top ~8px).
- **List items (cols 2,3):** each prefixed with a small **red `›` chevron** (ChevronRightIcon, #EE171F, ~12px), text light gray ~15px, py ~6px. Hover: text → white or red.

### Facebook fanpage card (static clone)
- White rounded card (~300px wide). Top: small Delta logo mark + "Delta Construction" bold + "910 followers" gray, then a "Follow Page" pill + "Share" (ShareIcon). Bottom strip: Delta logo + "Delta Construction" + facebook glyph (FacebookIcon) + "about a week ago". Keep it a simple static visual replica (no real iframe needed).

### Bottom bar
- Same dark bg (slightly separated by subtle top border rgba(255,255,255,0.08)). Centered:
  - Nav row: HOME · BLOG · ABOUT · PORTFOLIO · DESIGN/BUILD · CONTACT — uppercase ~13px, light gray, gap ~18px, `·`/spacing, hover red.
  - Copyright line: "Copyright 2026 © Deltagroupnc.com" — centered, ~13px, gray.

## Extras
- **Back-to-top** floating circular button bottom-left (fixed): thin border circle with ChevronUpIcon, hover red border/bg. (Can live in page or footer.)

## Data
`FOOTER`, `LOGO`, `FOOTER_BG` from content.ts. Icons from shared/icons.

## Responsive
- ≥850px: 4 columns. <850px: stack to 1 column, headings left-aligned, FB card full-width; bottom nav wraps/centers.
