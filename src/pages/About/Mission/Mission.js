import React from 'react';

const VisionSection = () => {
  return (
    <section
      className="pision"
      style={{
        backgroundImage: 'url("/Images/stu-1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '50px 20px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div
        className="ero-text"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1))',
          padding: '30px',
          borderRadius: '8px',
        }}
      >
        <h1>Who We Are</h1>
        <p>
          At Prevailers Academy, we provide top-notch online courses to help you excel in your career and personal growth.
          <br />
          Our goal is to make learning accessible to everyone at the comfort of your home.
        </p>
        <h1>Our Vision</h1>
        <p>
          To be the leading provider of online education, where learners from every corner of the globe can access high-quality, personalized learning opportunities that ignite their passions, unlock their potential, and shape a brighter future.
        </p>
        <h1>Our Mission</h1>
        <p>
          To empower individuals regardless of their ages and backgrounds with knowledge and skills they need to thrive in an ever-evolving world, through accessible, engaging, and transformative online learning experiences.
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
