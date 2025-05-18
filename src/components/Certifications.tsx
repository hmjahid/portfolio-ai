import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

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
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card 
            className="group border border-gray-200 hover:border-portfolio-blue transition-all duration-300 
                     hover:shadow-lg hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center text-lg font-semibold text-gray-800 group-hover:text-portfolio-blue transition-colors">
                    <Award className="h-5 w-5 text-portfolio-blue mr-2" />
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="mt-1 text-gray-600">{cert.issuer}</CardDescription>
                </div>
                <motion.a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-portfolio-blue hover:text-blue-600 transition-colors
                           flex items-center gap-1 opacity-0 group-hover:opacity-100"
                  whileHover={{ x: 5 }}
                >
                  Verify <ExternalLink className="h-4 w-4" />
                </motion.a>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-2" />
                {cert.date}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
          Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative w-full h-full overflow-hidden rounded-xl shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg" 
              alt="Certifications and Achievements" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 to-blue-600/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Professional Certifications</h3>
              <p className="text-white/80">Validating expertise through recognized industry certifications</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <Tabs defaultValue="freecodecamp" className="w-full">
              <TabsList className="w-full md:w-fit mb-6 grid grid-cols-2 md:flex bg-gray-100/50 p-1 rounded-lg">
                <TabsTrigger 
                  value="freecodecamp" 
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  <Award className="h-4 w-4" /> freeCodeCamp
                </TabsTrigger>
                <TabsTrigger 
                  value="meta" 
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
