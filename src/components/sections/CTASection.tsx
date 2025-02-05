import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="heading-lg mb-4">Ready to Transform Your Business?</h2>
            <p className="text-body mb-8">
              Let's discuss how we can help implement AI solutions that drive real value for your organization.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 