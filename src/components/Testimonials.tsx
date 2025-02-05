import { BaseSectionProps } from '@/types/section';

interface TestimonialsProps extends BaseSectionProps {
  variant?: 'default' | 'alternate';
}

export default function Testimonials({ variant = 'default' }: TestimonialsProps) {
  const isAlternate = variant === 'alternate';
  
  return (
    <section className={`section-padding ${isAlternate ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-body">
            We're proud to work with innovative companies across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className={`p-6 rounded-xl shadow-sm ${isAlternate ? 'bg-white' : 'bg-gray-50'}`}>
            <blockquote className="text-body">
              "2ML helped us implement a cutting-edge AI solution that transformed our customer service operations. Their expertise and dedication to quality were evident throughout the project."
            </blockquote>
            <div className="mt-4">
              <div className="font-medium">Sarah Chen</div>
              <div className="text-sm text-gray-600">CTO, Enterprise Solutions Inc.</div>
            </div>
          </div>
          <div className={`p-6 rounded-xl shadow-sm ${isAlternate ? 'bg-white' : 'bg-gray-50'}`}>
            <blockquote className="text-body">
              "Working with 2ML was a game-changer for our AI initiatives. Their team's technical depth and ability to deliver production-ready solutions exceeded our expectations."
            </blockquote>
            <div className="mt-4">
              <div className="font-medium">Michael Rodriguez</div>
              <div className="text-sm text-gray-600">Head of Innovation, Tech Dynamics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 