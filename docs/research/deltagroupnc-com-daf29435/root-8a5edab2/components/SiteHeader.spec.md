# SiteHeader Specification

## Overview
- **Target file:** `src/components/sites/deltagroupnc-com-daf29435/root-8a5edab2/SiteHeader.tsx`
- **Interaction model:** static (NOT sticky — scrolls away). Client component (mobile menu toggle + hover).

## DOM Structure
`<header>` (white bar, 80px) → container (max-width 1170px, 15px side padding) → flex row space-between:
- Left: logo `<img>` (Delta-Construction-Logo-LONGWAYS.png), rendered 226×56.5.
- Right (desktop ≥850px): `<nav>` horizontal list + red square search button.
- Right (mobile <850px): hamburger button (opens off-canvas menu), logo stays left.

## Computed Styles
### header
- position: relative; height: 80px; background: #fff; z-index: 1001; width: 100%.
### logo img
- width ~226px (height auto ~56.5). Left aligned.
### nav links (`a`)
- font: "Open Sans"; font-size 14.4px; font-weight 600; text-transform uppercase; letter-spacing 0.288px; line-height 18px; padding 10px 0.
- color: #000 (default). **Active (Home): #EE171F.** Hover: #EE171F (transition ~0.3s).
- Items separated by thin vertical `|` dividers (1px, light gray ~#e0e0e0), ~ with 18–20px gap each side.
- "Portfolio" has a small caret ▾ (CaretDownIcon) after label.
### search button
- ~40×40px square, background #EE171F, white SearchIcon (~16px), small radius (~3px), cursor pointer. Hover: slightly darker red.

## States & Behaviors
- **Hover nav link:** color → #EE171F, transition color .25s ease.
- **Mobile (<850px):** hide inline nav; show hamburger (3 lines) on right; clicking toggles a simple slide/overlay menu listing the 6 nav items (Home active red). Keep implementation lightweight (state-driven panel). No dialog/alert.

## Nav items (verbatim, in order)
Home (active) · Blog · About · Portfolio (dropdown caret) · Design/Build · Contact

## Assets / Icons
- Logo: `content.LOGO`.
- Icons: `SearchIcon`, `CaretDownIcon` from shared/icons.

## Responsive
- **≥850px:** full inline nav + search button.
- **<850px:** hamburger menu; logo may shrink slightly. Header stays 80px (or ~70px).
