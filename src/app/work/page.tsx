import ClosingCTA from '@/components/sections/ClosingCTA';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Work',
  'A large enterprise needed to know whether realtime voice AI could work for them before committing budget. In three weeks they had a speaking prototype with live evaluations; in six, an MVP on scalable cloud infrastructure.',
  '/work',
);

const capabilities = [
  { title: 'Speech agent', detail: 'Low-latency, interruptible, grounded in their data.' },
  { title: 'Live evaluations', detail: 'Every conversation scored, so the pilot produced evidence.' },
  { title: 'Built to hand over', detail: 'Infrastructure as code, tests, documentation.' },
];

const milestones = [
  { figure: '3', label: 'Weeks to Prototype' },
  { figure: '6', label: 'Weeks to MVP' },
  { figure: '2', label: 'Strategic Pilots' },
  { figure: '2', label: 'Follow-on Contracts' },
];

const outcomes = [
  'Repeat engagements',
  'Technical validation',
  'Ethical alignment',
  'Production readiness',
];

export default function Work() {
  return (
    <>
      <section className="container-editorial flex flex-col gap-4 pb-10 pt-14 lg:gap-5 lg:pb-16 lg:pt-24">
        <p className="eyebrow">Featured work</p>
        <h1 className="max-w-[900px] text-[40px] leading-[1.05] tracking-[-0.02em] lg:text-[60px]">
          Voice AI, from open question to production
        </h1>
        <p className="body-lead max-w-[720px]">
          A large enterprise needed to know whether realtime voice AI could work for them before
          committing budget. In three weeks they had a speaking prototype with live evaluations; in
          six, an MVP on scalable cloud infrastructure. Two pilots followed, then two further
          contracts.
        </p>
      </section>

      <section className="section-block">
        <div className="container-editorial grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="heading-section">Immediate Impact</h2>
          </div>
          <div className="flex flex-col gap-10 lg:col-span-8 lg:gap-12">
            <p className="max-w-[720px] text-base leading-[1.65] text-ink-soft lg:text-[19px]">
              For a leading enterprise client, we built and deployed a production-ready full-stack app
              with realtime voice AI, featuring:
            </p>

            <div className="grid gap-3.5 border-t border-rule pt-[18px] sm:grid-cols-3 sm:gap-6 sm:pt-6">
              {capabilities.map((item) => (
                <div key={item.title} className="flex flex-col gap-1">
                  <span className="font-serif text-[21px] text-ink lg:text-[22px]">{item.title}</span>
                  <span className="text-sm leading-[1.55] text-muted-faint">{item.detail}</span>
                </div>
              ))}
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {milestones.map((milestone) => (
                <div key={milestone.label} className="flex flex-col gap-1 border-t border-ink pt-3">
                  <dt className="font-serif text-[40px] leading-none text-ink lg:text-[48px]">
                    {milestone.figure}
                  </dt>
                  <dd className="text-sm leading-[1.4] text-muted">{milestone.label}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-3">
              <p className="body-copy">Our results-driven approach led to:</p>
              <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="text-[15px] text-ink-soft">
                    <span aria-hidden="true" className="mr-2 text-accent">
                      —
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container-editorial grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">In practice</p>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-[720px] text-base leading-[1.65] text-muted lg:text-[19px]">
              <strong className="font-semibold text-ink">And an 11-month engagement</strong> inside an
              organisation with no in-house technology function: translating complex domain
              requirements and handling FERPA-grade sensitive data.
            </p>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
