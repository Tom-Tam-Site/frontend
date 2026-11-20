import React from "react";

import "./institution.css";

const Institution = (props) => (
  <div className="institution">
    <img
      className="img-fluid"
      src={props.image}
      alt=""
      width="401"
      height="148"
      loading="lazy"
      decoding="async"
    />
    <h5 className="degree">{props.degree}</h5>
  </div>
);

Institution.propTypes = {};

Institution.defaultProps = {};

export default Institution;
