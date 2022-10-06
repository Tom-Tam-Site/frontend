import React from "react";
import "./overview.css";
import TamPrinciple from "../../../components/tam-principle/tam-principle";

// to be updated with cms dynamically.
let title = "Overview of Services";
let imgSrc = "images/profile.png";
let description =
  "Tom Tam is a visionary servant leader, business executive, and coach with over 35 years of helping businesses, individuals, and families apply time-tested principles to solve their challenging problems. By working in the trenches as a problem solver with his clients in diverse settings, Tom saw the power of a principle-based approach to problem solving that are equally effective in business as well as for individuals and their families. He came up with an acronym using his last name TAM to highlight three important areas of focus for both businesses and individuals.";

const Overview = () => (
  <div className="overview container-fluid">
    <div className="text-center row">
      <div className="col-lg">
        <img src={imgSrc} alt="profile" className="profile img-fluid" />
      </div>
      <div className="col">
        <h2>{title}</h2>
        <br />
        <p className="text-start">{description}</p>
      </div>
    </div>
    <br />
    <TamPrinciple />
  </div>
);

Overview.propTypes = {};

Overview.defaultProps = {};

export default Overview;
