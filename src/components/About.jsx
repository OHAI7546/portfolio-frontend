import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="about"
  >
    <div className="about-container">
      <div className="about-text">
        <h1>Know About Me</h1>
        <h2>
          <span>Full-Stack Engineer</span> And{' '}
          <span>a little bit of everything</span>
        </h2>
        <p>
          Full-stack Software Engineer with experience building scalable and efficient
          web applications using Java, Spring Boot, React, and PostgreSQL. Proficient in
          crafting responsive designs, developing secure APIs, and collaborating with
          cross-functional teams to deliver user-centric solutions. Adept at managing
          projects, ensuring seamless integration between frontend and backend, and
          leveraging technical expertise to drive impactful outcomes.
        </p>
      </div>
      <div className="about-image">
        <img src="/images/mypics.jpeg" alt="About Me" />
      </div>
    </div>
  </motion.div>
);

export default About;