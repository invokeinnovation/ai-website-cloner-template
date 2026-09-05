# PAGE_TOPOLOGY.md — deltagroupnc.com home (/)

Single scroll page, native scrolling, non-sticky header. Top→bottom flow.

| # | Section | Component | Interaction | bg |
|---|---------|-----------|-------------|-----|
| 0 | Header / nav bar | `SiteHeader` | static; hover; mobile hamburger | white |
| 1 | Hero slider (4 slides) | `HeroSlider` | time-driven autoplay 4s (fade), drag, arrows | photo + dark overlay |
| 2 | "We Are Delta Group" intro + 4 service icon-boxes | `WeAreDelta` (+ `ServiceIconBox`) | scroll-reveal stagger; hover card | light #f7f7f7 |
| 3 | "Our Commitment To You" portfolio carousel (8) | `PortfolioCarousel` (+ `PortfolioCard`) | horizontal carousel drag/arrows; caption on hover | dark #1e1e1e |
| 4 | Footer (4 cols + FB embed + bottom bar) | `SiteFooter` | static; link hover; FB card | dark wavy footer-image.jpg |

## Layout
- No global scroll container; body scrolls natively.
- Sections full-viewport-width; inner content centered, max-width ~1080px container.
- z-index: header 1001 (but not sticky). Back-to-top floating button bottom-left.
- Hero ~591–650px tall desktop. Each content section vertical padding ~60px+.

## Build order
1. Foundation (fonts, globals.css tokens, types, icons, assets) — sequential.
2. Parallel builders: HeroSlider, WeAreDelta+ServiceIconBox, PortfolioCarousel+PortfolioCard, SiteHeader, SiteFooter.
3. Assemble in `src/app/page.tsx` (root clone, replaces scaffold).

## Route
- Source `/` → dest `src/app/page.tsx` (first fresh-template root clone).
