import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <div>

      {/* Meet the Team Section */}
      <section className="section">
        <h2 className="about-heading">Meet the Team</h2>
        <div className="team-container">
          <div className="team-card">
            <img src="/Images/Teacher1.png" alt="Prevail Caleb" className="team-image" />
            <h3>Prevail Caleb</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="/Images/Presh2.jpg" alt="Precious Emmanuel" className="team-image" />
            <h3>Precious Emmanuel</h3>
            <p>Tutor</p>
          </div>
          <div className="team-card">
            <img src="/Images/Iseg3.jpg" alt="Mr Freedom Iseg" className="team-image" />
            <h3>Engr. Freedom Iseg</h3>
            <p>Head of Content</p>
          </div>
          <div className="team-card">
            <img src="/Images/Perpetual.png" alt="Miss Perpetual" className="team-image" />
            <h3>Miss Perpetual</h3>
            <p>Tutor</p>
          </div>
          <div className="team-card">
            <img src="/Images/Tboi.png" alt="Mr Anthony" className="team-image" />
            <h3>Engr. Anthony</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-card">
            <img src="/Images/Regina.png" alt="Miss Regina" className="team-image" />
            <h3>Miss Regina</h3>
            <p>Tutor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
