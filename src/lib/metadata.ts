import type { Metadata } from 'next';

export const siteUrl = 'https://2ml.ai';

// Every indexable route, for the sitemap
export const sitePaths = ['/', '/work', '/services', '/about', '/contact'] as const;

// A bare page name made 10-14 character titles; the location is the footer's own wording
// and makes no positioning claim, which stays the owner's to write
export const titleTemplate = '%s | 2ML · San Francisco';

const openGraphImage = {
  url: '/images/og.png',
  width: 1200,
  height: 630,
  alt: '2ML',
};

export function createPageMetadata(
  title: string,
  description: string,
  path: `/${string}`,
): Metadata {
  const socialTitle = titleTemplate.replace('%s', title);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      siteName: '2ML',
      title: socialTitle,
      description,
      url: path,
      images: [openGraphImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [openGraphImage.url],
    },
  };
}
