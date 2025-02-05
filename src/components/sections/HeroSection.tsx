import Link from 'next/link';
import Image from 'next/image';
import { BaseSectionProps } from '@/types/section';

interface HeroSectionProps extends BaseSectionProps {
  // Add any HeroSection-specific props here
}

export default function HeroSection({ variant = 'default' }: HeroSectionProps) {
  const isAlternate = variant === 'alternate';
  
  return (
    <section className={`section-padding ${isAlternate ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Image 
              src="/images/2ml_logo.png"
              alt="Company Logo"
              width={160}
              height={160}
              className="mx-auto hover:scale-105 transition-transform"
              priority
            />
          </div>
          <div className="mb-6">
            <span className="badge bg-primary-50 text-primary-600">
              Boutique Focus • Enterprise Capabilities
            </span>
          </div>
          <h1 className="heading-xl mb-6">
            AI Solutions Built for Scale
          </h1>
          <p className="text-body mb-8 text-lg">
            We're a founder-led AI firm with the ability to scale teams to meet project demands. From rapid prototypes to enterprise deployments; from product management to implementing the latest AI research - we bring the right expertise for your challenge.
          </p>
          <div className="flex items-center justify-center gap-x-4">
            <Link href="/services" className="btn-primary">
              Our Services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 