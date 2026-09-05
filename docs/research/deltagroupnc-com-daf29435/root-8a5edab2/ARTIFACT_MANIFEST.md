# Artifact Manifest — deltagroupnc.com home clone

- **Source:** https://deltagroupnc.com/ (WordPress 7.1 + Flatsome 3.19.8)
- **Route:** `/` (src/app/page.tsx — first fresh-template root clone)
- **site-key:** deltagroupnc-com-daf29435 · **page-key:** root-8a5edab2

## Assets downloaded (15/15) — all real originals from the source site
public/sites/deltagroupnc-com-daf29435/root-8a5edab2/images/
- Delta-Construction-Logo-LONGWAYS.png (logo)
- Hero: 20220314_152551328_iOS-scaled.jpg, 1.png, r3.png, 20210302_134153000_iOS.jpg
- Service icon: street-shop-_64.png
- Portfolio: 20211209_142046046_iOS-scaled.jpg, p2.webp, m8.webp, 89.jpeg, A2.png, 14-1.jpeg, 32.jpeg, 43-1.jpg
- Footer bg: footer-image.jpg

Note: p2.webp / m8.webp required browser Accept/Referer headers (server 406'd default fetch); both recovered as real originals.

## Inline SVG icons extracted → shared/icons.tsx
- ResidentialIcon (townhouse, viewBox 512), CommercialIcon (office building, viewBox 64) — real site inline SVGs. Live site forces `fill: currentColor`, so both render as line-art in inherited color; reproduced faithfully.
- UI icons authored to match: Search, CaretDown, ChevronRight/Up/Left, SliderChevronRight, Facebook, Share.

## No generated/fallback assets used. No brand assets substituted.
## No missing assets.
