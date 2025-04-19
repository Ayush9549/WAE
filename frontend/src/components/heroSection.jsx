import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getSlideContent = (index) => (
    <div className={`text-center slide-content ${currentSlide === index ? 'slide-in' : 'slide-out'}`}>
      <h2 className="text-2xl text-white animate-fadeIn">{index === 0 ? "Language School" : index === 1 ? "Expert Teachers" : "Global Community"}</h2>
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slideUp">
        {index === 0 ? "Master New Languages" : index === 1 ? "Learn from the Best" : "Connect Worldwide"}
      </h1>
      <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 animate-fadeIn">
        {index === 0 ? "Start Learning" : index === 1 ? "Meet Teachers" : "Join Now"}
      </button>
    </div>
  );

  return (
    <div className="hero-section">
      <div className="slider">
        <div className={`slide slide-1 ${currentSlide === 0 ? 'active slide-right' : ''}`}></div>
        <div className={`slide slide-2 ${currentSlide === 1 ? 'active slide-right' : ''}`}></div>
        <div className={`slide slide-3 ${currentSlide === 2 ? 'active slide-right' : ''}`}></div>
      </div>
      <div className="hero-content">
        {[0, 1, 2].map((index) => (
          <div key={index} className={`absolute w-full ${currentSlide === index ? 'block' : 'hidden'}`}>
            {getSlideContent(index)}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HeroSection;