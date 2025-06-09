import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    position: "Junior Web Developer",
    company: "Monday Digital",
    period: "June 2024 - Present",
    location: "Hybrid (Bangladesh)",
    responsibilities: [
      "Custom WordPress theme development: Designed and developed custom themes to meet client specifications, ensuring responsive and user-friendly layouts",
      "Designed user-friendly websites based on Figma designs, translating visual concepts into functional, interactive web pages",
      "Managed website maintenance, including content updates, plugin management, troubleshooting issues, and performance optimization",
      "Worked with Elementor and WPBakery Builder to create dynamic, visually appealing, and highly functional websites",
      "Collaborated with the development team to deliver timely and efficient web solutions, maintaining high-quality standards and client satisfaction"
    ]
  },
  {
    position: "Junior Web Developer (Internship)",
    company: "Monday Digital",
    period: "February 2024 - May 2024",
    location: "On-site (Bangladesh)",
    responsibilities: [
      "Assisted in WordPress development, including theme customization, plugin integration, and content management",
      "Supported website maintenance tasks, such as troubleshooting site issues, performing updates, and ensuring smooth functionality",
      "Gained experience in Elementor Builder to create and enhance websites for better design and performance",
      "Participated in team meetings and project discussions"
    ]
  },
  {
    position: "Junior WordPress Developer",
    company: "WebFix Lab",
    period: "July 2023 - February 2024",
    location: "Remote (Bangladesh)",
    responsibilities: [
      "Developed, maintained, and updated WordPress websites for a diverse client base, ensuring high-quality design and functionality",
      "Optimized website performance for speed, responsiveness, and SEO, adhering to best practices to improve search engine rankings and user experience",
      "Ensured strict confidentiality and professionalism in handling client projects and sensitive information",
      "Collaborated with cross-functional teams to deliver customized web solutions and enhancements"
    ]
  },
  {
    position: "Data Entry Operator, Lead Generation Expert & WordPress Designer",
    company: "Upwork",
    period: "April 2022 - February 2024",
    location: "Remote (Freelance)",
    responsibilities: [
      "Provided freelance services in data entry and lead generation",
      "Designed and developed WordPress websites for clients",
      "Managed multiple projects simultaneously",
      "Maintained high client satisfaction through quality deliverables"
    ]
  },
  {
    position: "CNC Operator, Machinist and Programmer",
    company: "Nichima Precision Engineering Sdn. Bhd.",
    period: "April 2016 - April 2022",
    location: "On-site (Malaysia)",
    responsibilities: [
      "Operated and programmed GOODWAY GCL2BL 2-axis CNC Lathe machines",
      "Managed 3-axis CNC Milling operations",
      "Led a team of 5-6 people in manufacturing operations",
      "Gained valuable experience in industrial culture, leadership, and teamwork"
    ]
  },
  {
    position: "Office Assistant Cum Computer Operator",
    company: "Nichima Precision Engineering Sdn. Bhd.",
    period: "March 2016 - April 2016",
    location: "On-site (Malaysia)",
    responsibilities: [
      "Assisted HR manager with payroll preparation",
      "Managed database entry for the sales department",
      "Worked in QC department as a QC Inspector",
      "Handled various administrative tasks efficiently"
    ]
  }
];

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < experiences.length - 1 && (
        <div className="absolute left-5 top-16 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-blue to-blue-600/30"></div>
      )}
      
      <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-portfolio-blue/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/0 via-portfolio-blue/10 to-portfolio-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Left border accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-portfolio-blue to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div>
              <motion.div 
                className="flex items-center gap-2 mb-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Briefcase className="h-5 w-5 text-portfolio-blue" />
                </motion.div>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-portfolio-blue transition-colors">
                    {experience.position}
                  </CardTitle>
                  <p className="text-portfolio-blue font-medium mt-1">{experience.company}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4 mt-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center text-sm text-gray-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Calendar className="h-4 w-4 mr-1.5 text-portfolio-blue" />
                  {experience.period}
                </motion.div>
                <motion.div 
                  className="flex items-center text-sm text-gray-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="h-4 w-4 mr-1.5 text-portfolio-blue" />
                  {experience.location}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-3">
            {experience.responsibilities.map((resp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-2 text-gray-600 group/item"
              >
                <motion.div
                  whileHover={{ rotate: 90, scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-4 w-4 mt-1 text-portfolio-blue flex-shrink-0" />
                </motion.div>
                <motion.p
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="group-hover/item:text-portfolio-blue transition-colors"
                >
                  {resp}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
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
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-portfolio-blue to-blue-600 mt-2 mx-auto max-w-[100px]"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            A journey through my professional career, showcasing my growth and expertise in web development and technology.
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:max-w-[80%] md:mx-auto lg:max-w-none">
          <div className="order-2 lg:order-1 space-y-8 relative">
            {/* Animated background shapes */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -left-24 top-1/4 w-96 h-96 bg-portfolio-blue/5 rounded-full blur-3xl"
            />
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
          
          <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start lg:h-screen">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Professional Experience" 
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 to-blue-600/20"></div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 max-[768px]:left-[10%] max-[768px]:-bottom-[10%] bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 max-w-[80%]"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Growth</h3>
                <p className="text-gray-600">
                  Each role has contributed to my growth as a developer, from mastering WordPress development to embracing modern DevOps practices.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
