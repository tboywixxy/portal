import React from 'react'
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Abt from './Vision/Vision'
import Mission from './Mission/Mission'

const About = () => {
  return (
    <div>
    {/* Render the Header component */}
    <Header />
    <Mission />
    <Abt />



    {/* Render the Footer component */}
    <Footer />
  </div>
);
}

export default About