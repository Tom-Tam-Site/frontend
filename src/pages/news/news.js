import React from "react";

import "./news.css";
import Contact from "../../components/contact/contact";

const News = () => (
  <div className="news page-shell">
    <header className="page-hero">
      <h1>Economic and Political Articles</h1>
      <p className="page-hero-lede">
        Fact-based commentary for understanding the forces that shape our
        livelihoods, communities, and choices.
      </p>
      <a
        className="button button-primary"
        href="https://tamadvisors.blogspot.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read the articles
      </a>
    </header>

    <section className="insights-feature">
      <div className="insights-image-wrap">
        <img
          className="news-image visual-asset"
          src="images/news/economic-editorial.webp"
          alt="Editorial illustration of global economic and civic forces"
          width="1400"
          height="700"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="insights-copy">
        <p>
          <span className="bolded">
            Political and economic forces significantly impact our lives and
            livelihood
          </span>
          {". "}
          This is not surprising since{" "}
          <span className="bolded">
            power and money are intoxicating forces for those that seek to
            dominate and control others
          </span>
          . Unfortunately, many people do not want to engage in political
          discussions because most tend to get emotional due to their upbringing
          and bias. Many do not understand economic principles and concepts
          since they have never studied or spent time to learn.
        </p>
      </div>
    </section>
    <section className="insights-secondary">
      <div className="insights-copy">
        <p>
        In the spirit of{" "}
        <span className="bolded">
          proclaiming truth and dispelling falsehood
        </span>{" "}
        in these two areas where there are blatant lies and deceit, this blog
        will help those interested in learning the truth for themselves.{" "}
        <span className="bolded">
          We must discern fact-based truth corroborated from creditable sources
          to avoid being emotionally manipulated by unsupported opinions
        </span>
        .
        </p>
      </div>
      <div className="insights-image-wrap">
        <img src="images/news/insights-secondary.webp" className="news-image visual-asset" alt="Editorial illustration of evidence-based public analysis" width="1400" height="700" loading="lazy" decoding="async" />
      </div>
    </section>

    <section className="content-note">
      This{" "}
      <span className="bolded embedded-link">
        <a
          className="embedded-link"
          href="https://tamadvisors.blogspot.com/"
          target="_blank"
          rel="noreferrer"
        >
          blog
        </a>
      </span>{" "}
      contains personal articles, as well as from other fact-based sources that
      are beneficial to truth seekers.
      <div className="bolded">
        Your thoughts, comments, and insights are welcomed.
      </div>
    </section>
    <div className="page-contact">
      <Contact />
    </div>
  </div>
);

News.propTypes = {};

News.defaultProps = {};

export default News;
