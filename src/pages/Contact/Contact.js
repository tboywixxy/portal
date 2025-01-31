import React from 'react'
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import ContactForm from './ContactForm/ContactForm';

const Home = () => {
  return (
    <div>
    {/* Render the Header component */}
    <Header />
    <ContactForm />



    {/* Render the Footer component */}
    <Footer />
  </div>
);
}

export default Home