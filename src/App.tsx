import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollProvider } from '@/context/ScrollContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from "@/components/ui/toaster";
import Certifications from './components/Certifications';
import CallToAction from './components/CallToAction';
import Experience from './components/Experience';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProvider>
        <TooltipProvider>
          <Router>
            <ScrollToTop />
            <div className="relative">
              <Navbar />
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <AboutMe />
                    <Skills />
                    <Certifications />
                    <Projects />
                    <Experience />
                    {/* <Testimonials /> */}
                    <CallToAction />
                    <Contact />
                  </>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
              <Toaster />
            </div>
          </Router>
        </TooltipProvider>
      </ScrollProvider>
    </QueryClientProvider>
  );
}

export default App;
