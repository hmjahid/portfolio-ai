import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Download, Mail, Code, Briefcase, Award, Star, Users } from "lucide-react";

const AboutMe = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = {
    yearsOfExperience: 5,
    projectsCompleted: 50,
    clientsServed: 30,
    codeContributions: 1000,
    skills: 15,
    awards: 8
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-blue/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-blue/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-portfolio-blue font-semibold tracking-wider uppercase text-sm mb-3 block"
          >
            Get to know me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-portfolio-blue to-blue-600 mt-2 mx-auto max-w-[100px]"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            A passionate developer with a keen eye for detail and a love for creating exceptional digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-start justify-center backdrop-blur-sm border border-gray-100">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative w-full h-[600px] flex items-start justify-center p-0 -mt-8"
              >
                <img
                  src="/assets/Photo-2.png"
                  alt="Md Jahid Hasan"
                  className="w-full h-full object-cover object-top"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 border-4 border-white/20"
                />
              </motion.div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-portfolio-blue">{stats.yearsOfExperience}+</p>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-portfolio-blue">{stats.projectsCompleted}+</p>
                    <p className="text-gray-600">Projects Done</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-portfolio-blue">{stats.clientsServed}+</p>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-portfolio-blue">{stats.codeContributions}+</p>
                    <p className="text-gray-600">Code Commits</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-portfolio-blue mb-4">Professional Background</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a passionate WordPress and PHP developer with over {stats.yearsOfExperience} years of experience in creating robust, 
                scalable, and user-friendly web applications. My expertise lies in WordPress theme and plugin development, 
                custom PHP solutions, and building secure, high-performance websites.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-portfolio-blue mb-4">Technical Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                With a strong foundation in both frontend and backend development, I specialize in creating seamless 
                user experiences while ensuring optimal performance and security. My experience includes developing 
                custom WordPress themes, WooCommerce solutions, and complex PHP applications using modern frameworks 
                like Laravel.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-portfolio-blue mb-4">Commitment to Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                I am committed to writing clean, maintainable code and following best practices in web development. 
                My goal is to deliver high-quality solutions that meet client requirements while maintaining 
                excellent performance and security standards.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/11lKB0RNXQxegyZFzXF-U1GD5911lMf8C/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  onClick={handleContactClick}
                  className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-all duration-300 px-8 py-3 shadow-md hover:shadow-lg rounded-xl"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
