import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollProvider } from '@/context/ScrollContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from "@/components/ui/toaster";
import { handleStoredTargetSection } from './utils/navigation';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    handleStoredTargetSection();
  }, []);

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
                    <Experience />
                    <Projects />
                    <Certifications />
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
