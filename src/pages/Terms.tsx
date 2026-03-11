import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Terms = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Terms and Conditions | Md Jahid Hasan';
  }, []);

  useEffect(() => {
    const shouldScrollToTop = sessionStorage.getItem('scrollToTop');
    if (shouldScrollToTop === 'true') {
      sessionStorage.removeItem('scrollToTop');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  }, [location.pathname]);

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Last updated: {new Date().toLocaleDateString('en-US')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-gray dark:prose-invert max-w-none"
          >
            <h2>1. Introduction</h2>
            <p>
              Welcome to the website of Md Jahid Hasan. By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this website.
            </p>

            <h2>2. Services</h2>
            <p>
              I offer WordPress website development, speed optimization, server migration, security hardening, maintenance, and related services. Service terms, deliverables, and pricing will be agreed upon separately for each project via consultation or written agreement.
            </p>

            <h2>3. Use of Website</h2>
            <p>
              You may use this website for lawful purposes only. You agree not to use the website to transmit any harmful code, attempt unauthorized access, or interfere with its operation. The content on this website is for informational purposes and does not constitute a binding offer.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and design, is the property of Md Jahid Hasan and is protected by copyright laws. You may not reproduce, distribute, or use any content without prior written permission.
            </p>

            <h2>5. Contact Form and Bookings</h2>
            <p>
              When you submit a contact form or book a consultation via Calendly, you consent to being contacted regarding your inquiry. Your information will be used solely for the purpose of responding to your request and providing services.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              This website and its content are provided "as is." I do not warrant that the website will be uninterrupted or error-free. I shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
            </p>

            <h2>7. Changes</h2>
            <p>
              I reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to this page. Your continued use of the website after changes constitutes acceptance of the modified terms.
            </p>

            <h2>8. Contact</h2>
            <p>
              For questions about these Terms and Conditions, please contact me at{' '}
              <a href="mailto:mdjahidhasan919@gmail.com" className="text-portfolio-blue hover:underline">
                mdjahidhasan919@gmail.com
              </a>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Terms;
