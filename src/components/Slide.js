import React, { useState, useEffect } from 'react';
import "./ResponsiveSlider.css";
import image1 from '../asset/f1.jpg';
import image2 from '../asset/f2.jpg';
import image3 from '../asset/f3.jpg';
import image4 from '../asset/f4.jpg';
import image5 from '../asset/f5.jpg';

function ResponsiveSlider() {
  const slides = [
    { id: 1, image: image1, title: 'Slide 1' },
    { id: 2, image: image2, title: 'Slide 2' },
    { id: 3, image: image3, title: 'Slide 3' },
    { id: 4, image: image4, title: 'Slide 4' },
    { id: 5, image: image5, title: 'Slide 5' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      
      <button className="prev mobile-nav-button" onClick={prevSlide}>
        Previous
      </button>
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <span>{slide.title}</span>
          </div>
        ))}
      </div>
      
      <button className="next mobile-nav-button" onClick={nextSlide}>
        Next
      </button>
      <div className="bottom-navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slide-selector ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveSlider;
