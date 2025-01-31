import React from 'react'
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import TutorForm from './TutorForm/TutorForm';

const Home = () => {
  return (
    <div>
    {/* Render the Header component */}
    <Header />
    <TutorForm />



    {/* Render the Footer component */}
    <Footer />
  </div>
);
}

export default Home