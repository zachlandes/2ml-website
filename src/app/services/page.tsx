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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="card">
              <h2 className="heading-md text-sm sm:text-base lg:text-lg mb-4 text-primary-600">Chat with Your Documents</h2>
              <p className="text-body mb-6 text-gray-600">
                Transform your documentation into an intelligent chat system that provides instant, accurate answers.
              </p>
              <ul className="text-body space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Smart document understanding and organization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>AI-powered search that understands context (using RAG technology)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Natural conversations with your documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Seamless integration with leading AI models</span>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h2 className="heading-md text-sm sm:text-base lg:text-lg mb-4 text-primary-600">AI Assistants & Process Automation</h2>
              <p className="text-body mb-6 text-gray-600">
                Enhance customer support and streamline operations with intelligent AI agents that automate workflows.
              </p>
              <ul className="text-body space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>24/7 customer support with automated request routing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Workflow automation for common business processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Multi-language support and custom AI personalities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Automated task handling and response management</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="heading-md text-sm sm:text-base lg:text-lg mb-4 text-primary-600">AI-Powered Product Development</h2>
              <p className="text-body mb-6 text-gray-600">
                Transform your products with AI capabilities or build new AI-driven solutions from the ground up.
              </p>
              <ul className="text-body space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Custom AI features and product enhancements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Intelligent automation and decision systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Computer vision and natural language solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Scalable AI infrastructure and deployment</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="heading-md text-sm sm:text-base lg:text-lg mb-4 text-primary-600">AI Strategy & Team Development</h2>
              <p className="text-body mb-6 text-gray-600">
                Develop your organization's AI capabilities through strategic planning and hands-on training.
              </p>
              <ul className="text-body space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>AI readiness assessment and roadmap development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Technology selection and implementation planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>Custom training programs and workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 text-lg">•</span>
                  <span>ROI analysis and adoption best practices</span>
                </li>
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
              We follow a structured yet flexible approach that can be adapted to your timeline requirements - from rapid deployment to comprehensive enterprise rollouts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="card">
              <h3 className="heading-md text-sm sm:text-base lg:text-lg mb-3 text-primary-600 hyphens-none min-w-0">1.&nbsp;Discovery</h3>
              <p className="text-body">
                Understanding your business needs and technical requirements.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md text-sm sm:text-base lg:text-lg mb-3 text-primary-600 hyphens-none min-w-0">2.&nbsp;Design</h3>
              <p className="text-body">
                Creating a detailed solution architecture and implementation plan.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md text-sm sm:text-base lg:text-lg mb-3 text-primary-600 hyphens-none min-w-0">3.&nbsp;Development</h3>
              <p className="text-body">
                Iterative implementation with regular feedback and testing.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md text-sm sm:text-base lg:text-lg mb-3 text-primary-600 hyphens-none min-w-0">4.&nbsp;Deployment</h3>
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