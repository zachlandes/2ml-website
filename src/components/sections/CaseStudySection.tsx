import Link from 'next/link';
import { BaseSectionProps } from '@/types/section';

interface CaseStudySectionProps extends BaseSectionProps {
  // Add any CaseStudy-specific props here
}

export default function CaseStudySection({ variant = 'default' }: CaseStudySectionProps) {
  const isAlternate = variant === 'alternate';
  
  return (
    <section className={`section-padding ${isAlternate ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm text-accent-600 font-medium uppercase tracking-wider block mb-2">Case Study</span>
          <h2 className="heading-lg mb-6">Immediate Impact</h2>
          <div className="text-body mb-8">
            <p className="mb-6">
              For a leading enterprise client, we built and deployed a production-ready voice AI platform featuring:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="px-4 py-2 rounded-lg bg-primary-50 border border-primary-100 text-primary-700 font-medium">
                State-of-the-art speech chatbot
              </span>
              <span className="px-4 py-2 rounded-lg bg-primary-50 border border-primary-100 text-primary-700 font-medium">
                Real-time AI evaluations
              </span>
              <span className="px-4 py-2 rounded-lg bg-primary-50 border border-primary-100 text-primary-700 font-medium">
                Scalable cloud architecture
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className={isAlternate ? 'stats-card-on-gray' : 'stats-card-on-white'}>
              <div className="heading-lg text-primary-600">3</div>
              <div className="text-sm mt-1 text-primary-700">Weeks to Prototype</div>
            </div>
            <div className={isAlternate ? 'stats-card-on-gray' : 'stats-card-on-white'}>
              <div className="heading-lg text-primary-600">2</div>
              <div className="text-sm mt-1 text-primary-700">Strategic Pilots</div>
            </div>
            <div className={isAlternate ? 'stats-card-on-gray' : 'stats-card-on-white'}>
              <div className="heading-lg text-primary-600">6</div>
              <div className="text-sm mt-1 text-primary-700">Weeks to MVP</div>
            </div>
            <div className={isAlternate ? 'stats-card-on-gray' : 'stats-card-on-white'}>
              <div className="heading-lg text-primary-600">2</div>
              <div className="text-sm mt-1 text-primary-700">Follow-on Contracts</div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-body mb-6">
              Our results-driven approach led to:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="badge bg-accent-50 text-accent-700">Repeat engagements</span>
              <span className="badge bg-accent-50 text-accent-700">Technical validation</span>
              <span className="badge bg-accent-50 text-accent-700">Ethical alignment</span>
              <span className="badge bg-accent-50 text-accent-700">Production readiness</span>
            </div>
            <Link href="/case-studies/voice-ai" className="btn-secondary">
              Read Case Study →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 