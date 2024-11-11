import React, { useState } from 'react';
import '../extraStyles/Accordion.css';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-container">
      <h2 className="accordion-title">Read More</h2>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="accordion-button"
      >
        ???
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>This is a swift/react page, I used a 2x2 grid for the carousel and the TextArea components.</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
