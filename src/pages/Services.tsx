import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Globe,
  Zap,
  Server,
  Shield,
  Settings,
  Layers,
  Cpu,
  Wrench,
  Search,
  Cloud,
  Calendar,
  ArrowRight,
  CheckCircle2,
  DollarSign,
} from 'lucide-react';
import { WORDPRESS_SERVICES, SERVICE_PACKAGES } from '@/config/services';
import { CALENDLY_URL } from '@/config/constants';
import CallToAction from '@/components/CallToAction';

const iconMap = {
  Globe,
  Zap,
  Server,
  Shield,
  Settings,
  Layers,
  Cpu,
  Wrench,
  Search,
  Cloud,
};

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Services | Md Jahid Hasan - WordPress Infrastructure & Performance Engineer';
    const metaDescription = document.querySelector('meta[name="description"]');
    const content =
      'WordPress Infrastructure & Performance Engineer. Website development, speed optimization, server migration, security, DevOps setup, and maintenance. $2000–$5000 projects.';
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

  // Scroll to hash target when navigating from Pricing page (e.g. /services#wordpress-development)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-portfolio-blue font-semibold tracking-wider uppercase text-sm mb-3 block">
              WordPress Infrastructure & Performance Engineer
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
              Your Site Built Right
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Get a site that's fast, secure, and built to scale. WordPress expertise backed by DevOps and infrastructure — so you get more than just a developer who knows themes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Individual Services */}
      <section id="offered-services" className="py-16 md:py-24 bg-white dark:bg-gray-900 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            Offered Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {WORDPRESS_SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Globe;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <Card className="h-full border-gray-200 dark:border-gray-700 hover:border-portfolio-blue/50 dark:hover:border-portfolio-blue/50 transition-all duration-300 hover:shadow-xl group">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-portfolio-blue to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        {service.description}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm font-semibold text-portfolio-blue pt-2">
                        <DollarSign className="h-4 w-4" />
                        {service.priceRange}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-portfolio-blue flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {service.tools && service.tools.length > 0 && (
                        <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Tools:</p>
                          <div className="flex flex-wrap gap-1">
                            {service.tools.map((tool) => (
                              <span
                                key={tool}
                                className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Best Service Packages</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Save more when you bundle. Get everything you need in one package — from launch to full infrastructure.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {SERVICE_PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative overflow-hidden ${
                  pkg.popular ? 'border-portfolio-blue shadow-lg md:scale-105' : 'border-gray-200 dark:border-gray-700'
                }`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-portfolio-blue to-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="pt-2">
                      <span className="text-2xl font-bold">{pkg.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Includes:</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-portfolio-blue flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-4 w-4" />
                        Get Custom Quote
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-portfolio-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get your site built right?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a free 15-minute call. We'll discuss your project and get you a custom quote — no pressure.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-portfolio-blue hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-xl"
                asChild
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free 15-Min Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Services;
