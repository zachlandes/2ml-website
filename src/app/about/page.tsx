import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">About 2ML</h1>
            <p className="text-body text-lg mb-0">
              We are a California-based AI and data engineering consulting firm dedicated to implementing state-of-the-art AI solutions for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Approach section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h2 className="heading-md mb-4 text-primary-600">Our Mission</h2>
              <p className="text-body">
                To help businesses harness the power of AI through ethical, efficient, and practical implementations that drive real value.
              </p>
            </div>
            <div className="card">
              <h2 className="heading-md mb-4 text-primary-600">Our Approach</h2>
              <p className="text-body">
                We combine deep technical expertise with a friendly, no-nonsense approach to deliver high-value solutions that work in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section-padding bg-primary-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Our Values</h2>
            <p className="text-body">
              Our work is guided by a strong commitment to excellence and ethical AI development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">Excellence</h3>
              <p className="text-body">
                We strive for excellence in every solution we deliver, ensuring robust and scalable implementations.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">Ethics</h3>
              <p className="text-body">
                We prioritize ethical AI development, ensuring responsible and transparent solutions.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-md mb-3 text-primary-600">Innovation</h3>
              <p className="text-body">
                We stay at the forefront of AI technology while maintaining practical, production-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders / Team section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Meet Our Founders</h2>
            <p className="text-body">
              Our leadership team brings decades of combined experience in AI, data, and business strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Zach's Bio */}
            <div className="card flex flex-col items-center">
              <img
                src="/images/zach.png"
                alt="Zach Landes"
                className="rounded-full w-32 h-32 object-cover mb-4"
              />
              <h3 className="heading-md text-primary-600 mb-2">Zach Landes</h3>
              <div className="text-body text-left space-y-4">
                <p>
                  Zach is a founding partner of 2ML, a software engineer, product manager, and former economist with over a decade of experience in AI- and data-driven software.
                </p>
                
                <p>
                  He began his career as the first employee at Trumpet (later Ness), an early AI-powered restaurant recommendation app that raised over $5 million in venture funding—including from former Google CEO Eric Schmidt—and won an Apple Best of the App Store award before being acquired by OpenTable. After earning an MSc in Economic History from the London School of Economics, Zach pursued economic research at UC Berkeley and UCLA, coauthoring work on social mobility that was featured in The Economist and cited by Nobel laureates.
                </p>
                
                <p>
                  Returning to tech, he was a product leader on analytics at Walmart.com, then joined Nielsen as a self-taught software engineer, where he helped architect a $100M ARR metadata platform powering global video streaming. Beyond 2ML, Zach has served as Board President of a nonprofit health center, volunteers for social causes, and enjoys exploring new AI methods, rock climbing, and street photography. He lives in San Francisco.
                </p>
              </div>
              <Link 
                href="https://www.linkedin.com/in/zachlandes/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-primary-600 hover:text-primary-700"
              >
                <Linkedin size={24} />
              </Link>
            </div>

            {/* Partner's Bio Placeholder */}
            <div className="card flex flex-col items-center">
              <img
                src="/images/kevin.png"
                alt="Kevin Juszczyk"
                className="rounded-full w-32 h-32 object-cover mb-4"
              />
              <h3 className="heading-md text-primary-600 mb-2">Kevin Juszczyk</h3>
              <p className="text-body text-left">
                Bio coming soon.
              </p>
              <Link 
                href="https://www.linkedin.com/in/kevin-juszczyk-b9573531b/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-primary-600 hover:text-primary-700"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to Work Together?</h2>
            <p className="text-body mb-8">
              Let's discuss how we can help implement AI solutions that drive real value for your organization.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}