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
          <h2 className="heading-lg mb-4">Our Expertise</h2>
          <p className="text-body">
            We bring years of experience in AI and data engineering to help businesses implement practical, ethical, and powerful AI solutions.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={isAlternate ? 'card-on-gray' : 'card-on-white'}>
            <h3 className="heading-md mb-3 text-primary-600">RAG Systems</h3>
            <p className="text-body">
              Custom Retrieval-Augmented Generation systems for enterprise knowledge bases and documentation.
            </p>
          </div>
          <div className={isAlternate ? 'card-on-gray' : 'card-on-white'}>
            <h3 className="heading-md mb-3 text-primary-600">AI Chatbots</h3>
            <p className="text-body">
              Intelligent voice and text chatbots powered by state-of-the-art language models.
            </p>
          </div>
          <div className={isAlternate ? 'card-on-gray' : 'card-on-white'}>
            <h3 className="heading-md mb-3 text-primary-600">Data Engineering</h3>
            <p className="text-body">
              Production-ready data infrastructure that scales with your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 