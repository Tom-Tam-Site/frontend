import React from "react";

import "./coaching.css";
import Contact from "../../components/contact/contact";

import TamPrinciple from "../../components/tam-principle/tam-principle";

import StrategyTam from "../../components/tam-principle/strategy-tam/strategy-tam";
import RiskTam from "../../components/tam-principle/risk-tam/risk-tam";
import TrainingTam from "../../components/tam-principle/training-tam/training-tam";

let imgSrc = "images/profile.png";

const Coaching = () => (
  <div className="coaching">
    <div className="row text-center">
      <Contact />
      <div class="">
        <div className="paragraph p-3 bg-light">
          By working in the trenches as a problem solver with his clients in
          diverse settings, Tom saw{" "}
          <span className="bolded">
            the power of a principle-based approach to problem solving
          </span>{" "}
          that is equally effective in business as well as for individuals and
          their families.{" "}
          <span className="bolded">
            He created an acronym using his last name TAM to highlight three key
            areas of focus for both businesses and individuals
          </span>{" "}
          for his consulting and coaching clients.
        </div>
      </div>
      <div className="text-center mt-1">
        <h2 class="title">TAM Principles</h2>
        <StrategyTam />
        <RiskTam />
        <TrainingTam />
      </div>
    </div>
  </div>
);

Coaching.propTypes = {};

Coaching.defaultProps = {};

export default Coaching;
