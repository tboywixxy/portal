import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

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
    <section id="contact" className="sectionC">
      <h2>Contact Us</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* Hidden field to specify this is a Contact Form */}
        <input type="hidden" name="formType" value="Contact Form" />
        
        {/* User's information */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit" className="buttons">Send Message</button>

        {/* Success message */}
        {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
      </form>
    </section>
  );
};

export default ContactForm;
