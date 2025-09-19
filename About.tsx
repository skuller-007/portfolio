import React from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "CAD Design & Modeling",
      description: "Creating precise 3D models and technical drawings using SolidWorks and AutoCAD."
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "Research & Development",
      description: "Conducting innovative research in manufacturing processes and control systems."
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-600" />,
      title: "Manufacturing Processes",
      description: "Expertise in EDM, machining, and advanced manufacturing techniques."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Project Management",
      description: "Leading engineering teams and managing complex technical projects effectively."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a dedicated mechanical engineer with expertise in advanced manufacturing processes, 
                CAD design, and research. My journey began with curiosity about how machines work, 
                and it's evolved into a passion for innovative engineering solutions and cutting-edge technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not designing or researching, you'll find me exploring new manufacturing technologies, 
                working on innovative projects, or sharing knowledge with the engineering community. I believe 
                in continuous learning and always strive to push the boundaries of what's possible.
              </p>
              <div className="flex flex-wrap gap-3">
                {['SolidWorks', 'AutoCAD', 'MATLAB', 'Python', 'EDM', 'Manufacturing'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-4 bg-white rounded-xl shadow-inner flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;