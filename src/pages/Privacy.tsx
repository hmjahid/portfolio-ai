import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Privacy = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Privacy Policy | Md Jahid Hasan';
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
              Privacy Policy
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
            <h2>1. Information We Collect</h2>
            <p>
              When you use this website, we may collect information you provide directly, such as your name, email address, phone number, and message content when you submit the contact form or book a consultation via Calendly.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to your inquiries, schedule consultations, deliver services, and communicate with you about your projects. We do not sell, trade, or share your personal information with third parties for marketing purposes.
            </p>

            <h2>3. Contact Form</h2>
            <p>
              The contact form uses FormSubmit.co to process submissions. Your data is sent to our email address and is not stored on our servers. Please review FormSubmit.co's privacy policy for their data handling practices.
            </p>

            <h2>4. Calendly</h2>
            <p>
              When you book a consultation, you are directed to Calendly. Calendly collects and processes your information according to their privacy policy. We use the information received from Calendly solely to conduct the scheduled consultation.
            </p>

            <h2>5. Analytics and Cookies</h2>
            <p>
              This website may use analytics tools to understand how visitors interact with the site. These tools may collect anonymous data such as page views and referral sources. You can control cookie preferences through your browser settings.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us using the information below.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2>9. Contact</h2>
            <p>
              For questions about this Privacy Policy or your personal data, please contact me at{' '}
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

export default Privacy;
