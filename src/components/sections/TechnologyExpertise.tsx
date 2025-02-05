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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Trusted AI Engineering</h2>
          <p className="text-body text-lg">
            {30}+ years combined experience building production data and AI systems
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={`card p-6 shadow-sm ${isAlternate ? 'bg-white' : 'bg-gray-50'}`}>
            <h3 className="heading-md mb-3 text-primary-600">AI Solutions</h3>
            <div className="space-y-2 text-base">
              <div className="flex items-baseline gap-2">
                <span>•</span>
                <span>Major APIs & open-source models<br />
                <span className="text-sm text-gray-600">(Llama, OpenAI, Anthropic)</span></span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>•</span>
                <span>Custom model development</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>•</span>
                <span>Performance optimization</span>
              </div>
            </div>
          </div>
          <div className={`card p-6 shadow-sm ${isAlternate ? 'bg-white' : 'bg-gray-50'}`}>
            <h3 className="heading-md mb-3 text-primary-600">Cloud</h3>
            <div className="space-y-2 text-base">
              <div className="flex items-baseline gap-2">
                <span>•</span>
                <span>AWS/GCP/Azure and neo-cloud managed services</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>•</span>
                <span>Serverless architectures</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>•</span>
                <span>Cost-efficient scaling</span>
              </div>
            </div>
          </div>
          <div className={`card p-6 shadow-sm ${isAlternate ? 'bg-white' : 'bg-gray-50'}`}>
            <h3 className="heading-md mb-3 text-primary-600">Data</h3>
            <div className="space-y-2 text-base">
              <div className="flex items-baseline gap-2">
                <span>•</span>
                <span>Data platforms</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>•</span>
                <span>Real-time pipelines & monitoring</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span>•</span>
                <span>Analytics and dashboards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 