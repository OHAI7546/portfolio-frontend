import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Admin from './components/Admin';
import ThemeToggle from './components/ThemeToggle';
import './App.css';
import { motion } from 'framer-motion';
import logo from './assets/pics.jpeg';

// Simple NotFound component for 404 routes
const NotFound = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="not-found"
  >
    <h2>404 - Page Not Found</h2>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <NavLink to="/" className="nav-link">Go to Home</NavLink>
  </motion.div>
);

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className={`App ${isDark ? 'dark' : ''}`}>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <ul>
            <li>
              <ScrollLink to="home" smooth={true} duration={500} className="nav-link">Home</ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} className="nav-link">About</ScrollLink>
            </li>
            <li>
              <ScrollLink to="tech_stack" smooth={true} duration={500} className="nav-link">Tech Stack</ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} duration={500} className="nav-link">Projects</ScrollLink>
            </li>
            <li>
              <ScrollLink to="experience" smooth={true} duration={500} className="nav-link">Experience</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} className="nav-link">Contact</ScrollLink>
            </li>
          </ul>
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <ScrollLink to="home" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Home</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>About</ScrollLink>
            <ScrollLink to="tech_stack" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Tech Stack</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Projects</ScrollLink>
            <ScrollLink to="experience" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Experience</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Contact</ScrollLink>
          </div>
          <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <section id="home"><Hero /></section>
                <section id="about"><About /></section>
                <section id="tech_stack"><TechStack /></section>
                <section id="projects"><Projects /></section>
                <section id="experience"><Experience /></section>
                <section id="contact"><Contact /></section>
              </motion.div>
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;