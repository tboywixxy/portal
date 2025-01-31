import React, { useState } from 'react';
import './EnrollForm.css';

const EnrollmentForm = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    level: '',
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
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email Address is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.course) newErrors.course = 'Course Selection is required';
    if (!formData.level) newErrors.level = 'Education Level is required';
    if (!formData.message) newErrors.message = 'Additional Information is required';

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
        name: '',
        email: '',
        phone: '',
        course: '',
        level: '',
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
    <section id="enroll">
      <h1>Enroll Now</h1>
      <div className="form-container">
        <h2>Student Enrollment Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Hidden field to specify this is an Enrollment Form */}
          <input type="hidden" name="formType" value="Enrollment Form" />

          {/* Personal Information */}
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

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

          {/* Course Selection */}
          <label htmlFor="course">Select Course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Choose a course...</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="english">English</option>
            <option value="stats">Statistics</option>
            <option value="programming">Programming</option>
          </select>
          {errors.course && <p className="error">{errors.course}</p>}

          <label htmlFor="level">Education Level:</label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          >
            <option value="">Select level...</option>
            <option value="highschool">High School</option>
            <option value="undergrad">Undergraduate</option>
            <option value="postgrad">Postgraduate</option>
          </select>
          {errors.level && <p className="error">{errors.level}</p>}

          {/* Additional Information */}
          <label htmlFor="message">Additional Information:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Any specific requirements?"
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          {/* Submit Button */}
          <button className='buttons' type="submit">Enroll Now</button>

          {/* Success message */}
          {isSubmitted && <p className="success-message">Your form has been submitted successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default EnrollmentForm;
