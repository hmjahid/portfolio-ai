import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Download, Mail, Code, Briefcase, Award, Star, Users } from "lucide-react";
import { RESUME_FILE } from '@/config/constants';
import { images } from '@/config/images';

const AboutMe = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = {
    yearsOfExperience: 3,
    projectsCompleted: 10,
    clientsServed: 10,
    codeContributions: 1500,
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate Full Stack Developer with expertise in modern web technologies
            and a strong focus on creating efficient, scalable solutions.
          </p>
        </motion.div>

        

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center md:max-w-[80%] md:mx-auto lg:max-w-none mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 dark:from-portfolio-blue/20 dark:to-blue-600/20 flex items-start justify-center backdrop-blur-sm border border-gray-100 dark:border-gray-700">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative w-full h-[600px] flex items-start justify-center p-0 -mt-8"
              >
                <img
                  src={images.profile.about}
                  alt="Md Jahid Hasan"
                  loading="lazy"
                  width={600}
                  height={800}
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
                  className="absolute inset-0 border-4 border-white/20 dark:border-gray-600/20"
                />
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-portfolio-blue">3+</p>
                    <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-portfolio-blue">10+</p>
                    <p className="text-gray-600 dark:text-gray-300">Projects Done</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-portfolio-blue">10+</p>
                    <p className="text-gray-600 dark:text-gray-300">Happy Clients</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-portfolio-blue">2200+</p>
                    <p className="text-gray-600 dark:text-gray-300">Code Commits</p>
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-portfolio-blue mb-4">Professional Background</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a passionate Web & WordPress Developer with 2 years of hands-on experience in WordPress and 3+ years in web development. 
                My expertise lies in building high-quality WordPress sites using Elementor and Divi, with a strong focus on Linux-based environments. 
                I specialize in creating robust, scalable, and user-friendly web applications that meet modern standards and client requirements.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-portfolio-blue mb-4">Technical Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond development, I'm deeply interested in Linux system administration and DevOps. I have expertise in containerization (Docker, Kubernetes), 
                cloud computing (AWS), automation (Ansible), and monitoring (Prometheus, Grafana, Nagios). My skill set extends to infrastructure as code, 
                CI/CD, and virtualization tools, enabling me to optimize and manage scalable infrastructures. I thrive on learning new technologies and 
                solving complex problems, whether working independently or in a team.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-portfolio-blue mb-4">Commitment to Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am committed to delivering high-quality solutions that combine technical excellence with practical business value. 
                My approach focuses on creating efficient, secure, and maintainable systems while staying current with industry best practices 
                and emerging technologies. I'm always eager to take on new challenges and contribute to innovative projects.
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
                  <a href={RESUME_FILE.path} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    {RESUME_FILE.label}
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
