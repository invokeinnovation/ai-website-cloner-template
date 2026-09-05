# BEHAVIORS.md — deltagroupnc.com (home)

Tech: WordPress 7.1 + **Flatsome theme 3.19.8** (UX Builder) + child theme. jQuery, FontAwesome kit, animate.css 4.1.1, **Flickity** carousel. Font: **Open Sans** (Google). No smooth-scroll library (native scrolling).

## Global
- **Body font:** "Open Sans", sans-serif. Body copy 15.6px / lh 24.96px / weight 400.
- **Brand red:** `rgb(238, 23, 31)` = `#EE171F` (active nav link, red divider rules, red CTA/search button, footer heading underline, footer list chevrons).
- **Headings:** Open Sans weight 700, uppercase, letter-spacing ~1.5px. Section H2 = 31.28px / lh 37.5px / ls 1.564px.
- **Light section bg:** near-white `#f7f7f7`/`#fafafa`. **Dark section bg:** ~`#1e1e1e`/`#202020` (near-black).

## Header (NOT sticky)
- `position: relative`, height **80px**, transparent bg, z-index 1001. Sits on a white bar at very top of page; **scrolls away** with the page (does NOT stick or reappear). Confirmed: header top = -300px after scrolling 300px.
- Logo: `Delta-Construction-Logo-LONGWAYS.png`, rendered **226×56.5px**.
- Nav links: Open Sans **14.4px / weight 600 / uppercase / ls 0.288px**, padding 10px 0.
  - Default color **black** `#000`. **Active/current** ("HOME") color **red** `#EE171F`.
  - Vertical `|` separators between items (Flatsome `.nav-divided`).
  - PORTFOLIO has a dropdown caret (▾).
- Right-side **red square search button**: bg `#EE171F`, white magnifier icon, ~40×40, small radius.
- **Hover:** nav links → red on hover (transition ~0.3s).

## Hero Slider (Flickity) — INTERACTION: time-driven (autoplay) + drag + arrows
- Options: `{ cellAlign:"center", imagesLoaded:true, lazyLoad:1, freeScroll:false, wrapAround:true, autoPlay:4000 }`
- Type: **fade** (`slider-type-fade`) — slides cross-fade, they do NOT slide horizontally.
- **Autoplay every 4000ms**, wraps around. 4 slides.
- Nav: large light prev/next **arrows** (`slider-nav-large slider-nav-light`), simple style. Draggable.
- Each slide = full-bleed background photo (object-fit cover, ~591px tall on desktop) with subtle dark overlay for text legibility, centered content:
  - **Title** (white, uppercase, 31.28px/700/ls1.564, lh37.5)
  - **"CLICK HERE" pill button**: transparent bg, 2px solid `#F1F1F1` border, text `#F1F1F1` 15.52px/700 uppercase ls0.466, padding 0 18.6px, **border-radius 99px** (full pill), ~min-height ~2.5em. Hover: fills white / inverts (Flatsome default).
  - **Subtitle**: "Experience and Integrity is our main focus" (white, ~body size).

## "WE ARE DELTA GROUP" section — INTERACTION: scroll-reveal (animate.css)
- Light bg. Centered H2 "WE ARE DELTA GROUP" + 2-paragraph intro + short red horizontal divider rule (~50px, `#EE171F`).
- Below: **4 service icon-boxes** in a row (Residential / Restaurant / Nail Salon / Commercial Construction).
  - Icons: line-style (2 inline FontAwesome SVGs — building/house + office; 2 image icons e.g. `street-shop-_64.png` storefront). ~48–64px, thin stroke, muted gray.
  - Label below icon: bold ~gray, 2 lines centered.
  - **Animation:** boxes **fade/stagger in on scroll** into view (animate.css). One box shows a white card w/ shadow on hover/active (hover raises a white rounded card behind the box).

## "OUR COMMITMENT TO YOU" portfolio — INTERACTION: horizontal carousel (Flatsome row-slider)
- **Dark bg** (~#1e1e1e). Centered H2 "OUR COMMITMENT TO YOU" (white) + subtitle "Experience and Integrity is our main focus" (white/muted) + short red divider.
- Below: a **horizontal image carousel** of 8 project photos (multiple visible per view on desktop, drag/arrow to scroll). Each tile is a landscape photo; **caption overlay appears on hover** with project name.
- 8 items (image → caption), in order:
  1. `20211209_142046046_iOS-scaled.jpg` → Noire The Nail Bar Of Southpoint Mall – Durham
  2. `p2.webp` → New York Nails – Jacksonville Mall
  3. `m8.webp` → Milk Lab Tea Shop – Durham
  4. `89.jpeg` → Gaston Lake – Eatons Crossing
  5. `A2.png` → Triangle Park Apts Clubhouse – Durham
  6. `14-1.jpeg` → Thirsty Skull – Brewery Of Siler City
  7. `32.jpeg` → Noire The Nail Bar Of Southpoint Mall – Durham
  8. `43-1.jpg` → Nails Rustique Of Cary

## Footer — INTERACTION: static (+ FB embed, link hovers)
- Dark textured **wavy background** = `footer-image.jpg`. 4 columns:
  1. **ABOUT US**: (919) 822-2922 · admin@deltagroupnc.com · 3107 Glen Royal Road, Raleigh, NC 27617 · www.deltagroupnc.com · Monday – Friday : 9:00 am – 5:00 pm
  2. **PROJECTS**: Restaurant · Nails Salon · Hotel · Mall Center · Spa
  3. **MENU**: Portfolio · About · Design/Build · Blog · Contact
  4. **FANPAGE FACEBOOK**: Facebook Page plugin embed (Delta Construction, 910 followers). Clone as a static styled card (iframe embed optional).
- Column headings: white uppercase bold with **short red underline** beneath. List items have **red `›` chevron** bullets; hover → lighten/red.
- **Bottom bar**: centered nav HOME · BLOG · ABOUT · PORTFOLIO · DESIGN/BUILD · CONTACT, then "Copyright 2026 © Deltagroupnc.com".
- Back-to-top circular button bottom-left (Flatsome default), red on hover.

## Responsive (Flatsome breakpoints)
- **Desktop ≥850px**: full horizontal nav; 4 service boxes in a row; footer 4 columns; portfolio ~3-4 tiles/view.
- **≤849px (tablet/mobile)**: nav collapses to **hamburger** (confirmed present) opening an off-canvas menu; logo stays left. Service boxes stack (2-up then 1-up). Footer columns stack to single column. Portfolio shows 1-2 tiles/view. Section paddings reduce.
- Standard Flatsome content max-width ~1080px (`.container`), full-width sections span viewport.
