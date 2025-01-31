import React, { useState } from 'react';
import './TutorForm.css';

const TutorForm = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subjects: '',
    education: '',
    experience: '',
    message: ''
  });

  // State to track form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to track error messages
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear any error for the field being edited
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    // Check if all required fields are filled
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email Address is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.subjects) newErrors.subjects = 'Subjects You Can Teach is required';
    if (!formData.education) newErrors.education = 'Educational Qualification is required';
    if (!formData.experience) newErrors.experience = 'Teaching Experience is required';
    if (!formData.message) newErrors.message = 'Why do you want to join as a tutor? is required';

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Prevent form submission if there are validation errors
    }

    // Send form data to Formspree (POST request)
    fetch('https://formspree.io/f/mnnjarvn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted successfully:', data);
      setIsSubmitted(true);

      // Clear form data after submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subjects: '',
        education: '',
        experience: '',
        message: ''
      });

      // Remove the success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <section id="tutor">
      <h1>Become a Tutor</h1>
      <div className="form-container">
        <h2>Tutor Application Form</h2>
        <form id="tutorForm" onSubmit={handleSubmit}>
          {/* Hidden field to specify this is a Tutor Form */}
          <input type="hidden" name="formType" value="Tutorship Form" />

          {/* Personal Information */}
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          {/* Subject Expertise */}
          <label htmlFor="subjects">Subjects You Can Teach:</label>
          <input
            type="text"
            id="subjects"
            name="subjects"
            value={formData.subjects}
            onChange={handleChange}
            placeholder="e.g., Mathematics, Physics, English"
            required
          />
          {errors.subjects && <p className="error">{errors.subjects}</p>}

          {/* Educational Background */}
          <label htmlFor="education">Highest Educational Qualification:</label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <option value="">Select qualification...</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
            <option value="other">Other</option>
          </select>
          {errors.education && <p className="error">{errors.education}</p>}

          {/* Experience */}
          <label htmlFor="experience">Teaching Experience (years):</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            min="0"
            placeholder="Enter years of experience"
            required
          />
          {errors.experience && <p className="error">{errors.experience}</p>}

          {/* Additional Information */}
          <label htmlFor="message">Why do you want to join as a tutor?</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us about yourself"
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          {/* Submit Button */}
          <button className='buttons' type="submit">Apply Now</button>

          {/* Success message */}
          {isSubmitted && <p className="success-message">Your application has been submitted successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default TutorForm;
