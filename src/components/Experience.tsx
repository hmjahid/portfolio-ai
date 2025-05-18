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
    position: "WordPress Developer",
    company: "Freelance",
    period: "2021 - Present",
    location: "Remote",
    responsibilities: [
      "Developed custom WordPress themes and plugins for various clients",
      "Implemented responsive designs and optimized website performance",
      "Integrated third-party APIs and payment gateways",
      "Managed website maintenance and updates"
    ]
  },
  {
    position: "Web Developer",
    company: "Tech Solutions Ltd",
    period: "2020 - 2021",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Built and maintained client websites using WordPress",
      "Collaborated with designers to implement UI/UX improvements",
      "Optimized website speed and performance",
      "Implemented SEO best practices"
    ]
  },
  {
    position: "Frontend Developer",
    company: "Digital Solutions Inc",
    period: "2019 - 2020",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Developed responsive web applications using React.js and Next.js",
      "Implemented modern UI/UX designs using Tailwind CSS",
      "Collaborated with backend team to integrate RESTful APIs",
      "Optimized application performance and loading times",
      "Participated in code reviews and mentored junior developers"
    ]
  },
  {
    position: "Junior Web Developer",
    company: "WebTech Solutions",
    period: "2018 - 2019",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Assisted in developing and maintaining client websites",
      "Created responsive layouts using HTML5, CSS3, and JavaScript",
      "Implemented WordPress themes and plugins",
      "Conducted website testing and debugging",
      "Assisted in content management and updates"
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
    >
      <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-portfolio-blue/50 transition-all duration-300 hover:shadow-xl">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-portfolio-blue to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-portfolio-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-portfolio-blue transition-colors">
                  {experience.position}
                </CardTitle>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-1.5 text-portfolio-blue" />
                  {experience.period}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1.5 text-portfolio-blue" />
                  {experience.location}
                </div>
              </div>
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
                className="flex items-start gap-2 text-gray-600"
              >
                <ArrowRight className="h-4 w-4 mt-1 text-portfolio-blue flex-shrink-0" />
                <p>{resp}</p>
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
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Professional Experience
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl"
        >
          A journey through my professional career, showcasing my growth and expertise in web development and technology.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="relative w-full h-[600px] overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Professional Experience" 
                  className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 to-blue-600/20"></div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 max-w-[80%]"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Growth</h3>
                <p className="text-gray-600">
                  Each role has contributed to my growth as a developer, from mastering WordPress development to embracing modern DevOps practices.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
