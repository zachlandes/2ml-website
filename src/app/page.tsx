import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <Image 
                src="/images/2ml_logo.png"
                alt="Company Logo"
                width={160}
                height={160}
                className="mx-auto hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="mb-6">
              <span className="badge bg-primary-100 text-primary-800">
                Boutique Focus • Enterprise Capabilities
              </span>
            </div>
            <h1 className="heading-xl mb-6">
              AI Solutions Built for Scale
            </h1>
            <p className="text-body mb-8 text-lg">
              We're a founder-led AI firm with the ability to scale teams to meet project demands. From rapid prototypes to enterprise deployments - we bring the right expertise for your challenge.
            </p>
            <div className="flex items-center justify-center gap-x-4">
              <Link href="/services" className="btn-primary">
                Our Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Expertise section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Trusted AI Engineering</h2>
            <p className="text-body text-lg">
              {30}+ years combined experience building production data and AI systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
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
            <div className="card p-6">
              <h3 className="heading-md mb-3 text-primary-600">Cloud</h3>
              <div className="space-y-2 text-base">
                <div className="flex items-baseline gap-2">
                  <span>•</span>
                  <span>AWS/GCP managed services</span>
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
            <div className="card p-6">
              <h3 className="heading-md mb-3 text-primary-600">Data</h3>
              <div className="space-y-2 text-base">
                <div className="flex items-baseline gap-2">
                  <span>•</span>
                  <span>Vector databases</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span>•</span>
                  <span>Real-time pipelines</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span>•</span>
                  <span>Enterprise security</span>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <h3 className="heading-md mb-3 text-primary-600">MLOps</h3>
              <div className="space-y-2 text-base">
                <div className="flex items-baseline gap-2">
                  <span>•</span>
                  <span>CI/CD pipelines</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span>•</span>
                  <span>Performance monitoring</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span>•</span>
                  <span>Drift detection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="mt-12 text-center bg-white p-6 rounded-xl">
            <h3 className="heading-md mb-4">Immediate Impact</h3>
            <div className="text-body mb-6 max-w-2xl mx-auto">
              <p className="mb-3">Built a production-ready voice AI platform featuring:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="badge bg-gray-100 text-gray-700">State-of-the-art speech chatbot</span>
                <span className="badge bg-gray-100 text-gray-700">Real-time AI evaluations</span>
                <span className="badge bg-gray-100 text-gray-700">Scalable cloud architecture</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-primary-50 p-4 rounded-lg flex flex-col items-center">
                <div className="heading-lg">3</div>
                <div className="text-sm mt-1">Weeks to Prototype</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg flex flex-col items-center">
                <div className="heading-lg">2</div>
                <div className="text-sm mt-1">Strategic Pilots</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg flex flex-col items-center">
                <div className="heading-lg">6</div>
                <div className="text-sm mt-1">Weeks to MVP</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg flex flex-col items-center">
                <div className="heading-lg">2</div>
                <div className="text-sm mt-1">Follow-on Contracts</div>
              </div>
            </div>
            <p className="text-body mb-4">
              Our results-driven approach led to:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="badge bg-gray-100 text-gray-700">Repeat engagements</span>
              <span className="badge bg-gray-100 text-gray-700">Technical validation</span>
              <span className="badge bg-gray-100 text-gray-700">Ethical alignment</span>
              <span className="badge bg-gray-100 text-gray-700">Production readiness</span>
            </div>
            <Link href="/case-studies/voice-ai" className="btn-secondary">
              Read Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Our Expertise</h2>
            <p className="text-body">
              We bring years of experience in AI and data engineering to help businesses implement practical, ethical, and powerful AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service cards */}
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">RAG Systems</h3>
              <p className="text-body">
                Custom Retrieval-Augmented Generation systems for enterprise knowledge bases and documentation.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">AI Chatbots</h3>
              <p className="text-body">
                Intelligent voice and text chatbots powered by state-of-the-art language models.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">Data Engineering</h3>
              <p className="text-body">
                Production-ready data infrastructure that scales with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us section */}
      <section className="section-padding bg-primary-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Why Choose Us</h2>
            <p className="text-body">
              We combine deep technical expertise with a friendly, no-nonsense approach to deliver high-value solutions that work in production.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">Expertise & Experience</h3>
              <p className="text-body">
                Our team brings years of experience in implementing AI solutions across various industries.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">Ethical AI</h3>
              <p className="text-body">
                We prioritize responsible AI development, ensuring solutions that are both powerful and ethically sound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <Testimonials />

      {/* Team Approach section */}
      <section className="section-padding bg-white">
        <div className="container-width text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg mb-6">Senior-Led, Scalable Execution</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-4">
                <div className="text-4xl font-bold mb-2">2</div>
                <div className="font-medium">Founding Partners</div>
                <p className="text-sm mt-2">Hands-on technical leadership</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="font-medium">Core Network</div>
                <p className="text-sm mt-2">Specialist AI engineers & architects</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="font-medium">Flexibility</div>
                <p className="text-sm mt-2">Scale up/down as needed</p>
              </div>
            </div>
            <p className="text-body">
              Get the attention of a boutique firm with the resources of a large agency. Our network of trusted specialists allows us to right-size teams for every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-primary-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to Transform Your Business?</h2>
            <p className="text-body mb-8">
              Let's discuss how we can help implement AI solutions that drive real value for your organization.
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

