import React from "react";
import PropTypes from "prop-types";
import "./person.css";

const Person = (props) => (
  <div className="person">
    <div className=" text-container">
      <p className="testimonial-text">{props.testimony}</p>
    </div>

    <div className="person row">
      <div className="">
        <img
          className="testimonials-picture profile"
          src={props.img}
          alt={props.name}
        />
      </div>
      <div className="mb-3">
        <div className="bolded name">{props.name}</div>
        <div className="position">{props.position}</div>
      </div>
    </div>
  </div>
);

Person.propTypes = {};

Person.defaultProps = {};

export default Person;
