import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from '@/components/ThemeProvider';
import { ScrollProvider } from '@/context/ScrollContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import BlogSection from './components/BlogSection';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from "@/components/ui/toaster";
import { handleStoredTargetSection } from './utils/navigation';
import Testimonials from './components/Testimonials';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import BlogTag from '@/pages/BlogTag';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    handleStoredTargetSection();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
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
                      <Testimonials />
                      <CallToAction />
                      <BlogSection />
                      <Contact />
                    </>
                  } />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/blog/tag/:tag" element={<BlogTag />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
                <Toaster />
              </div>
            </Router>
          </TooltipProvider>
        </ScrollProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
