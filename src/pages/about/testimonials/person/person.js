import React from "react";

import "./person.css";

const Person = (props) => (
  <figure className="person">
    <div className="person-identity">
      <img
        className="testimonials-picture"
        src={props.img}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <figcaption>
        <div className="name">{props.name}</div>
        <div className="position">{props.position}</div>
      </figcaption>
    </div>
    <blockquote className="testimonial-text">{props.testimony}</blockquote>
  </figure>
);

Person.propTypes = {};

Person.defaultProps = {};

export default Person;
