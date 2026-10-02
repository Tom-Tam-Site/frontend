import React from "react";

import "./news.css";
import Contact from "../../components/contact/contact";

const articlesUrl = "https://tamadvisors.blogspot.com/";

const News = () => (
  <article className="news page-shell">
    <header className="insights-hero">
      <div className="insights-hero-copy">
        <h1>Economic and Political Articles</h1>
        <p className="insights-deck">
          Fact-based commentary for understanding the forces that shape our
          livelihoods, communities, and choices.
        </p>
        <a
          className="button button-primary"
          href={articlesUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the articles
        </a>
        <p className="external-note">
          Opens the T &amp; M Advisors article archive.
        </p>
      </div>

      <figure className="insights-hero-visual">
        <img
          src="images/news/economic-editorial.webp"
          alt="Editorial illustration connecting global economics, public policy, and everyday life"
          width="1400"
          height="700"
          decoding="async"
        />
        <figcaption>
          Economics and policy are not abstractions; their effects reach every
          household and community.
        </figcaption>
      </figure>
    </header>

    <section className="insights-thesis" aria-labelledby="why-it-matters">
      <div className="insights-thesis-copy">
        <h2 id="why-it-matters">Why these forces matter</h2>
        <p>
          <strong>
            Political and economic forces significantly impact our lives and
            livelihoods.
          </strong>{" "}
          This is not surprising: power and money can be intoxicating forces
          for those who seek to dominate and control others. Political
          discussions often become emotional because of upbringing and bias,
          while economic principles can remain unfamiliar to people who have
          not had the opportunity to study them.
        </p>
      </div>

      <blockquote className="insights-pullquote">
        <p>
          Discern fact-based truth, corroborated by credible sources, rather
          than being emotionally manipulated by unsupported opinions.
        </p>
      </blockquote>
    </section>

    <section className="insights-standard" aria-labelledby="standard-heading">
      <figure className="insights-standard-visual">
        <img
          src="images/news/insights-secondary.webp"
          alt="Editorial illustration representing evidence-based public analysis"
          width="1400"
          height="700"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div className="insights-standard-copy">
        <h2 id="standard-heading">A commitment to evidence</h2>
        <p>
          In the spirit of proclaiming truth and dispelling falsehood in areas
          where lies and deceit can flourish, these articles are for readers
          interested in learning and evaluating the facts for themselves.
        </p>
        <p>
          The archive includes Tom&apos;s commentary alongside material from
          other fact-based sources that may benefit truth seekers.
        </p>
        <a
          className="insights-text-link"
          href={articlesUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the complete article archive
        </a>
      </div>
    </section>

    <footer className="insights-invitation">
      <div>
        <h2>Continue the conversation</h2>
        <p>Your thoughts, comments, and insights are welcome.</p>
      </div>
      <Contact />
    </footer>
  </article>
);

News.propTypes = {};

News.defaultProps = {};

export default News;
