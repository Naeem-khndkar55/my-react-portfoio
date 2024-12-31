import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
        
      <div className="about__box">
      <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year++ with MERN Stack</span>
      </div>
     
      <div className="about__box">
      <i class='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">Coding Journy</h3>
        <span className="about__subtitle">900+ Sovled Problems </span>
      </div>
      
      <div className="about__box">
      <i class='bx bx-code-block about__icon'></i>
        <h3 className="about__title">Languges</h3>
        <span className="about__subtitle">C++, JavaSctipt, python, HTML, CSS, MongoDB, MySQL</span>
      </div>
    </div>
  );
};

export default Info;
