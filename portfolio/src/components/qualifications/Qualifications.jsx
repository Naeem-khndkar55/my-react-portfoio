import React from "react";
import "./Qualifications.css";

const Qualifications = () => {
  return (
    <section className="qualifications section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Journey</span>
      <div className="qualifications__container container">
        <div className="qualifications__tabs">
          <div className="qualifications__button qualifications__active button--flex">
            <i className="uil uil-graduation-cap qualifications__icon"></i>
            Education
          </div>
          <div className="qualifications__button button--flex">
            <i className="uil uil-briefcase-alt qualifications__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualifications__sections">
          <div className="qualifications__content qualifications__content-active">
            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Graduation</h3>
                <span className="qualifications__subtitle">
                  Comilla University
                </span>
                <div className="qualifications__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020-2025
                </div>
              </div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>
            <div className="qualifications__data">
              <div></div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
              <div>
                <h3 className="qualifications__title">Web Development</h3>
                <span className="qualifications__subtitle">
                  BongoDev & YouTube
                </span>
                <div className="qualifications__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-Present
                </div>
              </div>
            </div>
            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Coding</h3>
                <span className="qualifications__subtitle">Self & Youtube</span>
                <div className="qualifications__calendar">
                  <i className="uil uil-calendar-alt"></i>2020-present
                </div>
              </div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>
            <div className="qualifications__data">
              <div></div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
              <div>
                <h3 className="qualifications__title">Communucation</h3>
                <span className="qualifications__subtitle">
                  Self, Multiple Club & Orgs
                </span>
                <div className="qualifications__calendar">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>
            </div>
          </div>

          <div className="qualifications__content">
            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">MERN Stack</h3>
                <span className="qualifications__subtitle">
                  University projects & Practice
                </span>
                <div className="qualifications__calendar">
                  <i className="uil uil-calendar-alt"></i>2022-present
                </div>
              </div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>
            <div className="qualifications__data">
              <div></div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
              <div>
                <h3 className="qualifications__title">Team Work</h3>
                <span className="qualifications__subtitle">
                  Clubing & Events management
                </span>
                <div className="qualifications__calendar">
                  <i className="uil uil-calendar-alt">2023-Present</i>
                </div>
              </div>
            </div>
            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Mentor</h3>
                <span className="qualifications__subtitle">CoderPals</span>
                <div className="qualifications__calendar">
                  <i className="uil uil-calendar-alt"></i>2025-present
                </div>
              </div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
