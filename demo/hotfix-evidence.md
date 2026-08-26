# 2ml.ai obvious-bug hotfix: evidence

*2026-08-26T21:56:47Z by Showboat 0.6.1*
<!-- showboat-id: b4e15a95-8a93-4825-a082-4144bda62af3 -->

Four defects on the current 2ml.ai, each one a defect regardless of where the redesign lands. Every claim below is measured against the static export that Cloudflare Pages actually serves, on a real Chrome, at real viewport sizes.

**Before** screenshots are built from `b49dad3` (tip of `main`). **After** screenshots are built from this branch.

## 1. Footer contrast: 1.33:1

The footer declares a dark bar — `bg-slate-900/50 border-t border-slate-800` with `text-slate-400` — but the `/50` alpha composites slate-900 over the site's white body, landing on rgb(135,139,149). Grey text on grey. Measured on the live site and on the build: **1.33:1**, against a WCAG AA floor of 4.5:1.

Dropping the alpha renders the bar as the class list already declares it, leaving every visible word and the text colour untouched. Result: **6.96:1**.

```bash {image}
![Before: footer text is grey-on-grey at 1.33:1](before-footer-contrast-mobile-390.png)
```

![Before: footer text is grey-on-grey at 1.33:1](9e6d7b1e-2026-08-26.png)

```bash {image}
![After: same words on an opaque slate-900 bar at 6.96:1](after-footer-contrast-mobile-390.png)
```

![After: same words on an opaque slate-900 bar at 6.96:1](53388a53-2026-08-26.png)

## 2. `.card` and `.heading-sm` were never defined

`globals.css` defines `.card-base`, `.card-on-white`, `.card-on-gray` and a `.heading-xl/lg/md` ladder — but 21 elements across four pages reference a bare `.card`, and `/case-studies` references `.heading-sm`. Neither rule exists, and neither is a Tailwind utility, so they compile to nothing: cards render as unpadded, borderless, background-less blocks and `.heading-sm` collapses to body text.

`.badge` in the hero is the same defect and is fixed in the same pass.

`.card` reuses the existing `.card-base` owner and picks a surface that reads on all three section backgrounds in use (white, gray-50, primary-50). `.heading-sm` extends the existing ladder one step below `.heading-md`.

```bash {image}
![Before: cards have no padding, border or surface; "Key Results" is body-sized](before-case-studies-mobile-390.png)
```

![Before: cards have no padding, border or surface; "Key Results" is body-sized](de32fad6-2026-08-26.png)

```bash {image}
![After: cards are padded, bordered surfaces and "Key Results" reads as a heading](after-case-studies-mobile-390.png)
```

![After: cards are padded, bordered surfaces and "Key Results" reads as a heading](73f81303-2026-08-26.png)

## 3. Mobile horizontal overflow

Measuring honestly: at `b49dad3` the pages do **not** scroll horizontally at 320px or wider, on the build or on live 2ml.ai. What they do have is almost no margin. Minimum content width per page, measured by forcing `width: min-content` on `<body>`:

| Route | at `b49dad3` | with `.card` defined | after this branch |
|---|---|---|---|
| `/` | 303px | 303px | **245px** |
| `/about` | 179px | 186px | 186px |
| `/services` | 195px | 195px | 195px |
| `/contact` | 182px | 182px | 182px |
| `/case-studies` | 287px | **312px** | **203px** |

`/case-studies` already overflows below 287px (a folded Galaxy Fold is 280px), and defining `.card` adds 24px of padding per side — which pushes it to 312px and `/` stays at 303px, both within 20px of a 320px phone. So the overflow fix is not optional alongside the card fix: it is what keeps the card fix from creating a visible regression.

Two structural fixes, both invisible at normal widths: the case-study title/industry row wraps instead of forcing its two children onto one line, and the hero's button pair wraps. Worst-case page is now 245px, clear of every phone in circulation.

```bash {image}
![Before at 280px: horizontal scrollbar, industry pill pushed past the right edge](before-case-studies-overflow-280.png)
```

![Before at 280px: horizontal scrollbar, industry pill pushed past the right edge](df7cd3c8-2026-08-26.png)

```bash {image}
![After at 280px: pill wraps under the title, no horizontal scroll](after-case-studies-overflow-280.png)
```

![After at 280px: pill wraps under the title, no horizontal scroll](9582d0e3-2026-08-26.png)

## 4. Copyright year froze at the build

`layout.tsx` calls `new Date().getFullYear()` in a server component. Under `output: 'export'` that runs once, at build time, and the year is baked into every HTML file. A site that is not rebuilt shows a stale copyright from New Year's Day onward.

A small client component seeds its state from the exported build year — so hydration still matches the served markup — and corrects to the visitor's year on mount. The rest of the footer string is untouched.

```bash
echo 'Year frozen into the exported HTML (this build):' && grep -o '©[^<]*<!-- -->[0-9]*<!-- -->[^<]*' ../out/index.html | head -1
```

```output
Year frozen into the exported HTML (this build):
© <!-- -->2026<!-- --> 2ML LLC. All rights reserved.
```

The test below freezes the browser clock to 2031 and loads that same exported HTML — the rendered footer follows the browser, not the build.

## Tests

47 Playwright specs express these four contracts against the real static export: no horizontal scroll on every route at 280/320/375/390/430 and 768/1280/1440, `.card`/`.heading-sm`/`.badge` producing intentional computed styles, footer contrast at or above WCAG AA, and the copyright year following a frozen browser clock.

Six of them fail on `b49dad3` — one per defect, plus the 280px overflow — which is what makes them worth keeping.

```bash
cd .. && npx playwright test 2>&1 | tail -4
```

```output
  ✓  42 [chromium] › tests/rendering-contracts.spec.ts:64:7 › shared component styles are defined › .card renders as a padded, bordered surface (316ms)
  ✓  44 [chromium] › tests/rendering-contracts.spec.ts:104:7 › shared component styles are defined › .badge renders as a pill (308ms)

  47 passed (11.5s)
```

## Desktop is unchanged

The whole change is scoped to what was broken. Desktop layout, spacing and information architecture are untouched apart from the cards now having the surface they were always asking for.

```bash {image}
![Before at 1280px: service cards render as bare text columns](before-services-desktop-1280.png)
```

![Before at 1280px: service cards render as bare text columns](a9cb6f9f-2026-08-26.png)

```bash {image}
![After at 1280px: same layout, cards now render as surfaces](after-services-desktop-1280.png)
```

![After at 1280px: same layout, cards now render as surfaces](702b9dd9-2026-08-26.png)

## Out of scope, found along the way

- `npm run lint` does not run at `b49dad3`: `eslint.config.mjs` extends `next/typescript`, which does not exist in `eslint-config-next@14.1.0`, and ESLint 8 does not read flat config by default. Repairing the config surfaces 17 pre-existing `react/no-unescaped-entities` errors in user-facing copy strings, which this task must not touch. Left exactly as found.
- `<html className="dark">` in `layout.tsx` is inert — `darkMode` is not configured in `tailwind.config.ts`. The translucent footer was written for the dark theme this class was meant to switch on.
- `<main>` in `layout.tsx` and `.container-width` in every section both apply `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`, so page padding is doubled and alternating section backgrounds cannot span the viewport. Both are visual-direction questions for the redesign.
