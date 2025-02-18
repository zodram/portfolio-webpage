'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  X,
  Gitlab,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image'
import { projectDescriptions } from '@/data/data';
import { ProjectDescription } from '@/lib/types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDescription | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handleProjectClick = (project: ProjectDescription) => {
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
          {projectDescriptions.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                width={800}
                height={533}
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

                <div className="relative mb-6">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    width={800}
                    height={533}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />

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
