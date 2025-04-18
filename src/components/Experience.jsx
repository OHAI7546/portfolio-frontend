import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="experience"
  >
    <h2><span>Experience</span></h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-marker"></div>
        <div className="timeline-content">
          <h3>Software Engineer Intern at Limitflex </h3>
          <h4>London, United Kingdom</h4>
          <p className="date">Jan 2025 - Present</p>
          <ul>
            <li>-Implemented and tested RESTful APIs, ensuring secure and reliable data exchange between frontend and backend services.</li>
            <li>-Followed agile development practices, participated in code reviews, and contributed to sprint planning and continuous delivery pipelines.</li>
            <li>-Built responsive and scalable web applications by leveraging React (with TypeScript) on the frontend and Spring Boot on the backend.</li>
            <li>-Collaborated closely with cross-functional teams including frontend engineers, backend engineers, and project manager to deliver production-ready websites using tools and technologies like Postman, Docker, and Git.</li>
          </ul>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-marker"></div>
        <div className="timeline-content">
          <h3>Associate Software Engineer at Decagon</h3>
          <p className="date">Jan 2024 - Dec 2024</p>
          <ul>
            <li>-Collaborated with software engineers to implement scalable technical designs and requirements for web applications.</li>
            <li>-Managed code documentation and version control, ensuring streamlined collaboration and updates.</li>
            <li>-Developed efficient, scalable, and maintainable real-time web applications.</li>
            <li>-Enhanced client-side experiences through cross-functional collaboration, improving functionality and performance.</li>
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Experience;