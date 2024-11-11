import React from 'react';
import '../extraStyles/TextArea.css';

const TextArea = () => {
  return (
    <div className="text-area-container">
      <h1 className="text-area-title">Recently</h1>
      <p className="text-area-content">
        This past week I went to Anaheim California to be part of the national SHPE convention.
        it was really fun, and I got to meet some new people and learn more about some companies.  
        This page is a prototype for a full-stack project im working on. I have the back end almost ready, I just have to implement google authentication and fix the layout.
    <br/>
    <br/>
        On the right side I have a container showing a thumbnail of some of the projects I've made or plan to work on, this is just a prototype so they don't work yet. 
      </p>
    </div>
  );
};

export default TextArea;
