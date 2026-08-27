import Link from 'next/link';
import { alsoFeatured, featured } from '@/content/work';

export default function FeaturedWork() {
  return (
    <section className="section-block flex flex-col gap-12 lg:gap-14">
      <div className="container-editorial grid gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-3 lg:col-span-4">
          <p className="eyebrow">
            Featured work &middot; {featured.capability}
          </p>
          <p className="font-serif text-[17px] italic leading-[1.3] text-muted-faint lg:text-[19px]">
            {featured.problem}
          </p>
          <h2 className="heading-section">{featured.title}</h2>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-8">
          <p className="max-w-[720px] text-base leading-[1.65] text-ink-soft lg:text-[19px]">
            {featured.summary}
          </p>
          {featured.highlights ? (
            <div className="grid gap-3.5 border-t border-rule pt-[18px] sm:grid-cols-3 sm:gap-6 sm:pt-6">
              {featured.highlights.map((item) => (
                <div key={item.title} className="flex flex-col gap-1">
                  <span className="font-serif text-[21px] text-ink lg:text-[22px]">{item.title}</span>
                  <span className="text-sm leading-[1.55] text-muted-faint">{item.detail}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* The other two engagements are entries in their own right, not footnotes to the first */}
      <div className="container-editorial grid gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="flex flex-col gap-3 lg:col-span-4">
          <p className="eyebrow">Also</p>
          <p className="body-copy max-w-[360px]">Two more engagements, each a different kind of problem.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:col-span-8">
          {alsoFeatured.map((entry) => (
            <div key={entry.slug} className="flex flex-col gap-3.5 border-t border-ink pt-5">
              <p className="eyebrow">{entry.capability}</p>
              <p className="font-serif text-[17px] italic leading-[1.3] text-muted-faint">{entry.problem}</p>
              <h3 className="text-[26px] leading-[1.1] lg:text-[30px]">{entry.title}</h3>
              <p className="body-copy max-w-[520px]">{entry.summary}</p>
              {entry.stat ? (
                <p className="flex items-baseline gap-3 pt-1">
                  <span className="font-serif text-[36px] leading-none text-ink">{entry.stat.figure}</span>
                  <span className="text-[13px] text-muted">{entry.stat.label}</span>
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="container-editorial">
        <Link href="/work" className="link-accent whitespace-nowrap text-base">
          Read all three →
        </Link>
      </div>
    </section>
  );
}
