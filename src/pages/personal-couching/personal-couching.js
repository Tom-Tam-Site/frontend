import React from "react";

import "./personal-couching.css";
import ResumeDevelopment from "./resume-development/resume-development";
import PathingAssessment from "./pathing-assessment/pathing-assessment";
import OneOnOne from "./one-on-one/one-on-one";
import PrincipleBasedArticles from "./principle-based-articles/principle-based-articles";

const PersonalCouching = () => (
  <div className="professional-development parent-component">
    <ResumeDevelopment />
    <PathingAssessment />
    <OneOnOne />
    <PrincipleBasedArticles />
  </div>
);

export default PersonalCouching;
