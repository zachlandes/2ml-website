import { test, expect, type Page } from '@playwright/test';

const ROUTES = ['/', '/about', '/services', '/contact', '/case-studies'];

// 280 is the narrowest phone viewport in circulation (folded Galaxy Fold);
// 1280 is the width at which the layout stops growing (max-w-7xl)
const MOBILE_WIDTHS = [280, 320, 375, 390, 430];
const DESKTOP_WIDTHS = [768, 1280, 1440];

function relativeLuminance([r, g, b]: number[]): number {
  const channel = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrastRatio(fg: number[], bg: number[]): number {
  const a = relativeLuminance(fg);
  const b = relativeLuminance(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

async function documentWidths(page: Page) {
  return page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    offenders: Array.from(document.querySelectorAll('*'))
      .filter((el) => el.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
      .slice(0, 5)
      .map((el) => `${el.tagName}.${String((el as HTMLElement).className).slice(0, 60)}`),
  }));
}

test.describe('no horizontal overflow', () => {
  for (const width of [...MOBILE_WIDTHS, ...DESKTOP_WIDTHS]) {
    for (const route of ROUTES) {
      test(`${route} at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(route);
        await page.waitForLoadState('networkidle');

        const { scrollWidth, clientWidth, offenders } = await documentWidths(page);
        expect(
          scrollWidth,
          `${route} scrolls horizontally at ${width}px. Offenders: ${offenders.join(', ')}`,
        ).toBeLessThanOrEqual(clientWidth);
      });
    }
  }

  test('the mobile menu does not widen the page', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 900 });
    await page.goto('/');
    await page.getByRole('button').first().click();
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();

    const { scrollWidth, clientWidth } = await documentWidths(page);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});

test.describe('shared component styles are defined', () => {
  test('.card renders as a padded, bordered surface', async ({ page }) => {
    await page.goto('/services');
    const card = page.locator('.card').first();
    await expect(card).toBeVisible();

    const style = await card.evaluate((el) => {
      const s = getComputedStyle(el);
      return {
        padding: parseFloat(s.paddingTop),
        radius: parseFloat(s.borderTopLeftRadius),
        borderWidth: parseFloat(s.borderTopWidth),
        background: s.backgroundColor,
      };
    });

    // An undefined `.card` collapses to zero padding, no radius and no border
    expect(style.padding).toBeGreaterThan(0);
    expect(style.radius).toBeGreaterThan(0);
    expect(style.borderWidth).toBeGreaterThan(0);
    expect(style.background).not.toBe('rgba(0, 0, 0, 0)');
  });

  test('.heading-sm sits between .heading-md and body text', async ({ page }) => {
    await page.goto('/case-studies');

    const sizes = await page.evaluate(() => {
      const size = (sel: string) => parseFloat(getComputedStyle(document.querySelector(sel)!).fontSize);
      return {
        sm: size('.heading-sm'),
        md: size('.heading-md'),
        body: size('.text-body'),
        weight: getComputedStyle(document.querySelector('.heading-sm')!).fontWeight,
      };
    });

    expect(sizes.sm).toBeGreaterThan(sizes.body);
    expect(sizes.sm).toBeLessThan(sizes.md);
    expect(Number(sizes.weight)).toBeGreaterThanOrEqual(700);
  });

  test('.badge renders as a pill', async ({ page }) => {
    await page.goto('/');
    const badge = page.locator('.badge').first();
    await expect(badge).toBeVisible();

    const style = await badge.evaluate((el) => {
      const s = getComputedStyle(el);
      return {
        display: s.display,
        paddingX: parseFloat(s.paddingLeft),
        radius: parseFloat(s.borderTopLeftRadius),
      };
    });

    expect(style.display).toBe('inline-flex');
    expect(style.paddingX).toBeGreaterThan(0);
    expect(style.radius).toBeGreaterThan(50);
  });
});

test.describe('footer', () => {
  test('body text meets WCAG AA contrast against its background', async ({ page }) => {
    await page.goto('/');

    const { fg, bg } = await page.evaluate(() => {
      const p = document.querySelector('footer p')!;
      const parse = (s: string) => s.match(/[\d.]+/g)!.map(Number);

      // Walk up until a non-transparent background, compositing any alpha over white
      let el: Element | null = p;
      let layer = [255, 255, 255];
      while (el) {
        const raw = parse(getComputedStyle(el).backgroundColor);
        const alpha = raw[3] === undefined ? 1 : raw[3];
        if (alpha > 0) {
          layer = [0, 1, 2].map((i) => raw[i] * alpha + 255 * (1 - alpha));
          break;
        }
        el = el.parentElement;
      }
      return { fg: parse(getComputedStyle(p).color).slice(0, 3), bg: layer };
    });

    expect(contrastRatio(fg, bg)).toBeGreaterThanOrEqual(4.5);
  });

  test('shows the browser current year, not the build year', async ({ page }) => {
    // Freeze the page clock well past any plausible build date. setTimeout is
    // left alone so React can still hydrate.
    await page.addInitScript(() => {
      const RealDate = Date;
      const frozen = new RealDate('2031-03-04T12:00:00Z').getTime();
      class FrozenDate extends RealDate {
        constructor(...args: unknown[]) {
          if (args.length === 0) {
            super(frozen);
          } else {
            // @ts-expect-error forwarding the real Date overloads
            super(...args);
          }
        }
        static now() {
          return frozen;
        }
      }
      window.Date = FrozenDate as DateConstructor;
    });

    await page.goto('/');
    await expect(page.locator('footer p')).toHaveText('© 2031 2ML LLC. All rights reserved.');
  });

  test('static export ships a stale year that the client corrects', async ({ request }) => {
    const html = await (await request.get('/')).text();
    const buildYear = html.match(/©\s*<!--[^>]*-->\s*(\d{4})|©\s*(\d{4})/);

    // The exported HTML is frozen at build time; the assertion above proves the
    // rendered page no longer depends on it
    expect(html).toContain('2ML LLC. All rights reserved.');
    expect(buildYear).not.toBeNull();
  });
});
