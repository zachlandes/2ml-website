import type { Metadata } from 'next';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import ClosingCTA from '@/components/sections/ClosingCTA';

export const metadata: Metadata = {
  title: 'About',
  description:
    'We are a California-based AI and data engineering consulting firm dedicated to implementing state-of-the-art AI solutions for businesses.',
};

const partners = [
  {
    name: 'Zach Landes',
    image: '/images/zach.png',
    linkedin: 'https://www.linkedin.com/in/zachlandes/',
    paragraphs: [
      'Zach is a founding partner of 2ML, a software engineer, product manager, and former economist with over a decade of experience in AI- and data-driven software.',
      'He began his career as the first employee at Trumpet (later Ness), an early AI-powered restaurant recommendation app that raised over $5 million in venture funding—including from former Google CEO Eric Schmidt—and won an Apple Best of the App Store award before being acquired by OpenTable. After earning an MSc in Economic History from the London School of Economics, Zach pursued economic research at UC Berkeley and UCLA, coauthoring work on social mobility that was featured in The Economist and cited by Nobel laureates.',
      'Returning to tech, he was a product leader on analytics at Walmart.com, then joined Nielsen as a self-taught software engineer, where he helped architect a $100M ARR metadata platform powering global video streaming. Beyond 2ML, Zach has served as Board President of a nonprofit health center, volunteers for social causes, and enjoys exploring new AI methods, rock climbing, and street photography. He lives in San Francisco.',
    ],
  },
  {
    name: 'Kevin Juszczyk',
    image: '/images/kevin.png',
    linkedin: 'https://www.linkedin.com/in/kevin-juszczyk-b9573531b/',
    paragraphs: [
      'Kevin Juszczyk is a founding partner of 2ML with decades of experience in software and database design and development, cloud and local IT systems design and administration.',
      "At Health Decisions, a medical claims audit firm where he was CTO, he migrated the company's process off of a mainframe/magnetic tape/COBOL platform to a modern Microsoft Windows PC platform, allowing the company to scale revenue over 20x. Kevin holds two patents related to protecting patient personally identifiable information and streamlining the workflow of health care providers when treating uninsured patients.",
      "Later, at Nielsen, Kevin was a key architect of the company's metadata globalization effort which expanded the video product reach to over 100 countries, while transitioning to a modern data platform on AWS using Spark, HDFS and HBase. As a Staff Engineer, he on-boarded new developers, refined the team's internal workflow, and provided crucial insight and guidance to the product team. He is also an electrical engineer and the co-founder of a successful hardware synthesizer company, Groove Synthesis.",
    ],
  },
];

export default function About() {
  return (
    <>
      <section className="container-editorial flex flex-col gap-4 pb-10 pt-14 lg:gap-5 lg:pb-16 lg:pt-24">
        <h1 className="text-[40px] leading-[1.05] tracking-[-0.02em] lg:text-[60px]">About 2ML</h1>
        <p className="body-lead max-w-[720px]">
          We are a California-based AI and data engineering consulting firm dedicated to implementing
          state-of-the-art AI solutions for businesses.
        </p>
      </section>

      <section className="section-block">
        <div className="container-editorial grid gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-2 lg:col-span-4 lg:gap-3">
            <h2 className="heading-section">Who does the work</h2>
            <p className="body-copy">The two of us. Nobody else is between you and the code.</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-10 lg:col-span-8">
            {partners.map((partner) => (
              <div key={partner.name} className="flex h-full flex-col gap-3.5">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={120}
                  height={120}
                  className="h-24 w-24 rounded-full object-cover lg:h-[120px] lg:w-[120px]"
                />
                <h3 className="text-[26px] leading-[1.15] lg:text-[28px]">{partner.name}</h3>
                <div className="flex flex-col gap-3">
                  {partner.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="body-copy">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <a
                  href={partner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent mt-auto inline-flex w-fit items-center gap-2 pt-1 text-[15px] no-underline hover:underline"
                >
                  <Linkedin size={18} aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
