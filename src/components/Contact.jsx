import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Import social media icons from assets
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter.png';
import whatsappIcon from '../assets/whatsapp.png'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration (using environment variables)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID; // service_m53js7a
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // template_olfaf39
    const userId = import.meta.env.VITE_EMAILJS_USER_ID; // dS5U5pf7UA-jTIiFK

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        userId
      )
      .then(
        (response) => {
          setStatus('Message sent successfully! You will hear back soon.');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Error sending message. Please try again.');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="contact"
    >
      <h2>Contact <span>Me</span></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send</button>
      </form>
      {status && <p className="status-message">{status}</p>}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/chukwuemeka-ohai-02a941165/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/OHAI7546" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://x.com/Ohai_7546" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>
        <a href="https://wa.me/+2348183536802" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;