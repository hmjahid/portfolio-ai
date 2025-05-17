import React from 'react';
import { Github, Linkedin, ArrowUp, Mail, BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">Md Jahid Hasan</h3>
            <p className="text-gray-600">Transforming Ideas into Digital Excellence</p>
          </div>
          
          <div className="flex mb-6 md:mb-0">
            <a 
              href="https://github.com/hmjahid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-blue transition-colors h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 hover:bg-gray-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/hmjahid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-blue transition-colors h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 hover:bg-gray-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a 
              href="https://medium.com/@hmjahid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-blue transition-colors h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
              aria-label="Medium"
            >
              <BookOpen className="h-5 w-5" />
            </a>
            <a 
              href="mailto:mdjahidhasan919@gmail.com" 
              className="hover:text-portfolio-blue transition-colors h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 hover:bg-gray-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-portfolio-blue hover:bg-blue-600 text-white h-10 w-10 rounded-full flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {currentYear} <a href={currentUrl} className="hover:text-portfolio-blue transition-colors">Md Jahid Hasan</a>. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0 flex space-x-4">
            <a href="#about" className="hover:text-portfolio-blue transition-colors">About</a>
            <a href="#projects" className="hover:text-portfolio-blue transition-colors">Projects</a>
            <a href="#contact" className="hover:text-portfolio-blue transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
