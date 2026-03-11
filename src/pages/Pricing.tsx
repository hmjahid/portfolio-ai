import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Calendar, DollarSign } from 'lucide-react';
import { PRICING_PLANS, MAINTENANCE_PLANS } from '@/config/pricing';
import { WORDPRESS_SERVICES } from '@/config/services';
import { CALENDLY_URL } from '@/config/constants';
import CallToAction from '@/components/CallToAction';

const Pricing = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Pricing Guide | Md Jahid Hasan - WordPress Performance Specialist';
    const metaDescription = document.querySelector('meta[name="description"]');
    const content =
      'Transparent pricing for high-performance WordPress websites — optimized for speed, security, and scalability. Get a custom quote for your project.';
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
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-portfolio-blue font-semibold tracking-wider uppercase text-sm mb-3 block">
              Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
              Pricing Guide
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Clear, upfront pricing for high-performance WordPress websites. Every project is unique — book a free consultation for a custom quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Individual Services - Price Ranges */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-4"
          >
            Individual Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            À la carte pricing for specific services. Typical price ranges below.
          </motion.p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-16">
            {WORDPRESS_SERVICES.map((service, index) => (
              <Link key={service.id} to={`/services#${service.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-portfolio-blue/50 hover:bg-portfolio-blue/5 dark:hover:bg-portfolio-blue/10 transition-all cursor-pointer"
                >
                  <span className="font-medium text-gray-800 dark:text-gray-200">{service.title}</span>
                  <span className="text-sm font-semibold text-portfolio-blue flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    {service.priceRange}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            Service Packages
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full relative overflow-hidden ${
                    plan.popular
                      ? 'border-portfolio-blue shadow-xl scale-105 md:scale-110'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-portfolio-blue to-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 dark:text-gray-400"> {plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-portfolio-blue flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={plan.popular ? 'default' : 'outline'}
                      className={plan.popular ? 'w-full bg-gradient-to-r from-portfolio-blue to-blue-600 text-white' : 'w-full'}
                      asChild
                    >
                      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
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

      {/* Maintenance Plans */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-4"
          >
            WordPress Maintenance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            DevOps-grade monitoring with Prometheus + Grafana makes our maintenance plans unique.
          </motion.p>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {MAINTENANCE_PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative overflow-hidden flex flex-col ${
                  plan.popular ? 'border-portfolio-blue shadow-lg md:scale-105' : 'border-gray-200 dark:border-gray-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-portfolio-blue to-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.subtitle && (
                      <p className="text-sm font-medium text-portfolio-blue">{plan.subtitle}</p>
                    )}
                    {plan.description && (
                      <CardDescription>{plan.description}</CardDescription>
                    )}
                    <div className="pt-2">
                      <span className="text-2xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
                    </div>
                    {plan.idealFor && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-2">
                        Ideal for: {plan.idealFor}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-portfolio-blue flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {'hourlyRates' in plan && plan.hourlyRates && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Additional hourly rates:</p>
                        <ul className="space-y-1">
                          {plan.hourlyRates.map((hr) => (
                            <li key={hr.label} className="text-xs font-medium">
                              {hr.label}: {hr.rate}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Consultation
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Summary Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto overflow-x-auto"
          >
            <h3 className="text-lg font-semibold text-center mb-12">Summary Comparison</h3>
            <table className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Feature</th>
                  <th className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold">Package 1</th>
                  <th className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold">Package 2</th>
                  <th className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold">Package 3</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-200 dark:border-gray-700 p-3">Routine Maintenance</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 p-3">Security Updates</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-200 dark:border-gray-700 p-3">Hosting Monitoring</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 p-3">Domain Support</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-200 dark:border-gray-700 p-3">Uptime Monitoring</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 p-3">Content Updates</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center">Limited</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center">Moderate</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-200 dark:border-gray-700 p-3">Priority Support</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-gray-400">—</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 p-3">Dedicated Support Hours</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-gray-400">—</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-gray-400">—</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">Up to 40 hrs/month</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-200 dark:border-gray-700 p-3">Full Responsibility</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-gray-400">—</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-gray-400">—</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 p-3 font-semibold">Monthly Price</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold">$150</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold">$350</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold">$500</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Professional Note */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Final pricing may vary depending on project scope, complexity, and specific requirements.
            I am always happy to review your website and provide a tailored recommendation before starting any plan.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Not sure which plan fits? Book a free 15-minute call to discuss your needs.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-portfolio-blue to-blue-600" asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </a>
          </Button>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Pricing;
