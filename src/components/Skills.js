import React, { useState } from 'react';
import './Skills.css';

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skills = {
    Frontend: [
      { name: 'React.js', level: '80%' },
      { name: 'HTML & CSS', level: '90%' },
      { name: 'JavaScript', level: '85%' },
    ],
    Backend: [
      { name: 'Python', level: '80%' },
      { name: 'Express.js', level: '70%' },
    ],
    Database: [
      { name: 'MongoDB', level: '80%' },
      { name: 'SQL', level: '70%' },
    ],
    Cloud: [
      { name: 'AWS Lambda', level: '70%' },
      { name: 'S3', level: '75%' },
    ],
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-box">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-container">
          <div className="categories">
            {Object.keys(skills).map(category => (
              <button
                key={category}
                className={`skill-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="skills-list">
            <h3>{activeCategory}</h3>
            {skills[activeCategory].map(skill => (
              <div className="skill-bar" key={skill.name}>
                <span>{skill.name}</span>
                <div className="progress">
                  <div
                    className="progress-done"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
