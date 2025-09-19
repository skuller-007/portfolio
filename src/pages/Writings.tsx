import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Search, Calendar, Tag } from 'lucide-react';
import { profile } from '../data/profile';

const Writings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    profile.writings.forEach(writing => {
      writing.tags?.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags).sort()];
  }, []);

  const filteredWritings = useMemo(() => {
    let filtered = profile.writings;

    // Filter by tag
    if (selectedTag !== 'All') {
      filtered = filtered.filter(writing =>
        writing.tags?.includes(selectedTag)
      );
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(writing =>
        writing.title.toLowerCase().includes(term) ||
        writing.summary.toLowerCase().includes(term) ||
        writing.tags?.some(tag => tag.toLowerCase().includes(term))
      );
    }

    return filtered;
  }, [searchTerm, selectedTag]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Writings
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research papers, case studies, and technical articles on manufacturing innovation and automation
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search writings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>

            {/* Tags Filter */}
            <div className="flex items-center gap-2">
              <Tag className="text-muted-foreground w-5 h-5" />
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <motion.button
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTag === tag
                        ? 'bg-primary text-primary-contrast'
                        : 'bg-card border border-border text-foreground hover:bg-muted'
                    }`}
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Writings List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-6"
        >
          <AnimatePresence mode="wait">
            {filteredWritings.map((writing, index) => (
              <motion.article
                key={writing.title}
                variants={itemVariants}
                layout
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {writing.title}
                      </h3>
                      <motion.a
                        href={writing.url}
                        target={writing.url.startsWith('http') ? '_blank' : '_self'}
                        rel={writing.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-contrast rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Read
                      </motion.a>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {writing.summary}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      {writing.date && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{writing.date}</span>
                        </div>
                      )}
                      
                      {writing.tags && writing.tags.length > 0 && (
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <div className="flex flex-wrap gap-1">
                            {writing.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: tagIndex * 0.1 }}
                                className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded-full"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredWritings.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No writings found matching your criteria.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in discussing new research opportunities, 
              technical collaborations, and knowledge sharing in manufacturing innovation.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-contrast rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Writings;

