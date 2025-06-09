import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Sparkles, Download } from "lucide-react";
import { RESUME_FILE } from '@/config/constants';

const CallToAction = () => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', window.location.pathname);
    }
  };

  const stats = {
    yearsOfExperience: 2,
    projectsCompleted: 50,
    clientsServed: 30,
    codeContributions: 1000
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/assets/Photo.png')] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/assets/Photo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "translateZ(0)"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      {/* Animated gradient lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-4 sm:mb-6 md:mb-8"
            >
              <Sparkles className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-[1.2]">
              Transform Your Digital Vision
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
              With {stats.yearsOfExperience}+ years of expertise in WordPress and Web development, 
              I specialize in crafting high-performance websites and applications. From custom WordPress themes 
              to complex Web solutions, I bring your digital vision to life with precision and innovation.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white to-blue-100 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Button 
                onClick={handleContactClick}
                className="relative bg-white hover:bg-blue-50 text-portfolio-blue px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl"
              >
                <Mail className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Hire Me
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white to-blue-100 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Button 
                variant="outline"
                className="relative border-2 border-white text-white hover:bg-white hover:text-portfolio-blue transition-all duration-300 px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl shadow-md hover:shadow-lg rounded-xl sm:rounded-2xl bg-transparent backdrop-blur-sm"
                asChild
              >
                <a href={RESUME_FILE.path} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  {RESUME_FILE.label}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 