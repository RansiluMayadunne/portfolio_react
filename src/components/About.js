import React from 'react';
import '../styles/style.css';
import homeImage from '../images/a.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>
      <div className="about-img">
        <img src={homeImage} alt="" />
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <h3>Software Developer!</h3>
        <p>I am a 21-year-old full-stack developer with 1 year of experience in building dynamic and responsive
                 web applications. Proficient in both front-end and back-end technologies, I am passionate about creating 
                 efficient, scalable, and user-friendly solutions. With a keen eye for detail and a commitment to continuous learning,
                 I am dedicated to delivering high-quality work and staying updated with the latest industry trends.</p>
        <div className="btn-box btns">
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default About;
