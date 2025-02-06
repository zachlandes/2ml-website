import Testimonials from '@/components/Testimonials';
import HeroSection from '@/components/sections/HeroSection';
import TechnologyExpertise from '@/components/sections/TechnologyExpertise';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import TeamApproach from '@/components/sections/TeamApproach';
import CTASection from '@/components/sections/CTASection';
import CaseStudySection from '@/components/sections/CaseStudySection';
import { SectionWrapper } from '@/components/sections/SectionWrapper';

const sections = [
  { Component: HeroSection },
  { Component: TechnologyExpertise },
  { Component: CaseStudySection },
  { Component: ServicesOverview },
  { Component: WhyChooseUs },
  { Component: CTASection },
];

export default function Home() {
  return <SectionWrapper sections={sections} />;
}

