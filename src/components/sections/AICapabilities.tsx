import Link from 'next/link';
import { BaseSectionProps } from '@/types/section';

interface TechnologyExpertiseProps extends BaseSectionProps {
  // Add any TechnologyExpertise-specific props here
}

export default function TechnologyExpertise({ variant = 'default' }: TechnologyExpertiseProps) {
  const isAlternate = variant === 'alternate';
  
  return (
    <section className={`section-padding ${isAlternate ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container-width">
        <h2 className="heading-lg text-center mb-12">Transform Your Business with AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="heading-md text-primary-600 mb-4">Intelligent Document Systems</h3>
            <p className="text-body">
              Turn your documentation into an interactive knowledge base that provides instant, accurate answers to your team and customers.
            </p>
          </div>
          
          <div className="card">
            <h3 className="heading-md text-primary-600 mb-4">Smart Process Automation</h3>
            <p className="text-body">
              Streamline operations with AI assistants that handle routine tasks and provide 24/7 customer support.
            </p>
          </div>
          
          <div className="card">
            <h3 className="heading-md text-primary-600 mb-4">AI-Enhanced Products</h3>
            <p className="text-body">
              Upgrade existing products or build new solutions with cutting-edge AI capabilities that drive real business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 