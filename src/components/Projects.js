import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  const projects = [
    {
      title: 'Payslip-Generator',
      image: require('../img/Project1.png'), // Add local image using require
      link: 'https://featlogin.d3nibgonsz456v.amplifyapp.com/', // Link of the project
    },
    {
      title: 'E-farming store',
      image: require('../img/Project2.png'), // Replace with relevant image
      link: 'https://github.com/FSD-ALLEN/E-Farming-Store', // Link of the project
    },
    {
      title: 'AI-Assistant',
      image: require('../img/Project3.png'), // Replace with relevant image
      link: 'https://github.com/FSD-ALLEN/E-Farming-Store', // Link of the project
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
