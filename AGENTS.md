# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## Deployment

Static marketing site.
`next.config.js` sets `output: 'export'`, and Cloudflare Pages builds and serves the exported `out/` directory through its GitHub integration.
There is no server and no request-time rendering: anything a server component computes is frozen into the HTML at build time.
Values that must track the visitor (dates, locale, timezone) belong in a client component — see `src/components/CopyrightYear.tsx`.
The contact form posts straight to Formspree from the browser, which is why the site needs no backend.

## Design

The site is the "Direction B" editorial design: warm paper, ink, one burnt-orange accent, Instrument Serif headings on Inter body.
The palette and type live in `tailwind.config.ts`; the reference artboards are `design/Main.dc.html` (1440px) and `design/Phone.dc.html` (390px) in the redesign planning task, not in this repo.
The redesign's public copy is provisional pending one comprehensive captain pass; do not treat its presence as approval for reuse.
The brand mark ships only as derived copies (`public/images/2ml_mark.png` at 480px for About, `2ml_mark-96.png` for the header), cut from a 2048px transparent Canva export that lives outside the repo; regenerate from that export rather than upscaling these.

## Styling

Tailwind, with shared component classes defined in the `@layer components` block of `src/app/globals.css`.
Tailwind cannot warn about a class that is neither a utility nor defined there, so a typo or a never-written rule silently compiles to nothing and the element renders unstyled.
`tests/rendering-contracts.spec.ts` asserts that the shared classes produce real computed styles; extend it when adding one.

## Tests

`npm test` runs Playwright against the built static export, not `next dev` — the config builds and serves `out/` itself, so no server needs to be running first.
The suite is the regression contract for layout overflow, shared styles, contrast, metadata and menu semantics; it is not a screenshot tool.

## Capturing screenshots

Chrome's CLI clamps `--window-size` to 500px wide, so phone-width captures need real device-metrics emulation rather than a plain `--headless --screenshot` run.
`chrome-devtools-axi` 0.1.26 prints an output path and writes no file on this machine; verify any capture tool actually produced a file before trusting it.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
