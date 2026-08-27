import Link from 'next/link';
import { engagements } from '@/content/work';

export default function Hero() {
  return (
    <section className="container-editorial grid gap-6 pb-10 pt-14 lg:grid-cols-12 lg:items-end lg:pb-20 lg:pt-[120px]">
      <div className="flex flex-col gap-5 lg:col-span-8 lg:gap-7">
        <h1 className="text-[48px] leading-[1.0] tracking-[-0.02em] sm:text-[64px] lg:text-[84px]">
          The right thing, <em className="text-accent">built well.</em>
        </h1>
        <p className="body-lead max-w-[640px]">
          We are two builders with product judgment, architecture and engineering in the same heads.
          We ship AI systems from prototype to production without a hand-off chain, because the people
          who understand your problem are the people who build it.
        </p>
        <div className="mt-1 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center sm:gap-4 lg:mt-2">
          <Link href="/contact" className="btn-solid">
            Talk to a partner
          </Link>
          <Link href="/work" className="link-accent text-base">
            See the work
          </Link>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-5 border-t border-rule pt-6 lg:col-span-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
        <p className="eyebrow">Three engagements</p>
        <dl className="flex flex-col gap-3.5">
          {engagements
            .filter((entry) => entry.stat)
            .map((entry) => (
              <div key={entry.slug} className="flex items-baseline gap-3">
                <dt className="w-[5.5rem] shrink-0 font-serif text-[26px] leading-none text-ink lg:text-[28px]">
                  {entry.stat!.figure}
                </dt>
                <dd className="text-sm leading-[1.4] text-muted">{entry.stat!.label}</dd>
              </div>
            ))}
        </dl>
      </div>
    </section>
  );
}
