import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import './Projects.css';

// Import icons for buttons
import sourceCodeIcon from '../assets/sourcecode.png';
import websiteIcon from '../assets/website.png';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    try {
      const mappedProjects = projectsData.map(project => ({
        title: project.title || 'Untitled Project',
        description: project.description || 'No description available',
        technologies: typeof project.technologies === 'string' ? project.technologies : '', // Ensure technologies is a string
        image: project.imagePath || '/images/placeholder.jpg',
        link: project.websiteUrl,
        sourceCode: project.github
      }));
      setProjects(mappedProjects);
    } catch (error) {
      console.error('Error mapping projects:', error);
      setProjects([]);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="projects"
    >
      <h2><span>Projects</span></h2>
      {projects.length ? (
        projects.map(project => (
          <div key={project.title} className="project-card">
            {project.image && (
              <img src={project.image} alt={project.title} className="project-image" />
            )}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies ? (
                  project.technologies.split(',').map((tech, index) => (
                    <span key={index} className="tech-tag">{tech.trim()}</span>
                  ))
                ) : (
                  <span className="tech-tag">No technologies listed</span>
                )}
              </div>
              <div className="project-links">
                {project.sourceCode && (
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="project-button">
                    <img src={sourceCodeIcon} alt="Source Code" className="button-icon" />
                    Source Code
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
                    <img src={websiteIcon} alt="Website" className="button-icon" />
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="no-projects">No projects yet. Add some via Admin!</p>
      )}
    </motion.div>
  );
};

export default Projects;