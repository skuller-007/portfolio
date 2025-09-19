import React, { useEffect, useState } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "CAD & Design Software",
      skills: [
        { name: "SolidWorks", level: 95, color: "bg-blue-500" },
        { name: "AutoCAD", level: 90, color: "bg-blue-600" },
        { name: "CATIA", level: 85, color: "bg-cyan-500" },
        { name: "Fusion 360", level: 80, color: "bg-green-500" }
      ]
    },
    {
      title: "Engineering Analysis",
      skills: [
        { name: "MATLAB/Simulink", level: 92, color: "bg-green-600" },
        { name: "FEA Analysis", level: 88, color: "bg-yellow-600" },
        { name: "Control Systems", level: 85, color: "bg-blue-700" },
        { name: "Python Programming", level: 82, color: "bg-orange-500" }
      ]
    },
    {
      title: "Manufacturing & Tools",
      skills: [
        { name: "EDM Processes", level: 90, color: "bg-purple-500" },
        { name: "CNC Machining", level: 85, color: "bg-red-500" },
        { name: "Quality Control", level: 88, color: "bg-gray-700" },
        { name: "Project Management", level: 85, color: "bg-indigo-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                            isVisible ? 'animate-pulse' : ''
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-colors duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                <div className="text-gray-700">Years Research Experience</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-colors duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-700">Published Papers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;