import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const AboutMe = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = {
    yearsOfExperience: 5,
    projectsCompleted: 50
  };

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">About Me</h2>
            <p className="text-gray-600 mb-6">
              I am a passionate WordPress and PHP developer with over {stats.yearsOfExperience} years of experience in creating robust, 
              scalable, and user-friendly web applications. My expertise lies in WordPress theme and plugin development, 
              custom PHP solutions, and building secure, high-performance websites.
            </p>
            <p className="text-gray-600 mb-6">
              With a strong foundation in both frontend and backend development, I specialize in creating seamless 
              user experiences while ensuring optimal performance and security. My experience includes developing 
              custom WordPress themes, WooCommerce solutions, and complex PHP applications using modern frameworks 
              like Laravel.
            </p>
            <p className="text-gray-600 mb-8">
              I am committed to writing clean, maintainable code and following best practices in web development. 
              My goal is to deliver high-quality solutions that meet client requirements while maintaining 
              excellent performance and security standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline"
                onClick={handleContactClick}
                className="hover:bg-portfolio-blue hover:text-white transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-portfolio-blue to-blue-600 flex items-center justify-center text-white text-6xl font-bold">
                MH
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-blue/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-portfolio-blue">{stats.yearsOfExperience}+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Years of</p>
                  <p className="font-semibold">Experience</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-blue/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-portfolio-blue">{stats.projectsCompleted}+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Projects</p>
                  <p className="font-semibold">Completed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
