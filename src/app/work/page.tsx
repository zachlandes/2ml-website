import ClosingCTA from '@/components/sections/ClosingCTA';
import { createPageMetadata } from '@/lib/metadata';
import { engagements } from '@/content/work';

export const metadata = createPageMetadata(
  'Work',
  'Three engagements, three different problems: a voice-AI product, a working agent in three days, and a clinical assessment rebuilt as software.',
  '/work',
);

export default function Work() {
  return (
    <>
      <section className="container-editorial flex flex-col gap-4 pb-10 pt-14 lg:gap-5 lg:pb-16 lg:pt-24">
        <p className="eyebrow">Featured work</p>
        <h1 className="max-w-[900px] text-[40px] leading-[1.05] tracking-[-0.02em] lg:text-[60px]">
          Three engagements, three different problems
        </h1>
      </section>

      {engagements.map((entry) => (
        <section key={entry.slug} id={entry.slug} className="section-block">
          <div className="container-editorial grid gap-6 lg:grid-cols-12">
            <div className="flex flex-col gap-3 lg:col-span-4">
              <p className="eyebrow">{entry.capability}</p>
              <p className="font-serif text-[17px] italic leading-[1.3] text-muted-faint lg:text-[19px]">
                {entry.problem}
              </p>
              <h2 className="heading-section">{entry.title}</h2>
            </div>

            <div className="flex flex-col gap-8 lg:col-span-6">
              <p className="max-w-[720px] text-base leading-[1.65] text-ink-soft lg:text-[19px]">
                {entry.summary}
              </p>
              {entry.highlights ? (
                <div className="grid gap-3.5 border-t border-rule pt-[18px] sm:grid-cols-3 sm:gap-6 sm:pt-6">
                  {entry.highlights.map((item) => (
                    <div key={item.title} className="flex flex-col gap-1">
                      <span className="font-serif text-[21px] text-ink lg:text-[22px]">{item.title}</span>
                      <span className="text-sm leading-[1.55] text-muted-faint">{item.detail}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {entry.stat ? (
              <dl className="flex flex-col gap-1.5 self-start border-t border-ink pt-3 lg:col-span-2">
                <dt className="font-serif text-[40px] leading-none text-ink lg:text-[44px]">
                  {entry.stat.figure}
                </dt>
                <dd className="text-[13px] leading-[1.4] text-muted">{entry.stat.label}</dd>
              </dl>
            ) : null}
          </div>
        </section>
      ))}

      <ClosingCTA />
    </>
  );
}
