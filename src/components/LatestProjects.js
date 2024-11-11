import React from 'react';
import '../extraStyles/LatestProjects.css';

const LatestProjects = () => {
  return (
    <div className="latest-projects-container">
      <h2 className="latest-projects-title">Latest Projects</h2>
      
      <div className="project-card">
        <img src='./images/gameoflife.png' alt='gameoflife' className="project-image" />
      </div>
      <div className="project-card">
        <img src='./images/arduino.jpg' alt='arduino' className="project-image" />
      </div>
      <div className="project-card">
        <img src='./images/nodemap.jpg' alt='nodemap' className="project-image" />
      </div>
      <div className="project-card">
        <img src='./images/react.png' alt='react' className="project-image" />
      </div>
    </div>
  );
};

export default LatestProjects;
