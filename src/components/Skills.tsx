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

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('wordpress');
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const categories: SkillCategory[] = [
    {
      title: 'WordPress',
      skills: [
        { name: 'WordPress Development', level: 95 },
        { name: 'WooCommerce', level: 90 },
        { name: 'WordPress Theme Development', level: 95 },
        { name: 'WordPress Plugin Development', level: 90 },
        { name: 'WordPress Security', level: 85 },
        { name: 'WordPress Performance Optimization', level: 90 },
        { name: 'WordPress Multisite', level: 85 },
        { name: 'WordPress REST API', level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'PHP 8.x', level: 95 },
        { name: 'Laravel', level: 90 },
        { name: 'Object-Oriented PHP', level: 95 },
        { name: 'MySQL/MariaDB', level: 90 },
        { name: 'Database Design', level: 85 },
        { name: 'API Development', level: 90 },
        { name: 'Server Management', level: 85 },
        { name: 'Security & Performance', level: 90 }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SCSS', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'jQuery', level: 95 },
        { name: 'Bootstrap', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 95 }
      ]
    },
    {
      title: 'DevOps',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Nginx', level: 85 },
        { name: 'Apache', level: 90 },
        { name: 'SSL/TLS', level: 85 }
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
    <section ref={sectionRef} id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => handleCategoryChange(category.title)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.title.toLowerCase()
                  ? 'bg-gradient-to-r from-portfolio-blue to-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories
            .find(cat => cat.title.toLowerCase() === activeCategory)
            ?.skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-sm text-gray-500">{progressValues[skill.name] || 0}%</span>
                </div>
                <Progress value={progressValues[skill.name] || 0} className="h-2" />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
