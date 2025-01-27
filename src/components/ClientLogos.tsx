import Image from 'next/image';

const clients = [
  {
    name: 'TechCorp Solutions',
    logo: '/logos/techcorp.svg',
    industry: 'Technology'
  },
  {
    name: 'GlobalTrade Inc.',
    logo: '/logos/globaltrade.svg',
    industry: 'E-commerce'
  },
  {
    name: 'HealthCare Partners',
    logo: '/logos/healthcare.svg',
    industry: 'Healthcare'
  },
  {
    name: 'InnovateTech',
    logo: '/logos/innovate.svg',
    industry: 'Technology'
  },
  {
    name: 'DataFlow Systems',
    logo: '/logos/dataflow.svg',
    industry: 'Data Analytics'
  },
  {
    name: 'SmartAI Solutions',
    logo: '/logos/smartai.svg',
    industry: 'Artificial Intelligence'
  }
];

export default function ClientLogos() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Trusted by Industry Leaders</h2>
          <p className="text-body">
            We work with forward-thinking companies across various industries.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative w-32 h-16">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
