import React from 'react';
import ContactSection from './ContactSection';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-cinematic-black min-h-screen text-white">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-3xl font-display font-bold mb-4">Contact</h1>
        <p className="text-sm text-cinematic-textMuted mb-6">We'd love to hear from you. Reach out using the form below or email us at <span className="text-cinematic-gold">info@dhaari.org</span>.</p>

        <ContactSection />

        <div className="mt-8">
          <a href="/" className="text-cinematic-textMuted hover:text-cinematic-gold">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
