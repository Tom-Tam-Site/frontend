import React from "react";
import PropTypes from "prop-types";
import "./tam-principle.css";
import { render } from "@testing-library/react";

import StrategyTam from "./strategy-tam/strategy-tam";
import RiskTam from "./risk-tam/risk-tam";
import TrainingTam from "./training-tam/training-tam";

const TamPrinciple = () => (
  <div className="parent-component">
    <StrategyTam />
    <RiskTam />
    <TrainingTam />
  </div>
);

TamPrinciple.propTypes = {};

TamPrinciple.defaultProps = {};

export default TamPrinciple;
