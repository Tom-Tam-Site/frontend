import React from "react";
import PropTypes from "prop-types";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <button
        class="btn btn-success contact-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#contactInfo"
        aria-controls="contactInfo"
      >
        Contact information
      </button>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="contactInfo"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header bg-light">
          <h2 class="offcanvas-title" id="offcanvasExampleLabel">
            Contact Information
          </h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body"></div>
      </div>
    </div>
  );
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
