import { BaseSectionProps } from '@/types/section';

interface ServicesOverviewProps extends BaseSectionProps {
  variant?: 'default' | 'alternate';
}

export default function ServicesOverview({ variant = 'default' }: ServicesOverviewProps) {
  const isAlternate = variant === 'alternate';
  
  return (
    <section className={`section-padding ${isAlternate ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Enterprise-Ready AI Solutions</h2>
          <p className="text-body">
            We deliver scalable, production-grade AI solutions that drive real business value.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={isAlternate ? 'card-on-gray' : 'card-on-white'}>
            <h3 className="heading-md mb-3 text-primary-600">Proven Expertise</h3>
            <p className="text-body">
              Our experienced engineers have delivered AI & data solutions for industry leaders like OpenTable, Walmart, and Nielsen.
            </p>
          </div>
          <div className={isAlternate ? 'card-on-gray' : 'card-on-white'}>
            <h3 className="heading-md mb-3 text-primary-600">Rapid Implementation</h3>
            <p className="text-body">
              Get to market quickly with our proven development process, from initial concept to production deployment.
            </p>
          </div>
          <div className={isAlternate ? 'card-on-gray' : 'card-on-white'}>
            <h3 className="heading-md mb-3 text-primary-600">Scalable Solutions</h3>
            <p className="text-body">
              Enterprise-grade infrastructure that grows with your business, handling millions of requests reliably.
            </p>
          </div>
          <div className={isAlternate ? 'card-on-gray' : 'card-on-white'}>
            <h3 className="heading-md mb-3 text-primary-600">Strategic Partnership</h3>
            <p className="text-body">
              Beyond development, we help build your team's AI capabilities through hands-on training and strategic guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 