import Testimonials from '@/components/Testimonials';
import HeroSection from '@/components/sections/HeroSection';
import TechnologyExpertise from '@/components/sections/TechnologyExpertise';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import TeamApproach from '@/components/sections/TeamApproach';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechnologyExpertise />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <TeamApproach />
      <CTASection />
    </>
  );
}

