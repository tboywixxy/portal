import React, { useState, useEffect } from 'react';
import './Hero.css'; // Your CSS file

const Hero = () => {
  const images = [
    { src: '/Images/pic-3.jpg', alt: 'Image 1', heading: 'Empower Your Learning', description: 'With expert guidance and dedicated support.' },
    { src: '/Images/stu-2.jpg', alt: 'Image 2', heading: 'Achieve Your Dreams', description: 'Take the next step towards your future today.' },
    { src: '/Images/stu-3.jpg', alt: 'Image 3', heading: 'Transform Your Future', description: 'Unlock your potential with quality education.' },
  ];

  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 15000); // 10 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-slide"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h2>{images[currentIndex].heading}</h2>
          <p>{images[currentIndex].description}</p>
        </div>
        {/* Navigation Buttons */}
        <button className="swiper-button-prev" onClick={prevSlide}>‹</button>
        <button className="swiper-button-next" onClick={nextSlide}>›</button>
      </div>
    </section>
  );
};

export default Hero;
