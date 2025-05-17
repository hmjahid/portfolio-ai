
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Code } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    demoLink: "https://demo-link-1.com",
  },
  {
    id: 2,
    title: "Corporate Website",
    description: "A professional business website with custom theme, animations, and contact integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    demoLink: "https://demo-link-2.com",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description: "A complete online store with product catalog, shopping cart and payment processing.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    demoLink: "https://demo-link-3.com",
  },
];

const devopsProjects: Project[] = [
  {
    id: 1,
    title: "CI/CD Pipeline",
    description: "Automated software delivery pipeline using Jenkins, Docker, and Kubernetes for continuous integration and deployment.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    codeLink: "https://github.com/username/ci-cd-pipeline",
  },
  {
    id: 2,
    title: "Infrastructure as Code",
    description: "Cloud infrastructure provisioning and management using Terraform and AWS CloudFormation.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    codeLink: "https://github.com/username/iac-templates",
  },
  {
    id: 3,
    title: "Monitoring System",
    description: "Comprehensive system monitoring using Prometheus, Grafana, and ELK stack for logs and metrics.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    codeLink: "https://github.com/username/monitoring-stack",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
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
    <section id="projects" className="section-padding container mx-auto px-4 md:px-6">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wordpressProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="devops">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {devopsProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Projects;
