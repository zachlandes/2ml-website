'use client';

import { useState } from 'react';

const fieldClass =
  'block w-full rounded-md border border-rule bg-white px-3 py-2.5 text-[15px] text-ink ' +
  'placeholder:text-muted-faint focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

export default function ContactForm() {
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
    <div className="max-w-[560px]">
      {/* The result of a submit is announced where the submit happened */}
      <div aria-live="polite">
        {status === 'success' ? (
          <p className="mb-6 border-l-2 border-accent bg-paper-sunk px-4 py-3 text-[15px] text-ink">
            Thank you for your message! We&apos;ll get back to you soon.
          </p>
        ) : null}

        {status === 'error' ? (
          <p className="mb-6 border-l-2 border-accent bg-paper-sunk px-4 py-3 text-[15px] text-ink">
            Failed to send message. Please try again or email us directly.
          </p>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className={fieldClass}
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className={fieldClass}
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-ink">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className={fieldClass}
            placeholder="Your company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={fieldClass}
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-solid w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
