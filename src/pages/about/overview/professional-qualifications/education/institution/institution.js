import React from "react";
import PropTypes from "prop-types";
import "./institution.css";

const Institution = (props) => (
  <div className="institution">
    <img
      className="img-fluid"
      src={props.image}
      alt="institution description"
    />
    <h5 className="degree">{props.degree}</h5>
  </div>
);

Institution.propTypes = {};

Institution.defaultProps = {};

export default Institution;
