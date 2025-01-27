const testimonials = [
  {
    quote: "2ML's RAG system implementation transformed our internal documentation search. Their expertise in AI and attention to detail delivered exceptional results.",
    author: "Sarah Chen",
    title: "CTO",
    company: "TechCorp Solutions"
  },
  {
    quote: "The multilingual chatbot they developed handles our customer service inquiries with remarkable accuracy. A game-changer for our global operations.",
    author: "Michael Rodriguez",
    title: "Head of Customer Experience",
    company: "GlobalTrade Inc."
  },
  {
    quote: "Their data engineering team built a HIPAA-compliant data lake that exceeded our expectations. Professional, efficient, and highly skilled.",
    author: "Dr. Emily Thompson",
    title: "Director of Analytics",
    company: "HealthCare Partners"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-body">
            We're proud to help businesses achieve their goals through innovative AI solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="flex-1">
                  <p className="text-body mb-4">{testimonial.quote}</p>
                </blockquote>
                <footer className="mt-4">
                  <p className="font-medium text-primary-600">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 