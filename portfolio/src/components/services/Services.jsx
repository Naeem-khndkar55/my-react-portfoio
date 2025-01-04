import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i Do!</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Web Development</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            view more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__model active__model"
                : "services__model"
            }
          >
            <div className="services__model-content">
              <i
                className="uil uil-times services__model-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services__model-title">Web Development</h3>
              <p className="services__model-description">
                more then 1 year experience with MERN stack, 3 years experience
                with HTML, CSS & JavaScript
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I develop Front End</p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I develop Back End</p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I work with Database Like MySQL $ MongoDB
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Multiple projects with teamwork Experiences.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I Know CLI and Git & Github.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-programming-language services__icon"></i>
            <h3 className=" services__title">Coding</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            view more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__model active__model"
                : "services__model"
            }
          >
            <div className="services__model-content">
              <i
                className="uil uil-times services__model-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services__model-title">Coding</h3>
              <p className="services__model-description">
                Know to code in multiple language & competitive programming
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    C & c++ for competitive programming.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    JavaScript for Web Development.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Python for Mechine Learning & Development
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-briefcase services__icon"></i>
            <h3 className="services__title">Communication & Management</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            view more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__model active__model"
                : "services__model"
            }
          >
            <div className="services__model-content">
              <i
                className="uil uil-times services__model-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services__model-title">
                Communication & Management
              </h3>
              <p className="services__model-description">
                Do Clubing and Organized multiple event in University
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Former Presidient Feni Students Association of CoU
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Former Logistics Secretery of CoU IT Society
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Worked with HULT Prize CoU
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Arranged and Volunteered Multiple events.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    have good understanding in English
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
