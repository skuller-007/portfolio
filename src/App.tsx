import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Hobbies from './pages/Hobbies';
import Writings from './pages/Writings';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import Documents from './pages/Documents';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

// Utils
import { initializeTheme } from './utils/theme';

function App() {
  // Initialize theme on app load
  React.useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="App min-h-screen bg-bg transition-colors duration-300">
          <Header />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/writings" element={<Writings />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <SpeedInsights />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;