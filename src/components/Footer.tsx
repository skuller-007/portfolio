import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

import { profile } from '../data/profile';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Writings', href: '/writings' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-1 rounded-lg flex items-center justify-center text-primary-contrast font-bold text-lg">
                AS
              </div>
              <span className="text-xl font-bold text-foreground">{profile.name}</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Bridging Smart Manufacturing, Supply Chain Optimization, and AI-Driven Automation for Industry 4.0 Transformation
            </p>
            <div className="flex space-x-4">
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub"
              >
                <Github className="w-5 h-5 text-foreground" />
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </motion.a>
              <motion.a
                href={`mailto:${profile.email}`}
                className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Email"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>{profile.location}</p>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-foreground transition-colors duration-200"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-accent-2" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


