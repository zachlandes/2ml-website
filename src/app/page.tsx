import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Building State-of-the-Art AI Solutions
            </h1>
            <p className="text-body mb-8 text-lg">
              We implement cutting-edge AI solutions for businesses, from intelligent RAG systems and chatbots to production-ready data lakes and AI-powered applications.
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

      {/* Client Logos section */}
      <ClientLogos />

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
