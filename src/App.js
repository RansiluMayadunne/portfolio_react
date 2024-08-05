import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/style.css';
// import 'boxicons/css/boxicons.min.css';


const App = () => {
  const sectionsRef = useRef([]);

  return (
    <div>
      <Navbar />
      <Home sectionsRef={sectionsRef} />
      <About sectionsRef={sectionsRef} />
      <Education sectionsRef={sectionsRef} />
      <Skills sectionsRef={sectionsRef} />
      <Contact sectionsRef={sectionsRef} />
      <Footer />
    </div>
  );
};

export default App;
