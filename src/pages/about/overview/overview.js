import React from "react";
import "./overview.css";
import Contact from "../../../components/contact/contact";

import { Link } from "react-router-dom";

let imgSrc = "images/profile.png";

const Overview = () => (
  <div className="overview">
    <section className="about-hero">
      <div className="about-portrait">
        <img src={imgSrc} alt="Tom Tam" className="profile img-fluid visual-asset" />
      </div>
      <div className="about-hero-copy">
        <p className="section-eyebrow">About Tom Tam</p>
        <h1>Inner Character, Outer Prosperity</h1>
        <p className="emphasis">Build the person; the prosperity follows.</p>
        <p>
          Tom Tam is a servant leader, business executive, and coach with over 40 years of helping businesses, individuals, and families apply time-tested principles to solve their most challenging problems. His work rests on a simple conviction: lasting success begins within the person. When character is the foundation—integrity, discipline, responsibility, and concern for others—decisions improve, actions align, and prosperity becomes sustainable. This is the principle behind his coaching: <span className="bolded">Inner character first. Outer prosperity second. In that order, and never reversed.</span>
        </p>
      </div>
    </section>

    <section className="about-section">
      <p className="section-eyebrow">Perspective</p>
      <h2>A Career Across Cultures and Continents</h2>
      <p>
        Tom was born in Hong Kong and immigrated to the United States at eleven. His life since has been divided between the two—formative years in Hong Kong, decades of professional life in America, and extended periods of service and work back in the region. That bicultural foundation has shaped a career spanning both Eastern and Western business cultures. He brings a rare ability to bridge them, whether advising a small business owner in the Mountain West of the U.S. or a global institution navigating cross-border risk. His coaching draws on this breadth: the principles he teaches are not bound to any single culture or market. They are rooted in the universal truths that have guided families, enterprises, and civilizations for millennia.
      </p>
    </section>

    <section className="about-section">
      <p className="section-eyebrow">Application</p>
      <h2>From Business Insight to Universal Application</h2>
      <p>
        By helping companies solve their complex business challenges, Tom recognized common themes across industries and operating cultures. These insights led him to found T &amp; M Advisors, an executive consultancy helping small companies implement best business practices. The principles that prove effective in building sustainable enterprises—sound judgment, disciplined execution, long-term thinking—are equally practical for every person and family seeking financial security and peace of mind. They are not Western principles or Eastern principles. They are human principles, applicable wherever people seek to build lives of purpose and stability.
      </p>
      <p>
        Tom has coached hundreds of professionals in their careers and personal growth. In recent years, his focus has expanded to coaching young adults—generally between twenty and twenty-five—on financial self-reliance and character development. He has watched how values shape judgment, judgment shapes decisions, decisions shape actions, and actions determine outcomes. His coaching helps young people build the inner foundation from which a meaningful and productive life grows.
      </p>
    </section>

    <section className="explore-panel">
      <p className="section-eyebrow">Continue exploring</p>
      <h2>Explore Further</h2>
      <div className="explore-links">
        <Link to="/coaching"><strong>Coaching</strong><span>Personal and business problem-solving, grounded in principle.</span></Link>
        <Link to="/character-development"><strong>Character Development</strong><span>Personal growth and the values that shape good judgment.</span></Link>
        <Link to="/insights"><strong>Insights</strong><span>Fact-based articles and commentary on economic and geopolitical issues.</span></Link>
      </div>
    </section>
    <div className="page-contact"><Contact /></div>
  </div>
);

Overview.propTypes = {};

Overview.defaultProps = {};

export default Overview;
