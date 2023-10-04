import React, { useState, useEffect } from 'react';
import image1 from '../asset/f1.jpg';
import image2 from '../asset/f2.jpg';
import image3 from '../asset/f3.jpg';
import image4 from '../asset/f4.jpg';
import image5 from '../asset/f5.jpg';

function CustomSlider() {
  const slides = [
    image1,
    image2,
    image3,
    image4,
    image5,
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

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide`}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          >
            <span>Slide {index + 1}</span>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="prev" onClick={prevSlide}>
          Previous
        </button>
        <button className="next" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CustomSlider;
