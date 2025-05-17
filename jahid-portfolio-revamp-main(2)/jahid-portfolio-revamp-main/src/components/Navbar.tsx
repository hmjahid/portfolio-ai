
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-3",
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">Md Jahid Hasan</a>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-portfolio-dark hover:text-portfolio-blue transition-colors" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-portfolio-dark hover:text-portfolio-blue transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-blue transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Resume button */}
          <Button 
            className="hidden md:flex bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 gap-1 items-center"
            asChild
          >
            <a 
              href="https://drive.google.com/file/d/11lKB0RNXQxegyZFzXF-U1GD5911lMf8C/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume <ChevronRight size={16} />
            </a>
          </Button>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300",
          isMenuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        )}>
          <ul className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="block text-portfolio-dark hover:text-portfolio-blue transition-colors"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button 
                className="w-full bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 gap-1 items-center"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/11lKB0RNXQxegyZFzXF-U1GD5911lMf8C/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Resume <ChevronRight size={16} className="ml-1" />
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
