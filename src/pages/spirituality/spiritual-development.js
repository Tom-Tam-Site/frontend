import React from "react";
import Purpose from "./purpose/purpose";
import "./spiritual-development.css";
import Contact from "../../components/contact/contact";

const SpiritualDevelopment = () => (
  <div className="spiritual-development">
    <div className="text-center">
      <a
        className="btn btn-success"
        type="button"
        href="https://ttamcoaching.blogspot.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Character Development Articles
      </a>
    </div>
    <Purpose />
    <div className="paragraph text-center bg-light p-3">
      This{" "}
      <span className="bolded embedded-link">
        <a
          className="embedded-link"
          href="https://ttamcoaching.blogspot.com/"
          target="_blank"
          rel="noreferrer"
        >
          blog
        </a>
      </span>{" "}
      contains personal character development experiences and inspirational articles that
      may be of interest to truth seekers.
      <div className="bolded">
        Your thoughts, comments, and insights are welcomed.
      </div>
    </div>
    <div className="text-center">
      <Contact />
    </div>
  </div>
);

SpiritualDevelopment.propTypes = {};

SpiritualDevelopment.defaultProps = {};

export default SpiritualDevelopment;
