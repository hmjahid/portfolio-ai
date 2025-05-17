
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Mobile App Developer (Flutter)",
      company: "Deafbraille",
      period: "Nov 2023 - Present (7 mos)",
      location: "Dhaka, Bangladesh (Remote)",
      responsibilities: [
        "Developing cross-platform mobile applications using Flutter and Dart",
        "Implementing UI/UX designs and ensuring responsive layouts across different devices",
        "Working with REST APIs for data integration and Firebase for backend services",
        "Collaborating with the team to deliver high-quality, maintainable code"
      ]
    },
    {
      position: "Software Engineer",
      company: "iFMOOC",
      period: "Oct 2022 - Present (1 yr 8 mos)",
      location: "Debrecen, Hungary (Remote)",
      responsibilities: [
        "Develop and maintain robust web applications using React.js, Next.js, and Node.js",
        "Collaborate with cross-functional teams to implement new features and improve existing functionality",
        "Optimize application performance and ensure responsive design",
        "Contribute to technical documentation and code reviews"
      ]
    },
    {
      position: "MERN Stack Developer",
      company: "Bootestech",
      period: "Oct 2021 - Oct 2022 (1 yr 1 mo)",
      location: "Bangladesh (Remote)",
      responsibilities: [
        "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
        "Built RESTful APIs and implemented authentication systems",
        "Utilized Git for version control and collaborated through GitHub",
        "Implemented responsive designs using Tailwind CSS and Material UI"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="border-l-4 border-l-portfolio-blue shadow-md hover:shadow-xl transition-shadow animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Briefcase className="h-5 w-5 text-portfolio-blue mr-2" />
                  <CardTitle>{exp.position}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {exp.company} | {exp.period} | {exp.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
