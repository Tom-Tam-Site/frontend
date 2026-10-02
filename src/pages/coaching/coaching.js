import React from "react";

import "./coaching.css";
import Contact from "../../components/contact/contact";

import StrategyTam from "../../components/tam-principle/strategy-tam/strategy-tam";
import RiskTam from "../../components/tam-principle/risk-tam/risk-tam";
import TrainingTam from "../../components/tam-principle/training-tam/training-tam";

const Coaching = () => (
  <div className="coaching page-shell">
    <header className="coaching-intro">
      <div>
        <p className="section-eyebrow">Coaching</p>
        <h1>Principles in practice</h1>
        <div className="coaching-lede">
          By working in the trenches as a problem solver with his clients in
          diverse settings, Tom saw{" "}
          <span className="bolded">
            the power of a principle-based approach to problem solving
          </span>{" "}
          that is equally effective in business as well as for individuals and
          their families.{" "}
          <span className="bolded">
            He created an acronym using his last name TAM to highlight three key
            areas of focus for both businesses and individuals
          </span>{" "}
          for his consulting and coaching clients.
        </div>
      </div>
      <div className="coaching-contact"><Contact /></div>
    </header>
    <section className="principles-section">
      <div className="section-heading">
        <p className="section-eyebrow">The TAM framework</p>
        <h2>TAM Principles</h2>
        <p>Three connected disciplines for solving problems with clarity, resilience, and action.</p>
      </div>
      <div className="principles-stack">
        <StrategyTam />
        <RiskTam />
        <TrainingTam />
      </div>
    </section>
  </div>
);

Coaching.propTypes = {};

Coaching.defaultProps = {};

export default Coaching;
