# Delta Construction Group — 2026 Redesign

A ground-up redesign of deltagroupnc.com. All copy, photography and business
details come from the client's own site; the presentation is new.

## Design system

Tokens and primitives live in the `DELTA 2.0` block at the bottom of
`src/app/globals.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | `#08080a` | Page ground |
| `--color-ink-2` / `-3` / `-4` | `#0e0f13` → `#1d2027` | Elevated surfaces |
| `--color-bone` | `#f4f1ec` | Primary text |
| `--color-ash` | `#8e8f99` | Secondary text |
| `--color-signal` | `#e8191f` | The brand red — the only accent |

**Type:** Bricolage Grotesque (display), Inter (body), JetBrains Mono
(`.d-eyebrow`, technical labels and numerals).

**Depth primitives:** `.d-stage` / `.d-3d` (perspective containers),
`.d-floor` (receding blueprint grid), `.d-tilt` + `.d-tilt-layer`
(pointer-reactive cards with layered z-depth), `.d-glass`, `.d-sheen`,
`.d-grain`, `.d-reveal` / `.d-reveal-3d` / `.d-line` (scroll reveals).

Reveal states are wrapped in `@media (scripting: enabled)`, so a client without
JavaScript sees every section rather than a blank page.
`prefers-reduced-motion` disables all of it.

## Structure

```
src/components/delta/
  data/        site.ts (business facts, nav, copy) · projects.ts (generated) · design-build.ts
  fx/          Reveal · TiltCard · Parallax · Counter · Marquee · useInView
  ui/          Button (magnetic) · Section (Container/Eyebrow/SectionHeading) · Wordmark
  layout/      Shell · SiteHeader · SiteFooter · PageHero · ScrollProgress
  home/        Hero · SectorMarquee · Capabilities · Work/WorkRail · Numbers · Studio · Process · Commitment
  work/        WorkIndex (filterable 58-project grid)
  gallery/     ProjectGallery (masonry + lightbox, 8-photo preview per project)
  pages/       AboutContent · DesignBuildContent · JournalContent · ArticleContent · ContactContent
```

`src/components/delta/data/projects.ts` is generated — 58 projects and 1,324
photographs read out of the gallery manifests:

```bash
node scripts/gen-delta-projects.mjs
```

Its anchor slugs must match the ids `ProjectGallery` renders; both use the same
`slugify`.

## Known gaps

- The contact form has no backend. It composes a `mailto:` to
  `admin@deltagroupnc.com` so it works today; swap in a form endpoint
  (Resend, Formspree, a route handler) when one exists.
- The Facebook URL in the footer is a guess — confirm the real page.
- `src/components/sites/deltagroupnc-com-daf29435/` still holds the original
  1:1 clone. Only `articles.ts`, `blog-data.ts`, `gallery-types.ts` and the
  `gallery.json` manifests are still imported; the rest is kept as the "before"
  reference and can be deleted once you no longer need the comparison.
