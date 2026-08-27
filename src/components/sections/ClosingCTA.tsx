import Link from 'next/link';

export default function ClosingCTA() {
  return (
    <section className="border-t border-rule py-14 lg:py-24">
      <div className="container-editorial flex flex-col items-start gap-4 lg:gap-5">
        <h2 className="max-w-[800px] text-[40px] leading-[1.05] lg:text-[56px]">
          Tell us what you&rsquo;re trying to build.
        </h2>
        <p className="text-base text-muted lg:text-lg">A partner replies within one business day.</p>
        <Link href="/contact" className="btn-solid">
          Talk to a partner
        </Link>
      </div>
    </section>
  );
}
