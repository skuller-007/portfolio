import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap,
  Briefcase,
  Code,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Lightbulb,
  Rocket,
  Globe,
  Clock,
  MapPin,
  Building,
  Wrench,
  Brain,
  Zap
} from 'lucide-react';

const About: React.FC = () => {
  const currentWork = {
    primary: {
      title: "Manufacturing Engineering Intern",
      company: "VAN DYK Recycling Solutions",
      location: "Norwalk, Connecticut",
      period: "May 2025 - Present",
      focus: "Sustainable manufacturing processes and recycling system optimization",
      icon: Building
    },
    academic: {
      title: "Course Assistant & Grader",
      company: "Northeastern University",
      course: "IE 7215 - Simulation Analysis (Simio Software)",
      period: "January 2025 - May 2025",
      focus: "Teaching next-generation engineers simulation-based optimization techniques",
      icon: GraduationCap
    },
    leadership: {
      title: "Teaching Assistant",
      company: "LEAD360 Program",
      period: "January 2025 - March 2025", 
      focus: "Developing leadership skills through interactive learning and mentorship",
      icon: Users
    }
  };

  const technicalEvolution = [
    {
      phase: "Foundation Building",
      period: "2018-2022",
      focus: "Mechatronics Engineering & Core Concepts",
      achievements: [
        "B.Tech Mechatronics (GPA 3.68)",
        "Control Systems & IIoT expertise",
        "Research publications in EDM controllers",
        "Merit-based scholarship recipient"
      ],
      technologies: ["MATLAB", "SolidWorks", "PLC Programming", "Control Systems"],
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      phase: "Industrial Application",
      period: "2022-2024", 
      focus: "Manufacturing Excellence & Team Leadership",
      achievements: [
        "Led 25+ member teams across multiple plants",
        "TPM Special Award for maintenance excellence",
        "Managed Vida EV production line tools",
        "Delivered 36+ hours of technical training"
      ],
      technologies: ["SAP", "SCADA", "IoT Sensors", "Automation Systems"],
      icon: Wrench,
      color: "bg-green-500"
    },
    {
      phase: "AI Innovation",
      period: "2024-Present",
      focus: "Intelligent Manufacturing & Advanced Analytics",
      achievements: [
        "Developed Mano-AI troubleshooting assistant",
        "IoT Smart Cell dashboard implementation", 
        "Advanced simulation modeling expertise",
        "Teaching and mentoring emerging engineers"
      ],
      technologies: ["LLaMA", "Docker", "AWS IoT", "Simio", "Python"],
      icon: Brain,
      color: "bg-purple-500"
    }
  ];

  const currentLearning = [
    {
      area: "Sustainable Manufacturing",
      context: "Through VAN DYK internship, exploring how recycling and circular economy principles reshape traditional manufacturing",
      skills: ["Circular Economy", "Sustainable Processes", "Waste Optimization"]
    },
    {
      area: "Educational Technology",
      context: "As Northeastern Course Assistant, developing innovative teaching methods for complex simulation software",
      skills: ["Curriculum Development", "Student Mentorship", "Technical Communication"]
    },
    {
      area: "AI Model Deployment",
      context: "Advancing Mano-AI from proof-of-concept to production-ready manufacturing assistant",
      skills: ["LLM Fine-tuning", "Edge Computing", "Industrial AI Applications"]
    }
  ];

  const uniqueApproach = [
    {
      principle: "Learning Through Teaching",
      description: "Currently mentoring students in simulation analysis while continuing to learn from industry veterans",
      impact: "Bridges academic theory with practical manufacturing reality"
    },
    {
      principle: "Cross-Industry Perspective", 
      description: "Applying automotive manufacturing expertise to recycling solutions and sustainable processes",
      impact: "Brings fresh approaches to traditional industry challenges"
    },
    {
      principle: "Technology Integration",
      description: "Combining proven methodologies (TPM, Six Sigma) with emerging technologies (AI, IoT)",
      impact: "Creates practical innovation rather than technology for technology's sake"
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From mechatronics foundations to AI-driven manufacturing solutions - 
            a continuous evolution in engineering excellence
          </p>
        </motion.div>

        {/* Current Work Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Current Focus (2025)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(currentWork).map(([key, work], index) => {
              const IconComponent = work.icon;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {work.title}
                  </h3>
                  <div className="text-primary font-medium mb-1">{work.company}</div>
                  {work.course && (
                    <div className="text-sm text-muted-foreground mb-2">{work.course}</div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="w-4 h-4" />
                    {work.period}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {work.focus}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technical Evolution Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Technical Evolution
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden lg:block"></div>
            
            <div className="space-y-8">
              {technicalEvolution.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <div className="flex-1 bg-card border border-border rounded-xl p-6 max-w-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 ${phase.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{phase.phase}</h3>
                          <div className="text-sm text-muted-foreground">{phase.period}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{phase.focus}</p>
                      <div className="space-y-2 mb-4">
                        {phase.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-accent-1 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {phase.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:block w-6 h-6 bg-primary rounded-full border-4 border-bg shadow-lg z-10"></div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 max-w-lg"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Current Learning & Growth */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Continuous Learning in Action
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {currentLearning.map((learning, index) => (
              <motion.div
                key={learning.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {learning.area}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {learning.context}
                </p>
                <div className="space-y-1">
                  {learning.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-1 rounded-full"></div>
                      <span className="text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unique Engineering Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Engineering Philosophy
          </h2>
          <div className="space-y-6">
            {uniqueApproach.map((approach, index) => (
              <motion.div
                key={approach.principle}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {approach.principle}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {approach.description}
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="bg-accent-1/5 border border-accent-1/20 rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-2">Real-World Impact:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {approach.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Geographic & Cultural Perspective */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Global Manufacturing Perspective
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Indian Manufacturing Experience
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-1 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Haridwar & Tirupati Plants</div>
                    <div className="text-sm text-muted-foreground">Hero MotoCorp's largest manufacturing facilities</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-accent-2 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Multi-generational Teams</div>
                    <div className="text-sm text-muted-foreground">Leading teams with 20+ years experience gaps</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Legacy System Modernization</div>
                    <div className="text-sm text-muted-foreground">Upgrading decades-old manufacturing infrastructure</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-accent-1" />
                US Innovation Environment
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Advanced Research Access</div>
                    <div className="text-sm text-muted-foreground">Cutting-edge simulation and AI laboratories</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-accent-2 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Sustainable Manufacturing Focus</div>
                    <div className="text-sm text-muted-foreground">Recycling solutions and circular economy principles</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-4 h-4 text-accent-1 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">AI Integration Opportunities</div>
                    <div className="text-sm text-muted-foreground">Access to latest LLM models and edge computing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Evolution Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Evolution of Technical Expertise
          </h2>
          <div className="space-y-8">
            {technicalEvolution.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 ${phase.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{phase.phase}</h3>
                          <div className="text-sm text-muted-foreground">{phase.period}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{phase.focus}</p>
                      <div className="flex flex-wrap gap-1">
                        {phase.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-medium text-foreground mb-3">Key Achievements:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-accent-1 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* What Drives Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent-1/10 border border-primary/20 rounded-2xl p-8 text-center">
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              What Drives My Engineering Approach
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Manufacturing isn't just about machines and processes - it's about people, systems, and continuous evolution. 
                My approach combines the systematic rigor learned from managing legacy systems in India with the 
                innovation opportunities available in the US manufacturing landscape.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4">
                  <Award className="w-8 h-8 text-accent-1 mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Proven Methods</h4>
                  <p className="text-sm text-muted-foreground">TPM, Six Sigma, and A3 methodology expertise</p>
                </div>
                <div className="p-4">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Emerging Technologies</h4>
                  <p className="text-sm text-muted-foreground">AI, IoT, and sustainable manufacturing integration</p>
                </div>
                <div className="p-4">
                  <Users className="w-8 h-8 text-accent-2 mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Human-Centered Design</h4>
                  <p className="text-sm text-muted-foreground">Technology adoption through effective change management</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;