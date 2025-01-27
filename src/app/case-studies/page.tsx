import Link from 'next/link';

const caseStudies = [
  {
    title: 'Enterprise RAG System',
    industry: 'Technology',
    description: 'Implemented a custom RAG system for a Fortune 500 tech company, improving their internal documentation search accuracy by 85%.',
    results: [
      'Reduced average search time from 15 to 2 minutes',
      'Improved answer accuracy from 65% to 95%',
      'Integrated with existing knowledge base',
      'Custom-trained embeddings on technical documentation'
    ]
  },
  {
    title: 'Multilingual Customer Service Bot',
    industry: 'E-commerce',
    description: 'Developed an AI-powered customer service chatbot supporting 12 languages for a global e-commerce platform.',
    results: [
      'Handles 70% of customer queries automatically',
      'Supports 12 languages with 98% accuracy',
      'Reduced response time by 80%',
      'Seamless handoff to human agents'
    ]
  },
  {
    title: 'Data Lake Implementation',
    industry: 'Healthcare',
    description: 'Designed and implemented a HIPAA-compliant data lake for a healthcare provider, enabling advanced analytics and AI applications.',
    results: [
      'Consolidated data from 15 different sources',
      'Implemented real-time processing pipeline',
      'Reduced data access time by 90%',
      'Full HIPAA compliance maintained'
    ]
  }
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Case Studies</h1>
            <p className="text-body text-lg mb-0">
              Explore how we've helped businesses transform their operations with AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <div key={study.title} className="card">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="heading-md text-primary-600">{study.title}</h2>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <p className="text-body mb-6">
                      {study.description}
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="heading-sm mb-4 text-primary-600">Key Results</h3>
                    <ul className="space-y-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-primary-600">•</span>
                          <span className="text-body">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-primary-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to Transform Your Business?</h2>
            <p className="text-body mb-8">
              Let's discuss how we can help you achieve similar results with AI solutions tailored to your needs.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 