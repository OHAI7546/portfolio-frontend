import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="hero"
  >
    <h1>Hi, I'm <span>Ohai Chukwuemeka Godwin</span></h1>
    <p>"Full-Stack Software Engineer with hands-on experience building scalable and efficient web applications. Passionate about solving complex problems and delivering intuitive, impactful solutions that enhance user experience"</p>
    <a href="/cv.pdf" download>
      <button>Download CV</button>
    </a>
  </motion.div>
);

export default Hero;