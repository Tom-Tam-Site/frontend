import React from "react";
import PropTypes from "prop-types";
import "./education.css";
import Institution from "./institution/institution";

const Education = () => (
  <span>
    <a
      className="btn btn-success btn-testimonials"
      data-bs-toggle="collapse"
      href="#collapseEducation"
      role="button"
      aria-expanded="false"
      aria-controls="collapseEducation"
    >
      See Education and Certification
    </a>
    <div className="collapse" id="collapseEducation">
      <div className="card card-body text-center">
        <div className="row">
          <div className="col-lg">
            <Institution degree="BBA" image="/images/institutions/bba.png" />
          </div>
          <div className="col-lg">
            <Institution degree="MBA" image="/images/institutions/mba.png" />
          </div>
          <div className="col-lg">
            <Institution degree="CPA" image="/images/institutions/cpa.png" />
          </div>
        </div>
      </div>
    </div>
  </span>
);

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
