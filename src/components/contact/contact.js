import React from "react";
import { useState } from "react";

import "./contact.css";

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact">
      <button
        className="button button-primary contact-btn"
        type="button"
        aria-expanded={open}
        aria-controls="collapseContact"
        onClick={() => setOpen(!open)}
      >
        Contact information
      </button>
      <div className={`contact-details${open ? " is-open" : ""}`} id="collapseContact" hidden={!open}>
        <div className="contact-links">
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
