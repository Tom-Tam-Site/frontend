import React from "react";

import "./professional-qualifications.css";
import Education from "./education/education";

const ProfessionalQualifications = () => (
  <div className="professional-qualifications parent-component">
    <h2 className="title text-center">Professional Qualifications</h2>
    <br></br>
    <div className="paragraph">
      Tom's diverse industry background includes banking, financial services,
      insurance, investment management, Big-Four public accounting, consulting,
      not-for-profit, global conglomerate operations, and entrepreneurial
      ventures. He is adept at aligning people, processes, and technologies to
      drive risk-controlled profitable growth.
      <div className="text-center">
        <Education />
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
          </span>{" "}with several companies in the insurance industry, leading
          turnaround efforts, acquisitions, and divestitures.
        </div>
        <div className="paragraph">
          He followed that with ten years in{" "}
          <span className="bolded">senior executive positions </span>
          helping global organizations develop and implement {""}
          <span className="bolded">enterprise risk management processes.</span>
          <div>
            World-class organizations Tom has served include KPMG,
            PricewaterhouseCoopers, Barclays Global Investors, and the Church of
            Jesus Christ of Latter-day Saints, where he served as Chief Risk
            Officer and Asia Region CFO.
          </div>
        </div>
      </div>
      <div className="col-lg text-center d-flex align-items-center justify-content-center experience">
        <img src="/images/experience.png" className="img-fluid" />
      </div>
    </div>
    <div className="paragraph">
      The principles that prove effective in building sustainable enterprises—
      sound judgment, disciplined execution, and long-term thinking—are equally
      practical for every person and family seeking financial security and peace
      of mind.
    </div>
  </div>
);

ProfessionalQualifications.propTypes = {};

ProfessionalQualifications.defaultProps = {};

export default ProfessionalQualifications;
