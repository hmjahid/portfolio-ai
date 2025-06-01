import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Code, ExternalLink, Github, X, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  codeLink?: string;
  blogLink?: string;
  technologies: string[];
  features: string[];
  role: string;
  duration: string;
  challenges: string[];
};

const wordpressProjects: Project[] = [
  {
    id: 1,
    title: "Hypnotherapy with Shelly O'Brien",
    description: "A personalized hypnotherapy service website helping clients recognize their potential, overcome challenges, and achieve their goals through professional hypnotherapy services.",
    image: "/assets/Shelly-Obrien.png",
    demoLink: "https://shellyobrienhypnotherapy.com/",
    technologies: ["WordPress", "Divi Theme", "Divi Builder", "Contact Form 7", "Yoast SEO"],
    features: [
      "Responsive design for all devices",
      "Custom layout and branding",
      "Service information pages",
      "Contact form integration",
      "Testimonials section",
      "About and services pages"
    ],
    role: "WordPress Developer",
    duration: "2 months",
    challenges: [
      "Creating a calming and professional design",
      "Ensuring responsive functionality",
      "Customizing Divi Builder to match client's vision"
    ]
  }
];

const devopsProjects: Project[] = [
  {
    id: 1,
    title: "Building a Comprehensive Server Monitoring System with Docker",
    description: "I built a robust server monitoring stack using Node Exporter, Prometheus, Grafana, Redis, Alertmanager, and cAdvisor, later expanding it with Nagios Core and Uptime Kuma for deeper observability",
    image: "/assets/server-monitoring.png",
    codeLink: "https://github.com/hmjahid/devops-projects/tree/main/docker/server-monitoring-stack",
    blogLink: "https://medium.com/@mdjahidhasan919/building-a-comprehensive-server-monitoring-system-with-docker-a-one-year-journey-b9226d6e8ef2",
    technologies: ["Docker", "DevOps", "Grafana", "Prometheus.io", "Nagios Core", "Uptime Kuma"],
    features: [
      "Node Exporter for metrics collection",
      "Prometheus for data storage and querying",
      "Grafana for visualization and dashboarding",
      "Redis for caching and real-time data",
      "Alertmanager for alerting and notifications",
      "cAdvisor for container resource utilization"
    ],
    role: "DevOps Engineer",
    duration: "1 week",
    challenges: [
      "Setting up persistent storage for Prometheus",
      "Configuring Alertmanager for alerting",
      "Implementing Nagios Core for deeper observability"
    ]
  },
  {
    id: 2,
    title: "Multi-Tier Web Application Deployment",
    description: "Designed and deployed a scalable, six-tier web application using Docker to demonstrate expertise in containerization and DevOps practices.",
    image: "/assets/multi-tier-php-application.jpg",
    codeLink: "https://github.com/hmjahid/devops-projects/tree/main/docker/6-tier-php-app",
    blogLink: "https://medium.com/@mdjahidhasan919/deploying-a-6-tier-php-application-with-docker-c6c35834b582",
    technologies: ["Docker", "Docker Compose", "Nginx", "PHP", "MySQL", "Redis"],
    features: [
      "Six-tier application architecture",
      "Containerized microservices",
      "Load balancing with Nginx",
      "Database containerization",
      "Redis caching layer",
      "Automated deployment scripts"
    ],
    role: "DevOps Engineer",
    duration: "2 days",
    challenges: [
      "Managing inter-container communication",
      "Implementing proper service discovery",
      "Ensuring data persistence across containers"
    ]
  },
  {
    id: 2,
    title: "Autoscalable WooCommerce Deployment",
    description: "Deployed a full WooCommerce application with MySQL, Redis, phpMyAdmin, and FileBrowser in both Docker and Kubernetes (Minikube), implementing autoscaling for optimal performance.",
    image: "/assets/auto-scalable-woocommerce.jpg",
    codeLink: "https://github.com/hmjahid/devops-projects/tree/main/docker%2Bk8s/auto-scalable-woocommerce",
    blogLink: "https://medium.com/@mdjahidhasan919/deploying-woocommerce-with-mysql-redis-phpmyadmin-and-filebrowser-a-journey-to-docker-and-ec7e928c7bed",
    technologies: ["Docker", "Kubernetes", "Minikube", "MySQL", "Redis", "WooCommerce"],
    features: [
      "Containerized WooCommerce setup",
      "Kubernetes deployment with Minikube",
      "MySQL database containerization",
      "Redis caching integration",
      "phpMyAdmin for database management",
      "FileBrowser for file management"
    ],
    role: "DevOps Engineer",
    duration: "1 week",
    challenges: [
      "Setting up persistent storage for MySQL",
      "Configuring Redis caching layer",
      "Implementing Kubernetes autoscaling"
    ]
  }
];

const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card 
        className="group overflow-hidden transition-all duration-300 hover:shadow-xl h-full bg-white/80 backdrop-blur-sm border border-gray-100"
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Button
            onClick={() => onOpen(project)}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white text-gray-800 hover:text-portfolio-blue shadow-lg hover:shadow-xl"
          >
            View Details
          </Button>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-portfolio-blue transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600">{project.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col lg:flex-row gap-2">
          <Button
            onClick={() => onOpen(project)}
            className="w-full lg:hidden bg-portfolio-blue hover:bg-portfolio-blue/90 text-white"
          >
            View Details
          </Button>
          {project.demoLink && (
            <Button 
              asChild 
              variant="outline"
              className="group/btn flex items-center gap-2 hover:bg-portfolio-blue hover:text-white transition-colors w-full lg:w-auto"
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
              className="group/btn flex items-center gap-2 bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 w-full lg:w-auto"
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <Tabs defaultValue="devops" className="w-full">
            <TabsList className="w-full md:w-fit mb-8 grid grid-cols-2 md:flex bg-gray-100/50 p-1 rounded-lg">
              <TabsTrigger 
                value="devops" 
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                <Code className="h-4 w-4" /> DevOps
              </TabsTrigger>
              <TabsTrigger 
                value="wordpress" 
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                <Globe className="h-4 w-4" /> WordPress
              </TabsTrigger>
            </TabsList>
            
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
                      <ProjectCard project={project} onOpen={setSelectedProject} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="relative static left-0 right-0 translate-y-0 mr-2 hover:bg-portfolio-blue hover:text-white transition-colors" />
                  <CarouselNext className="relative static left-0 right-0 translate-y-0 ml-2 hover:bg-portfolio-blue hover:text-white transition-colors" />
                </div>
              </Carousel>
            </TabsContent>
            
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
                      <ProjectCard project={project} onOpen={setSelectedProject} />
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

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-gradient-to-br from-white to-gray-50 border-none">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/10 to-blue-600/10"></div>
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <DialogTitle className="text-4xl font-bold mb-2">
                        {selectedProject.title}
                      </DialogTitle>
                      <DialogDescription className="text-white/80 text-lg">
                        {selectedProject.description}
                      </DialogDescription>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-portfolio-blue mb-3">Project Overview</h3>
                      <div className="space-y-2">
                        <p className="flex items-center gap-2 text-gray-600">
                          <span className="font-medium">Role:</span> {selectedProject.role}
                        </p>
                        <p className="flex items-center gap-2 text-gray-600">
                          <span className="font-medium">Duration:</span> {selectedProject.duration}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-portfolio-blue mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-portfolio-blue mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <span className="text-portfolio-blue mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-portfolio-blue mb-3">Challenges & Solutions</h3>
                      <ul className="space-y-3">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-600">{challenge}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      {selectedProject.demoLink && (
                        <Button 
                          asChild 
                          variant="outline"
                          className="group/btn flex items-center gap-2 hover:bg-portfolio-blue hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                            <Globe className="h-5 w-5 group-hover/btn:animate-pulse" />
                            View Live Demo
                          </a>
                        </Button>
                      )}
                      {selectedProject.codeLink && (
                        <Button 
                          asChild
                          className="group/btn flex items-center gap-2 bg-gradient-to-r from-portfolio-blue to-blue-600 hover:opacity-90 transition-all duration-300 hover:scale-105"
                        >
                          <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5 group-hover/btn:animate-pulse" />
                            View Source Code
                          </a>
                        </Button>
                      )}
                      {selectedProject.blogLink && (
                        <Button 
                          asChild
                          variant="outline"
                          className="group/btn flex items-center gap-2 hover:bg-portfolio-blue hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          <a href={selectedProject.blogLink} target="_blank" rel="noopener noreferrer">
                            <BookOpen className="h-5 w-5 group-hover/btn:animate-pulse" />
                            Read Article
                          </a>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
