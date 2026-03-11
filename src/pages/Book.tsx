import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CALENDLY_URL } from '@/config/constants';

const Book = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Book a Consultation | Md Jahid Hasan - WordPress Performance Specialist';
  }, []);

  useEffect(() => {
    const shouldScrollToTop = sessionStorage.getItem('scrollToTop');
    if (shouldScrollToTop === 'true') {
      sessionStorage.removeItem('scrollToTop');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  }, [location.pathname]);

  const calendlyUsername = CALENDLY_URL.split('calendly.com/')[1]?.split('/')[0] || 'mdjahidhasan';

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
              Book a Free Consultation
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Choose a time that works for you. 15 minutes to discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Embed - Fallback to link if embed fails */}
      <section className="pb-24 min-h-[600px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <iframe
              title="Calendly Scheduling"
              src={`https://calendly.com/${calendlyUsername}/15min?hide_gdpr_banner=1`}
              width="100%"
              height="700"
              frameBorder="0"
              className="rounded-xl shadow-lg"
            />
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              Can't see the scheduler?{' '}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-blue hover:underline"
              >
                Open in new tab
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
