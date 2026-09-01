import Image from 'next/image';

const partners = [
  {
    name: 'Zach Landes',
    image: '/images/zach.png',
    bio: 'Engineer, product manager, former economist. First employee at Trumpet, acquired by OpenTable; product leader at Walmart.com; helped architect a $100M ARR metadata platform at Nielsen.',
  },
  {
    name: 'Kevin Juszczyk',
    image: '/images/kevin.png',
    bio: "Decades of software, data and systems architecture. CTO at Health Decisions, two patents in patient data protection; staff engineer on Nielsen's global metadata platform on AWS.",
  },
];

export default function WhoDoesTheWork() {
  return (
    <section className="section-block">
      <div className="container-editorial grid gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-2 lg:col-span-4 lg:gap-3">
          <h2 className="heading-section">Who does the work</h2>
          <p className="body-copy">The two of us. When you are working out what to build and how, you are working with us directly.</p>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 sm:gap-10 lg:col-span-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col gap-3 lg:gap-3.5">
              <Image
                src={partner.image}
                alt={partner.name}
                width={120}
                height={120}
                className="h-24 w-24 rounded-full object-cover lg:h-[120px] lg:w-[120px]"
              />
              <h3 className="text-[26px] leading-[1.15] lg:text-[28px]">{partner.name}</h3>
              <p className="body-copy leading-[1.65]">{partner.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
