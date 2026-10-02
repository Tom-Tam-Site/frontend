import React from "react";
import "./overview.css";
import Contact from "../../../components/contact/contact";

import { Link } from "react-router-dom";

let imgSrc = "images/profile.png";

const Overview = () => (
  <div className="overview">
    <div className="text-center row">
      <div className="">
        <img src={imgSrc} alt="profile" className="profile img-fluid" />
      </div>
      <div className="col">
        <h2 className="mt-4 title">About Tom Tam</h2>
        <h3 className="text-center">Inner Character, Outer Prosperity</h3>
        <p className="text-center emphasis">Build the person; the prosperity follows.</p>
        <div className="paragraph bg-light p-3 text-start">
          <p>
            Tom Tam is a servant leader, business executive, and coach with over 40 years of helping businesses, individuals, and families apply time-tested principles to solve their most challenging problems. His work rests on a simple conviction: lasting success begins within the person. When character is the foundation—integrity, discipline, responsibility, and concern for others—decisions improve, actions align, and prosperity becomes sustainable. This is the principle behind his coaching: <span className="bolded">Inner character first. Outer prosperity second. In that order, and never reversed.</span>
          </p>
          <h3 className="title">A Career Across Cultures and Continents</h3>
          <p>
            Tom was born in Hong Kong and immigrated to the United States at eleven. His life since has been divided between the two—formative years in Hong Kong, decades of professional life in America, and extended periods of service and work back in the region. That bicultural foundation has shaped a career spanning both Eastern and Western business cultures. He brings a rare ability to bridge them, whether advising a small business owner in the Mountain West of the U.S. or a global institution navigating cross-border risk. His coaching draws on this breadth: the principles he teaches are not bound to any single culture or market. They are rooted in the universal truths that have guided families, enterprises, and civilizations for millennia.
          </p>
        </div>

        <div className="paragraph text-start">
          <h3 className="title">From Business Insight to Universal Application</h3>
          <p>
            By helping companies solve their complex business challenges, Tom recognized common themes across industries and operating cultures. These insights led him to found T &amp; M Advisors, an executive consultancy helping small companies implement best business practices. The principles that prove effective in building sustainable enterprises—sound judgment, disciplined execution, long-term thinking—are equally practical for every person and family seeking financial security and peace of mind. They are not Western principles or Eastern principles. They are human principles, applicable wherever people seek to build lives of purpose and stability.
          </p>
          <p>
            Tom has coached hundreds of professionals in their careers and personal growth. In recent years, his focus has expanded to coaching young adults—generally between twenty and twenty-five—on financial self-reliance and character development. He has watched how values shape judgment, judgment shapes decisions, decisions shape actions, and actions determine outcomes. His coaching helps young people build the inner foundation from which a meaningful and productive life grows.
          </p>
        </div>

        <div className="paragraph bg-light p-3 text-center">
          <h3 className="title">Explore Further</h3>
          <p><Link to="/coaching">Coaching</Link> — Personal and business problem-solving, grounded in principle.</p>
          <p><Link to="/character-development">Character Development</Link> — Personal growth and the values that shape good judgment.</p>
          <p><Link to="/insights">Insights</Link> — Fact-based articles and commentary on economic and geopolitical issues.</p>
        </div>
        <Contact></Contact>
      </div>
    </div>
    <br />
  </div>
);

Overview.propTypes = {};

Overview.defaultProps = {};

export default Overview;
