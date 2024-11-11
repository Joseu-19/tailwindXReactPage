import React, { useState, useEffect } from 'react';
import '../extraStyles/Carousel.css';

const Carousel = () => {
  const slides = [
    './images/jose.jpg',
    './images/hollywood.jpg',
    './images/observatory.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel-container relative">
      <img
        src={slides[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-slide"
      />

      <button onClick={prevSlide} className="carousel-button left">
        &#8592;
      </button>

      <button onClick={nextSlide} className="carousel-button right">
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
