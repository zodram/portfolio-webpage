import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">John</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer | Backend Enthusiast | Problem Solver
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;