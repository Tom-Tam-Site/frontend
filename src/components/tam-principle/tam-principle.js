import React from "react";
import PropTypes from "prop-types";
import "./tam-principle.css";
import { render } from "@testing-library/react";

import StrategyTam from "./strategy-tam/strategy-tam";
import RiskTam from "./risk-tam/risk-tam";
import TrainingTam from "./training-tam/training-tam";

const TamPrinciple = () => {
  return (
    <div>
      <button
        class="btn btn-warning btn-principle"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Tam Principles
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header bg-light">
          <h2 class="offcanvas-title" id="offcanvasRightLabel">
            Tam Principles
          </h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="parent-component">
            <StrategyTam />
            <RiskTam />
            <TrainingTam />
          </div>
        </div>
      </div>
    </div>
  );
};

TamPrinciple.propTypes = {};

TamPrinciple.defaultProps = {};

export default TamPrinciple;
