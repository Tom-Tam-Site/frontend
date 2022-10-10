import React from "react";

import "./footer.css";

let currentYear = new Date().getFullYear();

const Footer = () => (
  <div className="footer">
    <footer className="py-2 bg-light fixed-bottom">
      <div className="container text-center">
        <small> Tom Tam &copy; {currentYear}</small>
      </div>
    </footer>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
