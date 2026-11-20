import React from "react";
import { useState } from "react";

import "./tam-principle.css";

import StrategyTam from "./strategy-tam/strategy-tam";
import RiskTam from "./risk-tam/risk-tam";
import TrainingTam from "./training-tam/training-tam";

const TamPrinciple = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="btn btn-warning btn-principle"
        type="button"
        aria-expanded={open}
        aria-controls="offcanvasRight"
        onClick={() => setOpen(!open)}
      >
        See TAM Principles
      </button>
      <div
        className="offcanvas offcanvas-end size-90"
        hidden={!open}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header bg-light ">
          <h2 className="offcanvas-title " id="offcanvasRightLabel">
            <span className="">TAM</span>
            <span className="principles-heading">Principles</span>
          </h2>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setOpen(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
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
