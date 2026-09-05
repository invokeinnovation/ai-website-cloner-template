import type { SVGProps } from "react";

/**
 * Icons extracted from deltagroupnc.com (Flatsome theme).
 * The two service SVGs are the site's real inline icons; Flatsome forces
 * `fill: currentColor` on them, so they render as solid line-art in the
 * inherited color (the live site renders them black at ~48px).
 */

// Residential Construction — townhouse/outline icon (viewBox 512).
export function ResidentialIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="248" y="344" width="16" height="24" />
      <path d="M491.69092,264.90234,464,250.50293V160h-.00476a7.99615,7.99615,0,0,0-3.34534-6.50977l-56-40A8.003,8.003,0,0,0,400,112H330.42188L260.4375,65.34375a8.00131,8.00131,0,0,0-8.875,0L181.57812,112H112a8.003,8.003,0,0,0-4.6499,1.49023l-56,40A7.99615,7.99615,0,0,0,48.00476,160H48v89.99072L20.207,264.95605A8,8,0,0,0,16,272v16a7.96,7.96,0,0,0,1.34448,4.437l-.00073.00049.012.01807.0199.02978L32,314.42188v99.15624L17.34375,435.5625A8.00016,8.00016,0,0,0,24,448H488a8.00016,8.00016,0,0,0,6.65625-12.4375L480,413.57812V314.42188l14.62439-21.93653.0199-.02978.012-.01807-.00073-.00049A7.96,7.96,0,0,0,496,288V272A7.99987,7.99987,0,0,0,491.69092,264.90234ZM480,280H376v-8a8.00069,8.00069,0,0,0-3.67383-6.72949l-112-72a8.0033,8.0033,0,0,0-8.65234,0L228.76123,208H188.88281l53.333-32h43.82861L480,276.85742Zm-328,0v-3.63281l104-66.85645,104,66.85645V280Zm-32-68.77856L96,224.14453V200h24ZM136,200h16v8H136Zm280,25.543-16-8.31983V200h16Zm-32-16.63989L366.87866,200H384Zm-40-20.8-52.30908-27.20069A8.00178,8.00178,0,0,0,288,160H240a8.00733,8.00733,0,0,0-4.11572,1.13965L168,201.87012V144H344Zm88,45.76V192a8.00008,8.00008,0,0,0-8-8H360V168h88v74.18311ZM397.43652,128l33.59961,24H360V136a7.99943,7.99943,0,0,0-3.5625-6.65625L354.42188,128ZM256,81.61523,325.57788,128H186.42212ZM114.56348,128h43.01464l-2.01564,1.34375A7.99946,7.99946,0,0,0,152,136v16H80.96387ZM64,168h88v16H88a8.00008,8.00008,0,0,0-8,8v40.75977l-16,8.61547ZM32,276.77832,130.01709,224h73.85522l-64.19848,41.27051A8.00069,8.00069,0,0,0,136,272v8H32ZM38.94824,432l7.708-11.5625A7.99836,7.99836,0,0,0,48,416V312a7.99836,7.99836,0,0,0-1.34375-4.4375L38.948,296H73.052l-7.70825,11.5625A7.99836,7.99836,0,0,0,64,312V416a7.99836,7.99836,0,0,0,1.34375,4.4375L73.05176,432Zm108.77051,0H92.28125L80,413.57812V314.42188L92.28125,296h55.4375L160,314.42188V320H104a8.00008,8.00008,0,0,0-8,8v64a8.00008,8.00008,0,0,0,8,8h56v13.57812ZM160,352H144V336h16Zm-32,0H112V336h16Zm-16,16h16v16H112Zm32,0h16v16H144Zm22.94824,64,7.708-11.5625A7.99836,7.99836,0,0,0,176,416V312a7.99836,7.99836,0,0,0-1.34375-4.4375L166.948,296h34.104l-7.70825,11.5625A7.99836,7.99836,0,0,0,192,312V416a7.99836,7.99836,0,0,0,1.34375,4.4375L201.05176,432ZM240,432V336h32v96Zm64-18.42188L291.71875,432H288V328a8.00008,8.00008,0,0,0-8-8H232a8.00008,8.00008,0,0,0-8,8V432h-3.71875L208,413.57812V314.42188L220.28125,296h71.4375L304,314.42188ZM310.94824,432l7.708-11.5625A7.99836,7.99836,0,0,0,320,416V312a7.99836,7.99836,0,0,0-1.34375-4.4375L310.948,296h34.104l-7.70825,11.5625A7.99836,7.99836,0,0,0,336,312V416a7.99836,7.99836,0,0,0,1.34375,4.4375L345.05176,432ZM352,368h16v16H352Zm32,0h16v16H384Zm16-16H384V336h16Zm-32,0H352V336h16Zm64,61.57812L419.71875,432h-55.4375L352,413.57812V400h56a8.00008,8.00008,0,0,0,8-8V328a8.00008,8.00008,0,0,0-8-8H352v-5.57812L364.28125,296h55.4375L432,314.42188ZM438.94824,432l7.708-11.5625A7.99836,7.99836,0,0,0,448,416V312a7.99836,7.99836,0,0,0-1.34375-4.4375L438.948,296h34.104l-7.70825,11.5625A7.99836,7.99836,0,0,0,464,312V416a7.99836,7.99836,0,0,0,1.34375,4.4375L473.05176,432Z" />
    </svg>
  );
}

// Commercial Construction — office building icon (viewBox 64). Inline fills
// removed so it inherits currentColor, matching the live site's render.
export function CommercialIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m2 58h60v4h-60z" />
      <path d="m4 16h40v14h-40z" />
      <g>
        <path d="m62 57h-1v-55c0-.552-.448-1-1-1h-40c-.552 0-1 .448-1 1v13h-15c-.552 0-1 .448-1 1v41h-1c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h60c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1zm-11 0v-9c0-.552-.448-1-1-1h-5v-2h14v12zm-46-18v-8h8v8zm10-8h8v8h-8zm10 0h8v8h-8zm10 0h8v8h-8zm10-14h4v8h-4zm14 26h-14v-2h14zm-14-4v-8h4v8zm14 0h-8v-8h8zm0-14h-8v-8h8zm-14 2h14v2h-14zm0 22h4v8h-4zm14-38h-8v-8h8zm-28 0v-8h8v8zm10-8h8v8h-8zm-12 0v8h-8v-8zm-8 12v-2h38v2zm22 2v12h-38v-12zm-38 24h38v16h-2v-9c0-.552-.448-1-1-1h-12c-.552 0-1 .448-1 1v9h-6v-9c0-.552-.448-1-1-1h-12c-.552 0-1 .448-1 1v9h-2zm24 16v-8h4v8zm6-8h4v8h-4zm-26 8v-8h4v8zm6-8h4v8h-4zm46 10v2h-58v-2z" />
        <path d="m13 24.236.105.211c.339.678 1.45.678 1.789 0l.106-.211v2.764h2v-7c0-.464-.319-.867-.77-.973-.454-.106-.917.111-1.125.526l-1.105 2.211-1.105-2.211c-.208-.415-.67-.631-1.125-.526-.451.106-.77.509-.77.973v7h2z" />
        <path d="m21 25h2v2h2v-5c0-1.654-1.346-3-3-3s-3 1.346-3 3v5h2zm1-4c.551 0 1 .449 1 1v1h-2v-1c0-.551.449-1 1-1z" />
        <path d="m28 27h3v-2h-2v-6h-2v7c0 .552.448 1 1 1z" />
        <path d="m34 27h3v-2h-2v-6h-2v7c0 .552.448 1 1 1z" />
        <path d="m7 43h14v2h-14z" />
        <path d="m27 43h14v2h-14z" />
      </g>
    </svg>
  );
}

// Header search button icon.
export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// Nav dropdown caret (PORTFOLIO ▾).
export function CaretDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" {...props}>
      <path d="M6 8.5 1.5 4h9L6 8.5Z" />
    </svg>
  );
}

// Footer list bullet ( › chevron, rendered red).
export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

// Back-to-top / slider chevron up.
export function ChevronUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

// Slider prev/next chevrons.
export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function SliderChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// Facebook logo (footer fanpage card).
export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
    </svg>
  );
}

// Facebook "Share" arrow.
export function ShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11Z" />
    </svg>
  );
}
