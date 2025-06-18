export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with DevOps: A Comprehensive Guide",
    slug: "getting-started-with-devops",
    excerpt: "Learn the fundamentals of DevOps and how to implement it in your organization. This guide covers everything from basic concepts to advanced practices.",
    content: `DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery with high software quality.

![DevOps Workflow](https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&h=600&q=80)

## What is DevOps?

DevOps is a culture, movement, or practice that emphasizes the collaboration and communication of both software developers and other information-technology (IT) professionals while automating the process of software delivery and infrastructure changes.

## Key Benefits of DevOps

1. Faster delivery of features
2. More stable operating environments
3. Improved communication and collaboration
4. More time to innovate (rather than fix/maintain)

![DevOps Benefits](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=600&q=80)

## Getting Started

To get started with DevOps, you need to:

1. Understand the basic concepts
2. Set up your development environment
3. Learn about CI/CD pipelines
4. Master containerization
5. Understand infrastructure as code

![DevOps Tools](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

DevOps is not just a set of tools, but a cultural shift that requires collaboration and communication between teams. Start small, learn continuously, and scale your practices as you grow.`,
    coverImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-03-15",
    readTime: "10 min read",
    tags: ["DevOps", "CI/CD", "Automation"],
    category: "DevOps"
  },
  {
    id: "2",
    title: "WordPress Development Best Practices",
    slug: "wordpress-development-best-practices",
    excerpt: "Discover the best practices for WordPress development, from theme customization to plugin development and security measures.",
    content: `WordPress is the most popular content management system, powering over 40% of all websites on the internet. Here's how to develop WordPress sites effectively.

## Theme Development

When developing WordPress themes, follow these best practices:

1. Use child themes
2. Follow WordPress coding standards
3. Implement responsive design
4. Optimize for performance

![WordPress Theme Development](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Plugin Development

For plugin development:

1. Use proper namespacing
2. Follow security best practices
3. Implement proper error handling
4. Test thoroughly

![WordPress Plugin](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=600&q=80)

## Security Measures

Security is crucial in WordPress development:

1. Keep WordPress core updated
2. Use secure plugins
3. Implement proper user roles
4. Regular backups

![WordPress Security](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

Following these best practices will help you create secure, maintainable, and efficient WordPress websites.`,
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-03-10",
    readTime: "8 min read",
    tags: ["WordPress", "Web Development", "Security"],
    category: "WordPress"
  },
  {
    id: "3",
    title: "Docker for Beginners: Containerization Made Easy",
    slug: "docker-for-beginners",
    excerpt: "Learn the basics of Docker and containerization. This guide will help you understand containers, images, and how to use Docker in your development workflow.",
    content: `Docker has revolutionized the way we develop, ship, and run applications. Let's explore the fundamentals of containerization.

## What are Containers?

Containers are lightweight, standalone packages that include everything needed to run a piece of software:

1. Application code
2. Runtime environment
3. System tools
4. System libraries

![Docker Containers](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Getting Started with Docker

To start using Docker:

1. Install Docker Desktop
2. Learn basic commands
3. Create your first container
4. Build custom images

![Docker Basics](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Best Practices

Follow these best practices for Docker:

1. Use official base images
2. Keep images small
3. Use multi-stage builds
4. Implement proper security

![Docker Best Practices](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

Docker simplifies the development process and ensures consistency across different environments. Start with the basics and gradually explore advanced features.`,
    coverImage: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-03-05",
    readTime: "12 min read",
    tags: ["Docker", "DevOps", "Containerization"],
    category: "DevOps"
  },
  {
    id: "4",
    title: "Kubernetes: Orchestrating Containerized Applications",
    slug: "kubernetes-container-orchestration",
    excerpt: "Master Kubernetes for container orchestration. Learn about pods, services, deployments, and how to manage containerized applications at scale.",
    content: `Kubernetes has become the de facto standard for container orchestration. Let's dive into its core concepts and practical applications.

## Understanding Kubernetes

Kubernetes is a powerful platform for:

1. Container orchestration
2. Service discovery
3. Load balancing
4. Automated rollouts

![Kubernetes Architecture](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Core Components

Key components in Kubernetes:

1. Pods
2. Services
3. Deployments
4. ConfigMaps

![Kubernetes Components](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Deployment Strategies

Learn about different deployment strategies:

1. Rolling updates
2. Blue-green deployments
3. Canary deployments
4. A/B testing

![Kubernetes Deployments](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

Kubernetes provides powerful tools for managing containerized applications. Start with the basics and gradually explore advanced features.`,
    coverImage: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-03-01",
    readTime: "15 min read",
    tags: ["Kubernetes", "DevOps", "Containerization"],
    category: "DevOps"
  },
  {
    id: "5",
    title: "WordPress Theme Development: From Design to Deployment",
    slug: "wordpress-theme-development",
    excerpt: "A comprehensive guide to WordPress theme development, covering design principles, coding standards, and deployment strategies.",
    content: `Creating custom WordPress themes requires a combination of design skills and technical knowledge. Let's explore the process step by step.

## Design Principles

Key design principles for WordPress themes:

1. Responsive design
2. User experience
3. Accessibility
4. Performance

![Theme Design](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Development Process

Steps in theme development:

1. Planning and design
2. Setting up the environment
3. Coding the theme
4. Testing and debugging

![Theme Development](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Best Practices

Follow these best practices:

1. Use WordPress coding standards
2. Implement proper security
3. Optimize performance
4. Document your code

![Theme Best Practices](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

WordPress theme development is a rewarding process that combines creativity with technical skills. Focus on creating themes that are both beautiful and functional.`,
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-02-25",
    readTime: "12 min read",
    tags: ["WordPress", "Theme Development", "Web Design"],
    category: "WordPress"
  },
  {
    id: "6",
    title: "CI/CD Pipeline Implementation with GitHub Actions",
    slug: "cicd-pipeline-github-actions",
    excerpt: "Learn how to set up and optimize CI/CD pipelines using GitHub Actions for automated testing, building, and deployment.",
    content: `GitHub Actions provides a powerful platform for implementing CI/CD pipelines. Let's explore how to create efficient workflows.

## Understanding GitHub Actions

GitHub Actions components:

1. Workflows
2. Events
3. Jobs
4. Steps

![GitHub Actions](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Building Your Pipeline

Steps to create a CI/CD pipeline:

1. Define workflow triggers
2. Set up build jobs
3. Configure testing
4. Implement deployment

![CI/CD Pipeline](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Best Practices

Follow these best practices:

1. Use reusable workflows
2. Implement caching
3. Optimize job execution
4. Monitor performance

![Best Practices](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

GitHub Actions provides a flexible and powerful platform for implementing CI/CD pipelines. Start with basic workflows and gradually add complexity.`,
    coverImage: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-02-20",
    readTime: "10 min read",
    tags: ["CI/CD", "GitHub Actions", "DevOps"],
    category: "DevOps"
  },
  {
    id: "7",
    title: "WordPress Plugin Development: A Step-by-Step Guide",
    slug: "wordpress-plugin-development",
    excerpt: "Master the art of WordPress plugin development with this comprehensive guide covering architecture, security, and best practices.",
    content: `WordPress plugins extend the functionality of your website. Let's learn how to create custom plugins effectively.

## Plugin Architecture

Key components of a WordPress plugin:

1. Plugin header
2. Main plugin class
3. Activation hooks
4. Deactivation hooks

![Plugin Architecture](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Development Process

Steps in plugin development:

1. Planning functionality
2. Setting up the structure
3. Implementing features
4. Testing and debugging

![Development Process](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Security Considerations

Important security aspects:

1. Data validation
2. Sanitization
3. Nonce verification
4. Capability checks

![Security](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

WordPress plugin development requires attention to detail and security. Follow best practices and test thoroughly.`,
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-02-15",
    readTime: "12 min read",
    tags: ["WordPress", "Plugin Development", "Security"],
    category: "WordPress"
  },
  {
    id: "8",
    title: "Infrastructure as Code with Terraform",
    slug: "infrastructure-as-code-terraform",
    excerpt: "Learn how to manage your infrastructure using Terraform, from basic concepts to advanced deployment strategies.",
    content: `Terraform has revolutionized infrastructure management through code. Let's explore its capabilities.

## Terraform Basics

Core concepts in Terraform:

1. Providers
2. Resources
3. State management
4. Modules

![Terraform Basics](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Infrastructure Management

Managing infrastructure with Terraform:

1. Writing configurations
2. Planning changes
3. Applying updates
4. Managing state

![Infrastructure](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Best Practices

Follow these best practices:

1. Use modules
2. Implement remote state
3. Version control
4. Documentation

![Best Practices](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

Terraform provides a powerful way to manage infrastructure. Start with basic configurations and gradually adopt advanced features.`,
    coverImage: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-02-10",
    readTime: "15 min read",
    tags: ["Terraform", "DevOps", "Infrastructure"],
    category: "DevOps"
  },
  {
    id: "9",
    title: "WordPress Performance Optimization",
    slug: "wordpress-performance-optimization",
    excerpt: "Discover techniques and tools to optimize your WordPress site's performance, from caching to database optimization.",
    content: `Performance optimization is crucial for WordPress sites. Let's explore various optimization techniques.

## Caching Strategies

Implement effective caching:

1. Page caching
2. Object caching
3. Database caching
4. Browser caching

![Caching](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Database Optimization

Optimize your database:

1. Regular maintenance
2. Query optimization
3. Index management
4. Cleanup routines

![Database](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Asset Optimization

Optimize your assets:

1. Image compression
2. CSS/JS minification
3. Lazy loading
4. CDN integration

![Assets](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

Performance optimization is an ongoing process. Monitor your site and implement improvements gradually.`,
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-02-05",
    readTime: "10 min read",
    tags: ["WordPress", "Performance", "Optimization"],
    category: "WordPress"
  },
  {
    id: "10",
    title: "Monitoring and Logging in DevOps",
    slug: "monitoring-logging-devops",
    excerpt: "Learn about essential monitoring and logging practices in DevOps, including tools, strategies, and best practices.",
    content: `Effective monitoring and logging are crucial for maintaining system health. Let's explore best practices.

## Monitoring Tools

Popular monitoring tools:

1. Prometheus
2. Grafana
3. ELK Stack
4. Datadog

![Monitoring](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Logging Strategies

Implement effective logging:

1. Centralized logging
2. Log levels
3. Log rotation
4. Log analysis

![Logging](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Best Practices

Follow these best practices:

1. Set up alerts
2. Create dashboards
3. Regular reviews
4. Documentation

![Best Practices](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

Monitoring and logging are essential for maintaining system reliability. Start with basic tools and gradually expand your setup.`,
    coverImage: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-02-01",
    readTime: "12 min read",
    tags: ["DevOps", "Monitoring", "Logging"],
    category: "DevOps"
  },
  {
    id: "11",
    title: "WordPress Multisite: A Complete Guide",
    slug: "wordpress-multisite-guide",
    excerpt: "Master WordPress Multisite installation, configuration, and management for running multiple sites from a single installation.",
    content: `WordPress Multisite enables you to manage multiple sites from a single installation. Let's explore its features.

## Installation

Setting up Multisite:

1. Network setup
2. Configuration
3. Domain mapping
4. User management

![Multisite](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Management

Managing multiple sites:

1. Network admin
2. Site management
3. Plugin management
4. Theme management

![Management](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Best Practices

Follow these best practices:

1. Regular backups
2. Security measures
3. Performance optimization
4. User roles

![Best Practices](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

WordPress Multisite is powerful but requires careful management. Plan your setup and follow best practices.`,
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-01-28",
    readTime: "15 min read",
    tags: ["WordPress", "Multisite", "Management"],
    category: "WordPress"
  },
  {
    id: "12",
    title: "DevOps Security Best Practices",
    slug: "devops-security-best-practices",
    excerpt: "Learn essential security practices for DevOps environments, from infrastructure security to application security.",
    content: `Security is crucial in DevOps. Let's explore best practices for securing your DevOps pipeline.

## Infrastructure Security

Secure your infrastructure:

1. Access control
2. Network security
3. Secret management
4. Compliance

![Infrastructure Security](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Application Security

Secure your applications:

1. Code scanning
2. Dependency checks
3. Container security
4. Runtime protection

![Application Security](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Best Practices

Follow these best practices:

1. Security automation
2. Regular audits
3. Incident response
4. Documentation

![Best Practices](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

Security should be integrated into every aspect of your DevOps pipeline. Stay vigilant and keep learning.`,
    coverImage: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-01-25",
    readTime: "12 min read",
    tags: ["DevOps", "Security", "Best Practices"],
    category: "DevOps"
  },
  {
    id: "13",
    title: "WordPress REST API: Building Custom Endpoints",
    slug: "wordpress-rest-api-custom-endpoints",
    excerpt: "Learn how to create and customize WordPress REST API endpoints for building modern web applications.",
    content: `The WordPress REST API provides powerful capabilities for extending WordPress functionality. Let's explore custom endpoint development.

## Understanding REST API

Key concepts in WordPress REST API:

1. Endpoints
2. Routes
3. Authentication
4. Data handling

![REST API](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Creating Custom Endpoints

Steps to create custom endpoints:

1. Register routes
2. Define callbacks
3. Handle permissions
4. Process data

![Custom Endpoints](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Best Practices

Follow these best practices:

1. Proper validation
2. Error handling
3. Performance optimization
4. Documentation

![Best Practices](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

WordPress REST API enables powerful integrations. Start with basic endpoints and gradually add complexity.`,
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-01-20",
    readTime: "10 min read",
    tags: ["WordPress", "REST API", "Development"],
    category: "WordPress"
  },
  {
    id: "14",
    title: "Docker Compose: Multi-Container Applications",
    slug: "docker-compose-multi-container",
    excerpt: "Master Docker Compose for orchestrating multi-container applications with practical examples and best practices.",
    content: `Docker Compose simplifies the management of multi-container applications. Let's explore its capabilities.

## Docker Compose Basics

Key components in Docker Compose:

1. Services
2. Networks
3. Volumes
4. Environment variables

![Docker Compose](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Service Configuration

Configure your services:

1. Define dependencies
2. Set up networks
3. Manage volumes
4. Handle environment

![Service Configuration](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Best Practices

Follow these best practices:

1. Use version control
2. Implement health checks
3. Optimize builds
4. Security considerations

![Best Practices](https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

Docker Compose provides a powerful way to manage multi-container applications. Start with basic configurations and gradually adopt advanced features.`,
    coverImage: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-01-15",
    readTime: "12 min read",
    tags: ["Docker", "DevOps", "Containers"],
    category: "DevOps"
  },
  {
    id: "15",
    title: "WordPress Gutenberg: Custom Block Development",
    slug: "wordpress-gutenberg-custom-blocks",
    excerpt: "Learn how to create custom blocks for the WordPress Gutenberg editor with modern JavaScript and React.",
    content: `Gutenberg blocks extend WordPress content creation capabilities. Let's explore custom block development.

## Block Development Basics

Key concepts in block development:

1. Block structure
2. Attributes
3. Components
4. Styling

![Block Development](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Creating Custom Blocks

Steps to create custom blocks:

1. Set up development environment
2. Define block structure
3. Implement editor interface
4. Add frontend rendering

![Custom Blocks](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Best Practices

Follow these best practices:

1. Component organization
2. State management
3. Performance optimization
4. Accessibility

![Best Practices](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&h=600&q=80)

## Conclusion

Gutenberg block development enables powerful content creation tools. Start with basic blocks and gradually add complexity.`,
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&h=600&q=80",
    author: {
      name: "Md Jahid Hasan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    date: "2025-01-10",
    readTime: "15 min read",
    tags: ["WordPress", "Gutenberg", "Development"],
    category: "WordPress"
  }
]; 