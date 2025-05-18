import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 md:mb-0 md:w-1/2"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-portfolio-blue mb-3"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
                Md Jahid Hasan
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl font-medium text-gray-600 mb-6"
            >
              WordPress Developer & DevOps Enthusiast
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              Passionate about creating user-friendly websites using WordPress and modern web technologies. 
              Experienced in theme development, plugin customization, and implementing DevOps practices.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="#contact">
                    Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10 px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/11lKB0RNXQxegyZFzXF-U1GD5911lMf8C/view?usp=sharing" 
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
              className="flex gap-4 mt-8"
            >
              <motion.a
                href="https://github.com/hmjahid/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5 text-gray-700" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hmjahid/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5 text-gray-700" />
              </motion.a>
              <motion.a
                href="https://medium.com/@hmjahid"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="h-5 w-5 text-gray-700" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="md:w-5/12"
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
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
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
