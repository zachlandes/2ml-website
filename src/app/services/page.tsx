import ClosingCTA from '@/components/sections/ClosingCTA';
import { services } from '@/content/services';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Services',
  'Agents that work inside your systems, AI inside your product, a plan and a team that can execute it, and a fractional AI lead for small teams.',
  '/services',
);

export default function Services() {
  return (
    <>
      <section className="container-editorial flex flex-col gap-4 pb-10 pt-14 lg:gap-5 lg:pb-16 lg:pt-24">
        <h1 className="text-[40px] leading-[1.05] tracking-[-0.02em] lg:text-[60px]">What we build</h1>
      </section>

      <section className="section-block">
        <div className="container-editorial">
          <div className="grid max-w-[1180px] gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:gap-x-24">
            {services.map((service) => (
              <div key={service.title} className="rule-item">
                <h2 className="heading-item">{service.title}</h2>
                <p className="body-copy">{service.summary}</p>
                {service.details ? (
                  <ul className="mt-2 flex flex-col gap-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex gap-2.5 text-[15px] leading-[1.55] text-ink-soft">
                        <span aria-hidden="true" className="text-accent">
                          —
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
