import Link from 'next/link';
import { BaseSectionProps } from '@/types/section';

interface CTASectionProps extends BaseSectionProps {
  variant?: 'default' | 'alternate';
}

export default function CTASection({ variant = 'default' }: CTASectionProps) {
  const isAlternate = variant === 'alternate';
  
  return (
    <section className={`section-padding ${isAlternate ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`rounded-xl shadow-sm p-8 ${isAlternate ? 'bg-white' : 'bg-gray-50'}`}>
            <h2 className="heading-lg mb-4">Ready to Transform Your Business?</h2>
            <p className="text-body mb-8">
              Let's discuss how we can help implement AI solutions that drive real value for your organization.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 