import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Code, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  codeLink?: string;
};

const wordpressProjects: Project[] = [
  {
    id: 1,
    title: "E-Learning Platform",
    description: "A complete learning management system with course creation, enrollment, and payment integration.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    demoLink: "https://demo-link-1.com",
  },
  {
    id: 2,
    title: "Corporate Website",
    description: "A professional business website with custom theme, animations, and contact integration.",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
    demoLink: "https://demo-link-2.com",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description: "A complete online store with product catalog, shopping cart and payment processing.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    demoLink: "https://demo-link-3.com",
  },
  {
    id: 4,
    title: "Real Estate Portal",
    description: "A property listing platform with advanced search, virtual tours, and agent management.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    demoLink: "https://demo-link-4.com",
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    description: "Online reservation system with table management, menu display, and order processing.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    demoLink: "https://demo-link-5.com",
  },
  {
    id: 6,
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling and medical records.",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
    demoLink: "https://demo-link-6.com",
  }
];

const devopsProjects: Project[] = [
  {
    id: 1,
    title: "CI/CD Pipeline",
    description: "Automated software delivery pipeline using Jenkins, Docker, and Kubernetes for continuous integration and deployment.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    codeLink: "https://github.com/username/ci-cd-pipeline",
  },
  {
    id: 2,
    title: "Infrastructure as Code",
    description: "Cloud infrastructure provisioning and management using Terraform and AWS CloudFormation.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    codeLink: "https://github.com/username/iac-templates",
  },
  {
    id: 3,
    title: "Monitoring System",
    description: "Comprehensive system monitoring using Prometheus, Grafana, and ELK stack for logs and metrics.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    codeLink: "https://github.com/username/monitoring-stack",
  },
  {
    id: 4,
    title: "Container Orchestration",
    description: "Kubernetes cluster setup with service mesh and automated scaling capabilities.",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
    codeLink: "https://github.com/username/k8s-cluster",
  },
  {
    id: 5,
    title: "Security Automation",
    description: "Automated security scanning and compliance checking using OWASP ZAP and SonarQube.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    codeLink: "https://github.com/username/security-automation",
  },
  {
    id: 6,
    title: "Cloud Migration",
    description: "Automated migration of on-premise applications to cloud using AWS Migration Hub.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    codeLink: "https://github.com/username/cloud-migration",
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl h-full bg-white/80 backdrop-blur-sm border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-portfolio-blue transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600">{project.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-2">
          {project.demoLink && (
            <Button 
              asChild 
              variant="outline"
              className="group/btn flex items-center gap-2 hover:bg-portfolio-blue hover:text-white transition-colors"
            >
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 group-hover/btn:animate-pulse" />
                View Demo
              </a>
            </Button>
          )}
          {project.codeLink && (
            <Button 
              asChild
              className="group/btn flex items-center gap-2 bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90"
            >
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 group-hover/btn:animate-pulse" />
                View Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
          Projects
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 mb-8 max-w-2xl"
        >
          Check out some of my recent projects and work samples. Each project represents a unique challenge and solution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="wordpress" className="w-full">
            <TabsList className="w-full md:w-fit mb-8 grid grid-cols-2 md:flex bg-gray-100/50 p-1 rounded-lg">
              <TabsTrigger 
                value="wordpress" 
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                <Globe className="h-4 w-4" /> WordPress
              </TabsTrigger>
              <TabsTrigger 
                value="devops" 
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                <Code className="h-4 w-4" /> DevOps
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="wordpress">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {wordpressProjects.map((project) => (
                    <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <ProjectCard project={project} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="relative static left-0 right-0 translate-y-0 mr-2 hover:bg-portfolio-blue hover:text-white transition-colors" />
                  <CarouselNext className="relative static left-0 right-0 translate-y-0 ml-2 hover:bg-portfolio-blue hover:text-white transition-colors" />
                </div>
              </Carousel>
            </TabsContent>
            
            <TabsContent value="devops">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {devopsProjects.map((project) => (
                    <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <ProjectCard project={project} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="relative static left-0 right-0 translate-y-0 mr-2 hover:bg-portfolio-blue hover:text-white transition-colors" />
                  <CarouselNext className="relative static left-0 right-0 translate-y-0 ml-2 hover:bg-portfolio-blue hover:text-white transition-colors" />
                </div>
              </Carousel>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
