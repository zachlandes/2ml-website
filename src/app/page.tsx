import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import WhatWeBuild from '@/components/sections/WhatWeBuild';
import WhoDoesTheWork from '@/components/sections/WhoDoesTheWork';
import ClosingCTA from '@/components/sections/ClosingCTA';
import { siteUrl } from '@/lib/metadata';

// Set here rather than in the layout, where the 404 page would inherit it and claim to be the homepage
export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

// Only facts the site already states; the partners' LinkedIn profiles are people, not the company,
// so there is no sameAs
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: '2ML',
      url: `${siteUrl}/`,
      logo: `${siteUrl}/images/2ml_mark.png`,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: '2ML',
      url: `${siteUrl}/`,
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <FeaturedWork />
      <WhatWeBuild />
      <WhoDoesTheWork />
      <ClosingCTA />
    </>
  );
}
