import React from "react";
import PropTypes from "prop-types";
import "./professional-qualifications.css";

const ProfessionalQualifications = () => (
  <div className="professional-qualifications">
    <h2 className="title text-center">Professional Qualifications</h2>
    <br></br>
    <div className="paragraph">
      Tom Tam's
      <span className="bolded-inline-surrounded">
        diverse industry background
      </span>
      includes{" "}
      <span className="title">
        banking, financial services, insurance, investment management, Big-Four
        public accounting, consulting, not-for-profit, global conglomerate
        operations, and entrepreneurial ventures{" "}
      </span>{" "}
      . He is adept at{" "}
      <span className="bolded">
        {" "}
        aligning people, processes, and technologies to drive risk-controlled
        profitable growth.
      </span>
      <span>
        <button className="btn btn-success btn-testimonials">
          See Testimonials
        </button>
      </span>
    </div>
    <div className="row">
      <div className="col-lg"></div>
      <div className="col-lg"></div>
    </div>
  </div>
);

ProfessionalQualifications.propTypes = {};

ProfessionalQualifications.defaultProps = {};

export default ProfessionalQualifications;
