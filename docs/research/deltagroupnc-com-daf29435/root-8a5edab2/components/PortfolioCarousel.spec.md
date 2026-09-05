# PortfolioCarousel Specification (+ PortfolioCard)

## Overview
- **Target files:** `PortfolioCarousel.tsx` (+ inline `PortfolioCard`) in page component namespace.
- **Interaction model:** horizontal carousel (drag/scroll + prev/next arrows). Client component. Caption overlay on hover.

## Section
- Background **#1C1C1C** (dark). Vertical padding ~60px.
- Container max-width 1170px centered.
- Centered heading block:
  - **H2** "OUR COMMITMENT TO YOU" — Open Sans 700, 31.28px, lh 37.5, ls 1.564, uppercase, **white**, center.
  - **Subtitle** "Experience and Integrity is our main focus" — ~15.6px/400, light gray (#ddd), center.
  - **Red divider** 50px×1px #EE171F, margin 16px auto.

## Carousel
- Horizontal track of 8 tiles. Desktop shows ~3 per view (tile width ~ (container-gaps)/3), gap ~0–20px; drag or arrows to scroll. Simplest faithful impl: a horizontal `overflow-x` flex track with `scroll-snap-x`, each tile `flex: 0 0` ~ 380px (desktop), plus left/right arrow buttons that scroll by one tile. `scrollbar` hidden.
- **Tile (PortfolioCard):** landscape image (~ 4:3 / 16:11), object-fit cover, border-radius 0. Height ~ 210–260px.
  - **Hover overlay:** dark gradient/semi `rgba(0,0,0,0.55)` fades in with the **caption** (project name) centered, white, ~15–16px, plus optional small red rule. transition opacity .3s.
- Arrows: light/white chevrons (ChevronLeft/SliderChevronRight) at sides, circular subtle bg.

## Items (image → caption, in order)
1. 20211209_142046046_iOS-scaled.jpg → Noire The Nail Bar Of Southpoint Mall – Durham
2. p2.webp → New York Nails – Jacksonville Mall
3. m8.webp → Milk Lab Tea Shop – Durham
4. 89.jpeg → Gaston Lake – Eatons Crossing
5. A2.png → Triangle Park Apts Clubhouse – Durham
6. 14-1.jpeg → Thirsty Skull – Brewery Of Siler City
7. 32.jpeg → Noire The Nail Bar Of Southpoint Mall – Durham
8. 43-1.jpg → Nails Rustique Of Cary

## Data
`PORTFOLIO`, `COMMITMENT` from content.ts. Use next/image.

## Responsive
- ≥850px ~3 per view; 550–849px ~2; <550px 1 per view (full width). Arrows shrink on mobile.
