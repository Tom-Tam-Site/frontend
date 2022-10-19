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
      <span className="">
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
      <div className="text-end">
        <button className="btn btn-success btn-testimonials">
          See Testimonials
        </button>
        <button className="btn btn-success btn-testimonials">
          See Education and Credentials
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-lg">
        <div className="paragraph">
          Tom's{" "}
          <span className="bolded">professional career began as a CPA</span> in
          public accounting with <span className="bolded">KPMG</span> for almost
          ten years. For the next ten years he was in{" "}
          <span className="bolded">
            Chief Audit Executive and CFO positions
          </span>{" "}
          with several companies in the insurance industry{" "}
          <span className="bolded">
            leading turnaround efforts, acquisitions, and divestitures.
          </span>
           He followed that with ten years in{" "}
          <span className="bolded">senior executive positions </span>
          helping global organizations develop and implement {""}
          <span className="bolded">enterprise risk management processes.</span>
          <div>
            <span className="title">World-class organizations</span> Tom served
            include{" "}
            <span className="bolded">
              PWC, Barclays Global Investors, and the Church of Jesus Christ of
              Latter-day Saints.
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg text-center">
        <h2 className="pt-5 mt-5">Image goes here!</h2>
        <h2>Employers and Clients</h2>
      </div>
    </div>
    <div className="paragraph">
      By helping companies solve their complex business
      challenges, Tom recognized common themes across industries and operating
      cultures. These insights led Tom to start his own{" "}
      <span className="bolded-inline">
        executive consultancy helping small companies implement best business
        practices.
      </span>
      These time-tested principles are not only effective in helping businesses
      achieved sustainable success, they also are practical and actionable for
      every person or family who desires sound financial and risk management in
      their lives.
      <div className="bolded mt-2 text-center emphasis">
        Tom has coached hundreds of professionals in their careers and personal
        growth.
      </div>
    </div>
  </div>
);

ProfessionalQualifications.propTypes = {};

ProfessionalQualifications.defaultProps = {};

export default ProfessionalQualifications;
