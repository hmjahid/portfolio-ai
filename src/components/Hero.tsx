import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-24 md:pt-32 md:pb-32 lg:pt-16 lg:pb-0 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      
      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/4 -left-24 w-96 h-96 bg-portfolio-blue/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-1/4 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-16 md:max-w-[80%] md:mx-auto lg:max-w-none">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-gradient-to-r from-portfolio-blue to-blue-600 rounded-full"></div>
              <span className="text-portfolio-blue font-medium tracking-wider text-sm sm:text-base">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <motion.span 
                className="relative inline-flex items-center"
              >
                <span className="relative inline-flex items-center">
                  <span className="bg-gradient-to-r from-portfolio-blue via-blue-500 to-blue-600 bg-clip-text text-transparent inline-flex items-center">
                    <motion.div
                      className="inline-block overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      <motion.span
                        className="inline-block whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: 0.5
                        }}
                      >
                        Md Jahid Hasan
                      </motion.span>
                    </motion.div>
                    <motion.span
                      className="inline-block w-1 h-12 bg-gradient-to-r from-portfolio-blue to-blue-600 ml-1"
                      initial={{ opacity: 1 }}
                      animate={{ 
                        opacity: [1, 0, 1, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        times: [0, 0.33, 0.66, 1],
                        delay: 0.5
                      }}
                    />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 via-blue-500/20 to-blue-600/20 blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-portfolio-blue/10 via-blue-500/10 to-blue-600/10 rounded-lg"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </motion.span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-portfolio-blue to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                WD
              </div>
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-portfolio-blue to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                DE
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-portfolio-blue to-blue-600"></div>
              <span className="text-xl font-medium text-gray-600">
                Web & WordPress Developer | DevOps Enthusiast
              </span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Passionate about creating user-friendly websites using WordPress and modern web technologies. 
              Experienced in theme development, plugin customization, and implementing DevOps practices.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                  asChild
                >
                  <a href="#contact">
                    Hire Me <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
                  asChild
                >
                  <a 
                    href="/assets/Md_Jahid_Hasan_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com/hmjahid/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110"
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
                className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110"
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
                className="hover:text-portfolio-blue transition-all duration-300 h-12 w-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Medium"
              >
                <BookOpen className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="md:w-[80%] md:mx-auto lg:w-5/12"
          >
            <div className="relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-6 -left-6 w-full h-full rounded-full border-2 border-portfolio-blue"
              />
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                src="/assets/Photo.png"
                alt="Md Jahid Hasan"
                className="w-72 h-72 md:w-96 md:h-96 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
              />
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-6 -right-6 w-full h-full rounded-full border-2 border-portfolio-accent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
