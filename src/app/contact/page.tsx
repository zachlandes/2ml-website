import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch to discuss how we can help implement AI solutions for your business. A partner replies within one business day.',
};

export default function Contact() {
  return (
    <>
      <section className="container-editorial flex flex-col gap-4 pb-10 pt-14 lg:gap-5 lg:pb-16 lg:pt-24">
        <h1 className="max-w-[800px] text-[40px] leading-[1.05] tracking-[-0.02em] lg:text-[56px]">
          Tell us what you&rsquo;re trying to build.
        </h1>
        <p className="body-lead max-w-[720px]">A partner replies within one business day.</p>
      </section>

      <section className="section-block">
        <div className="container-editorial grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-8 border-t border-rule pt-8 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="flex flex-col gap-2">
              <h2 className="heading-item">Office Location</h2>
              <p className="body-copy">
                San Francisco Bay Area, California
                <br />
                United States
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="heading-item">Contact Info</h2>
              <p className="body-copy">
                Email:{' '}
                <a href="mailto:info@2ml.ai" className="link-accent">
                  info@2ml.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
