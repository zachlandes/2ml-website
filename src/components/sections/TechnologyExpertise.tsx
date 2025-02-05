import Link from 'next/link';

export default function TechnologyExpertise() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Trusted AI Engineering</h2>
          <p className="text-body text-lg">
            {30}+ years combined experience building production data and AI systems
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="card bg-white p-6">
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
          <div className="card bg-white p-6">
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
          <div className="card bg-white p-6">
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

        {/* Case Study */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-md mb-4">Immediate Impact</h3>
            <div className="text-body mb-6 max-w-2xl mx-auto">
              <p className="mb-3">
                <span className="text-sm text-accent-600 font-medium uppercase tracking-wider block mb-2">Case Study</span>
                For a leading enterprise client, we built and deployed a production-ready voice AI platform featuring:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-primary-50 p-4 rounded-lg flex flex-col items-center">
                <div className="heading-lg text-primary-600">3</div>
                <div className="text-sm mt-1 text-primary-700">Weeks to Prototype</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg flex flex-col items-center">
                <div className="heading-lg text-primary-600">2</div>
                <div className="text-sm mt-1 text-primary-700">Strategic Pilots</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg flex flex-col items-center">
                <div className="heading-lg text-primary-600">6</div>
                <div className="text-sm mt-1 text-primary-700">Weeks to MVP</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg flex flex-col items-center">
                <div className="heading-lg text-primary-600">2</div>
                <div className="text-sm mt-1 text-primary-700">Follow-on Contracts</div>
              </div>
            </div>
            <p className="text-body mb-4">
              Our results-driven approach led to:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="badge bg-accent-50 text-accent-700">Repeat engagements</span>
              <span className="badge bg-accent-50 text-accent-700">Technical validation</span>
              <span className="badge bg-accent-50 text-accent-700">Ethical alignment</span>
              <span className="badge bg-accent-50 text-accent-700">Production readiness</span>
            </div>
            <div className="text-center">
              <Link href="/case-studies/voice-ai" className="btn-secondary">
                Read Case Study →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 