import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowUp, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show button when scrolled more than 300px
      setShowScrollTop(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-0"
          >
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
              Md Jahid Hasan
            </h3>
            <p className="text-gray-600 text-lg">Transforming Ideas into Digital Excellence</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex mb-8 md:mb-0"
          >
            <motion.a 
              href="https://github.com/hmjahid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center mr-4 hover:scale-110"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/hmjahid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center mr-4 hover:scale-110"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="https://medium.com/@hmjahid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Medium"
            >
              <BookOpen className="h-6 w-6" />
            </motion.a>
          </motion.div>
          
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-6 w-6" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-base">
            &copy; {currentYear} <a href={currentUrl} className="hover:text-portfolio-blue transition-colors font-medium">Md Jahid Hasan</a>. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <motion.a 
              href="#about" 
              className="hover:text-portfolio-blue transition-colors font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#projects" 
              className="hover:text-portfolio-blue transition-colors font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="hover:text-portfolio-blue transition-colors font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
