import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";
import { Code, Server, Monitor, Cloud } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon?: React.ReactNode;
  gradient?: string;
  skills: Skill[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('wordpress');
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const categories: SkillCategory[] = [
    {
      title: 'WordPress',
      icon: <Code className="h-6 w-6" />,
      gradient: "from-blue-500 to-blue-600",
      skills: [
        { name: 'WordPress Development', level: 95 },
        { name: 'WooCommerce', level: 50 },
        { name: 'WordPress Theme Development', level: 95 },
        { name: 'WordPress Plugin Development', level: 40 },
        { name: 'WordPress Security', level: 55 },
        { name: 'WordPress Performance Optimization', level: 80 },
        { name: 'WordPress Multisite', level: 85 },
        { name: 'WordPress REST API', level: 40 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-6 w-6" />,
      gradient: "from-purple-500 to-purple-600",
      skills: [
        { name: 'PHP 8.x', level: 95 },
        { name: 'Laravel', level: 20 },
        { name: 'Object-Oriented PHP', level: 45 },
        { name: 'MySQL/MariaDB', level: 70 },
        { name: 'Database Design', level: 65 },
        { name: 'API Development', level: 30 },
        { name: 'Server Management', level: 85 },
        { name: 'Security & Performance', level: 80 }
      ]
    },
    {
      title: 'Frontend',
      icon: <Monitor className="h-6 w-6" />,
      gradient: "from-green-500 to-green-600",
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SCSS', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 35 },
        { name: 'jQuery', level: 75 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Tailwind CSS', level: 15 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      title: 'DevOps',
      icon: <Cloud className="h-6 w-6" />,
      gradient: "from-orange-500 to-orange-600",
      skills: [
        { name: 'Git', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 55 },
        { name: 'Minikube', level: 85 },
        { name: 'CI/CD', level: 20 },
        { name: 'Linux', level: 85 },
        { name: 'AWS', level: 20 },
        { name: 'Nginx', level: 35 },
        { name: 'Nagios', level: 60 },
        { name: 'Prometheus', level: 60 },
        { name: 'Grafana', level: 60 },
        { name: 'Proxmox', level: 60 },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentCategory = categories.find(cat => cat.title.toLowerCase() === activeCategory);
            if (currentCategory) {
              currentCategory.skills.forEach((skill) => {
                setTimeout(() => {
                  setProgressValues(prev => ({
                    ...prev,
                    [skill.name]: skill.level
                  }));
                }, 100);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category.toLowerCase());
    setProgressValues({});
  };

  const SkillCard = ({ title, skills, proficiency, bgGradient }) => (
    <div className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${bgGradient} h-[400px] flex flex-col mb-16`}>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <div className="mb-6">
        <Slider 
          defaultValue={[proficiency]} 
          max={100} 
          step={1} 
          disabled
          className="my-4"
        />
        <div className="text-right text-white font-bold text-lg">{proficiency}%</div>
      </div>
      <div className="flex flex-wrap gap-3 flex-grow">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-4 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium 
                     hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300 
                     text-sm border border-white/20 hover:border-white/30
                     flex items-center justify-center
                     hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10
                     cursor-pointer"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12 justify-start"
        >
          {categories.map((category) => (
            <motion.button
              key={category.title}
              onClick={() => handleCategoryChange(category.title)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 text-xs md:px-6 md:py-3 md:text-sm rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.title.toLowerCase()
                  ? 'bg-gradient-to-r from-portfolio-blue to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.icon}
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories
            .find(cat => cat.title.toLowerCase() === activeCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                  <motion.span 
                    className="text-sm font-medium bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {progressValues[skill.name] || 0}%
                  </motion.span>
                </div>
                <div className="relative">
                  <Progress 
                    value={progressValues[skill.name] || 0} 
                    className="h-2 bg-gray-100"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-portfolio-blue to-blue-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: progressValues[skill.name] ? progressValues[skill.name] / 100 : 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
