import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate developer with a strong foundation in modern web technologies.
              With several years of experience in building web applications, I focus on creating
              efficient, scalable, and user-friendly solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical writing.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;