
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";

const Skills = () => {
  const [proficiencyLevels, setProficiencyLevels] = useState({
    wordpress: 90,
    frontend: 80,
    backend: 75,
    devops: 70
  });
  
  const wordpressSkills = [
    "WordPress", "Theme Development", "Plugin Development", "WooCommerce", "Elementor", 
    "ACF", "PHP", "MySQL", "Gutenberg", "WordPress SEO"
  ];
  
  const frontendSkills = [
    "JavaScript", "React.js", "Next.js", "TypeScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Bootstrap", "Material-UI", "Redux"
  ];
  
  const backendSkills = [
    "Node.js", "Express.js", "MongoDB", "MySQL", "Firebase", "RESTful API", 
    "GraphQL", "Prisma"
  ];
  
  const devopsSkills = [
    "Docker", "Kubernetes", "Jenkins", "CI/CD", "AWS", "Azure", "Git", "GitHub Actions", 
    "Ansible", "Terraform", "Monitoring", "Linux"
  ];

  const SkillCard = ({ title, skills, proficiency, bgGradient }) => (
    <div className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${bgGradient}`}>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <div className="mb-5">
        <Slider 
          defaultValue={[proficiency]} 
          max={100} 
          step={1} 
          disabled
          className="my-4"
        />
        <div className="text-right text-white font-bold">{proficiency}%</div>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1.5 rounded-md bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-all duration-200 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">My Skills</h2>
        
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                <SkillCard 
                  title="WordPress Development" 
                  skills={wordpressSkills} 
                  proficiency={proficiencyLevels.wordpress} 
                  bgGradient="bg-gradient-to-br from-blue-600 to-blue-400" 
                />
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                <SkillCard 
                  title="Frontend Development" 
                  skills={frontendSkills} 
                  proficiency={proficiencyLevels.frontend} 
                  bgGradient="bg-gradient-to-br from-portfolio-accent to-purple-400" 
                />
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                <SkillCard 
                  title="Backend Development" 
                  skills={backendSkills} 
                  proficiency={proficiencyLevels.backend} 
                  bgGradient="bg-gradient-to-br from-green-600 to-green-400" 
                />
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                <SkillCard 
                  title="DevOps" 
                  skills={devopsSkills} 
                  proficiency={proficiencyLevels.devops} 
                  bgGradient="bg-gradient-to-br from-red-600 to-orange-400" 
                />
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 mr-2" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Skills;
