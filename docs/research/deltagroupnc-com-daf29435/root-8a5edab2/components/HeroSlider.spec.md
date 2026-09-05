# HeroSlider Specification

## Overview
- **Target file:** `src/components/sites/deltagroupnc-com-daf29435/root-8a5edab2/HeroSlider.tsx`
- **Screenshot:** `docs/design-references/deltagroupnc-com-daf29435/root-8a5edab2/desktop-hero.jpg`
- **Interaction model:** TIME-DRIVEN — Flickity fade slider. Client component.

## Behavior (from live Flickity options)
`{ cellAlign:"center", imagesLoaded:true, lazyLoad:1, freeScroll:false, wrapAround:true, autoPlay:4000 }`, type = **fade**.
- 4 slides, **cross-fade** (NOT horizontal slide). Autoplay advances every **4000ms**, wraps around.
- Prev/next **arrows** (large, light/white chevrons) at left & right edges, vertically centered. Draggable optional (arrows are enough).
- Implement: absolutely-stack all 4 slides; active slide opacity 1, others opacity 0; `transition: opacity .6s ease`. `setInterval` 4000ms advances index (pause not required). Arrows on click set index and reset timer.

## DOM / layout per slide
- Full-bleed section, **height 591px** desktop (use `h-[591px]` / min-h). Mobile shorter (~420–460px).
- Background: `<img>` object-fit cover, object-position center, absolute inset-0. Use next/image `fill`.
- **Dark overlay** above image for legibility: `rgba(0,0,0,0.28)` absolute inset-0.
- Content: absolutely centered (flex column, center/center, text-align center, gap ~18px, z above overlay):
  - **Title** — white; "Open Sans" 700; font-size 31.28px; line-height 37.5px; letter-spacing 1.564px; text-transform uppercase.
  - **CTA button** "CLICK HERE" — transparent bg; border 2px solid #F1F1F1; color #F1F1F1; font-size 15.52px; weight 700; uppercase; letter-spacing 0.466px; padding 0 18.6px; **border-radius 99px**; min-height 38.8px; line-height ~34px; inline-flex center. Hover: bg #fff, color #111 (transition .3s).
  - **Subtitle** — white; ~15.6px/400; "Experience and Integrity is our main focus".

## Slides (title → image), verbatim titles
1. WEST END CLUBHOUSE → `20220314_152551328_iOS-scaled.jpg`
2. NEW YORK NAILS  JACKSONVILLE MALL → `1.png`
3. RALEIGH CRAB HOUSE  CAPITAL BLVD, RALEIGH → `r3.png`
4. MAGIC NAILS  INDEPENDENCE MALL → `20210302_134153000_iOS.jpg`
(titles are stored title-case in content.ts; render `uppercase` via CSS)

## Data
Consume `HERO_SLIDES` from `content.ts`.

## Responsive
- Desktop 591px tall; title 31px. Mobile (<550px): height ~440px, title ~24–26px, arrows smaller. Content stays centered.
