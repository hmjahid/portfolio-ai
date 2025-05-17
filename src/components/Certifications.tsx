import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Certifications = () => {
  const freeCodeCampCertifications = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "April 2023",
      link: "https://www.freecodecamp.org/certification/fcc814fa65d-17d5-4ae2-bc1e-4e316e1c9f7d/javascript-algorithms-and-data-structures"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "February 2023",
      link: "https://www.freecodecamp.org/certification/fcc814fa65d-17d5-4ae2-bc1e-4e316e1c9f7d/responsive-web-design"
    }
  ];

  const metaCertifications = [
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      date: "May 2023",
      link: "https://coursera.org/share/0f584e645a5db174e0534142e7abafb3"
    },
    {
      title: "Programming with JavaScript",
      issuer: "Meta",
      date: "June 2023",
      link: "https://coursera.org/share/155fd8cfbc5fa196e4e7911ef6782b17"
    },
    {
      title: "HTML and CSS in depth",
      issuer: "Meta",
      date: "June 2023",
      link: "https://coursera.org/share/a8881271edc0713a95b30c55fdcc88a1"
    },
    {
      title: "Version Control",
      issuer: "Meta",
      date: "July 2023",
      link: "https://coursera.org/share/4ed8d6381c5b99dcbaa83c0515e9a23a"
    }
  ];

  const renderCertificationCards = (certifications) => (
    <div className="space-y-6">
      {certifications.map((cert, index) => (
        <Card 
          key={index} 
          className="border border-gray-200 hover:border-portfolio-blue transition-all duration-300 
                   hover:shadow-lg hover:-translate-y-1 animate-fade-in" 
          style={{animationDelay: `${index * 0.1}s`}}
        >
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 text-portfolio-blue mr-2" />
              {cert.title}
            </CardTitle>
            <CardDescription>{cert.issuer}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">{cert.date}</p>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-portfolio-blue hover:underline"
              >
                Verify
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="animate-fade-in">
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg" 
                alt="Certifications and Achievements" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 to-blue-600/20"></div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Tabs defaultValue="freecodecamp" className="w-full">
              <TabsList className="w-full md:w-fit mb-6 grid grid-cols-2 md:flex">
                <TabsTrigger value="freecodecamp" className="flex items-center gap-2">
                  <Award className="h-4 w-4" /> freeCodeCamp
                </TabsTrigger>
                <TabsTrigger value="meta" className="flex items-center gap-2">
                  <Award className="h-4 w-4" /> Meta
                </TabsTrigger>
              </TabsList>
              
              <div className="h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                <TabsContent value="freecodecamp">
                  {renderCertificationCards(freeCodeCampCertifications)}
                </TabsContent>
                
                <TabsContent value="meta">
                  {renderCertificationCards(metaCertifications)}
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
