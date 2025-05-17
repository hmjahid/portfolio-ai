import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Handle navbar background
      setIsScrolled(window.scrollY > 50);

      // Handle active section
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
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
              Md Jahid Hasan
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-portfolio-blue ${
                    activeSection === item.href.slice(1) ? 'text-portfolio-blue' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white"
                asChild
              >
                <a href="#contact">Hire Me</a>
              </Button>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-portfolio-blue ${
                        activeSection === item.href.slice(1) ? 'text-portfolio-blue' : 'text-gray-600'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button 
                    className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white mt-4"
                    asChild
                  >
                    <a href="#contact">Hire Me</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-portfolio-blue to-blue-600 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
};

export default Navbar;
