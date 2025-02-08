"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Gitlab,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  images: string[];
  github: string;
  demo: string;
  longDescription: string;
  technologies: string[];
  features: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Financial Falcon",
      description:
        "A full-stack web application built with Node.js for finance.",
      images: [
        "https://i.postimg.cc/PJC1fhSy/first.png",
        "https://i.postimg.cc/wMnL7PPp/login.png",
        "https://i.postimg.cc/ZqL8Vw98/home.png",
        "https://i.postimg.cc/V6Gjc5W5/ff1.png",
        "https://i.postimg.cc/xCTK7LHW/ff2.png",
      ],
      github: "",
      demo: "https://financial-falcon.vercel.app/",
      longDescription:
        "This project is a comprehensive full-stack web application for finance. It features real-time data synchronization, user authentication, and responsive design principles.",
      technologies: [
        "Next.js",
        "vercel/postgres",
        "TypeScript",
        "TailwindCSS",
        "Postman",
        "Prisma ORM",
        "Google OAuth",
        "reCAPTCHA",
      ],
      features: [
        "Designed and implemented database schema for storing data in an efficiency way.",
        "Improved data fetching performance and reduced database load by optimizing Prisma queries.",
        "Developed a robust authentication system using NextAuth, incorporating both credential (email) login and Google OAuth login, enhancing user flexibility and security.",
        "Integrated password reset functionality with Google reCAPTCHA verification, improving account recovery security and protecting against automated bot attacks.",
      ],
    },
    {
      title: "Apologist Project - Validation",
      description:
        "A full-stack web application using RAG + LLM to validate the response generated by another LLM.",
      images: [
        "https://i.postimg.cc/NFtLScWL/validate.png",
        "https://i.postimg.cc/ydckLdpw/prompts.png",
        "https://i.postimg.cc/QMRFg5mQ/configs.png",
      ],
      github: "",
      demo: "",
      longDescription:
        "This project is a comprehensive full-stack web application using LLM and RAG to validate the response generated by another LLM. It features real-time data synchronization, allowing user to review and update expected responses and select acceptable responses.",
      technologies: [
        "Next.js",
        "JavaScript",
        "vercel/postgres",
        "Bootstrap",
        "Prisma ORM",
        "LLM",
        "RAG",
      ],
      features: [
        "Designed and Implemented an evaluation website to evaluate AI generated response by using different language model. Scored the response with accuracy and sympathy for improving the response.",
        "Improved data fetching performance and reduced database load by optimizing Prisma queries.",
        "Designed an UI for user to input the expected response and get the evaluation result.",
        "Created an auto-run function so that the website can run the evaluation automatically."
      ],
    },
    {
      title: "Scrumptious - Projects and Tasks Management Website",
      description: "Task management website for project management.",
      images: [
        "https://i.postimg.cc/PxQdL8Rr/landing-Page.png",
        "https://i.postimg.cc/MZYGHgCb/signup.png",
        "https://i.postimg.cc/NffjHpYh/signin.png",
        "https://i.postimg.cc/ZKBsqzgC/stickyboard-list.png", 
        "https://i.postimg.cc/Y2yykCd5/stickyboard-create.png",
        "https://i.postimg.cc/qqYmG1tJ/stickynote-list.png"
      ],
      github: "",
      demo: "",
      longDescription:
        "Scrumptious is a web application that facilitates project management using a Scrum-based approach with the aid of Sticky Notes and Sticky Boards. The frontend of the application is developed using React and is organized into separate directories for Sticky Notes, Sticky Boards, and Accounts. The backend of the application is built using FastAPI and MongoDB to maintain the directory structure. Additionally, the application uses microservices architecture by leveraging Docker.",
      technologies: [
        "React",
        "FastAPI",
        "Docker",
        "Tailwind",
        "Insomnia",
        "MongoDB",
        "Python",
        "JavaScript",
      ],
      features: [
        "Leveraged FastAPI to create a high-performance backend that efficiently handles data storage and retrieval in MongoDB, resulting in a reduction in API response time.",
        "Implemented robust authentication and authorization features using JWT to ensure data security and privacy.",
        "Developed a project management tool using MongoDB, FastAPI, and React, allowing users to create projects and tasks for efficient team collaboration.",
        "Built a dynamic and user-friendly interface with React, featuring a drag-and-drop function for seamless task management.",
        "Utilized modern web development practices, including responsive design and modular code organization, to create a scalable and maintainable application.",
        "Collaborated with a team of developers to design and implement the application, utilizing agile methodologies for effective project management.",
        "Utilized SendGrid to send out actual emails in the project, ensuring reliable and efficient delivery of communication to project stakeholders.",
      ],
    },
    {
      title: "CarCar - Dealership Management System",
      description: "Web system for car dealerships.",
      images: [
        "https://i.postimg.cc/1RvW933G/diagram-Wide.png",
        "https://i.postimg.cc/HW9qbmsn/carcar1.png",
        "https://i.postimg.cc/cLrPq87t/cc-Inventory.png",
        "https://i.postimg.cc/T3FFTYQ7/cc-Service1.png",
        "https://i.postimg.cc/g0h5jFTY/cc-Service2.png",
        "https://i.postimg.cc/nztWQRyq/cc-Service3.png",
        "https://i.postimg.cc/c4DP5c3N/ccSales1.png",
        "https://i.postimg.cc/025Lf4bf/ccSale2.png",
      ],
      github: "https://gitlab.com/zodramleo/project-car-car",
      demo: "",
      longDescription:
        "an application made to help manage a automobile dealership business. The application consists of three microservices: Inventory, Sales, and Service.",
      technologies: [
        "React",
        "Django",
        "Docker",
        "Bootstrap",
        "Insomnia",
        "PostgreSQL",
        "Python",
        "JavaScript",
      ],
      features: [
        "Implemented a microservices architecture in Django and Docker to enhance system flexibility and enable seamless scalability in response to changing business needs.",
        "Optimized React performance by integrating data loading functionality within the <App> component, reducing redundant data requests and improving overall user experience, resulting in a reduction in load time.",
        "Developed web applications using the Django framework, implementing features such as database connectivity, and RESTful APIs.",
        "Built and deployed Docker containers for web applications, ensuring consistency and reproducibility across development and production environments.",
        "Utilized React to create responsive and dynamic front-end user interfaces for web applications, including integrating with APIs.",
        "Implemented responsive design principles and accessibility best practices to ensure web applications are accessible to a wide range of users.",
        "Utilized version control tools such as Git to collaborate with team members and manage project codebase.",
        "Designed and implemented relational database schemas using PostgreSQL and utilized Django ORM to query and manage data.",
      ],
    },
    {
      title: "Conference Go - Conference Management System",
      description: "A web system for managing conferences.",
      images: [
        "https://i.postimg.cc/DZqtjkrC/cg1.png",
        "https://i.postimg.cc/6qcFKr1n/cg2.png",
        "https://i.postimg.cc/mkBKKXVT/cg3.png",
      ],
      github: "https://gitlab.com/zodramleo/conference-go",
      demo: "",
      longDescription:
        "A web system for managing conferences built with Django, RabgbitMQ, and PostgreSQL using microservice design.",
      technologies: [
        "Django",
        "Docker",
        "Bootstrap",
        "RabgbitMQ",
        "Insomnia",
        "PostgreSQL",
        "Python",
        "JavaScript",
      ],
      features: [
        "Transformed a monolithic application into a scalable and agile system by implementing a microservices architecture, resulting in a reduction in infrastructure costs and an increase in system flexibility.",
        "Implemented a message queue using RabbitMQ to establish a reliable connection with an email server, enabling automated notifications and minimizing the risk of errors in the email sending process.",
        "Developed web applications using the Django framework, implementing features such as database connectivity, and RESTful APIs.",
        "Built and deployed Docker containers for web applications, ensuring consistency and reproducibility across development and production environments.",
        "Designed and implemented relational database schemas using PostgreSQL and utilized Django ORM to query and manage data.",
        "Utilized React to create responsive and dynamic front-end user interfaces for web applications, including integrating with APIs.",
        "Leveraged Pixels API and OpenWeather API to retrieve city-specific images and weather data for dynamic content generation.",
      ],
    },
  ];

  const handleImageNavigation = (direction: "prev" | "next") => {
    if (!selectedProject) return;

    setCurrentImageIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0
          ? selectedProject.images.length - 1
          : prevIndex - 1;
      } else {
        return prevIndex === selectedProject.images.length - 1
          ? 0
          : prevIndex + 1;
      }
    });
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Gitlab size={20} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                {/* Image Gallery */}
                <div className="relative mb-6">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />

                  {/* Image Navigation */}
                  <div className="absolute inset-0 flex items-center justify-between">
                    <button
                      onClick={() => handleImageNavigation("prev")}
                      className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full ml-4 transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() => handleImageNavigation("next")}
                      className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full mr-4 transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h4 className="text-xl font-semibold mb-2">Overview</h4>
                  <p className="text-gray-700 mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <h4 className="text-xl font-semibold mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xl font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc pl-6 mb-6">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 mt-8">
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Gitlab size={20} />
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
