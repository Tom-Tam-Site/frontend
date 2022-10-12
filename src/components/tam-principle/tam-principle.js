import React from "react";
import PropTypes from "prop-types";
import "./tam-principle.css";
import { render } from "@testing-library/react";

import StrategyTam from "./strategy-tam/strategy-tam";
import RiskTam from "./risk-tam/risk-tam";

const TamPrinciple = () => (
  <div className="parent-component">
    <div className="text-center">
      <h2>T.A.M Principles</h2>
    </div>
    <StrategyTam />
    <RiskTam />
  </div>
);

TamPrinciple.propTypes = {};

TamPrinciple.defaultProps = {};

export default TamPrinciple;
