import React, { useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Certifications = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const wordpressCertifications = [
    {
      title: "Complete Wordpress Website Developer Course",
      issuer: "Udemy",
      date: "May 2023",
      link: "https://www.udemy.com/certificate/UC-7b1fa35a-26e7-4410-9010-2942edde01cf/"
    },
    {
      title: "Ultimate Wordpress Optimization 2022",
      issuer: "Udemy",
      date: "May 2023",
      link: "https://www.udemy.com/certificate/UC-c217ac3c-bf16-440e-af71-30c38533862e/"
    }
  ];

  const programmingCertifications = [
    {
      title: "Python Scripting Complete Course",
      issuer: "Udemy",
      date: "Dec 2023",
      link: "https://www.udemy.com/certificate/UC-63140e62-3145-4521-abe8-90dee1cbc160/"
    },
    {
      title: "PHP for Beginners: PHP Crash Course 2024",
      issuer: "Udemy",
      date: "Jan 2024",
      link: "https://www.udemy.com/certificate/UC-e3998a2c-9e43-4915-b712-41ed79d13fe8/"
    }
    
  ];

  const webDevelopmentCertifications = [
    {
      title: "SQL Bootcamp with MySQL, PHP & Python : 5 Courses in 1",
      issuer: "Meta",
      date: "Jul 2023",
      link: "https://www.udemy.com/certificate/UC-d753bb95-6e94-452e-b71c-efea5b946335/"
    },
    {
      title: "Test-Driven Development with React",
      issuer: "Udemy",
      date: "Apr 2023",
      link: "https://www.udemy.com/certificate/UC-945332c7-6d33-4cd3-9084-8ffaf39c2e76/"
    }
  ];

  const devopsCertifications = [
    {
      title: "Practical Git: for Absolute Beginners",
      issuer: "Udemy",
      date: "Apr 2023",
      link: "https://www.udemy.com/certificate/UC-756f782d-1d2f-4fe5-ad40-db994351f9df/"
    },
    {
      title: "DevOps Fundamentals",
      issuer: "Udemy",
      date: "Apr 2023",
      link: "https://www.udemy.com/certificate/UC-a7d0107b-0196-480e-ba81-33755b41cd74/"
    },
    {
      title: "NGINX Web Server from Scratch",
      issuer: "Udemy",
      date: "Feb 2024",
      link: "https://www.udemy.com/certificate/UC-0cca0982-e6b9-4931-a618-3c2099afbb81/"
    },
    {
      title: "AWS Builders Online Series Attendance Certificate",
      issuer: "Amazon Web Services (AWS)",
      date: "Jan 2024",
      link: "https://pages.awscloud.com/index.php/email/emailWebview?email=MTEyLVRaTS03NjYAAAGRJtdy84ydKzdoQRoZBbMC9VeFQgT35XdDAfsYiKqDqJGXo07mAxBijHLDRzXFW92cfiv1g6U-fSsW4GTfgw4vuNF0u9W-Qjb9RUc"
    }
  ];

  const otherCertifications = [
    {
      title: "Linux Desktop Automation",
      issuer: "Udemy",
      date: "Jan 2024",
      link: "https://www.udemy.com/certificate/UC-1cff1234-97ee-4b2e-b6e7-841f6d1a3d7e/"
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
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {cert.date}
                </div>
                <motion.a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-portfolio-blue hover:text-blue-600 transition-colors
                           flex items-center gap-1"
                  whileHover={{ x: 5 }}
                >
                  Verify <ExternalLink className="h-4 w-4" />
                </motion.a>
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
            My Achievements
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-portfolio-blue to-blue-600 bg-clip-text text-transparent"
          >
            Certifications
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
            Professional certifications and achievements that validate my expertise in web development and technology.
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:max-w-[80%] md:mx-auto lg:max-w-none">
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
              loading="lazy"
              width={800}
              height={600}
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
            <Tabs defaultValue="wordpress" className="w-full">
              <div className="mb-6 min-h-[100px]">
                <TabsList className="w-full flex flex-wrap gap-2 bg-gray-100/50 p-1 rounded-lg">
                  <TabsTrigger 
                    value="devops" 
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2"
                  >
                    <Award className="h-4 w-4" /> DevOps
                  </TabsTrigger>
                  <TabsTrigger 
                    value="wordpress" 
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2"
                  >
                    <Award className="h-4 w-4" /> WordPress
                  </TabsTrigger>
                  <TabsTrigger 
                    value="programming" 
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2"
                  >
                    <Award className="h-4 w-4" /> Programming
                  </TabsTrigger>
                  <TabsTrigger 
                    value="webdev" 
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2"
                  >
                    <Award className="h-4 w-4" /> Web Dev
                  </TabsTrigger>
                  <TabsTrigger 
                    value="others" 
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2"
                  >
                    <Award className="h-4 w-4" /> Others
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                <TabsContent value="wordpress">
                  {renderCertificationCards(wordpressCertifications)}
                </TabsContent>
                
                <TabsContent value="programming">
                  {renderCertificationCards(programmingCertifications)}
                </TabsContent>

                <TabsContent value="webdev">
                  {renderCertificationCards(webDevelopmentCertifications)}
                </TabsContent>

                <TabsContent value="devops">
                  {renderCertificationCards(devopsCertifications)}
                </TabsContent>

                <TabsContent value="others">
                  {renderCertificationCards(otherCertifications)}
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
