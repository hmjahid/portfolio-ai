import React, { useEffect } from 'react';
import { Github, Linkedin, ArrowUp, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from '@/context/ScrollContext';
import { navigateToSection, navigateToBlog } from '@/utils/navigation';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const { showScrollTop, setShowScrollTop } = useScroll();
  const navigate = useNavigate();
  
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
  }, [setShowScrollTop]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-6 text-left"
          >
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
              Md Jahid Hasan
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Crafting Seamless Web Experiences with a DevOps Mindset</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex mb-4 md:mb-6 justify-start"
          >
            <motion.a 
              href="https://github.com/hmjahid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg flex items-center justify-center mr-4 hover:scale-110"
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
              className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg flex items-center justify-center mr-4 hover:scale-110"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="https://medium.com/@mdjahidhasan919" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110"
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
                className="fixed bottom-24 right-8 bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-[100] md:bottom-28 lg:bottom-28 xl:bottom-28 [@media(min-width:1278px)_and_(max-width:1540px)]:bottom-28"
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
          className="border-t border-gray-200 dark:border-gray-700 mt-6 md:mt-8 pt-4 md:pt-6 text-left text-gray-500 dark:text-gray-400"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
            <div className="flex space-x-6 order-1 md:order-2 pt-2 md:pt-0">
              <motion.a 
                href="#about" 
                className="hover:text-portfolio-blue transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('about');
                }}
              >
                About
              </motion.a>
              <motion.a 
                href="#projects" 
                className="hover:text-portfolio-blue transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('projects');
                }}
              >
                Projects
              </motion.a>
              <motion.a 
                href="/blog" 
                className="hover:text-portfolio-blue transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToBlog();
                }}
              >
                Blog
              </motion.a>
              <motion.a 
                href="#contact" 
                className="hover:text-portfolio-blue transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('contact');
                }}
              >
                Contact
              </motion.a>
            </div>
            <p className="text-base order-2 md:order-1">
              &copy; {currentYear} <a href={currentUrl} className="hover:text-portfolio-blue transition-colors font-medium">Md Jahid Hasan</a>. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
