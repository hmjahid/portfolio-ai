import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactSection from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { CALENDLY_URL } from '@/config/constants';

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Contact | Md Jahid Hasan - WordPress Performance Specialist';
    const metaDescription = document.querySelector('meta[name="description"]');
    const content =
      'Get in touch for high-performance WordPress development — fast, secure, scalable websites. Contact form and free consultation booking available.';
    if (metaDescription) {
      metaDescription.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
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
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-portfolio-blue font-semibold tracking-wider uppercase text-sm mb-3 block">
              Let's Connect
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Need a fast, secure WordPress website? Send a message or book a free 15-minute consultation to discuss your project.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-portfolio-blue to-blue-600"
                asChild
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free 15-Min Consultation
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default ContactPage;
