import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-y-0', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Card 
      ref={cardRef}
      className="border-l-4 border-l-portfolio-blue shadow-md hover:shadow-xl transition-all duration-700 ease-out transform translate-y-8 opacity-0"
      style={{
        transitionDelay: `${index * 150}ms`
      }}
    >
      <CardHeader>
        <div className="flex items-center mb-2">
          <Briefcase className="h-5 w-5 text-portfolio-blue mr-2" />
          <CardTitle>{experience.position}</CardTitle>
        </div>
        <CardDescription className="text-base">
          {experience.company} | {experience.period} | {experience.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {experience.responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Experience: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-y-0', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </div>
          
          <div 
            ref={imageRef} 
            className="transform translate-y-8 opacity-0 transition-all duration-700 ease-out"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Professional Experience" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 to-blue-600/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
