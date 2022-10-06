import React from "react";
import PropTypes from "prop-types";
import "./tam-principle.css";
import { render } from "@testing-library/react";

let principles = [
  {
    name: "Strategy and Goal Execution",
    principles: ["Target", "Align", "Manage"],
  },
  {
    name: "Risk Management",
    principles: ["Transfer", "Accept", "Mitigate"],
  },
  {
    name: "Training and Continuous Learning",
    principles: [
      "Teach correct principles",
      "Apply correct principles",
      "Model correct behaviors",
    ],
  },
];

const renderPrinciples = function (item) {
  // formatted principles
  let t = item.principles[0].substring(1);
  let a = item.principles[1].substring(1);
  let m = item.principles[2].substring(1);

  return (
    <div className="col  ">
      <div class="card bg-light principle">
        <div class="card-body">
          <h3 class="card-title">{item.name}</h3>
          <ul>
            <li>
              <span className="fletter">T</span>
              {t}
            </li>
            <li>
              <span className="fletter">A</span>
              {a}
            </li>
            <li>
              <span className="fletter">M</span>
              {m}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const TamPrinciple = () => (
  <div className="tam-principle row">{principles.map(renderPrinciples)}</div>
);

TamPrinciple.propTypes = {};

TamPrinciple.defaultProps = {};

export default TamPrinciple;
