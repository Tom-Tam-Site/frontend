import React from "react";
import "./about.css";
import Overview from "./overview/overview";
import ProfessionalQualifications from "./professional-qualifications/professional-qualifications";
import Testimonials from "./testimonials/testimonials";

const About = () => (
  <div className="about page-shell">
    <Overview />
    <ProfessionalQualifications />
    <Testimonials />
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
