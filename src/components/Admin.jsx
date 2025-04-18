import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Admin.css';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
    image: '',
    sourceCode: ''
  });
  const [editId, setEditId] = useState(null);
  const [auth, setAuth] = useState({ username: '', password: '' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  const handleAuth = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError(null);
    try {
      // Test credentials by making a request to a protected endpoint
      const base64Credentials = btoa(`${auth.username}:${auth.password}`);
      await axios.get('http://localhost:8080/api/projects', {
        headers: {
          Authorization: `Basic ${base64Credentials}`
        }
      });
      setIsAuthenticated(true);
      setAuthToken(base64Credentials);
      setAuth({ username: '', password: '' });
    } catch (error) {
      console.error('Authentication failed:', error);
      if (error.response && error.response.status === 401) {
        setAuthError('Invalid credentials. Please try again.');
      } else {
        setAuthError('Error authenticating. Please check your network and try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProjects();
    }
  }, [isAuthenticated]);

  const fetchProjects = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // GET /api/projects is publicly accessible, no auth needed
      const response = await axios.get('http://localhost:8080/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError('Error fetching projects. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuthChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      if (editId) {
        await axios.put(`http://localhost:8080/api/projects/${editId}`, formData, {
          headers: {
            Authorization: `Basic ${authToken}`
          }
        });
      } else {
        await axios.post('http://localhost:8080/api/projects', formData, {
          headers: {
            Authorization: `Basic ${authToken}`
          }
        });
      }
      setFormData({ title: '', description: '', technologies: '', link: '', image: '', sourceCode: '' });
      setEditId(null);
      fetchProjects();
      alert(editId ? 'Project updated successfully!' : 'Project added successfully!');
    } catch (error) {
      console.error('Error saving project:', error);
      if (error.response) {
        setError(`Error: ${error.response.status} - ${error.response.data}`);
      } else {
        setError('Error saving project. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (project) => {
    setFormData(project);
    setEditId(project.id);
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:8080/api/projects/${id}`, {
        headers: {
          Authorization: `Basic ${authToken}`
        }
      });
      fetchProjects();
      alert('Project deleted successfully!');
    } catch (error) {
      console.error('Error deleting project:', error);
      if (error.response) {
        setError(`Error: ${error.response.status} - ${error.response.data}`);
      } else {
        setError('Error deleting project. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="admin"
      >
        <h2>Admin <span>Login</span></h2>
        {authError && <p className="error">{authError}</p>}
        <form onSubmit={handleAuth}>
          <input
            type="text"
            name="username"
            value={auth.username}
            onChange={handleAuthChange}
            placeholder="Username"
            required
            disabled={isLoading}
          />
          <input
            type="password"
            name="password"
            value={auth.password}
            onChange={handleAuthChange}
            placeholder="Password"
            required
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="admin"
    >
      <h2>Manage <span>Projects</span></h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Project Title"
          required
          disabled={isLoading}
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Project Description"
          required
          disabled={isLoading}
        />
        <input
          type="text"
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          placeholder="Technologies (comma-separated)"
          required
          disabled={isLoading}
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image Path (e.g., /images/project.png)"
          required
          disabled={isLoading}
        />
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Website URL"
          disabled={isLoading}
        />
        <input
          type="url"
          name="sourceCode"
          value={formData.sourceCode}
          onChange={handleChange}
          placeholder="Source Code URL"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? (editId ? 'Updating...' : 'Adding...') : (editId ? 'Update Project' : 'Add Project')}
        </button>
      </form>
      {isLoading ? (
        <p>Loading projects...</p>
      ) : projects.length > 0 ? (
        <div className="project-list">
          {projects.map(project => (
            <div key={project.id} className="project-item">
              <span>{project.title}</span>
              <div className="project-actions">
                <button onClick={() => handleEdit(project)} disabled={isLoading}>Edit</button>
                <button onClick={() => handleDelete(project.id)} disabled={isLoading}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No projects available.</p>
      )}
    </motion.div>
  );
};

export default Admin;