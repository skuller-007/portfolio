import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Calendar,
  ExternalLink,
  Award,
  TrendingUp,
  Users,
  Zap,
  Target,
  BookOpen,
  ChevronDown,
  Mail,
  MapPin
} from 'lucide-react';

import { profile } from '../data/profile';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-4 w-72 h-72 bg-accent-1 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-2 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Profile Image */}
            <motion.div 
              variants={itemVariants}
              className="mb-8"
            >
              <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-6">
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent-1 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-4xl md:text-5xl font-bold text-primary-contrast">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-1 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-accent-1 bg-clip-text text-transparent">
                Ajith Srikanth
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Manufacturing Engineer who delivered{' '}
              <span className="font-semibold text-accent-1">₹9M in annual savings</span>{' '}
              through predictive maintenance, IoT automation, and lean optimization at{' '}
              <span className="font-semibold text-foreground">Hero MotoCorp</span>
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto"
            >
              <motion.div 
                variants={achievementVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-blue-600">83%</div>
                <div className="text-sm text-muted-foreground">Downtime Reduction</div>
              </motion.div>
              
              <motion.div 
                variants={achievementVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center mb-2">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-green-600">₹9M</div>
                <div className="text-sm text-muted-foreground">Annual Savings</div>
              </motion.div>
              
              <motion.div 
                variants={achievementVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <div className="text-2xl font-bold text-purple-600">20%</div>
                <div className="text-sm text-muted-foreground">Cycle Time Reduction</div>
              </motion.div>
              
              <motion.div 
                variants={achievementVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-orange-600">25+</div>
                <div className="text-sm text-muted-foreground">Team Members Led</div>
              </motion.div>
            </motion.div>

            {/* Location and Availability */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Available from May 2026</span>
              </div>
            </motion.div>

            {/* Call-to-Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <motion.a
                href="https://calendly.com/d/cqp7-3p3-jwq/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-contrast rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Book a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <Button href="/projects" variant="outline" size="lg">
                View My Work
              </Button>

              <motion.a
                href="/Ajith_Srikanth_Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-full font-medium hover:bg-muted transition-all"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div 
              variants={itemVariants}
              className="mb-12"
            >
              <motion.a
                href="https://www.linkedin.com/newsletters/7130868711963443201/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-1/10 to-primary/10 border border-accent-1/20 rounded-xl text-foreground hover:from-accent-1/20 hover:to-primary/20 transition-all"
              >
                <BookOpen className="w-5 h-5 text-accent-1" />
                <div className="text-left">
                  <div className="font-medium">Manufacturing Innovation Newsletter</div>
                  <div className="text-sm text-muted-foreground">Weekly insights on Industry 4.0</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.button
              onClick={() => scrollToSection('expertise')}
              variants={itemVariants}
              whileHover={{ y: 2 }}
              className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Expertise Overview */}
      <section id="expertise" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Manufacturing Excellence Through Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bridging smart manufacturing, supply chain optimization, and AI-driven automation 
              for Industry 4.0 transformation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Manufacturing Excellence */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Manufacturing Excellence
              </h3>
              <p className="text-muted-foreground mb-4">
                TPM Special Award recipient with expertise in Kaizen, lean methodology, 
                and predictive maintenance systems.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 83% downtime reduction achieved</li>
                <li>• 40% OEE improvement</li>
                <li>• Zero breakdowns implementation</li>
              </ul>
            </motion.div>

            {/* Automation & IoT */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-accent-1/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent-1" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Automation & IoT
              </h3>
              <p className="text-muted-foreground mb-4">
                PLC/HMI programming, IoT dashboard development, and smart manufacturing 
                cell implementation.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• IoT Smart Cell Dashboard</li>
                <li>• PLC-controlled automation</li>
                <li>• Real-time monitoring systems</li>
              </ul>
            </motion.div>

            {/* AI & Innovation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-accent-2/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent-2" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                AI & Innovation
              </h3>
              <p className="text-muted-foreground mb-4">
                Developing Mano-AI for CNC troubleshooting and implementing blockchain 
                solutions for supply chain transparency.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Llama 3b AI integration</li>
                <li>• 75% troubleshooting time reduction</li>
                <li>• Blockchain supply chain solutions</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming manufacturing through data-driven solutions and intelligent automation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12"
          >
            {profile.projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {project.impact && project.impact[0]}
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button href="/projects" size="lg">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent-1/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Transform Your Manufacturing Operations
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to optimize your manufacturing processes, implement predictive maintenance, 
              or explore AI-driven automation solutions? Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://calendly.com/d/cqp7-3p3-jwq/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-contrast rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Consultation
              </motion.a>
              <Button href="/contact" variant="outline" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;