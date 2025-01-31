import React from 'react'
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import EnrollForm from './EnrollForm/EnrollForm';

const About = () => {
  return (
    <div>
    {/* Render the Header component */}
    <Header />
    <EnrollForm />



    {/* Render the Footer component */}
    <Footer />
  </div>
);
}

export default About