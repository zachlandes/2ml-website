import type { Metadata } from 'next';

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
  const socialTitle = `${title} | 2ML`;

  return {
    title,
    description,
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
