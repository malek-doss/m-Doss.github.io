---
name: Malek Aldoss — Modular Index
description: A portfolio set on square modules sharing 1px rules. White ground, black ink, one ultramarine, and no decorative symbols.
colors:
  paper: "#ffffff"
  wash: "#f3f3f1"
  ink: "#111111"
  ink-2: "#5c5c5c"
  rule: "#d4d4d2"
  accent: "#2433ff"
  accent-ink: "#ffffff"
  accent-wash: "#eceeff"
  # --- Tend word fills and inks. Product data ported verbatim from
  # tend-app/src/constants/words.ts (main @ 00692f0). They appear only where
  # they depict Tend itself: the spectrum and the calendar.
  w-golden: "#E9CF7E"
  k-golden: "#5A3C12"
  w-sunny: "#F0B87A"
  k-sunny: "#593315"
  w-mild: "#EEA383"
  k-mild: "#572B1B"
  w-cloudy: "#99AAB8"
  k-cloudy: "#1A3144"
  w-mist: "#789DD7"
  k-mist: "#1B293F"
  w-fog: "#7B8DD2"
  k-fog: "#182238"
  w-storm: "#9975C4"
  k-storm: "#1A1226"
  w-clearing: "#6FAE9A"
  k-clearing: "#063127"
typography:
  tile:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "calc(cell * 0.74)"
    fontWeight: 860
    fontStretch: "125%"
    lineHeight: 1
  display:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 3.4vw, 3.5rem)"
    fontWeight: 800
    fontStretch: "112%"
    lineHeight: 1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.6vw, 2.125rem)"
    fontWeight: 780
    fontStretch: "112%"
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  contact:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 0.5rem + 3.6vw, 3.25rem)"
    fontWeight: 800
    fontStretch: "112%"
    lineHeight: 1.05
    note: "Sized so the email address fits one line at 343px."
  lead:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 650
    fontStretch: "75%"
    letterSpacing: "0.08em"
    textTransform: "uppercase"
  code:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.82em"
    fontWeight: 400
rounded:
  square: "0"
  dot: "50%"
  app-icon: "22%"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "64px"
  s9: "96px"
  s10: "128px"
  gutter: "clamp(16px, 4vw, 40px)"
  max: "1320px"
  measure: "66ch"
components:
  module-grid:
    backgroundColor: "{colors.rule}"
    gap: "1px"
    cellBackground: "{colors.paper}"
  tile:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.tile}"
    rounded: "{rounded.square}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.square}"
    padding: "12px 16px"
    minHeight: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 16px"
  button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0 16px"
  nav-link-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  status-live:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
  table-row-key:
    insetBar: "3px {colors.accent}"
---

# Design System: Malek Aldoss — Modular Index

## Overview

The owner pinned the direction on 2026-10-26: **clean, minimal, utilitarian, modular
typography**, after rejecting the earlier darkroom "exposure record" design as too detailed and
too themed. A first pass added rebus pictograms (symbol equations for each project); later the
same day the owner found that "a tad too much" and asked for every unnecessary symbol or
graphic to go. **What remains is type, rules, one colour, and data.**

**The module grid** is the one structural device. Square cells share 1px rules: the
container's background is the rule colour, and a 1px `gap` lets it show through (`.mod`,
`.tiles`). Name tiles, contact cells, facts, toolkit, contents and cards all use it.

**The name is set one letter per module** (`MALEK` / `ALDOSS`), with the O replaced by an
ultramarine dot. That dot is the single playful mark left on the site. The empty sixth cell
after MALEK is part of the grid; don't fill it.

Each piece of work is **one sentence and four numbers**. Depth lives on `/tend.html`.

## Colors

**Restrained: neutrals plus one accent.** White paper, near-black ink, one secondary grey for
captions and meta (6.7:1 on paper), and a rule grey that only ever draws grid lines.

**Ultramarine `#2433FF` is the key, not decoration.** It marks the dot in the name, the live
status, the primary action, section index numbers, and the key row in a data table. White on
ultramarine is 7.0:1.

**Tend's word fills are product data.** They come from `tend-app/src/constants/words.ts` and
appear only on the Tend spectrum and calendar. Each fill keeps its own ink, and every pair
clears 4.5:1. They are never used for site surfaces.

## Typography

**Mona Sans** is the one family. It's a variable font with weight 400–900 and width 75–125, and
the width axis carries the hierarchy:

- **125% expanded, weight 860:** name tiles and project names.
- **112%, weight 780–800:** display and section titles.
- **100%:** reading text.
- **75% condensed caps, tracked 0.08em:** labels, nav, status.

**Martian Mono** is used only for code, file paths, and index numbers like `01`.

Numbers in facts and tables use `tabular-nums`.

## Layout

- The page is at most `1320px` wide, with a `clamp(16px, 4vw, 40px)` gutter.
- Sections open on a 2px ink rule with a mono index number, a title, and a right-aligned
  label.
- Wide layouts use 7/5 splits. Below 900px everything is one column.
- Single-column grids are always `minmax(0, 1fr)`, never `1fr`, so a wide table scrolls inside
  its `.scroll-x` instead of widening the page.

## Elevation & Depth

None. There are no shadows. Depth comes from rule weight alone:

- 1px `rule` between cells;
- 1px ink around boxes, figures and buttons;
- 2px ink for section heads, the pull quote's rules, and the incident alert's accent border.

## Shapes

Square is the form language. Only three things are round, and each is justified by its
referent: the dot in the name (an O), status dots, and the Tend app icon.

## Motion

On load, the name tiles write themselves in, letter by letter, in under 0.8s. **Only the
letters move; the cells and rules never do**, so the grid never flashes grey. All motion is
gated behind `prefers-reduced-motion: no-preference`. Hovers invert a cell to ink over 150ms.

## Do's and Don'ts

### Do

- **Do** let words carry the meaning. If a symbol, icon or arrow repeats what the text already
  says, leave it out.
- **Do** keep graphics that are data: Tend's spectrum, the calendar, the architecture diagram.
- **Do** use `minmax(0, 1fr)` for every single-column grid.
- **Do** animate cell contents (`.writes > * > *`), never the cells.

### Don't

- **Don't** add icons, pictograms, or ↗ / → arrows to buttons and links.
- **Don't** round a corner or add a shadow.
- **Don't** add a second accent colour or use the Tend fills outside Tend content.
- **Don't** add a grey outside `ink-2`, `rule` and `wash`.
