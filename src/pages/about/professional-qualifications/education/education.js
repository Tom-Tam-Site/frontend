import React from "react";
import { useState } from "react";

import "./education.css";
import Institution from "./institution/institution";

const Education = () => {
  const [open, setOpen] = useState(false);

  return (
  <div className="education">
    <button className="button button-secondary btn-testimonials" type="button" aria-expanded={open} aria-controls="collapseEducation" onClick={() => setOpen(!open)}>
      See Education and Certification
    </button>
    <div className="education-details" id="collapseEducation" hidden={!open}>
      <div className="education-grid">
          <div>
            <Institution degree="BBA" image="/images/institutions/bba.png" />
          </div>
          <div>
            <Institution degree="MBA" image="/images/institutions/mba.png" />
          </div>
          <div>
            <Institution degree="CPA" image="/images/institutions/cpa.png" />
          </div>
      </div>
    </div>
  </div>
  );
};

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
