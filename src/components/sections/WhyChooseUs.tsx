import { BaseSectionProps } from '@/types/section';

interface WhyChooseUsProps extends BaseSectionProps {
  // Add any WhyChooseUs-specific props here
}

export default function WhyChooseUs({ variant = 'default' }: WhyChooseUsProps) {
  const isAlternate = variant === 'alternate';
  
  return (
    <section className={`section-padding ${isAlternate ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Why Choose Us</h2>
          <p className="text-body">
            We combine deep technical expertise with a friendly, no-nonsense approach to deliver high-value solutions that work in production.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={isAlternate ? 'card-on-gray' : 'card-on-white'}>
            <h3 className="heading-md mb-3 text-primary-600">Expertise & Experience</h3>
            <p className="text-body">
              Our team brings years of experience in implementing AI & data solutions across various industries.
            </p>
          </div>
          <div className={isAlternate ? 'card-on-gray' : 'card-on-white'}>
            <h3 className="heading-md mb-3 text-primary-600">Ethical AI</h3>
            <p className="text-body">
              We prioritize responsible AI development, ensuring solutions that are both powerful and ethically sound.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 