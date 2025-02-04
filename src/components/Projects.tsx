import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform with real-time updates",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Project Three",
      description: "AI-powered data visualization dashboard",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;