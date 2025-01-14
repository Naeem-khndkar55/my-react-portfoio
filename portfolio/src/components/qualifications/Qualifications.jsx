import React, { useState } from "react";
import "./Qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualifications section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Journey</span>
      <div className="qualifications__container container">
        <div className="qualifications__tabs">
          <div
            className={
              toggleState === 1
                ? "qualifications__button qualifications__active button--flex"
                : "qualifications__button button--flex"
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            <i className="uil uil-graduation-cap qualifications__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualifications__button qualifications__active button--flex"
                : "qualifications__button button--flex"
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            <i className="uil uil-briefcase-alt qualifications__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualifications__sections">
          <div
            className={
              toggleState === 1
                ? "qualifications__content qualifications__content-active"
                : "qualifications__content"
            }
          >
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
                <h3 className="qualifications__title">Communication</h3>
                <span className="qualifications__subtitle">
                  Self,Clubs & Orgs
                </span>
                <div className="qualifications__calendar">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualifications__content qualifications__content-active"
                : "qualifications__content"
            }
          >
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
                <h3 className="qualifications__title">Programming Contest</h3>
                <span className="qualifications__subtitle">
                  Online and Onsite contest perticipation
                </span>
                <div className="qualifications__calendar">
                  <i className="uil uil-calendar-alt">2022-Present</i>
                </div>
              </div>
            </div>
            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Instructor</h3>
                <span className="qualifications__subtitle">
                  CoderPals (python & HTML+CSS)
                </span>
                <div className="qualifications__calendar">
                  <i className="uil uil-calendar-alt"></i>2025-present
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
                <h3 className="qualifications__title">Project Contribution</h3>
                <span className="qualifications__subtitle">
                  Seniors startup
                </span>
                <div className="qualifications__calendar">
                  <i className="uil uil-calendar-alt">2024-Present</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
