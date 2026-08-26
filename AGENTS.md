# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## Deployment

Static marketing site.
`next.config.js` sets `output: 'export'`, and Cloudflare Pages builds and serves the exported `out/` directory through its GitHub integration.
There is no server and no request-time rendering: anything a server component computes is frozen into the HTML at build time.
Values that must track the visitor (dates, locale, timezone) belong in a client component — see `src/components/CopyrightYear.tsx`.

## Styling

Tailwind, with shared component classes defined in the `@layer components` block of `src/app/globals.css`.
Tailwind cannot warn about a class that is neither a utility nor defined there, so a typo or a never-written rule silently compiles to nothing and the element renders unstyled.
`tests/rendering-contracts.spec.ts` asserts that the shared classes produce real computed styles; extend it when adding one.

## Tests

`npm test` runs Playwright against the built static export, not `next dev` — the config builds and serves `out/` itself, so no server needs to be running first.

## Known broken

`npm run lint` does not run: `eslint.config.mjs` extends `next/typescript`, which does not exist in `eslint-config-next@14.1.0`, and ESLint 8 does not read flat config by default.
Repairing the config surfaces 17 pre-existing `react/no-unescaped-entities` errors in user-facing copy.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
