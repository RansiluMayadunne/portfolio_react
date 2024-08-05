import React from 'react';

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">My <span>Journey</span></h2>
      <div className="education-row">
        <div className="education-column">
          <h3 className="title"> Education</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2020 - 2022</div>
                <h3>Advance Level Examination</h3>
                <p>I completed my Advanced Level in Technology stream, which included ICT as a subject.</p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i> 2022-2023</div>
                <h3>Software Developer NVQ Level 04 Course</h3>
                <p>I completed a one-year Software Developer NVQ Level 04 course
                at the Vocational Training Authority in Sri Lanka.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
