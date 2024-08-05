import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Coding Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>CSS <span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>Javascript <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>PHP <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>Python <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <h3 className="title">Professional Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>Web Design <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>Web Development <span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>Desktop App Development <span>75%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>Work on time <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>Graphic Design <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
