import React from 'react'
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Hero from './Hero';
import Courses from './Courses/Courses';

const Home = () => {
  return (
    <div>
    {/* Render the Header component */}
    <Header />
    <Hero />
    <Courses />


    {/* Render the Footer component */}
    <Footer />
  </div>
);
}

export default Home