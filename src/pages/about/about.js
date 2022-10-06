import React from "react";
import "./about.css";
import Overview from "./overview/overview";
import Qualifications from "./qualifications/qualifications";
import Endorsements from "./endorsements/endorsements";

const About = () => (
  <div className="about">
    <Overview />
    <Qualifications />
    <Endorsements />
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
