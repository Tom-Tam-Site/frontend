import React from "react";
import Purpose from "./purpose/purpose";
import "./spiritual-development.css";
import Contact from "../../components/contact/contact";

const SpiritualDevelopment = () => (
  <div className="spiritual-development">
    <div class="text-center">
      <a
        class="btn btn-success"
        type="button"
        href="https://ttamcoaching.blogspot.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spiritual Development Blog
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
      contains personal spiritual experiences and inspirational articles that
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
