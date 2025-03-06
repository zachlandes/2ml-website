'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/meoelkow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error();
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="text-body text-lg mb-0">
              Get in touch to discuss how we can help implement AI solutions for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-xl mx-auto">
            {status === 'success' ? (
              <div className="rounded-md bg-green-50 p-4 mb-6">
                <p className="text-green-800">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            ) : null}

            {status === 'error' ? (
              <div className="rounded-md bg-red-50 p-4 mb-6">
                <p className="text-red-800">
                  Failed to send message. Please try again or email us directly.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional info section */}
      <section className="section-padding bg-primary-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h2 className="heading-md mb-4 text-primary-600">Office Location</h2>
                <p className="text-body">
                  San Francisco Bay Area, California<br />
                  United States
                </p>
              </div>
              <div className="card">
                <h2 className="heading-md mb-4 text-primary-600">Contact Info</h2>
                <p className="text-body">
                  Email: info@2ml.com<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}