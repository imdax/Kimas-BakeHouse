import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseInfo from './components/CourseInfo';
import Curriculum from './components/Curriculum';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-cream text-brand-brown overflow-x-hidden">
      <Navbar />
      <Hero />
      <CourseInfo />
      <Curriculum />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
