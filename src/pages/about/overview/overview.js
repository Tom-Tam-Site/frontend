import React from "react";
import "./overview.css";
import TamPrinciple from "../../../components/tam-principle/tam-principle";
import Contact from "../../../components/contact/contact";

// to be updated with cms dynamically.
let title = "Overview of Services";
let imgSrc = "images/profile.png";

const Overview = () => (
  <div className="overview container-fluid">
    <div className="text-center row">
      <div className="col-lg">
        <div className="col">
          <img src={imgSrc} alt="profile" className="profile img-fluid" />
        </div>
        <Contact />
      </div>
      <div className="col">
        <h2>{title}</h2>
        <br />
        <p className="text-start">
          Tom Tam is a <span className="bolded">visionary servant leader</span>,
          business executive, and coach with over 35 years of helping
          businesses, individuals, and families apply time-tested principles to
          solve their challenging problems. By working in the trenches as a
          problem solver with his clients in diverse settings, Tom saw{" "}
          <span className="bolded">
            the power of a principle-based approach to problem solving
          </span>{" "}
          that are equally effective in business as well as for individuals and
          their families. He came up with{" "}
          <span className="bolded">
            an acronym using his last name TAM to highlight three important
            areas of focus for both businesses and individuals.
          </span>
        </p>
      </div>
    </div>
    <br />
    <TamPrinciple />
  </div>
);

Overview.propTypes = {};

Overview.defaultProps = {};

export default Overview;
