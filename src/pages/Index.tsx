import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';
import CallToAction from '@/components/CallToAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      {/* <Testimonials /> */}
      <BlogSection />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
