import { services } from '@/content/services';

export default function WhatWeBuild() {
  return (
    <section className="section-block">
      <div className="container-editorial grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="heading-section">What we build</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-8 lg:col-span-8 lg:gap-x-10 lg:gap-y-8">
          {services.map((service) => (
            <div key={service.title} className="rule-item">
              <h3 className="heading-item">{service.title}</h3>
              <p className="body-copy">{service.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
