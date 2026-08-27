import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import WhatWeBuild from '@/components/sections/WhatWeBuild';
import WhoDoesTheWork from '@/components/sections/WhoDoesTheWork';
import ClosingCTA from '@/components/sections/ClosingCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <WhatWeBuild />
      <WhoDoesTheWork />
      <ClosingCTA />
    </>
  );
}
