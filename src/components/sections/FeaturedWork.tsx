import Link from 'next/link';

const highlights = [
  {
    title: 'Speech agent',
    detail: 'Low-latency, interruptible, grounded in their data.',
  },
  {
    title: 'Live evaluations',
    detail: 'Every conversation scored, so the pilot produced evidence.',
  },
  {
    title: 'Built to hand over',
    detail: 'Infrastructure as code, tests, documentation.',
  },
];

export default function FeaturedWork() {
  return (
    <section className="section-block">
      <div className="container-editorial grid gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-3 lg:col-span-4">
          <p className="eyebrow">Featured work</p>
          <h2 className="heading-section">Voice AI, from open question to production</h2>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-8">
          <p className="max-w-[720px] text-base leading-[1.65] text-ink-soft lg:text-[19px]">
            A large enterprise needed to know whether realtime voice AI could work for them before
            committing budget. In three weeks they had a speaking prototype with live evaluations; in
            six, an MVP on scalable cloud infrastructure. Two pilots followed, then two further
            contracts.
          </p>

          <div className="grid gap-3.5 border-t border-rule pt-[18px] sm:grid-cols-3 sm:gap-6 sm:pt-6">
            {highlights.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <span className="font-serif text-[21px] text-ink lg:text-[22px]">{item.title}</span>
                <span className="text-sm leading-[1.55] text-muted-faint">{item.detail}</span>
              </div>
            ))}
          </div>

          <p className="max-w-[720px] text-[15px] leading-[1.65] text-muted lg:text-base">
            <strong className="font-semibold text-ink">And an 11-month engagement</strong> inside an
            organisation with no in-house technology function: translating complex domain requirements
            and handling FERPA-grade sensitive data.{' '}
            <Link href="/work" className="link-accent whitespace-nowrap">
              Read both →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
