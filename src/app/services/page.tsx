import Link from 'next/link';

export default function Services() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-body text-lg mb-0">
              We offer comprehensive AI and data engineering solutions to help businesses leverage the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Main services section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h2 className="heading-md mb-4 text-primary-600">RAG Systems</h2>
              <p className="text-body mb-4">
                Custom Retrieval-Augmented Generation systems for enterprise knowledge bases and documentation.
              </p>
              <ul className="text-body space-y-2">
                <li>• Document processing and indexing</li>
                <li>• Custom embedding models</li>
                <li>• Semantic search optimization</li>
                <li>• Integration with LLMs</li>
              </ul>
            </div>
            
            <div className="card">
              <h2 className="heading-md mb-4 text-primary-600">AI Chatbots</h2>
              <p className="text-body mb-4">
                Intelligent voice and text chatbots powered by state-of-the-art language models.
              </p>
              <ul className="text-body space-y-2">
                <li>• Custom LLM fine-tuning</li>
                <li>• Voice recognition integration</li>
                <li>• Multi-language support</li>
                <li>• Enterprise security compliance</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="heading-md mb-4 text-primary-600">Data Engineering</h2>
              <p className="text-body mb-4">
                Production-ready data infrastructure that scales with your business needs.
              </p>
              <ul className="text-body space-y-2">
                <li>• Data lake architecture</li>
                <li>• ETL pipeline development</li>
                <li>• Real-time data processing</li>
                <li>• Data quality monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="section-padding bg-primary-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Our Process</h2>
            <p className="text-body">
              We follow a structured approach to ensure successful implementation of AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">1. Discovery</h3>
              <p className="text-body">
                Understanding your business needs and technical requirements.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">2. Design</h3>
              <p className="text-body">
                Creating a detailed solution architecture and implementation plan.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">3. Development</h3>
              <p className="text-body">
                Iterative implementation with regular feedback and testing.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">4. Deployment</h3>
              <p className="text-body">
                Production deployment with monitoring and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to Get Started?</h2>
            <p className="text-body mb-8">
              Contact us to discuss how we can help implement AI solutions that drive real value for your organization.
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