import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { useScroll } from '@/context/ScrollContext';
import { navigateToSection } from '@/utils/navigation';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setShowScrollTop } = useScroll();
  const location = useLocation();

  useEffect(() => {
    // Reset active section when on 404 page
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    // Set home as active section on initial load
    if (window.scrollY === 0) {
      setActiveSection('home');
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    navigateToSection(sectionId);
    // Force show scroll-to-top button after navigation
    setShowScrollTop(true);
  };

  return (
    <>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            <motion.a 
              href="#home" 
              className="text-2xl font-bold bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('home');
              }}
            >
              Md Jahid Hasan
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={`#${item.href}`}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.href
                      ? 'text-portfolio-blue' 
                      : 'text-gray-600 hover:text-portfolio-blue'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-portfolio-blue to-blue-600"
                    />
                  )}
                </motion.a>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('contact');
                    }}
                  >
                    Hire Me
                  </a>
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.button 
                  className="lg:hidden absolute right-4 top-4 p-2.5 rounded-full bg-gradient-to-r from-portfolio-blue to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95, y: 0 }}
                >
                  <Menu className="h-6 w-6 text-white" />
                </motion.button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md [&>button]:hidden">
                <div className="flex justify-end -mt-2 -mr-2">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2.5 rounded-full bg-gradient-to-r from-portfolio-blue to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, y: 0 }}
                  >
                    <X className="h-6 w-6 text-white" />
                  </motion.button>
                </div>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={`#${item.href}`}
                      className={`text-lg font-medium transition-colors hover:text-portfolio-blue ${
                        activeSection === item.href ? 'text-portfolio-blue' : 'text-gray-600'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ x: 0 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4"
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <a 
                        href="#contact" 
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation('contact');
                        }}
                      >
                        Hire Me
                      </a>
                    </Button>
                  </motion.div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-portfolio-blue to-blue-600 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
};

export default Navbar;
