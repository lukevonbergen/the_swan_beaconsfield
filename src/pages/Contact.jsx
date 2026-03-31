import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import { useVenue } from '../lib/useVenue';

const Contact = () => {
  const { venue } = useVenue();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://forms.trypeek.dev/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: 'the-old-swan',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          utm_source: new URLSearchParams(window.location.search).get('utm_source'),
          page_url: window.location.href,
        }),
      });
      if (!res.ok) throw new Error('Submit failed');
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="pt-20">
      <Helmet>
        <title>Contact The Old Swan Beaconsfield | 60 London End, HP9 2JD | Phone & Directions</title>
        <meta name="description" content="Contact The Old Swan traditional pub Beaconsfield. Located at 60 London End, HP9 2JD. Phone 01494 312962. Email info@theoldswanbeaconsfield.co.uk. Find us near you!" />
        <meta name="keywords" content="contact Beaconsfield pub, The Old Swan address, 60 London End HP9, phone Beaconsfield pub, pub near me HP9, Beaconsfield pub location, contact traditional pub" />
        <meta property="og:title" content="Contact The Old Swan Beaconsfield - Location, Phone & Directions" />
        <meta property="og:description" content="Get in touch with The Old Swan Beaconsfield. Visit us at 60 London End, HP9 2JD or call 01494 312962 for bookings and enquiries." />
        <meta property="og:type" content="local_business" />
        <meta name="geo.region" content="GB-BKM" />
        <meta name="geo.placename" content="Beaconsfield" />
        <meta name="geo.position" content="51.608;-0.643" />
        <meta name="ICBM" content="51.608, -0.643" />
        <link rel="canonical" href="https://theoldswanbeaconsfield.co.uk/contact" />
      </Helmet>
      <PageHero
        title="Contact The Old Swan Beaconsfield"
        subtitle="Get in touch with us at 60 London End, HP9 2JD - we'd love to hear from you. Whether you have questions about our menu, want to book a table, or are planning a special event, our friendly Beaconsfield team is here to help."
        imageSrc="/images/oct_25/beergarden-sign.jpg"
        imageAlt="The Old Swan pub exterior in Beaconsfield"
        textAlign="left"
      />

      {/* SEO H1 */}
      <h1 className="sr-only">Contact The Old Swan Beaconsfield - Traditional Pub at 60 London End HP9 2JD - Phone 01494 312962</h1>

      <SectionContainer>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-normal mb-4 text-brand-dark">
                Send Us a Message
              </h2>
              <p className="text-brand-gray mb-8 leading-relaxed">
                Drop us a line and we'll get back to you as soon as we can.
              </p>

              {status === 'success' ? (
                <div className="border border-[#2A2A2A] rounded-md p-8 text-center">
                  <p className="text-brand-dark text-lg mb-2">Thanks for getting in touch.</p>
                  <p className="text-brand-gray">We'll get back to you shortly.</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-brand-gray hover:text-brand-dark transition-colors underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-brand-gray mb-1.5 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#2A2A2A] rounded-md px-4 py-3 text-brand-dark placeholder-brand-gray/50 focus:outline-none focus:border-brand-gray transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-brand-gray mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#2A2A2A] rounded-md px-4 py-3 text-brand-dark placeholder-brand-gray/50 focus:outline-none focus:border-brand-gray transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-brand-gray mb-1.5 uppercase tracking-wider">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#2A2A2A] rounded-md px-4 py-3 text-brand-dark placeholder-brand-gray/50 focus:outline-none focus:border-brand-gray transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-brand-gray mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#2A2A2A] rounded-md px-4 py-3 text-brand-dark placeholder-brand-gray/50 focus:outline-none focus:border-brand-gray transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again or give us a call.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-dark text-white py-3 rounded-md hover:bg-brand-dark/80 transition-colors duration-300 uppercase tracking-wider text-sm disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-normal mb-4 text-brand-dark">
                Get in Touch
              </h2>
              <p className="text-brand-gray mb-8 leading-relaxed">
                Or reach us directly — we're always happy to hear from you.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-brand-gray mb-2">Phone</h3>
                  <a href={`tel:${(venue?.phone || '01494 312962').replace(/\s/g, '')}`} className="text-brand-dark hover:text-brand-gray transition-colors text-lg">
                    {venue?.phone || '01494 312962'}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-brand-gray mb-2">Email</h3>
                  <a href={`mailto:${venue?.contact_email || 'info@theoldswanbeaconsfield.co.uk'}`} className="text-brand-dark hover:text-brand-gray transition-colors text-lg">
                    {venue?.contact_email || 'info@theoldswanbeaconsfield.co.uk'}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-brand-gray mb-2">Address</h3>
                  <p className="text-brand-dark text-lg">
                    {venue?.address_line_1 || '60 London End'}<br />
                    {venue?.city || 'Beaconsfield'}{venue?.postcode ? `, ${venue.postcode}` : ', HP9 2JD'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Contact;