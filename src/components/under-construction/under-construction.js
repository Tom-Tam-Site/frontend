import React from "react";
import PropTypes from "prop-types";
import "./under-construction.css";

const UnderConstruction = () => (
  <div className="under-construction text-center">
    <h2>This page is under construction...</h2>
    <br></br>
    <img src="https://img.icons8.com/clouds/200/000000/cancel-2.png" />
    <br></br>
    <p>please comeback later :)</p>
  </div>
);

UnderConstruction.propTypes = {};

UnderConstruction.defaultProps = {};

export default UnderConstruction;
