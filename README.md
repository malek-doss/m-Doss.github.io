# malekdoss.com

Personal site for Malek Aldoss — data engineer. Two pages: a home page featuring **Tend**
(live on the App Store) and **FiveDue** (in TestFlight beta), and a deep technical case study
of Tend's AI recap system.

## Stack

Static HTML and CSS with one small vanilla JS file. No build step, no dependencies,
no analytics, no cookies. Served by GitHub Pages from the repo root.

```
index.html         home: hero, work, experience, toolkit, education, contact
tend.html          the Tend case study
assets/site.css    the whole design system
assets/site.js     year stamp + scrollspy; the site works without it
legal/             privacy, terms
404.html           not found
PRODUCT.md         product truth and claim boundaries
DESIGN.md          the design system
```

## Design

**Modular Index**: clean, minimal, utilitarian, modular typography. White ground, black ink,
one ultramarine (`#2433FF`). Everything sits on square modules sharing 1px rules. The name is
set one letter per module, with the O as an ultramarine dot. There are no decorative icons or
arrows; each piece of work is one sentence and four numbers.

Three rules are easy to break by accident:

1. **No decorative symbols.** If an icon or arrow repeats what the words say, it doesn't go
   in. Graphics that are data (Tend's spectrum, calendar, architecture diagram) stay.
2. **Ultramarine is the key, not decoration.** The dot, the live status, the primary action,
   index numbers. Never body text, never a section fill.
3. **Single-column grids are `minmax(0, 1fr)`**, so wide tables scroll inside `.scroll-x`
   instead of widening the page on phones.

See `DESIGN.md` for the full system and `PRODUCT.md` for what may and may not be claimed.
Every number on the site traces to a résumé fact or to the product repositories; re-measure
before changing one.

## Local

```sh
npx http-server -p 8899
```
