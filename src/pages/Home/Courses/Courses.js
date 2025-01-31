import React from 'react';
import './Courses.css'

const Courses = () => {
  return (
    <section id="courses" className="section">
      <h2>Our Courses</h2>
      <div className="course-grid">
        <div className="course-card">
          <img src="/Images/pic-1.jpg" alt="Web Development" className="course-image" />
          <h3>Web Development</h3>
          <p>Learn to build modern websites and applications.</p>
        </div>
        <div className="course-card">
          <img src="/Images/pic-2.jpg" alt="Science" className="course-image" />
          <h3>Science</h3>
          <p>Master data analysis, visualization, and machine learning.</p>
        </div>
        <div className="course-card">
          <img src="/Images/pic-3.jpg" alt="Mathematics" className="course-image" />
          <h3>Mathematics</h3>
          <p>Master data analysis, visualization, and machine learning.</p>
        </div>
        <div className="course-card">
          <img src="/Images/pic-1.jpg" alt="English Language" className="course-image" />
          <h3>English Language</h3>
          <p>Enhance your marketing skills with the latest tools and strategies.</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
