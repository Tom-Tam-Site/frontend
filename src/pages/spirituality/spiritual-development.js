import React from "react";
import Purpose from "./purpose/purpose";
import "./spiritual-development.css";
import Contact from "../../components/contact/contact";

const SpiritualDevelopment = () => (
  <div className="spiritual-development character-page page-shell">
    <header className="page-hero">
      <h1>Character Development Articles</h1>
      <p className="page-hero-lede">
        Reflections on the principles, relationships, and daily choices that
        shape a life of meaning.
      </p>
      <a
        className="button button-primary"
        href="https://ttamcoaching.blogspot.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read the articles
      </a>
    </header>
    <Purpose />
    <section className="content-note">
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
    </section>
    <div className="page-contact">
      <Contact />
    </div>
  </div>
);

SpiritualDevelopment.propTypes = {};

SpiritualDevelopment.defaultProps = {};

export default SpiritualDevelopment;
