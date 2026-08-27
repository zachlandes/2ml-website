import { test, expect, type Page } from '@playwright/test';

const ROUTES = ['/', '/work', '/services', '/about', '/contact'];

// 280 is the narrowest phone viewport in circulation (folded Galaxy Fold);
// 1440 is the Direction B artboard width
const MOBILE_WIDTHS = [280, 320, 360, 375, 390, 430];
const DESKTOP_WIDTHS = [768, 1280, 1440];

// Direction B palette, from the approved artboards
const PAPER = [250, 247, 242];
const ACCENT = [154, 75, 18];

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
});

test.describe('navigation', () => {
  test('the toggle reports its state and reveals the panel', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 900 });
    await page.goto('/');

    const toggle = page.getByRole('button', { name: 'Menu' });
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#mobile-nav')).toBeHidden();

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const panel = page.locator('#mobile-nav');
    await expect(panel.getByRole('link', { name: 'Work' })).toBeVisible();
    await expect(panel.getByRole('link', { name: 'Talk to a partner' })).toHaveAttribute(
      'href',
      '/contact',
    );
    await expect(panel.getByRole('link', { name: 'Contact', exact: true })).toBeHidden();

    const { scrollWidth, clientWidth } = await documentWidths(page);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);

    // Escape closes it and hands focus back, so keyboard users are not stranded
    await page.keyboard.press('Escape');
    await expect(page.locator('#mobile-nav')).toBeHidden();
    await expect(toggle).toBeFocused();
  });

  test('the current route is marked for assistive technology', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/services');
    await expect(page.getByRole('link', { name: 'Services' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  test('the persistent CTA reaches the contact page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: 'Talk to a partner' }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});

test.describe('shared component styles are defined', () => {
  // Tailwind cannot warn about a class that is neither a utility nor defined in
  // globals.css, so each shared class is asserted to produce real computed style
  test('.container-editorial gutters the page', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const style = await page.locator('.container-editorial').first().evaluate((el) => {
      const s = getComputedStyle(el);
      return { paddingX: parseFloat(s.paddingLeft), maxWidth: parseFloat(s.maxWidth) };
    });
    expect(style.paddingX).toBe(64);
    expect(style.maxWidth).toBe(1440);
  });

  test('.section-block rules off the band above it', async ({ page }) => {
    await page.goto('/');
    const style = await page.locator('.section-block').first().evaluate((el) => {
      const s = getComputedStyle(el);
      return { borderTop: parseFloat(s.borderTopWidth), paddingTop: parseFloat(s.paddingTop) };
    });
    expect(style.borderTop).toBeGreaterThan(0);
    expect(style.paddingTop).toBeGreaterThan(0);
  });

  test('.eyebrow is a spaced uppercase accent label', async ({ page }) => {
    await page.goto('/');
    const style = await page.locator('.eyebrow').first().evaluate((el) => {
      const s = getComputedStyle(el);
      return {
        transform: s.textTransform,
        tracking: parseFloat(s.letterSpacing),
        weight: Number(s.fontWeight),
        color: s.color,
      };
    });
    expect(style.transform).toBe('uppercase');
    expect(style.tracking).toBeGreaterThan(0);
    expect(style.weight).toBeGreaterThanOrEqual(600);
    expect(style.color).toBe('rgb(154, 75, 18)');
  });

  test('.btn-solid is an ink pill with paper text', async ({ page }) => {
    await page.goto('/');
    const style = await page.locator('.btn-solid').first().evaluate((el) => {
      const s = getComputedStyle(el);
      return {
        radius: parseFloat(s.borderTopLeftRadius),
        paddingX: parseFloat(s.paddingLeft),
        background: s.backgroundColor,
        color: s.color,
      };
    });
    expect(style.radius).toBeGreaterThan(50);
    expect(style.paddingX).toBeGreaterThan(0);
    expect(style.background).toBe('rgb(28, 25, 23)');
    expect(style.color).toBe('rgb(250, 247, 242)');
  });

  test('.btn-outline is an outlined pill', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');
    const style = await page.locator('.btn-outline').first().evaluate((el) => {
      const s = getComputedStyle(el);
      return {
        radius: parseFloat(s.borderTopLeftRadius),
        borderWidth: parseFloat(s.borderTopWidth),
        color: s.color,
      };
    });
    expect(style.radius).toBeGreaterThan(50);
    expect(style.borderWidth).toBeGreaterThan(0);
    expect(style.color).toBe('rgb(28, 25, 23)');
  });

  test('.link-accent is underlined and accented', async ({ page }) => {
    await page.goto('/');
    const style = await page.locator('.link-accent').first().evaluate((el) => {
      const s = getComputedStyle(el);
      return { color: s.color, decoration: s.textDecorationLine };
    });
    expect(style.color).toBe('rgb(154, 75, 18)');
    expect(style.decoration).toContain('underline');
  });

  test('.rule-item carries a hairline above its heading', async ({ page }) => {
    await page.goto('/');
    const style = await page.locator('.rule-item').first().evaluate((el) => {
      const s = getComputedStyle(el);
      return { borderTop: parseFloat(s.borderTopWidth), paddingTop: parseFloat(s.paddingTop) };
    });
    expect(style.borderTop).toBeGreaterThan(0);
    expect(style.paddingTop).toBeGreaterThan(0);
  });

  test('the heading and body scales are ordered', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/contact');

    const sizes = await page.evaluate(() => {
      const size = (sel: string) =>
        parseFloat(getComputedStyle(document.querySelector(sel)!).fontSize);
      return {
        h1: size('h1'),
        item: size('.heading-item'),
        lead: size('.body-lead'),
        copy: size('.body-copy'),
      };
    });

    expect(sizes.h1).toBeGreaterThan(sizes.item);
    expect(sizes.item).toBeGreaterThan(sizes.lead);
    expect(sizes.lead).toBeGreaterThan(sizes.copy);
  });

  test('.heading-section sits between the page title and item headings', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const sizes = await page.evaluate(() => {
      const size = (sel: string) =>
        parseFloat(getComputedStyle(document.querySelector(sel)!).fontSize);
      return { h1: size('h1'), section: size('.heading-section'), item: size('.heading-item') };
    });
    expect(sizes.section).toBeLessThan(sizes.h1);
    expect(sizes.section).toBeGreaterThan(sizes.item);
  });
});

test.describe('type', () => {
  test('headings are set in the serif and body copy in Inter', async ({ page }) => {
    await page.goto('/');
    const fonts = await page.evaluate(() => ({
      heading: getComputedStyle(document.querySelector('h1')!).fontFamily,
      body: getComputedStyle(document.body).fontFamily,
    }));
    expect(fonts.heading).toMatch(/Instrument_Serif/i);
    expect(fonts.body).toMatch(/Inter/i);
  });
});

test.describe('colour', () => {
  test('the accent clears WCAG AA on paper', async () => {
    expect(contrastRatio(ACCENT, PAPER)).toBeGreaterThanOrEqual(4.5);
  });

  test('body copy clears WCAG AA against the page', async ({ page }) => {
    await page.goto('/');

    const samples = await page.evaluate(() => {
      const parse = (s: string) => s.match(/[\d.]+/g)!.map(Number);
      const selectors = ['.body-lead', '.body-copy', 'footer p', '.eyebrow'];
      return selectors.map((selector) => {
        const el = document.querySelector(selector)!;
        let node: Element | null = el;
        let layer = [255, 255, 255];
        while (node) {
          const raw = parse(getComputedStyle(node).backgroundColor);
          const alpha = raw[3] === undefined ? 1 : raw[3];
          if (alpha > 0) {
            layer = [0, 1, 2].map((i) => raw[i] * alpha + 255 * (1 - alpha));
            break;
          }
          node = node.parentElement;
        }
        return { selector, fg: parse(getComputedStyle(el).color).slice(0, 3), bg: layer };
      });
    });

    for (const sample of samples) {
      expect(contrastRatio(sample.fg, sample.bg), `${sample.selector} contrast`).toBeGreaterThanOrEqual(4.5);
    }
  });
});

test.describe('footer', () => {
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
    await expect(page.locator('footer p').first()).toHaveText('© 2031 2ML LLC · San Francisco');
  });

  test('static export ships a stale year that the client corrects', async ({ request }) => {
    const html = await (await request.get('/')).text();

    // The exported HTML is frozen at build time; the assertion above proves the
    // rendered page no longer depends on it
    expect(html).toContain('2ML LLC');
    expect(html).toMatch(/©\s*(<!--[^>]*-->\s*)?\d{4}/);
  });

  test('the contact address is reachable and on the right domain', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer').getByRole('link', { name: 'info@2ml.ai' })).toHaveAttribute(
      'href',
      'mailto:info@2ml.ai',
    );
  });
});

test.describe('settled content decisions', () => {
  test('Home presents three distinct engagements and leads its proof with speed', async ({ page }) => {
    await page.goto('/');

    const main = page.locator('main');
    for (const heading of [
      'A voice product, shaped and shipped alongside its founders',
      'A working agent in three days, leading their engineers through the build',
      'A clinical assessment, rebuilt as software',
    ]) {
      await expect(main.getByRole('heading', { name: heading })).toBeVisible();
    }
    await expect(main.getByText('2,600+', { exact: true })).toBeVisible();
    await expect(main.getByText('3 weeks to a speaking voice-AI prototype. 6 to an MVP.')).toBeVisible();
    await expect(main.getByText(/Two pilots followed, and they kept us on\. Nielsen/)).toBeVisible();
  });

  test('Work renders the three engagements as equal rows with the settled facts', async ({ page }) => {
    await page.goto('/work');

    const rows = page.locator('main > section.section-block');
    await expect(rows).toHaveCount(3);
    await expect(rows.nth(0).getByText('3 wks', { exact: true })).toBeVisible();
    await expect(rows.nth(1).getByText('3 days', { exact: true })).toBeVisible();
    await expect(rows.nth(2).getByText('2,600+', { exact: true })).toBeVisible();
    await expect(rows.nth(1)).toContainText('foundation on day one, alone');
    await expect(rows.nth(1)).toContainText('preliminary commitment');
    await expect(rows.nth(2)).toContainText('FERPA-grade data');

    const publicCopy = await page.locator('main').innerText();
    expect(publicCopy).not.toMatch(/4,000|HIPAA|\$\d/);
  });

  test('Services and Contact show the approved removals and location', async ({ page }) => {
    await page.goto('/services');
    await expect(page.getByRole('heading', { level: 1, name: 'What we build' })).toBeVisible();
    await expect(page.locator('main')).not.toContainText('24/7 customer support');

    await page.goto('/contact');
    await expect(page.locator('main')).toContainText('San Francisco, California');
    await expect(page.locator('main')).not.toContainText('Bay Area');
  });
});

test.describe('metadata', () => {
  const expected = {
    '/': {
      title: '2ML | The right thing, built well.',
      description:
        'We are two builders with product judgment, architecture and engineering in the same heads. We ship AI systems from prototype to production without a hand-off chain, because the people who understand your problem are the people who build it.',
    },
    '/work': {
      title: 'Work | 2ML',
      description:
        'Three engagements, three different problems: a voice product shaped alongside its founders, a working agent in three days, and a clinical assessment rebuilt as software.',
    },
    '/services': {
      title: 'Services | 2ML',
      description:
        'Agents that work inside your systems, AI inside your product, a plan and a team that can execute it, and a fractional AI lead for small teams.',
    },
    '/about': {
      title: 'About | 2ML',
      description:
        'We are a California-based AI and data engineering consulting firm dedicated to implementing state-of-the-art AI solutions for businesses.',
    },
    '/contact': {
      title: 'Contact | 2ML',
      description:
        'Get in touch to discuss how we can help implement AI solutions for your business. A partner replies within one business day.',
    },
  };

  for (const [route, metadata] of Object.entries(expected)) {
    test(`${route} carries accurate page and social metadata`, async ({ page }) => {
      await page.goto(route);
      await expect(page).toHaveTitle(metadata.title);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        'content',
        metadata.description,
      );
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
        'content',
        metadata.title,
      );
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
        'content',
        metadata.description,
      );
      const openGraphUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
      expect(new URL(openGraphUrl!).href).toBe(new URL(route, 'https://2ml.ai').href);
      await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute(
        'content',
        'https://2ml.ai/images/og.png',
      );
      await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
        'content',
        metadata.title,
      );
      await expect(page.locator('meta[name="twitter:description"]')).toHaveAttribute(
        'content',
        metadata.description,
      );
      await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
        'content',
        'https://2ml.ai/images/og.png',
      );
    });
  }

  test('the Open Graph image exists', async ({ request }) => {
    const response = await request.get('/images/og.png');
    expect(response.status()).toBe(200);
  });
});

test.describe('contact form', () => {
  test('submits to Formspree and confirms success', async ({ page }) => {
    let submitted: Record<string, string> | undefined;
    await page.route('https://formspree.io/f/meoelkow', async (route) => {
      submitted = route.request().postDataJSON();
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    });

    await page.goto('/contact');
    await page.getByLabel('Name').fill('Taylor Example');
    await page.getByLabel('Email').fill('taylor@example.com');
    await page.getByLabel('Company').fill('Example Co');
    await page.getByLabel('Message').fill('Help us build an agentic system.');
    await page.getByRole('button', { name: 'Send Message' }).click();

    await expect(page.getByText("Thank you for your message! We'll get back to you soon.")).toBeVisible();
    expect(submitted).toEqual({
      name: 'Taylor Example',
      email: 'taylor@example.com',
      company: 'Example Co',
      message: 'Help us build an agentic system.',
    });
    await expect(page.getByLabel('Name')).toHaveValue('');
    await expect(page.getByLabel('Email')).toHaveValue('');
    await expect(page.getByLabel('Company')).toHaveValue('');
    await expect(page.getByLabel('Message')).toHaveValue('');
  });
});

test.describe('removed surfaces', () => {
  test('the placeholder case-studies route is gone', async ({ request }) => {
    const response = await request.get('/case-studies');
    expect(response.status()).toBe(404);
  });

  test('a missing page still renders on paper, with the footer', async ({ page }) => {
    await page.goto('/case-studies');
    await expect(page.getByRole('heading', { name: '404' })).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    const background = await page.evaluate(
      () => getComputedStyle(document.body).backgroundColor,
    );
    expect(background).toBe('rgb(250, 247, 242)');
  });
});

test.describe('motion', () => {
  test('transitions collapse when the visitor asks for less motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    const duration = await page
      .locator('.btn-solid')
      .first()
      .evaluate((el) => getComputedStyle(el).transitionDuration);
    expect(parseFloat(duration)).toBeLessThan(0.05);
  });
});
