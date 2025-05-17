import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Code } from "lucide-react";
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2">
        {project.demoLink && (
          <Button asChild variant="outline">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              View Demo
            </a>
          </Button>
        )}
        {project.codeLink && (
          <Button asChild>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        <p className="text-lg text-gray-600 mb-8">
          Check out some of my recent projects and work samples.
        </p>

        <Tabs defaultValue="wordpress" className="w-full">
          <TabsList className="w-full md:w-fit mb-6 grid grid-cols-2 md:flex">
            <TabsTrigger value="wordpress" className="flex items-center gap-2">
              <Globe className="h-4 w-4" /> WordPress
            </TabsTrigger>
            <TabsTrigger value="devops" className="flex items-center gap-2">
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
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative static left-0 right-0 translate-y-0 mr-2" />
                <CarouselNext className="relative static left-0 right-0 translate-y-0 ml-2" />
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
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative static left-0 right-0 translate-y-0 mr-2" />
                <CarouselNext className="relative static left-0 right-0 translate-y-0 ml-2" />
              </div>
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
