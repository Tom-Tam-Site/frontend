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
      <div className="col-lg vertically-centered">
        <div className="col">
          <img src={imgSrc} alt="profile" className="profile img-fluid" />
        </div>
        <Contact />
      </div>
      <div className="col">
        <h2 className="mt-4 title">{title}</h2>
        <br />
        <p className="text-start">
          <div className="paragraph">
            Tom Tam is a{" "}
            <span className="bolded">visionary servant leader</span>, business
            executive, and coach with over 35 years of helping businesses,
            individuals, and families apply time-tested principles to solve
            their challenging problems. See{" "}
            <span className="bolded embedded-link">
              <Nav.Link className="embedded-link" as={Link} to="/consulting">
                Consulting
              </Nav.Link>
            </span>{" "}
            tab for business problem solving,{" "}
            <span className="bolded embedded-link">
              <Nav.Link className="embedded-link" as={Link} to="/coaching">
                Coaching
              </Nav.Link>
            </span>{" "}
            tab for personal problem solving,{" "}
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
            tab for discussion on fact-based discussions on current economic and
            political events.
          </div>
          <div className="paragraph">
            By working in the trenches as a problem solver with his clients in
            diverse settings, Tom saw{" "}
            <span className="bolded">
              the power of a principle-based approach to problem solving
            </span>{" "}
            that is equally effective in business as well as for individuals and
            their families.{" "}
            <span className="bolded">
              He created an acronym using his last name TAM to highlight three
              key areas of focus for both businesses and individuals
            </span>{" "}
            for his consulting and coaching clients.
          </div>
          <div className="text-center mt-1">
            <TamPrinciple />
          </div>
        </p>
      </div>
    </div>
    <br />
  </div>
);

Overview.propTypes = {};

Overview.defaultProps = {};

export default Overview;
