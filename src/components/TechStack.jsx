import React from 'react';
import { motion } from 'framer-motion';
import './TechStack.css';

// Import tech stack icons from assets
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import javascriptIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import typescriptIcon from '../assets/typescript.png';
import nodeIcon from '../assets/node.png';
import javaIcon from '../assets/java.png';
import springbootIcon from '../assets/springboot.png';
import mysqlIcon from '../assets/mysql.png';
import postgresIcon from '../assets/postgres.png';
import dockerIcon from '../assets/docker.png';
import gitIcon from '../assets/git.png';
import githubIcon from '../assets/github.png';
import postmanIcon from '../assets/postman.png';
import framerIcon from '../assets/framer.png';

const techStack = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'React', icon: reactIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'Spring Boot', icon: springbootIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'PostgreSQL', icon: postgresIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Postman', icon: postmanIcon },
  { name: 'Framer Motion', icon: framerIcon },
];

const TechStack = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="tech-stack"
  >
    <h1>I constantly try to improve</h1>
    <h2><span>My Tech Stack</span></h2>
    <div className="tech-grid">
      {techStack.map((tech, index) => (
        <div key={index} className="tech-item">
          <img src={tech.icon} alt={tech.name} className="tech-icon" />
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default TechStack;