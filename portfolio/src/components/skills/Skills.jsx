import React from "react";
import "./Skills.css";
import Stack from "./Stack";
import Coding from "./Coding";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <Stack/>
        <Coding/>
      </div>
    </section>
  );
};

export default Skills;
