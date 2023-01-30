import React from "react";
import "./overview.css";
import TamPrinciple from "../../../components/tam-principle/tam-principle";
import Contact from "../../../components/contact/contact";

import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

// to be updated with cms dynamically.
let title = "Overview of Services";
let imgSrc = "images/profile.png";

const Overview = () => (
  <div className="overview">
    <div className="text-center row">
      <div className="">
        <img src={imgSrc} alt="profile" className="profile img-fluid" />
      </div>
      <div className="col">
        <h2 className="mt-4 title">{title}</h2>
        <br />
        <p className="text-start">
          <div className="paragraph bg-light p-3">
            Tom Tam is a{" "}
            <span className="bolded">visionary servant leader</span>, business
            executive, and coach with over 35 years of helping businesses,
            individuals, and families apply time-tested principles to solve
            their challenging problems. See{" "}
            <span className="bolded embedded-link">
              <Nav.Link className="embedded-link" as={Link} to="/coaching">
                Coaching
              </Nav.Link>
            </span>{" "}
            tab for personal, and business problem solving,{" "}
            <span className="bolded embedded-link">
              <Nav.Link className="embedded-link" as={Link} to="/spirituality">
                Spirituality
              </Nav.Link>
            </span>{" "}
            tab for personal growth, and{" "}
            <span className="bolded embedded-link">
              <Nav.Link className="embedded-link" as={Link} to="/news">
                News Blog
              </Nav.Link>
            </span>{" "}
            tab for fact-based discussions and articles for current economic and
            political events.
          </div>
        </p>
        <Contact></Contact>
      </div>
    </div>
    <br />
  </div>
);

Overview.propTypes = {};

Overview.defaultProps = {};

export default Overview;
