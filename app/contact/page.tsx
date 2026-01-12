'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 pt-24 sm:pt-28">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="typography-display mb-3 sm:mb-4">
            Get In Touch
          </h1>
          <p className="max-w-2xl mx-auto typography-body text-gray-600 px-2 sm:px-0">
            We&apos;d love to hear from you. Reach out to us via email, phone, or fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <div className="mb-6 sm:mb-8">
              <h2 className="typography-heading mb-4 sm:mb-6">Contact Information</h2>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="typography-title mb-1">Email</h3>
                    <a
                      href="mailto:uday.sripadi123@gmail.com"
                      className="typography-body text-gray-600 hover:text-gray-900 transition-colors break-words"
                    >
                      uday.sripadi123@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="typography-title mb-1">Phone</h3>
                    <a
                      href="tel:+91-9063648816"
                      className="typography-body text-gray-600 hover:text-gray-900 transition-colors break-words"
                    >
                      +91-9063648816
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="typography-title mb-3">Working Hours</h3>
              <p className="typography-body text-gray-600 mb-2">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="typography-body text-gray-600">
                Saturday - Sunday: Closed
              </p>
            </div> */}
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="typography-heading mb-4 sm:mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block typography-small font-medium text-gray-900 mb-1.5 sm:mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent typography-body text-base"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block typography-small font-medium text-gray-900 mb-1.5 sm:mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent typography-body text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block typography-small font-medium text-gray-900 mb-1.5 sm:mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent typography-body text-base"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block typography-small font-medium text-gray-900 mb-1.5 sm:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent typography-body resize-none text-base"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 typography-button hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-3 sm:p-4 rounded-xl bg-green-50 border border-green-200">
                  <p className="typography-body text-green-800 text-sm sm:text-base">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-3 sm:p-4 rounded-xl bg-red-50 border border-red-200">
                  <p className="typography-body text-red-800 text-sm sm:text-base">
                    {errorMessage || 'Something went wrong. Please try again.'}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

