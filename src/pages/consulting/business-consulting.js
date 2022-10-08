import React from "react";

import "./business-consulting.css";
import StrategicAlignment from "./strategic-alignment/strategic-alignment";
import RiskManagement from "./risk-management/risk-management";
import FinancialManagement from "./financial-management/financial-management";
import TrainingDevelopment from "./training-development/training-development";
import BestPractices from "./best-practices-articles/best-practices";

const BusinessConsulting = () => (
  <div className="business-consulting parent-component">
    <StrategicAlignment />
    <RiskManagement />
    <FinancialManagement />
    <TrainingDevelopment />
    <BestPractices />
  </div>
);

BusinessConsulting.propTypes = {};

BusinessConsulting.defaultProps = {};

export default BusinessConsulting;
