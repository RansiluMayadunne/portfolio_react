import React, { useRef, useEffect } from 'react';
import homeImage from '../images/a.jpg';
// import 'boxicons';

const Home = ({ sectionsRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionsRef.current.push(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Ransilu Mayadunne</span></h1>
        <div className="text-animate">
          <h3>Full-Stack Developer</h3>
        </div>
        <p>As a full-stack developer, I specialize in designing, developing, and maintaining both 
        the front-end and back-end components of web applications.</p>
        <div className="btn-box">
          <a href="#" className="btn">Hire Me</a>
          <a href="Contact.js" className="btn">Let's Talk</a>
        </div>
      </div>
      <div className="image">
        <img src={homeImage} alt="Ransilu Mayadunne" />
      </div>
      <div className="home-sci">
        <a href="#"><i className='bx bxl-facebook'></i></a>
        <a href="#"><i className='bx bxl-twitter'></i></a>
        <a href="#"><i className='bx bxl-linkedin'></i></a>
      </div>
    </section>
  );
};

export default Home;
