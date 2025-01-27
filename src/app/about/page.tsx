import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">About 2ML</h1>
            <p className="text-body text-lg mb-0">
              We are a California-based AI and data engineering consulting firm dedicated to implementing state-of-the-art AI solutions for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Approach section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h2 className="heading-md mb-4 text-primary-600">Our Mission</h2>
              <p className="text-body">
                To help businesses harness the power of AI through ethical, efficient, and practical implementations that drive real value.
              </p>
            </div>
            <div className="card">
              <h2 className="heading-md mb-4 text-primary-600">Our Approach</h2>
              <p className="text-body">
                We combine deep technical expertise with a friendly, no-nonsense approach to deliver high-value solutions that work in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section-padding bg-primary-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Our Values</h2>
            <p className="text-body">
              Our work is guided by a strong commitment to excellence and ethical AI development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">Excellence</h3>
              <p className="text-body">
                We strive for excellence in every solution we deliver, ensuring robust and scalable implementations.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">Ethics</h3>
              <p className="text-body">
                We prioritize ethical AI development, ensuring responsible and transparent solutions.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">Innovation</h3>
              <p className="text-body">
                We stay at the forefront of AI technology while maintaining practical, production-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to Work Together?</h2>
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