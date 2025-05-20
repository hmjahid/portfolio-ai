import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from "lucide-react";

const ProfessionalExperience = () => {
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
    <section id="experience" className="section-padding relative overflow-hidden">
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
            My Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-portfolio-blue to-blue-600 mt-2 mx-auto max-w-[100px]"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-portfolio-blue" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">Junior Web Developer</h3>
                <p className="text-portfolio-blue font-medium">Monday Digital</p>
                <p className="text-gray-600 text-sm">June 2024 - Present (1 year) · Hybrid</p>
                <p className="text-gray-600 mt-2">Working with cPanel, Slack and various web development technologies.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-portfolio-blue" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">Junior Web Developer (Internship)</h3>
                <p className="text-portfolio-blue font-medium">Monday Digital</p>
                <p className="text-gray-600 text-sm">February 2024 - May 2024 (4 months) · On-site</p>
                <p className="text-gray-600 mt-2">Gained hands-on experience with cPanel, Slack and various web development tools.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-portfolio-blue" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">Junior WordPress Developer</h3>
                <p className="text-portfolio-blue font-medium">WebFix Lab</p>
                <p className="text-gray-600 text-sm">July 2023 - February 2024 (8 months) · Remote</p>
                <p className="text-gray-600 mt-2">
                  Developed and maintained WordPress websites for diverse clients. Created innovative designs, 
                  customized in-house plugins, and enhanced user experiences. Optimized website performance, 
                  implemented SEO best practices, and maintained strict confidentiality with client projects.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-portfolio-blue" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">Data Entry Operator, Lead Generation Expert & WordPress Designer</h3>
                <p className="text-portfolio-blue font-medium">Upwork</p>
                <p className="text-gray-600 text-sm">April 2022 - February 2024 (1 year 11 months) · Remote</p>
                <p className="text-gray-600 mt-2">Freelance work focusing on data entry, WordPress design, and lead generation.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-portfolio-blue" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">CNC Operator, Machinist and Programmer</h3>
                <p className="text-portfolio-blue font-medium">Nichima Precision Engineering Sdn. Bhd.</p>
                <p className="text-gray-600 text-sm">April 2016 - April 2022 (6 years 1 month) · On-site</p>
                <p className="text-gray-600 mt-2">
                  Operated and programmed GOODWAY GCL2BL 2-axis CNC Lathe and 3-axis CNC Milling machines. 
                  Led a team of 5-6 people, gaining valuable experience in industrial culture, leadership, 
                  teamwork, and mutual cooperation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-portfolio-blue" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">Office Assistant Cum Computer Operator</h3>
                <p className="text-portfolio-blue font-medium">Nichima Precision Engineering Sdn. Bhd.</p>
                <p className="text-gray-600 text-sm">March 2016 - April 2016 (2 months) · On-site</p>
                <p className="text-gray-600 mt-2">
                  Assisted HR manager with payroll preparation and sales department with database entry. 
                  Worked in QC department as a QC Inspector.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalExperience; 