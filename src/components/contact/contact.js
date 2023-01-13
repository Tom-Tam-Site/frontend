import React from "react";

import "./contact.css";

const Contact = () => {
  return (
    <div>
      <button
        class="btn btn-warning text-light contact-btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseContact"
        aria-expanded="false"
        aria-controls="collapseContact"
      >
        Contact information
      </button>
      <div class="collapse" id="collapseContact">
        <div class="card card-body parent">
          <a href="mailto:ttktam@gmail.com">✉️ ttktam@gmail.com</a>
          <a href="tel:+7024286216"> 📞 (702) 428-6216</a>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
