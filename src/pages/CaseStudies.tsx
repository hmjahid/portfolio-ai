import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Calendar } from 'lucide-react';
import { CASE_STUDIES } from '@/config/caseStudies';
import { CALENDLY_URL } from '@/config/constants';
import CallToAction from '@/components/CallToAction';

const CaseStudies = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Case Studies | Md Jahid Hasan - WordPress Performance Specialist';
    const metaDescription = document.querySelector('meta[name="description"]');
    const content =
      'Explore real high-performance WordPress and DevOps projects — fast websites, server monitoring, and scalable web applications.';
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
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-portfolio-blue font-semibold tracking-wider uppercase text-sm mb-3 block">
              Portfolio Showcase
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Real projects, real results. See how I've helped businesses build fast, scalable websites and infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {CASE_STUDIES.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto min-h-[300px]">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-xs font-medium text-white/90 bg-black/40 px-2 py-1 rounded">
                          {study.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <CardHeader className="p-0">
                        <CardTitle className="text-2xl">{study.title}</CardTitle>
                        <CardDescription className="text-sm">{study.client}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 pt-4">
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{study.excerpt}</p>
                        <div className="flex flex-wrap gap-4 mb-6">
                          {study.results.map((r) => (
                            <div key={r.label} className="text-center">
                              <div className="text-xl font-bold text-portfolio-blue">{r.value}</div>
                              <div className="text-xs text-gray-500">{r.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-2 text-sm">
                          <p>
                            <span className="font-semibold">Challenge:</span> {study.challenge}
                          </p>
                          <p>
                            <span className="font-semibold">Solution:</span> {study.solution}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {study.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-0 pt-6">
                        <Button variant="outline" size="sm" asChild>
                          <a href={study.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Project
                          </a>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-portfolio-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve similar results. Book a free 15-minute consultation.
          </p>
          <Button
            size="lg"
            className="bg-white text-portfolio-blue hover:bg-gray-100 font-semibold"
            asChild
          >
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

export default CaseStudies;
